<template>
    <NcModal
        :size="size"
        @close="close"
        :outTransition="true">
        <div class="container">
            <div class="head">
                <span> <slot name="title"></slot> </span>
            </div>

            <slot></slot>

            <div class="memories__modal__buttons">
                <slot name="buttons"></slot>
            </div>
        </div>
    </NcModal>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { NcModal } from '@nextcloud/vue';

@Component({
    components: {
        NcModal,
    }
})
export default class Modal extends Vue {
    @Prop({default: 'small'}) private size?: string;

    @Emit('close')
    public close() {}
}
</script>

<style lang="scss" scoped>
.container {
	margin: 20px;

    .head {
        font-weight: 500;
    }
}
</style>

<style lang="scss">
.memories__modal__buttons {
    margin-top: 10px;
    text-align: right;

    > button {
        display: inline-block !important;
    }
}
</style>