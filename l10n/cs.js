OC.L10N.register(
    "memories",
    {
    "Memories" : "Vzpomínky",
    "Fast, modern and advanced photo management suite" : "Rychlá, moderní sada pro správu fotek s pokročilými funkcemi",
    "Path to packaged exiftool binary" : "Popis umístění přibaleného spustitelného souboru s exiftool",
    "ffmpeg path" : "popis umístění ffmpeg",
    "ffprobe path" : "popis umístění ffprobe",
    "Binary path (local only)" : "Popis umístění spustitelného souboru (pouze lokální)",
    "Bind address (local only)" : "Adresa, na kterou navázat (pouze místní)",
    "Connection address (same as bind if local)" : "Adresa pro připojení (pokud lokální, stejná jako ta pro navázání na)",
    "EXIF Extraction" : "Získávání EXIF metadat",
    "Use system perl (only if packaged binary does not work)" : "Použít perl ze systému (pouze pokud s přibaleným spustitelným souborem nefunguje)",
    "Reverse Geocoding" : "Obrácené geokódování",
    "Database is populated with {n} geometries" : "Databáze je osazena {n} geometriemi",
    "Geometry table has not been created" : "Tabulka geometrie nebyla vytvořena",
    "Reverse geocoding has not been configured ({gisType})." : "Obrácené geokódování nebylo nastaveno ({gisType}).",
    "Memories supports offline reverse geocoding using the OpenStreetMaps data on MySQL and Postgres." : "Memories podporuje obrácené geokódování, přičemž k tomu nepoužívá služby na Internetu (soukromí). Je založeno na datech z OpenStreetMaps (ukládaných v MySQL či Postgres).",
    "You need to download the planet data into your database. This is highly recommended and has low overhead." : "Je třeba stáhnout si geografická data do databáze. Je to velmi doporučováno a má nízkou režii.",
    "If the button below does not work for importing the planet data, use " : "Pokud níže uvedené tlačítko pro import geografických dat nezafunguje, použijte",
    "Note: the geometry data is stored in the " : "Pozn.: data o geometrii jsou uložena v",
    "Download planet database" : "Stáhnout si geografickou databázi",
    "Video Streaming" : "Proudové vysílání videa",
    "Live transcoding provides for adaptive streaming of videos using HLS." : "Živé překódovávání poskytuje adaptivní proudové vysílání videí pomocí HLS.",
    "Note that this may be very CPU intensive without hardware acceleration, and transcoding will not be used for external storage." : "Mějte na paměti, že nebude použito v případě externích úložiště. Dále také, pokud není k dispozici hardwarová akcelerace, toto může velmi silně vytěžovat procesor.",
    "Enable Transcoding" : "Zapnout překódovávání",
    "Global default video quality (user may override)" : "Globální výchozí kvalita videa (uživatelé mohou přebít)",
    "Auto (adaptive transcode)" : "Automatická (přizpůsobivé překódování)",
    "Original (transcode with max quality)" : "Originál (překódovat v nejvyšší možné kvalitě)",
    "Direct (original video file without transcode)" : "Přímé (původní video soubor bez překódování)",
    "Transcoder configuration" : "Natavení nástroje pro překódovávání",
    "Memories uses the go-vod transcoder. You can run go-vod exernally (e.g. in a separate Docker container for hardware acceleration) or use the built-in transcoder. To use an external transcoder, enable the following option and follow the instructions at this link:" : "Vzpomínky používají pro překódovávání nástroj go-vod. Ten je možné spouštět externě (např. ve zvlášť Docker containeru kvůli hardwarové akceleraci) nebo použít jeho vestavěnou podobu. Pokud chcete použít externí podobu, zapněte následující předvolby a postupujte podle pokynů , na které vede tento odkaz:",
    "external transcoder configuration" : "nastavení pro externí nástroj pro překódování",
    "Enable external transcoder (go-vod)" : "Zapnout externí nástroj pro překódování (go-vod)",
    "Hardware Acceleration" : "Hardwarová akcelerace",
    "You must first make sure the correct drivers are installed before configuring acceleration." : "Nejprve je třeba mít nainstalované správné ovladače a pak až nastavovat akceleraci.",
    "Make sure you test hardware acceleration with various options after enabling." : "Poté co ji zapnete, vyzkoušejte hardwarovou akceleraci pomocí různých voleb.",
    "Do not enable multiple types of hardware acceleration simultaneously." : "Nezapínejte vícero typů hardwarové akcelerace naráz.",
    "Intel processors supporting QuickSync Video (QSV) as well as some AMD GPUs can be used for transcoding using VA-API acceleration." : "V případě procesorů Intel, podporujících QuickSync Video (QSV), stejně tak některých grafických čipů AMD, je pro překódovávání možné využít akceleraci přes rozhraní VA-API.",
    "For more details on driver installation, check the following link:" : "Podrobnosti ohledně instalace ovladače naleznete kliknutím na následující odkaz:",
    "Enable acceleration with VA-API" : "Zapnout akceleraci pomocí VA-API",
    "Enable low-power mode (QSV)" : "Zapnout režim nízké spotřeby (QSV)",
    "NVIDIA GPUs can be used for transcoding using the NVENC encoder with the proper drivers." : "Při použití příhodných ovladačů je pro překódovávání možné na grafických čipech NVIDIA využít NVENC enkodér.",
    "Depending on the versions of the installed SDK and ffmpeg, you need to specify the scaler to use" : "Podle verze nainstalovaného SDK a nástroje ffmepg je třeba zadat které škálování použít",
    "No automated tests are available for NVIDIA acceleration." : "Pro akceleraci přes NVIDIA nejsou k dispozici automatizované testy.",
    "Enable acceleration with NVENC" : "Zapnout akceleraci přes NVENC",
    "Enable NVENC Temporal AQ" : "Zapnout NVENC Temporal AQ",
    "NPP scaler" : "NPP škálování",
    "CUDA scaler" : "CUDA škálování",
    "Failed to update setting" : "Nastavení se nepodařilo zaktualizovat",
    "{name} binary exists and is executable" : "binárka {name} existuje a má práva nastavená pro spouštění",
    "{name} binary not found" : "{name} spustitelný soubor nenalezen",
    "{name} binary is not executable" : "{name} binárka nemá nastavené právo na spouštění",
    "{name} failed test: {info}" : "{name} nezdařilý test: {info}",
    "{name} binary exists and is usable" : "{name} binárka existuje a je použitelná",
    "{name} binary status: {status}" : "{name} stav binárky: {status}",
    "Geometry support was not detected in your database" : "Podpora geometrie nebyla ve vámi využívané databázi zjištěna",
    "MySQL-like geometry support was detected " : "Podpora geometrie ve stylu MySQL nebyla zjistěna",
    "Postgres native geometry support was detected" : "Byla zjištěna podpora nativní Postgres geometrie",
    "VA-API device ({dev}) is readable" : "VA-API zařízení ({dev}) není přístupné pro čtení",
    "VA-API device ({dev}) not found" : "VA-API zařízení ({dev}) nenalezeno",
    "VA-API device ({dev}) has incorrect permissions" : "Na VA-API zařízení ({dev}) nejsou správně nastavená práva",
    "VA-API device status: {status}" : "Stav VA-API zařízení: {status}",
    "Settings" : "Nastavení",
    "People (Recognize)" : "Lidé (rozpoznání)",
    "People" : "Lidé",
    "People (Face Recognition)" : "Lidé (rozpoznání obličejů)",
    "Info" : "Informace",
    "Timeline" : "Časová osa",
    "Folders" : "Složky",
    "Favorites" : "Oblíbené",
    "Videos" : "Videa",
    "Albums" : "Alba",
    "Archive" : "Archiv",
    "On this day" : "V tento den",
    "Places" : "Místa",
    "Map" : "Mapa",
    "Tags" : "Štítky",
    "A better photos experience awaits you" : "Lepší zážitek z fotek na vás čeká",
    "Choose the root folder of your timeline to begin" : "Začněte zvolením kořenové složky vaší časové osy",
    "If you just installed Memories, run:" : "Pokud jste Vzpomínky právě nainstalovali, spusťte:",
    "Continue to Memories" : "Pokračovat do Vzpomínek",
    "Choose again" : "Zvolit znovu",
    "Click here to start" : "Začněte kliknutím sem",
    "You can always change this later in settings" : "Toto je možné kdykoli později změnit v nastavení",
    "Choose the root of your timeline" : "Zvolte kořen vaší časové osy",
    "The selected folder does not seem to be valid. Try again." : "Vybraná složka se nezdá být platná. Zkuste to znovu.",
    "_Found {n} item in {path}_::_Found {n} items in {path}_" : ["Nalezena {n} položka v {path}","Nalezeny {n} položky v {path}","Nalezeno {n} položek v {path}","Nalezeny {n} položky v {path}"],
    "Edit" : "Upravit",
    "No title" : "Bez nadpisu",
    "No description" : "Bez popisu",
    "No coordinates" : "Žádné souřadnice",
    "Click edit to set location" : "Umístění upravíte kliknutím",
    "Cancel" : "Storno",
    "Delete" : "Smazat",
    "Remove from album" : "Odebrat z alba",
    "Download" : "Stáhnout",
    "Favorite" : "Přidat do oblíbených",
    "Unarchive" : "Zrušit archivování",
    "Edit metadata" : "Upravit metadata",
    "View in folder" : "Zobrazit ve složce",
    "Move to folder" : "Přesunout do složky",
    "Add to album" : "Přidat do alba",
    "Move to person" : "Přesunout pod osobu",
    "Remove from person" : "Odebrat z osoby",
    "You are about to download a large number of files. Are you sure?" : "Chystáte se stahovat si velký počet souborů. Opravdu to chcete?",
    "You are about to delete a large number of files. Are you sure?" : "Chystáte se smazat velké množství souborů. Opravdu to chcete?",
    "You are about to touch a large number of files. Are you sure?" : "Chystáte se změnit velké množství souborů. Opravdu to chcete?",
    "_{n} selected_::_{n} selected_" : ["{n} vybráno","{n} vybrány","{n} vybráno","{n} vybrány"],
    "Memories Settings" : "Nastavení pro Paměti",
    "General" : "Obecné",
    "Timeline Path" : "Popis umístění časové osy",
    "Square grid mode" : "Režim se čtvercovou mřížkou",
    "Show past photos on top of timeline" : "Minulé fotky zobrazovat nad časovou osou",
    "Load full size image on zoom" : "Při přiblížení načíst obrázek v plné velikosti",
    "Always load full size image (not recommended)" : "Obrázek načítat v plné velikosti vždy (nedoporučeno)",
    "Folders Path" : "Popis umístění složek",
    "Show hidden folders" : "Zobrazit skryté složky",
    "Sort folders oldest-first" : "Seřadit složky od nejstarších",
    "Sort albums oldest-first" : "Seřadit alba od nejstarších",
    "Choose Timeline Paths" : "Zvolte trasy časovou osou",
    "Choose the root for the folders view" : "Zvolte kořen pro zobrazení složek",
    "Close" : "Zavřít",
    "{photoCount} photos" : "{photoCount} fotek",
    "Failed to load some photos" : "Některé fotky se nepodařilo načíst",
    "_{n} item added to album_::_{n} items added to album_" : ["{n} položka přidána do alba","{n} položky přidány do alba","{n} položek přidáno do alba","{n} položky přidány do alba"],
    "Search for collaborators" : "Vyhledat spolupracující",
    "Search people or groups" : "Hledat uživatele nebo skupiny",
    "Add {collaboratorLabel} to the collaborators list" : "Přidat {collaboratorLabel} na seznam spolupracujících",
    "No collaborators available" : "Nejsou k dispozici žádní spolupracující",
    "Remove {collaboratorLabel} from the collaborators list" : "Odebrat {collaboratorLabel} ze seznamu spolupracujících",
    "Copy the public link" : "Zkopírovat veřejný odkaz",
    "Delete the public link" : "Zkopírovat veřejný odkaz",
    "Add people or groups who can edit your album" : "Přidejte uživatele či skupiny, kteří mohou album upravovat",
    "Public link copied!" : "Veřejný odkaz zkopírován!",
    "Copy public link" : "Zkopírovat veřejný odkaz",
    "Share via public link" : "Nasdílet prostřednictvím veřejného odkazu",
    "Failed to fetch collaborators list." : "Nepodařilo se získat seznam spolupracujících.",
    "Public link" : "Veřejný odkaz",
    "Failed to fetch album." : "Album se nepodařilo stáhnout.",
    "Failed to update album." : "Album se nepodařilo aktualizovat.",
    "New album" : "Nové album",
    "Create new album" : "Vytvořit nové album",
    "Edit album details" : "Upravit podrobnosti o albu",
    "Could not load the selected album" : "Nedaří se načíst vybrané album",
    "Remove Album" : "Odebrat album",
    "Failed to delete {name}." : "Nepodařilo se smazat {name}.",
    "Name of the album" : "Název alba",
    "Location of the album" : "Umístění alba",
    "Go back to the previous view." : "Jít zpět na předchozí pohled.",
    "Go to the add collaborators view." : "Jít na pohled přidání spolupracujících.",
    "Back to the new album form." : "Zpět na formulář pro nové album.",
    "Back" : "Zpět",
    "Add collaborators" : "Přidat spolupracující",
    "Save" : "Uložit",
    "Create album" : "Vytvořit album",
    "Invalid album name; should not contain any slashes." : "Neplatný název alba: nemůže obsahovat lomítka.",
    "Add selection to album {albumName}" : "Přidat výběr do alba {albumName}",
    "Create a new album." : "Vytvořit nové album.",
    "_Share with %n user_::_Share with %n users_" : ["Nasdílet %n uživateli","Nasdílet %n uživatelům","Nasdílet %n uživatelům","Nasdílet %n uživatelům"],
    "_%n item_::_%n items_" : ["%n položka","%n položky","%n položek","%n položky"],
    "Save collaborators for this album." : "Uložit spolupracující pro toto album.",
    "Share Album" : "Nasdílet album",
    "Year" : "Rok",
    "Month" : "Měsíc",
    "Day" : "Den",
    "Time" : "Čas",
    "Hour" : "Hodina",
    "Minute" : "Minuta",
    "Newest" : "Nejnovější",
    "Oldest" : "Nejstarší",
    "Invalid Date" : "Neplatné datum",
    "Newest date is older than oldest date" : "Datum nejnovější je dříve než datum nejstarší",
    "Title" : "Nadpis",
    "Description" : "Popis",
    "Label" : "Štítek",
    "Camera Make" : "Výrobce fotoaparátu",
    "Camera Model" : "Model fotoaparátu",
    "Lens Model" : "Model objektivu",
    "Copyright" : "Autorská práva",
    "Empty" : "Prázdná",
    "Unchanged" : "Nezměněno",
    "Reset" : "Vrátit na výchozí hodnoty",
    "Remove location" : "Odebrat umístění",
    "Search location / landmark" : "Vyberte umístění / orientační bod",
    "Failed to search for location with Nominatim." : "Nepodařilo se vyhledat umístění prostřednictvím Nominatim",
    "Date / Time" : "Datum / čas",
    "Collaborative Tags" : "Štítky pro spolupráci",
    "EXIF Fields" : "Kolonky EXIF",
    "Geolocation" : "Geolokace",
    "Failed to load metadata for {n} photos." : "Nepodařilo se načíst metadata pro {n} fotek.",
    "{n} photos cannot be edited (permissions error)." : "{n} fotek není možné upravit (permissions error).",
    "Remove person" : "Odebrat osobu",
    "Are you sure you want to remove {name}?" : "Opravdu chcete {name} odebrat?",
    "Name" : "Název",
    "Rename person" : "Přejmenovat osobu",
    "Update" : "Aktualizovat",
    "Failed to rename {oldName} to {name}." : "Nepodařilo se přejmenovat {oldName} na {name}.",
    "Search" : "Hledat",
    "Loading …" : "Načítání…",
    "Merge {name} with person" : "Sloučit {name} s osobou",
    "Are you sure you want to merge {name} with {newName}?" : "Opravdu chcete sloučit {name} s {newName}?",
    "Too many failures, aborting" : "Příliš mnoho nezdarů – přerušuje se",
    "Error while moving {basename}" : "Chyba při přesouvání {basename}",
    "Failed to move {name}." : "Nepodařilo se přesunout {name}.",
    "Move selected photos to person" : "Přesunout označené fotky k osobě",
    "Are you sure you want to move the selected photos from {name} to {newName}?" : "Opravdu chcete přesunout označené fotky z {name} do {newName}?",
    "Choose a folder" : "Zvolit složku",
    "_{n} item moved to folder_::_{n} items moved to folder_" : ["{n} položka přesunuto do složky","{n} položky přesunuty do složky","{n} položek přesunuto do složky","{n} položky přesunuty do složky"],
    "Remove" : "Odebrat",
    "Add Path" : "Přidat trasu",
    "Add a root to your timeline" : "Přidat do časové osy kořen",
    "Share link" : "Odkaz na sdílení",
    "Link Sharing" : "Sdílení odkazem",
    "You cannot share the root folder" : "Kořenovou složku nemůžete nasdílet",
    "Public link shares are available to people outside Nextcloud." : "Sdílení veřejným odkazem jsou k dispozici lidem mimo Nextcloud",
    "You may create or update permissions on public links using the sidebar." : "Oprávnění na veřejných odkazech je možné vytvářet nebo aktualizovat v postranním panelu",
    "Click a link to copy to clipboard." : "Kliknutím na odkaz ho zkopírujete do schránky.",
    "Create Link" : "Vytvořit odkaz",
    "Refresh" : "Znovu načíst",
    "Password protected" : "Chráněno heslem",
    "Expires" : "Platnost skončí",
    "Editable" : "Upravitelné",
    "Read only" : "Pouze pro čtení",
    "Link copied to clipboard" : "Odkaz zkopírován do schánky",
    "Reduced Size" : "Zmenšená velikost",
    "High Resolution" : "Vysoké rozlišení",
    "Original File" : "Původní soubor",
    "Public Link" : "Veřejný odkaz",
    "Share File" : "Nasdílet soubor",
    "Share a lower resolution image preview" : "Nasdílet náhled obrázku s nízkým rozlišením",
    "Share the video as a high quality MOV" : "Nasdílet video jako MOV s vysokou kvalitou",
    "Share the image as a high quality JPEG" : "Nasdílet obrázek jako JPEG s vysokou kvalitou",
    "Share the original image / video file" : "Nasdílet původní obrázek / soubor s videem",
    "Share an external Nextcloud link" : "Nasdílet odkaz na externí Nextcloud",
    "Failed to download file" : "Soubor se nepodařilo stáhnout",
    "Cannot share this type of data" : "Tento typ dat není možné sdílet",
    "Sort by date" : "Seřadit podle data",
    "Sort by name" : "Seřadit podle názvu",
    "Share album" : "Nasdílet album",
    "Download album" : "Stáhnout si album",
    "Delete album" : "Smazat album",
    "Nothing to show here" : "Není co zde zobrazit",
    "Merge with different person" : "Sloučit s jinou osobou",
    "Mark person in preview" : "Označovat osobu v náhledu",
    "Share folder" : "Nasdílet složku",
    "Folder View" : "Zobrazení se složkami",
    "Timeline View" : "Zobrazení s časovou osou",
    "Move left" : "Přesunout doleva",
    "Move right" : "Přesunout doprava",
    "Failed to get Exif data. Metadata may be lost!" : "Nepodařilo se získat Exif metadata – může dojít k jejich ztrátě!",
    "No Exif data found! Continue?" : "Nenalezena žádná Exif data – pokračovat?",
    "Image saved successfully" : "Obrázek úspěšně uložen",
    "Error saving image" : "Chyb při ukládání obrázku",
    "Unsaved changes" : "Neuložené změny",
    "Drop changes" : "Zahodit změny",
    "Share" : "Sdílet",
    "Play Live Photo" : "Přehrát živé video",
    "Sidebar" : "Postranní panel",
    "Download Video" : "Stáhnout si video",
    "Slideshow" : "Promítání",
    "Previous" : "Předchozí",
    "Next" : "Další",
    "Editing is currently disabled for Live Photos" : "Pro živé fotky je upravování v tuto chvíli vypnuté",
    "Cannot edit this file" : "Tento soubor není možné upravit",
    "Are you sure you want to delete?" : "Opravdu chcete smazat?",
    "Save as" : "Uložit jako",
    "All changes will be lost." : "Veškeré změny budou ztraceny.",
    "Are you sure you want to continue?" : "Opravdu chcete pokračovat?",
    "Continue" : "Pokračovat",
    "Undo" : "Vrátit zpět",
    "Redo" : "Zopakovat",
    "Show original image" : "Zobrazit původní obrázek",
    "Zoom in" : "Přiblížit",
    "Zoom out" : "Oddálit",
    "Toggle zoom menu" : "Zobraz/nezobraz. nabídku zvětšení",
    "Adjust" : "Přizpůsobit",
    "Fine-tune" : "Jemné doladění",
    "Filters" : "Filtry",
    "Watermark" : "Vodoznak",
    "Draw" : "Nakreslit",
    "Resize" : "Změnit rozlišení",
    "Invalid image." : "Neplatný obrázek.",
    "Error while uploading the image." : "Chyba při nahrávání obrázku.",
    "are not images" : "nejsou obrázky",
    "is not an image" : "není obrázek",
    "to be uploaded" : "k nahrání",
    "Crop" : "Oříznout",
    "Original" : "Původní",
    "Custom" : "Uživatelsky určený",
    "Square" : "Čtverec",
    "Landscape" : "Krajina",
    "Portrait" : "Portrét",
    "Ellipse" : "Elipsa",
    "Classic TV" : "Klasická televize",
    "CinemaScope" : "Extrémně širokoúhlé",
    "Arrow" : "Šipka",
    "Blur" : "Rozmazat",
    "Brightness" : "Jas",
    "Contrast" : "Kontrast",
    "Un-flip X" : "Vzít zpět svisl. převrácení",
    "Flip X" : "Převrátit svisle",
    "Un-flip Y" : "Vzít zpět vodorov. převrácení",
    "Flip Y" : "Převrátit vodorovně",
    "HSV" : "HSV",
    "Hue" : "Odstín",
    "Saturation" : "Saturace",
    "Value" : "Hodnota",
    "Image" : "Obrázek",
    "Importing …" : "Importování…",
    "+ Add image" : "+ Přidat obrázek",
    "Line" : "Čára",
    "Pen" : "Pero",
    "Polygon" : "Mnohoúhelník",
    "Sides" : "Stran",
    "Rectangle" : "Obdélník",
    "Corner Radius" : "Zaoblení rohů (poloměr)",
    "Width in pixels" : "Šířka v pixelex",
    "Height in pixels" : "Výška v pixelech",
    "Toggle ratio lock" : "Vyp/zap. zám. poměru stran",
    "Reset to original image size" : "Vrátit k původní velikosti obrázku",
    "Rotate" : "Otočit",
    "Text" : "Text",
    "Text spacing" : "Rozestupy textu",
    "Text alignment" : "Zarovnání textu",
    "Font family" : "Skupina písem",
    "Size" : "Velikost",
    "Letter spacing" : "Rozestupy znaků",
    "Line height" : "Výška řádku",
    "Warmth" : "Teplota",
    "+ Add watermark" : "+ přidat vodotisk",
    "Choose watermark type" : "Zvolte typ vodotisku",
    "Upload watermark" : "Nahrát vodotisk",
    "Add as text" : "Přidat jako text",
    "Padding" : "Doplňování",
    "Shadow" : "Stín",
    "Horizontal" : "Vodorovné",
    "Vertical" : "Svislé",
    "Opacity" : "(Ne)průhlednost",
    "Position" : "Pozice",
    "Stroke" : "Čára",
    "Save image as" : "Uložit obrázek jako",
    "Extension" : "Přípona",
    "Name is required." : "Je třeba vyplnit název.",
    "Quality" : "Kvalita",
    "Saved image size (width x height)" : "Velikost uloženého obrázku (šířka x výška)",
    "Note that the selected crop area is lower than the applied resize which might cause quality decrease" : "Pozn.: označená oblast ořezu je menší než použitá změna rozlišení, což může způsobit snížení kvality",
    "Actual size (100%)" : "Skutečná velikost (100%)",
    "Fit size" : "Přizpůsobit velikost",
    "Transcoding failed, check Nextcloud logs." : "Převod mezi formáty se nezdařil – podívejte se do záznamů událostí v Nextcloud.",
    "Direct" : "Přímo",
    "Auto" : "Automaticky",
    "Shared Folder" : "Sdílená složka",
    "Shared Album" : "Sdílené album",
    "Failed to create {albumName}." : "Nepodařilo se vytvořit {albumName}.",
    "Failed to rename {currentAlbumName} to {newAlbumName}." : "Nepodařilo přejmenovat {currentAlbumName} to {newAlbumName}.",
    "General Failure" : "Obecný nezdar",
    "Error: {msg}" : "Chyba: {msg}",
    "Failed to delete files." : "Nepodařilo se smazat soubory.",
    "Failed to delete {fileName}." : "Nepodařilo se smazat {fileName}.",
    "Failed to move files." : "Nepodařilo se přesunout soubory.",
    "Could not move {fileName}, target exists." : "Nepodařilo se přesunout {fileName} – v cíli už takto nazvaný existuje.",
    "Failed to move {fileName}." : "Nepodařilo se přesunout {fileName}.",
    "Failed to download files" : "Soubory se nepodařilo stáhnout",
    "Failed to favorite files." : "Nepodařilo se přidat soubory mezi oblíbené.",
    "Failed to favorite some files." : "Některé soubory se nepodařilo označit jako oblíbené",
    "Failed to favorite {fileName}." : "Nepodařilo se přidat {fileName} do oblíbených.",
    "Upload some photos and make sure the timeline path is configured" : "Nahrajte nějaké fotky a ověřte, že je nastavený popis umístění časové osy",
    "Mark photos as favorite to find them easily" : "Abyste je snadno našli, označujte fotky jako oblíbené",
    "Memories from past years will appear here" : "Vzpomínky z minulých let se zobrazí zde",
    "You will find your friends soon. Please be patient" : "Brzy zde naleznete své přátele. Prosím buďte trpěliví",
    "Face Recognition is disabled. Enable in settings to find your friends" : "Rozpoznávání obličejů je vypnuté. Pokud chcete vyhledat své přátele, zapněte ho v nastavení",
    "Your videos will appear here" : "Vaše videa se objeví zde",
    "No photos in this album yet" : "V tomto albu zatím nejsou žádné fotky",
    "Create an album to get started" : "Začněte vytvořením alba",
    "Archive photos you don't want to see in your timeline" : "Fotky, které nechcete vidět na časové ose zaarchivujte",
    "Tag photos to find them easily" : "Abyste je snadno našli, opatřujte fotky štítky",
    "Recognize is still working on your photos" : "Stále ještě probíhá rozpoznávání vašich fotek",
    "Places you have been to will appear here" : "Objeví se zde místa, na kterých jste byli",
    "Your Timeline" : "Vaše časová osa",
    "EXIF" : "EXIF",
    "Edit Date/Time" : "Upravit datum/čas",
    "Edit EXIF Data" : "Upravit EXIF data",
    "Move to another person" : "Přesunout k jiné osobě",
    "You will find your friends soon. Please, be patient." : "Brzy naleznete své přátele. Prosím buďte trpěliví.",
    "Face Recognition is disabled. Enable in settings to find your friends." : "Rozpoznávání obličejů je vypnuté. Pokud chcete vyhledat své přátele, zapněte ho v nastavení.",
    "Processing … {n}/{m}" : "Zpracovávání… {n}/{m}",
    "Update Exif" : "Aktualizovat Exif",
    "Loading data … {n}/{m}" : "Načítání dat… {n}/{m}",
    "Date Taken" : "Datum pořízení",
    "Share Folder" : "Nasdílet složku",
    "Use the sidebar to share this folder." : "Pokud chcete tuto složku nasdílet, použijte k tomu postranní panel",
    "If you create a public link share, click on refresh and a corresponding link to Memories will be shown below." : "Pokud vytváříte odkaz pro veřejné sdílení, klikněte na opětovné načtení a níže se ukáže příslušný odkaz do Vzpomínek.",
    "Video sharing not supported yet" : "Sdílení videí zatím není podporováno"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
