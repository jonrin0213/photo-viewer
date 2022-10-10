OC.L10N.register(
    "memories",
    {
    "Memories" : "回憶",
    "Yet another photo management app" : "又一個照片管理應用程式",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🤖 AI Tagging**: Group photos by people and objects using AI, powered by the [recognize](https://github.com/nextcloud/recognize) app.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **✏️ Edit Metadata**: Edit Exif dates on photos quickly and easily.\n* **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# 回憶\n\n* **📸 照片和視頻時間軸**：按拍攝日期對照片進行排序，從 Exif 數據中解析。\n* **🤔 快速回顧**：立即跳轉到時間線中的任何位置。\n* **🖼️ 文件夾**：使用類似的高效時間線瀏覽您的文件夾和共享文件夾。\n* **🎦 幻燈片**：輕鬆查看時間軸和文件夾中的照片。\n* **📱 移動支持**：通過網絡應用程序在任何形狀和大小的設備上重溫您的回憶。\n* **✏️ 編輯元數據**：快速輕鬆地編輯照片上的 Exif 日期。\n* **📦 存檔**：將您不想在時間軸中看到的照片存儲在單獨的文件夾中。\n* **⚡️ 快速**：記憶速度極快。時期。\n\n## 🚀 安裝\n\n1. 從 Nextcloud 應用商店安裝應用\n1. ⚒️ 安裝 `exiftool`（見下文）。\n1. 運行 `php ./occ memory:index` 為現有照片生成元數據索引。\n1. 在 Nextcloud 中打開📷 Memories 應用程序並設置包含您的照片的目錄。此目錄中的照片將顯示在時間線中，包括嵌套子目錄中的所有照片。\n1. 強烈推薦安裝[預覽生成器](https://github.com/rullzer/previewgenerator) 用於預生成縮略圖。\n\n## 🔨 安裝依賴\n具體步驟取決於您的 Nextcloud 平台。如果您將 Docker 用於 Nextcloud 實例，則可以使用自定義 docker 映像安裝 Exiftool。\n- **Ubuntu/Debian**：`sudo apt install libimage-exiftool-perl`\n- **Fedora**：`sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**：`sudo pacman -S perl-image-exiftool`\n- **Alpine**：`apk add --no-cache exiftool`\n- **MacOS**：`brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "時間線",
    "Folders" : "資料夾",
    "Favorites" : "最愛",
    "Videos" : "影片",
    "People" : "人物",
    "Archive" : "存檔",
    "On this day" : "當年今日",
    "Tags" : "標籤",
    "Settings" : "設定",
    "Edit Date/Time" : "編輯日期／時間",
    "Newest" : "最新",
    "Year" : "年",
    "Month" : "月",
    "Day" : "日",
    "Time" : "時間",
    "Hour" : "小時",
    "Minute" : "分鐘",
    "Oldest" : "最舊",
    "Processing … {n}/{m}" : "處理中 ... {n}/{m}",
    "This feature modifies files in your storage to update Exif data." : "此功能會修改存儲中的檔案以更新 Exif 數據。",
    "Exercise caution and make sure you have backups." : "謹慎行事並確保您有備份。",
    "Update Exif" : "更新 Exif",
    "Loading data … {n}/{m}" : "正在加載數據 ... {n}/{m}",
    "Back" : "返回",
    "Cannot find this photo anymore!" : "再也找不到這張照片了！",
    "Timeline Path" : "時間線途徑",
    "Show hidden folders" : "顯示隱藏資料夾",
    "Update" : "更新",
    "Error updating settings" : "更新設定時發生錯誤",
    "Cancel" : "取消",
    "Delete" : "刪除",
    "Download" : "下載",
    "Favorite" : "我的最愛",
    "Unarchive" : "取消封存",
    "View in folder" : "在資料夾中檢視",
    "Failed to load some photos" : "未能加載一些照片",
    "You are about to download a large number of files. Are you sure?" : "您即將下載大量檔案。你確定嗎？",
    "You are about to delete a large number of files. Are you sure?" : "您即將刪除大量檔案。你確定嗎？",
    "You are about to touch a large number of files. Are you sure?" : "您將要處理大量檔案。你確定嗎？",
    "_{n} selected_::_{n} selected_" : ["已選擇 {n} 個"],
    "Failed to delete files." : "刪除檔案失敗。",
    "Failed to delete {fileName}." : "刪除 {fileName} 失敗。",
    "General Failure" : "一般故障",
    "Error: {msg}" : "錯誤：{msg}",
    "Failed to favorite {fileName}." : "將 {fileName} 加入最愛失敗。",
    "Failed to favorite files." : "加入最愛失敗。"
},
"nplurals=1; plural=0;");
