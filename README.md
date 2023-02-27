# demo_1
up file lỗi
Common/Input/js/Upload.js
<input class="upload-button" type="file" onchange="getFileData(this);" name="file" id="input10845" title="" accept=".jpeg,.jpg,.gif,.bmp,.tif,.png,.heic,.ico,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.pdf,.zip,.tgz,.rar,.gz,.xz,.tar,.mp4,.mp3,.pem,.mov,.webp,.svg">
function getFileData(myFile){
   var file = myFile.files[0];  
   var filename = file.name;
   console.log(file,filename);
}
