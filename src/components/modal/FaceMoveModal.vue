<template>
    <Modal @close="close" size="large" v-if="isOpen">
        <template #title>
            {{ t('memories', 'Move selected photos to person') }}
        </template>

        <div class="outer">
            <FaceList @select="clickFace" />
        </div>

        <template #buttons>
            <NcButton @click="close" class="button" type="error">
                {{ t('memories', 'Cancel') }}
            </NcButton>
        </template>
    </Modal>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Prop } from 'vue-property-decorator';
import { NcButton, NcTextField } from '@nextcloud/vue';
import { showError } from '@nextcloud/dialogs'
import { IPhoto, ITag } from '../../types';
import Tag from '../frame/Tag.vue';
import FaceList from './FaceList.vue';

import Modal from './Modal.vue';
import GlobalMixin from '../../mixins/GlobalMixin';
import client from '../../services/DavClient';
import * as dav from '../../services/DavRequests';

@Component({
    components: {
        NcButton,
        NcTextField,
        Modal,
        Tag,
        FaceList,
    }
})
export default class FaceMoveModal extends Mixins(GlobalMixin) {
    private isOpen = false;
    private photos: IPhoto[] = [];

    @Prop()
    private updateLoading: (delta: number) => void;

    public open(photos: IPhoto[]) {
        if (this.photos.length) {
            // is processing
            return;
        }

        this.isOpen = true;
        this.photos = photos;
    }

    @Emit('close')
    public close() {
        this.photos = [];
        this.isOpen = false;
    }

    @Emit('moved')
    public moved(list: IPhoto[]) {}

    public async clickFace(face: ITag) {
        const user = this.$route.params.user || '';
        const name = this.$route.params.name || '';

        const newName = face.name || face.fileid.toString();

		try {
            this.isOpen = false;
            this.updateLoading(1);

            // Create map to return IPhoto later
            let photoMap = new Map<number, IPhoto>();
            for (const photo of this.photos) {
                photoMap.set(photo.fileid, photo);
            }

            let data = await dav.getFiles(this.photos.map(p => p.fileid));

            // Create move calls
            const calls = data.map((p) => async () => {
                try {
                    await client.moveFile(
                        `/recognize/${user}/faces/${name}/${p.fileid}-${p.basename}`,
                        `/recognize/${face.user_id}/faces/${newName}/${p.fileid}-${p.basename}`
                    )
                    return photoMap.get(p.fileid);
                } catch (e) {
                    console.error(e);
                    showError(this.t('memories', 'Error while moving {basename}', p));
                }
            });
            for await (const resp of dav.runInParallel(calls, 10)) {
                this.moved(resp);
            }
		} catch (error) {
            console.error(error);
			showError(this.t('photos', 'Failed to move {name}.', { name }));
		} finally {
            this.updateLoading(-1);
            this.close();
        }
    }
}
</script>

<style lang="scss" scoped>
.outer {
    margin-top: 15px;
}
</style>