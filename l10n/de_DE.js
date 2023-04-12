OC.L10N.register(
    "memories",
    {
    "Memories" : "Erinnerungen",
    "Fast, modern and advanced photo management suite" : "Schnelle, moderne und fortschrittliche Fotoverwaltungssuite",
    "# Memories: Photo Management for Nextcloud\n\nMemories is a *batteries-included* photo management solution for Nextcloud with advanced features including:\n\n- **📸 Timeline**: Sort photos and videos by date taken, parsed from Exif data.\n- **⏪ Rewind**: Jump to any time in the past instantly and relive your memories.\n- **🤖 AI Tagging**: Group photos by people and objects, powered by [recognize](https://github.com/nextcloud/recognize) and [facerecognition](https://github.com/matiasdelellis/facerecognition).\n- **🖼️ Albums**: Create albums to group photos and videos together. Then share these albums with others.\n- **🫱🏻‍🫲🏻 External Sharing**: Share photos and videos with people outside of your Nextcloud instance.\n- **📱 Mobile Support**: Work from any device, of any shape and size through the web app.\n- **✏️ Edit Metadata**: Edit dates and other metadata on photos quickly and in bulk.\n- **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n- **📹 Video Transcoding**: Transcode videos and use HLS for maximal performance.\n- **🗺️ Map**: View your photos on a map, tagged with accurate reverse geocoding.\n- **📦 Migration**: Migrate easily from Nextcloud Photos and Google Takeout.\n- **⚡️ Performance**: Do all this very fast.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store (try a demo [here](https://memories-demo.radialapps.com/apps/memories/)).\n1. Perform the recommended [configuration steps](https://github.com/pulsejet/memories/wiki/Configuration).\n1. Run `php occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos." : "# Erinnerungen: Fotoverwaltung für Nextcloud\n\nErinnerungen (Memories) ist eine Fotoverwaltungslösung *Batterien enthalten* für Nextcloud mit erweiterten Funktionen, darunter:\n\n- **📸 Timeline**: Fotos und Videos nach Aufnahmedatum sortieren, geparst aus Exif-Daten.\n- **⏪ Zurückspulen**: Springen Sie sofort zu einem beliebigen Zeitpunkt in der Vergangenheit und erleben Sie Ihre Erinnerungen erneut.\n- **🤖 KI-Tagging**: Gruppieren Sie Fotos nach Personen und Objekten, unterstützt von [recognize](https://github.com/nextcloud/recognize) und [facerecognition](https://github.com/matiasdelellis/facerecognition ).\n- **🖼️ Alben**: Erstellen Sie Alben, um Fotos und Videos zu gruppieren. Dann teilen Sie diese Alben mit anderen.\n- **🫱🏻‍🫲🏻 Externes Teilen**: Teilen Sie Fotos und Videos mit Personen außerhalb Ihrer Nextcloud-Instanz.\n- **📱 Mobiler Support**: Arbeiten Sie von jedem Gerät jeder Form und Größe über die Web-App.\n- **✏️ Metadaten bearbeiten**: Bearbeiten Sie Daten und andere Metadaten auf Fotos schnell und in großen Mengen.\n- **📦 Archiv**: Speichern Sie Fotos, die Sie nicht in Ihrer Chronik sehen möchten, in einem separaten Ordner.\n- **📹 Videotranskodierung**: Videos transkodieren und HLS für maximale Leistung verwenden.\n- **🗺️ Karte**: Zeigen Sie Ihre Fotos auf einer Karte an, die mit genauer umgekehrter Geokodierung versehen ist.\n- **📦 Migration**: Migrieren Sie einfach von Nextcloud Photos und Google Takeout.\n- **⚡️ Leistung**: Mach das alles sehr schnell.\n\n## 🚀 Installation\n\n1. Installieren Sie die App aus dem Nextcloud App Store (probieren Sie [hier] eine Demo aus (https://memories-demo.radialapps.com/apps/memories/)).\n1. Führen Sie die empfohlenen [Konfigurationsschritte] durch (https://github.com/pulsejet/memories/wiki/Configuration).\n1. Führen Sie `php occ memorys:index` aus, um Metadaten-Indizes für vorhandene Fotos zu generieren.\n1. Öffnen Sie die App 📷 Erinnerungen in Nextcloud und legen Sie das Verzeichnis mit Ihren Fotos fest.",
    "Path to packaged exiftool binary" : "Pfad zur gepackten Exiftool-Binärdatei",
    "ffmpeg path" : "ffmpeg-Pfad",
    "ffprobe path" : "ffprobe-Pfad",
    "Binary path (local only)" : "Binärer Pfad (nur lokal)",
    "Bind address (local only)" : "Bind-Adresse (nur lokal)",
    "Connection address (same as bind if local)" : "Verbindungsadresse (dasselbe wie bind, wenn lokal)",
    "EXIF Extraction" : "EXIF-Extraktion",
    "Use system perl (only if packaged binary does not work)" : "System-Perl verwenden (nur wenn gepackte Binärdatei nicht funktioniert)",
    "Reverse Geocoding" : "Umgekehrte Geokodierung",
    "Database is populated with {n} geometries" : "Die Datenbank ist mit {n} Geometrien gefüllt",
    "Geometry table has not been created" : "Geometrietabelle wurde nicht erstellt",
    "Reverse geocoding has not been configured ({gisType})." : "Umgekehrte Geocodierung wurde nicht konfiguriert ({gisType}).",
    "Memories supports offline reverse geocoding using the OpenStreetMaps data on MySQL and Postgres." : "Erinnerungen (Memories) unterstützt lokale umgekehrte Geocodierung unter Verwendung der OpenStreetMaps-Daten auf MySQL und Postgres.",
    "You need to download the planet data into your database. This is highly recommended and has low overhead." : "Sie müssen die Planetendaten in Ihre Datenbank herunterladen. Dies ist sehr zu empfehlen und hat einen geringen Overhead.",
    "If the button below does not work for importing the planet data, use " : "Wenn die Schaltfläche unten zum Importieren der Planetendaten nicht funktioniert, verwenden Sie",
    "Note: the geometry data is stored in the " : "Hinweis: Die Geometriedaten werden gespeichert in",
    "Download planet database" : "Planetendatenbank herunterladen",
    "Video Streaming" : "Video-Streaming",
    "Live transcoding provides for adaptive streaming of videos using HLS." : "Live-Transcodierung ermöglicht adaptives Streaming von Videos mit HLS.",
    "Note that this may be very CPU intensive without hardware acceleration, and transcoding will not be used for external storage." : "Beachten Sie, dass dies ohne Hardwarebeschleunigung sehr CPU-intensiv sein kann und die Transcodierung nicht für die externe Speicherung verwendet wird.",
    "Enable Transcoding" : "Transcodierung aktivieren",
    "Global default video quality (user may override)" : "Globale Standard-Videoqualität (Benutzer kann diese überschreiben)",
    "Auto (adaptive transcode)" : "Automatisch (adaptive Transcodierung)",
    "Original (transcode with max quality)" : "Original (mit maximaler Qualität transcodieren)",
    "Direct (original video file without transcode)" : "Direkt (Originalvideodatei ohne Transcodierung)",
    "Transcoder configuration" : "Transcoder-Konfiguration",
    "Memories uses the go-vod transcoder. You can run go-vod exernally (e.g. in a separate Docker container for hardware acceleration) or use the built-in transcoder. To use an external transcoder, enable the following option and follow the instructions at this link:" : "Erinnerungen (Memories) verwendet den Go-Vod-Transcoder. Sie können go-vod extern ausführen (z. B. in einem separaten Docker-Container zur Hardwarebeschleunigung) oder den integrierten Transcoder verwenden. Um einen externen Transcoder zu verwenden, aktivieren Sie die folgende Option und folgen Sie den Anweisungen unter diesem Link:",
    "external transcoder configuration" : "Externe Transcoder-Konfiguration",
    "Enable external transcoder (go-vod)" : "Externen Transcoder aktivieren (go-vod)",
    "Hardware Acceleration" : "Hardware-Beschleunigung",
    "You must first make sure the correct drivers are installed before configuring acceleration." : "Sie müssen zunächst sicherstellen, dass die richtigen Treiber installiert sind, bevor Sie die Beschleunigung konfigurieren.",
    "Make sure you test hardware acceleration with various options after enabling." : "Stellen Sie sicher, dass Sie die Hardwarebeschleunigung nach der Aktivierung mit verschiedenen Optionen testen.",
    "Do not enable multiple types of hardware acceleration simultaneously." : "Aktivieren Sie nicht mehrere Arten der Hardwarebeschleunigung gleichzeitig.",
    "Intel processors supporting QuickSync Video (QSV) as well as some AMD GPUs can be used for transcoding using VA-API acceleration." : "Intel-Prozessoren, die QuickSync Video (QSV) unterstützen, sowie einige AMD-GPUs können für die Transcodierung mit VA-API-Beschleunigung verwendet werden.",
    "For more details on driver installation, check the following link:" : "Weitere Einzelheiten zur Treiberinstallation finden Sie unter folgendem Link:",
    "Enable acceleration with VA-API" : "Beschleunigung mit VA-API aktivieren",
    "Enable low-power mode (QSV)" : "Energiesparmodus (QSV) aktivieren",
    "NVIDIA GPUs can be used for transcoding using the NVENC encoder with the proper drivers." : "NVIDIA-GPUs können für die Transcodierung mit dem NVENC-Encoder mit den richtigen Treibern verwendet werden.",
    "Depending on the versions of the installed SDK and ffmpeg, you need to specify the scaler to use" : "Abhängig von den Versionen des installierten SDK und ffmpeg müssen Sie den zu verwendenden Scaler angeben",
    "No automated tests are available for NVIDIA acceleration." : "Für die NVIDIA-Beschleunigung sind keine automatisierten Tests verfügbar.",
    "Enable acceleration with NVENC" : "Beschleunigung mit NVENC aktivieren",
    "Enable NVENC Temporal AQ" : "NVENC Temporal AQ aktivieren",
    "NPP scaler" : "NPP-Scaler",
    "CUDA scaler" : "CUDA-Scaler",
    "Failed to update setting" : "Die Einstellung konnte nicht aktualisiert werden",
    "{name} binary exists and is executable" : "{name}-Binärdatei existiert und ist ausführbar",
    "{name} binary not found" : "{name}-Binärdatei nicht gefunden",
    "{name} binary is not executable" : "{name}-Binärdatei ist nicht ausführbar",
    "{name} failed test: {info}" : "{name} Test nicht bestanden: {info}",
    "{name} binary exists and is usable" : "{name}-Binärdatei existiert und kann verwendet werden",
    "{name} binary status: {status}" : "{Name} binärer Status: {Status}",
    "Geometry support was not detected in your database" : "Geometrieunterstützung wurde in Ihrer Datenbank nicht erkannt",
    "MySQL-like geometry support was detected " : "MySQL-ähnliche Geometrieunterstützung wurde erkannt",
    "Postgres native geometry support was detected" : "Die native Postgres-Geometrieunterstützung wurde erkannt",
    "VA-API device ({dev}) is readable" : "VA-API-Gerät ({dev}) ist lesbar",
    "VA-API device ({dev}) not found" : "VA-API-Gerät ({dev}) nicht gefunden",
    "VA-API device ({dev}) has incorrect permissions" : "VA-API-Gerät ({dev}) hat falsche Berechtigungen",
    "VA-API device status: {status}" : "VA-API-Gerätestatus: {status}",
    "Settings" : "Einstellungen",
    "People (Recognize)" : "Personen (erkennen)",
    "People" : "Personen",
    "People (Face Recognition)" : "Personen (Gesichtserkennung)",
    "Info" : "Info",
    "Timeline" : "Zeitleiste",
    "Folders" : "Ordner",
    "Favorites" : "Favoriten",
    "Videos" : "Videos",
    "Albums" : "Alben",
    "Archive" : "Archiv",
    "On this day" : "An diesem Tag",
    "Places" : "Orte",
    "Map" : "Karte",
    "Tags" : "Schlagworte",
    "A better photos experience awaits you" : "Ein besseres Fotoerlebnis erwartet Sie",
    "Choose the root folder of your timeline to begin" : "Wählen Sie den Quellordner Ihrer Zeitleiste um zu beginnen",
    "If you just installed Memories, run:" : "Wenn Sie Memories gerade installiert haben, führen Sie Folgendes aus:",
    "Continue to Memories" : "Weiter zu Memories",
    "Choose again" : "Erneut auswählen",
    "Click here to start" : "Zum Starten hier klicken",
    "You can always change this later in settings" : "Sie können das auch noch später in den Einstellungen ändern",
    "Choose the root of your timeline" : "Start Ihrer Zeitleiste auswählen",
    "The selected folder does not seem to be valid. Try again." : "Der ausgewählte Ordner scheint ungültig zu sein. Versuchen Sie es nochmal.",
    "_Found {n} item in {path}_::_Found {n} items in {path}_" : ["{n} Foto gefunden in {path}","{n} Fotos gefunden in {path}"],
    "Edit" : "Bearbeiten",
    "No title" : "Kein Titel",
    "No description" : "Keine Beschreibung",
    "No coordinates" : "Keine Koordinaten",
    "Click edit to set location" : "Auf Bearbeiten klicken um den Ort festzulegen",
    "Cancel" : "Abbrechen",
    "Delete" : "Löschen",
    "Remove from album" : "Aus dem Album entfernen",
    "Download" : "Herunterladen",
    "Favorite" : "Favorisieren",
    "Unarchive" : "Dearchivieren",
    "Edit metadata" : "Metadaten bearbeiten",
    "View in folder" : "In Ordner anzeigen",
    "Move to folder" : "In Ordner verschieben",
    "Add to album" : "Zum Album hinzufügen",
    "Move to person" : "Zu einer Person verschieben",
    "Remove from person" : "Von der Person entfernen",
    "You are about to download a large number of files. Are you sure?" : "Sie sind dabei, eine große Anzahl an Dateien herunterzuladen. Sind Sie sich sicher?",
    "You are about to delete a large number of files. Are you sure?" : "Sie sind dabei, eine große Anzahl an Dateien zu löschen. Sind Sie sich sicher?",
    "You are about to touch a large number of files. Are you sure?" : "Sie sind im Begriff, eine große Anzahl von Dateien zu ändern. Sind Sie sich sicher?",
    "_{n} selected_::_{n} selected_" : ["{n} ausgewählt","{n} ausgewählt"],
    "Memories Settings" : "Memories-Einstellungen",
    "General" : "Allgemein",
    "Timeline Path" : "Pfad der Zeitleiste",
    "Square grid mode" : "Quadratischer Gittermodus",
    "Show past photos on top of timeline" : "Vergangene Fotos oben auf der Zeitleiste anzeigen",
    "Load full size image on zoom" : "Bild in voller Größe beim Zoomen laden",
    "Always load full size image (not recommended)" : "Bild immer in voller Größe laden (nicht empfohlen)",
    "Folders Path" : "Ordnerpfad",
    "Show hidden folders" : "Zeige versteckte Ordner",
    "Sort folders oldest-first" : "Ordner sortieren, älteste zuerst",
    "Sort albums oldest-first" : "Alben sortieren, älteste zuerst",
    "Choose Timeline Paths" : "Pfade der Zeitleiste auswählen",
    "Choose the root for the folders view" : "Wählen Sie das Stammverzeichnis für die Ordneransicht",
    "Close" : "Schließen",
    "{photoCount} photos" : "{photoCount} Fotos",
    "Failed to load some photos" : "Laden einiger Fotos fehlgeschlagen",
    "_{n} item added to album_::_{n} items added to album_" : ["{n} Element zum Album hinzugefügt","{n} Elmente zum Album hinzugefügt"],
    "Search for collaborators" : "Suche nach Mitbearbeitenden",
    "Search people or groups" : "Suchen nach Personen oder Gruppen",
    "Add {collaboratorLabel} to the collaborators list" : "{collaboratorLabel} zur Liste der Mitarbeitenden hinzufügen",
    "No collaborators available" : "Keine Mitarbeitenden verfügbar",
    "Remove {collaboratorLabel} from the collaborators list" : "{collaboratorLabel} aus der Liste der Mitarbeitenden löschen",
    "Copy the public link" : "Den öffentlichen Link kopieren",
    "Delete the public link" : "Den öffentlichen Link löschen",
    "Add people or groups who can edit your album" : "Personen oder Gruppen hinzufügen, die Ihr Album bearbeiten können",
    "Public link copied!" : "Öffentlicher Link kopiert!",
    "Copy public link" : "Öffentlichen Link kopieren",
    "Share via public link" : "Als öffentlichen Link teilen",
    "Failed to fetch collaborators list." : "Liste der Mitbearbeitenden konnte nicht abgerufen werden.",
    "Public link" : "Öffentlicher Link",
    "Failed to fetch album." : "Album konnte nicht abgerufen werden.",
    "Failed to update album." : "Album konnte nicht aktualisiert werden.",
    "New album" : "Neues Album",
    "Create new album" : "Neues Album erstellen",
    "Edit album details" : "Albumdetails bearbeiten",
    "Could not load the selected album" : "Gewähltes Album konnte nicht geladen werden",
    "Remove Album" : "Album entfernen",
    "Failed to delete {name}." : "Fehler beim Löschen von {name}.",
    "Name of the album" : "Name des Albums",
    "Location of the album" : "Ort des Albums",
    "Go back to the previous view." : "Zur vorherigen Ansicht zurückgehen.",
    "Go to the add collaborators view." : "Zur Ansicht Mitbearbeitende hinzufügen wechseln.",
    "Back to the new album form." : "Zurück zur neuen Albumform.",
    "Back" : "Zurück",
    "Add collaborators" : "Mitarbeitende hinzufügen",
    "Save" : "Speichern",
    "Create album" : "Album erstellen",
    "Invalid album name; should not contain any slashes." : "Ungültiger Albumname; darf keine Schrägstriche enthalten.",
    "Add selection to album {albumName}" : "Auswahl zum Album {albumName} hinzufügen",
    "Create a new album." : "Ein neues Album erstellen.",
    "_Share with %n user_::_Share with %n users_" : ["Mit %n Benutzer teilen","Mit %n Benutzern teilen"],
    "_%n item_::_%n items_" : ["%n Element","%n Elemente"],
    "Save collaborators for this album." : "Mitbearbeitende für dieses Album speichern.",
    "Share Album" : "Album teilen",
    "Year" : "Jahr",
    "Month" : "Monat",
    "Day" : "Tag",
    "Time" : "Zeit",
    "Hour" : "Stunde",
    "Minute" : "Minute",
    "Newest" : "Neueste",
    "Oldest" : "Älteste",
    "Invalid Date" : "Ungültiges Datum",
    "Newest date is older than oldest date" : "Neuestes Datum ist älter als ältestes Datum",
    "Title" : "Titel",
    "Description" : "Beschreibung",
    "Label" : "Beschriftung",
    "Camera Make" : "Kameramarke",
    "Camera Model" : "Kameramodell",
    "Lens Model" : "Linsenmodell",
    "Copyright" : "Urheberrecht",
    "Empty" : "Leer",
    "Unchanged" : "Unverändert",
    "Reset" : "Zurücksetzen",
    "Remove location" : "Ort entfernen",
    "Search location / landmark" : "Ort / Wahrzeichen suchen",
    "Failed to search for location with Nominatim." : "Die Suche nach einem Ort mit Nominatim ist fehlgeschlagen.",
    "Date / Time" : "Datum und Zeit",
    "Collaborative Tags" : "Kollaborative Schlagworte",
    "EXIF Fields" : "EXIF-Felder",
    "Geolocation" : "Geolokalisierung",
    "Failed to load metadata for {n} photos." : "Fehler beim Laden der Metadaten für {n} Fotos.",
    "{n} photos cannot be edited (permissions error)." : "{n} Fotos können nicht bearbeitet werden (Berechtigungsfehler).",
    "Remove person" : "Person entfernen",
    "Are you sure you want to remove {name}?" : "Möchten Sie wirklich {name} entfernen?",
    "Name" : "Name",
    "Rename person" : "Person umbenennen",
    "Update" : "Aktualisieren",
    "Failed to rename {oldName} to {name}." : "Fehler beim Umbenennen von {oldName} in {name}.",
    "Search" : "Suche",
    "Loading …" : "Lade …",
    "Merge {name} with person" : "{name} mit Person zusammenführen",
    "Are you sure you want to merge {name} with {newName}?" : "Sind Sie sicher, dass Sie {name} mit {newName} zusammenführen möchten?",
    "Too many failures, aborting" : "Zu viele Fehler, Abbruch",
    "Error while moving {basename}" : "Fehler beim Verschieben von {basename}",
    "Failed to move {name}." : "{name} konnte nicht verschoben werden.",
    "Move selected photos to person" : "Ausgewählte Fotos zu einer Person verschieben",
    "Are you sure you want to move the selected photos from {name} to {newName}?" : "Möchten Sie die ausgewählten Fotos wirklich von {name} nach {newName} verschieben?",
    "Choose a folder" : "Ordner auswählen",
    "_{n} item moved to folder_::_{n} items moved to folder_" : ["{n} Element in den Ordner verschoben","{n} Elementen in den Ordner verschoben"],
    "Remove" : "Entfernen",
    "Add Path" : "Pfad hinzufügen",
    "Add a root to your timeline" : "Einen Start Ihrer Zeitleiste hinzufügen",
    "Share link" : "Link teilen",
    "Link Sharing" : "Linkfreigabe",
    "You cannot share the root folder" : "Sie können den Wurzelordner nicht teilen",
    "Public link shares are available to people outside Nextcloud." : "Öffentliche Linkfreigaben sind für Personen außerhalb Ihrer Nextcloud verfügbar.",
    "You may create or update permissions on public links using the sidebar." : "Über die Seitenleiste können Sie Berechtigungen für öffentliche Links erstellen oder aktualisieren.",
    "Click a link to copy to clipboard." : "Klicken Sie auf einen Link, um ihn in die Zwischenablage zu kopieren.",
    "Create Link" : "Link erstellen",
    "Refresh" : "Aktualisieren",
    "Password protected" : "Passwortgeschützt",
    "Expires" : "Ablaufdatum",
    "Editable" : "Bearbeitbar",
    "Read only" : "Schreibgeschützt",
    "Link copied to clipboard" : "Link wurde in die Zwischenablage kopiert",
    "Reduced Size" : "Größe verkleinern",
    "High Resolution" : "Hohe Auflösung",
    "Original File" : "Originaldatei",
    "Public Link" : "Öffentlicher Link",
    "Share File" : "Datei teilen",
    "Share a lower resolution image preview" : "Bildvorschau mit niedrigerer Auflösung teilen",
    "Share the video as a high quality MOV" : "Video als hochwertiges MOV teilen",
    "Share the image as a high quality JPEG" : "Bild als hochwertiges JPEG teilen",
    "Share the original image / video file" : "Die original Bild- / Video-Datei teilen",
    "Share an external Nextcloud link" : "Einen externen Nextcloud-Link teilen",
    "Failed to download file" : "Datei konnte nicht heruntergeladen werden",
    "Cannot share this type of data" : "Diese Art von Daten kann nicht geteilt werden",
    "Sort by date" : "Nach Datum sortieren",
    "Sort by name" : "Nach Namen sortieren",
    "Share album" : "Album teilen",
    "Download album" : "Album herunterladen",
    "Delete album" : "Album löschen",
    "Nothing to show here" : "Hier gibt es nichts anzuzeigen",
    "Merge with different person" : "Mit einer anderen Person zusammenführen",
    "Mark person in preview" : "Person in Vorschau markieren",
    "Share folder" : "Ordner teilen",
    "Folder View" : "Ordneransicht",
    "Timeline View" : "Zeitleistenansicht",
    "Move left" : "Nach links verschieben",
    "Move right" : "Nach rechts verschieben",
    "Failed to get Exif data. Metadata may be lost!" : "Exif-Daten konnten nicht abgerufen werden. Metadaten können verloren gehen!",
    "No Exif data found! Continue?" : "Keine Exif-Daten gefunden! Fortsetzen?",
    "Image saved successfully" : "Bild gespeichert",
    "Error saving image" : "Fehler beim Speichern des Bildes",
    "Unsaved changes" : "Ungespeicherte Änderungen",
    "Drop changes" : "Änderungen verwerfen",
    "Share" : "Teilen",
    "Play Live Photo" : "Live-Foto abspielen",
    "Sidebar" : "Seitenleiste",
    "Download Video" : "Video herunterladen",
    "Slideshow" : "Diashow",
    "Previous" : "Zurück",
    "Next" : "Nächstes",
    "Editing is currently disabled for Live Photos" : "Bearbeitung ist derzeit für Live-Fotos deaktiviert",
    "Cannot edit this file" : "Diese Datei kann nicht bearbeitet werden",
    "Are you sure you want to delete?" : "Möchten Sie wirklich löschen?",
    "Save as" : "Speichern als",
    "All changes will be lost." : "Alle Änderungen gehen verloren.",
    "Are you sure you want to continue?" : "Sind Sie sich sicher, dass Sie fortsetzen wollen?",
    "Continue" : "Fortsetzen",
    "Undo" : "Rückgängig",
    "Redo" : "Wiederherstellen",
    "Show original image" : "Originalbild anzeigen",
    "Zoom in" : "Hineinzoomen",
    "Zoom out" : "Hinauszoomen",
    "Toggle zoom menu" : "Zoom-Menü umschalten",
    "Adjust" : "Anpassen",
    "Fine-tune" : "Feinabstimmung",
    "Filters" : "Filter",
    "Watermark" : "Wasserzeichen",
    "Draw" : "Zeichnen",
    "Resize" : "Größe ändern",
    "Invalid image." : "Ungültiges Bild.",
    "Error while uploading the image." : "Fehler beim Hochladen des Bildes.",
    "are not images" : "Sind keine Bilder",
    "is not an image" : "Ist kein Bild",
    "to be uploaded" : "zum Hochladen",
    "Crop" : "Zuschneiden",
    "Original" : "Original",
    "Custom" : "Benutzerdefiniert",
    "Square" : "Quadrat",
    "Landscape" : "Querformat",
    "Portrait" : "Hochformat",
    "Ellipse" : "Ellipse",
    "Classic TV" : "Klassisches Fernsehen",
    "CinemaScope" : "CinemaScope",
    "Arrow" : "Pfeil",
    "Blur" : "Verwischen",
    "Brightness" : "Helligkeit",
    "Contrast" : "Kontrast",
    "Un-flip X" : "Spiegeln X rückgängig",
    "Flip X" : "Spiegeln X",
    "Un-flip Y" : "Spiegeln Y rückgängig",
    "Flip Y" : "Spiegeln Y",
    "HSV" : "HSV",
    "Hue" : "Farbton",
    "Saturation" : "Sättigung",
    "Value" : "Wert",
    "Image" : "Bild",
    "Importing …" : "Importiere…",
    "+ Add image" : "+ Bild hinzufügen",
    "Line" : "Linie",
    "Pen" : "Stift",
    "Polygon" : "Polygon",
    "Sides" : "Seiten",
    "Rectangle" : "Rechteck",
    "Corner Radius" : "Eckenradius",
    "Width in pixels" : "Breite in Pixel",
    "Height in pixels" : "Höhe in Pixel",
    "Toggle ratio lock" : "Verhältnis-Sperre umschalten",
    "Reset to original image size" : "Auf ursprüngliche Bildgröße zurücksetzen",
    "Rotate" : "Drehen",
    "Text" : "Text",
    "Text spacing" : "Text-Abstand",
    "Text alignment" : "Textausrichtung",
    "Font family" : "Schriftenfamilie",
    "Size" : "Größe",
    "Letter spacing" : "Buchstaben-Abstand",
    "Line height" : "Zeilenhöhe",
    "Warmth" : "Wärme",
    "+ Add watermark" : "+ Wasserzeichen hinzufügen",
    "Choose watermark type" : "Wasserzeichentyp auswählen",
    "Upload watermark" : "Wasserzeichen hochladen",
    "Add as text" : "Als Text hinzufügen",
    "Padding" : "Auffüllen",
    "Shadow" : "Schatten",
    "Horizontal" : "Horizontal",
    "Vertical" : "Vertikal",
    "Opacity" : "Deckkraft",
    "Position" : "Position",
    "Stroke" : " Strich",
    "Save image as" : "Bild speichern als",
    "Extension" : "Erweiterung",
    "Name is required." : "Name ist erforderlich.",
    "Quality" : "Qualität",
    "Saved image size (width x height)" : "Gespeicherte Bildgröße (Breite x Höhe)",
    "Note that the selected crop area is lower than the applied resize which might cause quality decrease" : "Beachten Sie, dass der ausgewählte Zuschneidebereich kleiner ist als die angewendete Größenänderung, was zu Qualitätseinbußen führen kann",
    "Actual size (100%)" : "Tatsächliche Größe (100%)",
    "Fit size" : "Größe anpassen",
    "Transcoding failed, check Nextcloud logs." : "Transkodierung fehlgeschlagen, überprüfen Sie die Nextcloud-Protokolle.",
    "Direct" : "Direkt",
    "Auto" : "Automatisch",
    "Shared Folder" : "Geteilter Ordner",
    "Shared Album" : "Geteiltes Album",
    "Failed to create {albumName}." : "{albumName} konnte nicht erstellt werden.",
    "Failed to rename {currentAlbumName} to {newAlbumName}." : "{currentAlbumName} konnte nicht in {newAlbumName} umbenannt werden.",
    "General Failure" : "Allgemeiner Fehler",
    "Error: {msg}" : "Fehler: {msg}",
    "Failed to delete files." : "Löschen der Dateien fehlgeschlagen.",
    "Failed to delete {fileName}." : "{fileName} konnte nicht gelöscht werden.",
    "Failed to move files." : "Dateien konnten nicht verschoben werden.",
    "Could not move {fileName}, target exists." : "{fileName} konnte nicht verschoben werden, Zieldatei existiert bereits.",
    "Failed to move {fileName}." : "{fileName} konnte nicht verschoben werden.",
    "Failed to download files" : "Dateien konnten nicht heruntergeladen werden",
    "Failed to favorite files." : "Favorisieren von Dateien fehlgeschlagen.",
    "Failed to favorite some files." : "Einige Dateien konnten nicht zu den Favoriten hinzugefügt werden.",
    "Failed to favorite {fileName}." : "{fileName} konnte nicht zu den Favoriten hinzugefügt werden.",
    "Upload some photos and make sure the timeline path is configured" : "Laden Sie einige Fotos hoch und stellen Sie sicher, dass der Timeline-Pfad konfiguriert ist",
    "Mark photos as favorite to find them easily" : "Markieren Sie Fotos als Favoriten, um sie leicht zu finden",
    "Memories from past years will appear here" : "Erinnerungen aus vergangenen Jahren werden hier erscheinen",
    "You will find your friends soon. Please be patient" : "Sie werden Ihre Freunde bald finden. Bitte haben Sie Geduld",
    "Face Recognition is disabled. Enable in settings to find your friends" : "Die Gesichtserkennung ist deaktiviert. Aktivieren Sie sie in den Einstellungen, um Ihre Freunde zu finden",
    "Your videos will appear here" : "Ihre Videos werden hier angezeigt",
    "No photos in this album yet" : "Noch keine Fotos in diesem Album",
    "Create an album to get started" : "Erstellen Sie ein Album, um loszulegen",
    "Archive photos you don't want to see in your timeline" : "Archivieren Sie Fotos, die Sie nicht in Ihrer Chronik sehen möchten",
    "Tag photos to find them easily" : "Markieren Sie Fotos, um sie leicht zu finden",
    "Recognize is still working on your photos" : "Die Erkennung arbeitet noch an Ihren Fotos",
    "Places you have been to will appear here" : "Orte, die Sie besucht haben, werden hier angezeigt",
    "Your Timeline" : "Ihre Zeitleiste",
    "# Memories: Photo Management for Nextcloud\n\nMemories is a *batteries-included* photo management solution for Nextcloud with advanced features including:\n\n- **📸 Timeline**: Sort photos and videos by date taken, parsed from Exif data.\n- **⏪ Rewind**: Jump to any time in the past instantly and relive your memories.\n- **🤖 AI Tagging**: Group photos by people and objects, powered by [recognize](https://github.com/nextcloud/recognize) and [facerecognition](https://github.com/matiasdelellis/facerecognition).\n- **🖼️ Albums**: Create albums to group photos and videos together. Then share these albums with others.\n- **🫱🏻‍🫲🏻 External Sharing**: Share photos and videos with people outside of your Nextcloud instance.\n- **📱 Mobile Support**: Works on devices of any shape and size through the web app.\n- **✏️ Edit Metadata**: Edit dates on photos quickly and easily.\n- **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n- **📹 Video Transcoding**: Memories transcodes videos and uses HLS for maximal performance.\n- **🗺️ Map**: View your photos on a map, tagged with accurate reverse geocoding.\n- **⚡️ Performance**: Memories is very fast.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store (try a demo [here](https://memories-demo.radialapps.com/apps/memories/)).\n1. Perform the recommended [configuration steps](https://github.com/pulsejet/memories/wiki/Extra-Configuration).\n1. Run `php occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos." : "# Erinnerungen (Memoriers): Fotoverwaltung für Nextcloud\n\nErinnerungen (Memories) ist eine Fotoverwaltungslösung *Batterien enthalten* für Nextcloud mit erweiterten Funktionen, darunter:\n\n- **📸 Timeline**: Fotos und Videos nach Aufnahmedatum sortieren, geparst aus Exif-Daten.\n- **⏪ Zurückspulen**: Springen Sie sofort zu einem beliebigen Zeitpunkt in der Vergangenheit und erleben Sie Ihre Erinnerungen erneut.\n- **🤖 KI-Tagging**: Gruppieren Sie Fotos nach Personen und Objekten, unterstützt von [recognize](https://github.com/nextcloud/recognize) und [facerecognition](https://github.com/matiasdelellis/facerecognition ).\n- **🖼️ Alben**: Erstellen Sie Alben, um Fotos und Videos zu gruppieren. Dann teilen Sie diese Alben mit anderen.\n- **🫱🏻‍🫲🏻 Externes Teilen**: Teilen Sie Fotos und Videos mit Personen außerhalb Ihrer Nextcloud-Instanz.\n- **📱 Mobiler Support**: Funktioniert auf Geräten jeder Form und Größe über die Web-App.\n- **✏️ Metadaten bearbeiten**: Bearbeiten Sie Daten auf Fotos schnell und einfach.\n- **📦 Archiv**: Speichern Sie Fotos, die Sie nicht in Ihrer Chronik sehen möchten, in einem separaten Ordner.\n- **📹 Videotranskodierung**: Memories transkodiert Videos und verwendet HLS für maximale Leistung.\n- **🗺️ Karte**: Zeigen Sie Ihre Fotos auf einer Karte an, die mit genauer umgekehrter Geokodierung versehen ist.\n- **⚡️ Performance**: Memories ist sehr schnell.\n\n## 🚀 Installation\n\n1. Installieren Sie die App aus dem Nextcloud App Store (probieren Sie [hier](https://memories-demo.radialapps.com/apps/memories/) eine Demo aus).\n1. Führen Sie die empfohlenen [Konfigurationsschritte](https://github.com/pulsejet/memories/wiki/Extra-Configuration) durch.\n1. Führen Sie `php occ memorys:index` aus, um Metadaten-Indizes für vorhandene Fotos zu generieren.\n1. Öffnen Sie die App 📷 Erinnerungen in Nextcloud und legen Sie das Verzeichnis mit Ihren Fotos fest.",
    "EXIF" : "EXIF",
    "Edit Date/Time" : "Datum/Uhrzeit bearbeiten",
    "Edit EXIF Data" : "EXIF-Daten bearbeiten",
    "Move to another person" : "Zu einer anderen Person verschieben",
    "You will find your friends soon. Please, be patient." : "Sie werden Ihre Freunde bald finden. Bitte haben Sie Geduld.",
    "Face Recognition is disabled. Enable in settings to find your friends." : "Die Gesichtserkennung ist deaktiviert. Aktivieren Sie sie in den Einstellungen, um Ihre Freunde zu finden.",
    "Processing … {n}/{m}" : "Verarbeite… {n}/{m}",
    "Update Exif" : "Exif aktualisieren",
    "Loading data … {n}/{m}" : "Daten werden geladen… {n}/{m}",
    "Date Taken" : "Aufnahmedatum",
    "Share Folder" : "Ordner teilen",
    "Use the sidebar to share this folder." : "Verwenden Sie die Seitenleiste, um diesen Ordner zu teilen.",
    "If you create a public link share, click on refresh and a corresponding link to Memories will be shown below." : "Wenn Sie eine öffentliche Linkfreigabe erstellen, klicken Sie auf Aktualisieren und ein entsprechender Link zu Memories wird unten angezeigt.",
    "Video sharing not supported yet" : "Teilen von Videos wird bislang nicht unterstützt"
},
"nplurals=2; plural=(n != 1);");
