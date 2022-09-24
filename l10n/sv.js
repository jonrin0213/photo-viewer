OC.L10N.register(
    "memories",
    {
    "Memories" : "Memories",
    "Yet another photo management app" : "Ännu en app för fotohantering",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **🗑️ Recycle**: Select and delete multiple photos and videos at once.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# Memories\n\n* **📸 Foto och videotidslinje**: Sorterar foton efter fotograferingsdatum hämtad ur Exif data.\n* **🤔 Snabb tillbakablick**: Hoppa omedelbart vart du vill i tidslinjen.\n* **🖼️ Mappar**: Bläddra igenom dina och delade mappar med en liknande smidig tidslinje.\n* **🎦 Bildspel*: Visa enkelt foton från din tidslinje och dina mappar.\n* **📱 Mobilt stöd**: Återupplev dina minnen på enheter av varierande form och storlek genom webbapplikationen.\n* **🗑️ Papperskorg**: Välj och radera flera foton och videon samtidigt.\n* **⚡️ Snabbt**: Memories är extremt snabbt. Punkt slut.\n\n## 🚀 Installation\n\n1. Installera applikationen från Nextclouds affär\n1. ⚒️ Installera `exiftool` (se nedan).\n1. Exekvera `php ./occ memories:index` för att generera metadata för befintliga foton.\n1. Öppna appoen 📷 Memories i Nextcloud och ange katalogen för dina foton. Foton från denna katalog kommer att visas i tidslinjen, inklusive foton i underkataloger.\n1. Installation av [preview generator](https://github.com/rullzer/previewgenerator) för att förgenerera tumnaglar rekommenderas varmt.\n\n## 🔨 Installera beroenden\nVerkliga steg att utföra beror på din installation av Nextcloud. Om du använder Docker för din Nextcloudinstans kan du installera Exiftool genom att använda en anpassad docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "Tidslinje",
    "Folders" : "Mappar",
    "Favorites" : "Favoriter",
    "Videos" : "Videor",
    "Settings" : "Inställningar",
    "Cannot find this photo anymore!" : "Kan inte längre hitta detta foto!",
    "Timeline Path" : "Tidslinjesökväg",
    "Show hidden folders" : "Visa dolda filer",
    "Update" : "Uppdatera",
    "Error updating settings" : "Fel när inställningar sparas",
    "Cancel" : "Avbryt",
    "Delete" : "Radera",
    "Download" : "Ladda ner",
    "Favorite" : "Favorit",
    "No photos to show here" : "Det finns inga bilder här",
    "Failed to load some photos" : "Misslyckades att läsa in vissa foton",
    "You are about to download a large number of files. Are you sure?" : "Du kommer att ladda ner en stor mängd filer. Är du säker?",
    "You are about to delete a large number of files. Are you sure?" : "Du kommer att ta bort ett stort antal filer. Är du säker?",
    "Failed to delete files." : "Misslyckades att radera filer.",
    "Failed to delete {fileName}." : "Misslyckades att radera {fileName}.",
    "Failed to favorite {fileName}." : "Misslyckades att favorisera {fileName}.",
    "Failed to favorite files." : "Misslyckades att favorisera filer."
},
"nplurals=2; plural=(n != 1);");
