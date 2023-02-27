# demo_1

Common/Input/js/Upload.js
<input class="upload-button" type="file" onchange="getFileData(this);" name="file" id="input10845" title="" accept=".jpeg,.jpg,.gif,.bmp,.tif,.png,.heic,.ico,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.pdf,.zip,.tgz,.rar,.gz,.xz,.tar,.mp4,.mp3,.pem,.mov,.webp,.svg">
function getFileData(myFile){
   var file = myFile.files[0];  
   var filename = file.name;
   console.log(file,filename);
}
<?php
    $params['items'] = array(
        '0'=>array(
            'title' => 'Đà Nẵng',
        ),
        '1'=>array(
            'title' => 'Thanh Hoá',
        ),
        '2'=>array(
            'title' => 'Nha Trang',
        ),
        '3'=>array(
            'title' => 'Hà Nội',
        ),
        '4'=>array(
            'title' => 'Phú Quốc',
        ),
    );
?>
search&3 boxes ở home chưa có gì, 
tra cứu cước phí chưa sửa
đổi lại file pdf
upload file lỗi,vị trí error label upload file chưa sửa
chưa có validator phone, chưa clear form sau khi submit
jQuery.validator.addMethod("phoneVN", function(value, element) {
					var value2 = value;
					value = value.replace(/[\.\s\-]/g, '');
					return this.optional(element) || ((value.length > 9) && value.replace(/\s+/g, '').match(/^(0|\+?84|\(\+?84\))(9[0-9]|8[1-9]|7[0-3,6-9]|5[2,5,6,8,9]|3[2-9]|6[9]|2\d{2})\d{7}$/)  && !value2.match(/^[\s|\.|\-]+|[\s|\.|\-]+$/));
				}, ''+"{'%s không hợp lệ', 'Số điện thoại'}"+'');
				jQuery.validator.addMethod("phoneVN2", function(value, element) {
					value = value.replace(/[\.\s\-]/g, '');
					return this.optional(element) || ((value.length > 9) && /^(\+?84-?\d|04|08|09|0[2-3,5-7])?\d{8}$/.test(value.replace(/\s+/g, '')));
				}, ''+"{'%s không hợp lệ', 'Số điện thoại'}"+'');
				jQuery.validator.addMethod("phoneVN3", function(value, element) {
					value = value.replace(/[\.\s\-]/g, '');

					return this.optional(element) || ((value.length > 9) && /^(\+?84|0)(2\d{2}|[3-9]\d)\d{7}$/.test(value));
				}, ''+"{'%s không hợp lệ', 'Số điện thoại'}"+'');
