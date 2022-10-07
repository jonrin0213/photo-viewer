OC.L10N.register(
    "memories",
    {
    "Memories" : "Anılar",
    "Yet another photo management app" : "Başka bir fotoğraf yönetimi uygulaması daha",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **🗑️ Recycle**: Select and delete multiple photos and videos at once.\n* **✏️ Edit Metadata**: Edit Exif dates on photos quickly and easily.\n* **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# Anılar\n\n* **📸 Fotoğraf ve görüntü zaman tüneli**: Fotoğrafları EXIF verilerindeki çekilme tarihine göre sıralayın.\n* **🤔 Hızlı hatırlama**: Zaman tünelindeki herhangi bir zamana anında sıçrayın.\n* **🖼️ Klasörler**: Kendi arşivinize ve paylaşılan klasörlere aynı ve etkili zaman tüneliyle göz atın.\n* **🎦 Sunum**: Zaman tünelinizdeki fotoğraf ve klasörleri kolayca görüntüleyin.\n* **📱 Mobil desteği**: Web uygulaması ile anılarınızı her şekil ve boyuttaki aygıtlarda yeniden yaşayın.\n* **🗑️ Geri dönüşüm**: Birçok fotoğraf ve görüntüyü seçip bir kerede silin.\n* **✏️ Üst verileri düzenleme**: Fotoğrafların EXIF tarihlerini hızla ve kolayca değiştirin.\n* **📦 Arşivleme**: Zaman tünelinde görmek istemediğiniz fotoğrafları ayrı bir klasörde tutun.\n* **⚡️ Hızlı**: Anılar çok hızlıdır. Nokta.\n\n## 🚀 Kurulum\n\n1. Nextcloud mağazasından uygulamayı kurun\n1. ⚒️ `exiftool` aracını kurun (aşağıyı okuyun).\n1. Var olan fotoğrafların üst veri dizinini oluşturmak için `php ./occ memories:index` komutunu yürütün.\n1. Nextcloud içinden 📷 Anılar uygulamasını açın ve fotoğraflarınızın bulunduğu klasörü ayarlayın. Bu klasördeki ve alt klasörlerindeki fotoğraflar zaman tünelinde görüntülenir.\n1. Küçük görselleri önceden hazırlamak için [ön izleme oluşturucu](https://github.com/rullzer/previewgenerator) uygulamasını kurmanız önemle önerilir.\n\n## 🔨 Bağımlılıkları Kurmak\nTam adımlar, Nextcloud platformunuza bağlıdır. Nextcloud kopyanız için Docker kullanıyorsanız, özel bir docker kalıbı kullanarak Exiftool aracını kurabilirsiniz.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "Zaman tüneli",
    "Folders" : "Klasörler",
    "Favorites" : "Sık kullanılanlar",
    "Videos" : "Görüntüler",
    "Archive" : "Arşiv",
    "On this day" : "Bugün",
    "Tags" : "Etiketler",
    "Settings" : "Ayarlar",
    "Edit Date/Time" : "Tarihi/saati düzenle",
    "Newest" : "En yeni",
    "Year" : "Yıl",
    "Month" : "Ay",
    "Day" : "Gün",
    "Time" : "Saat",
    "Hour" : "Saat",
    "Minute" : "Dakika",
    "Oldest" : "En eski",
    "Processing … {n}/{m}" : "İşleniyor… {n}/{m}",
    "This feature modifies files in your storage to update Exif data." : "Bu özellik EXIF verilerini değiştirmek için depolama alanınızdaki dosyaları günceller.",
    "Exercise caution and make sure you have backups." : "Kullanmadan önce yedek alın ve dikkatli kullanın.",
    "Update Exif" : "EXIF verilerini güncelle",
    "Loading data … {n}/{m}" : "Veriler yükleniyor… {n}/{m}",
    "Cannot find this photo anymore!" : "Bu fotoğraf artık bulunmuyor!",
    "Timeline Path" : "Zaman tüneli yolu",
    "Show hidden folders" : "Gizli klasörleri görüntüle",
    "Update" : "Güncelle",
    "Error updating settings" : "Ayarlar güncellenirken sorun çıktı",
    "Cancel" : "İptal",
    "Delete" : "Sil",
    "Download" : "İndir",
    "Favorite" : "Sık kullanılanlara ekle",
    "Unarchive" : "Arşivden çıkar",
    "View in folder" : "Klasörde görüntüle",
    "No photos to show here" : "Burada görüntülenecek bir fotoğraf yok",
    "Failed to load some photos" : "Bazı fotoğraflar yüklenemedi",
    "You are about to download a large number of files. Are you sure?" : "Çok sayıda dosyayı indirmek üzeresiniz. Bunu yapmak istediğinize emin misiniz?",
    "You are about to delete a large number of files. Are you sure?" : "Çok sayıda dosyayı silmek üzeresiniz. Bunu yapmak istediğinize emin misiniz?",
    "You are about to touch a large number of files. Are you sure?" : "Çok sayıda dosyayı güncellemek üzeresiniz. Bunu yapmak istediğinize emin misiniz?",
    "_{n} selected_::_{n} selected_" : ["{n} seçilmiş","{n} seçilmiş"],
    "Failed to delete files." : "Dosyalar silinemedi.",
    "Failed to delete {fileName}." : "{fileName} silinemedi.",
    "General Failure" : "Genel sorun",
    "Error: {msg}" : "Hata: {msg}",
    "Failed to favorite {fileName}." : "{fileName} sık kullanılanlara eklenemedi.",
    "Failed to favorite files." : "Dosyalar sık kullanılanlara eklenemedi."
},
"nplurals=2; plural=(n > 1);");
