modalTitle = 'Gửi thành công';
modalClass = 'contact-modal';
modalBody = '<div class="success-checkmark">' +
    '<div div class="check-icon" >' +
    '<span class="icon-line line-tip"></span>' +
    '<span class="icon-line line-long"></span>' +
    '<div class="icon-circle"></div>' +
    '<div class="icon-fix"></div>' +
    '</div ></div >';
modalFooter = '<a href="javascript:void(0)" class="bg-info p-3 rounded color-white fw-bold" onclick="$(this).parents(\'.modal\').removeClass(\'show\')"> Đồng ý </a>';
$(document).ready(function () {
    $("#careerForm").validate({
        rules: {
            "fields[file]": {
                required: true,
                fileSize: 10,
            },
            "fields[phone]": {
                required: true,
            },
            "fields[name]": {
                required: true,
            },
            "fields[email]": {
                required: true,
                email: true,
            },
        },
        messages: {
            "fields[file]": {
                required: "Bạn chưa nhập đơn ứng tuyển",
            },
            "fields[phone]": {
                required: "Bạn chưa nhập số điện thoại",
            },
            "fields[name]": {
                required: "Bạn chưa nhập họ và tên",
            },
            "fields[email]": {
                required: "Bạn chưa nhập địa chỉ email",
                email: "Vui lòng nhập địa chỉ email chính xác"
            },
        },
    });
    $("#careerForm").submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            $('body').append(modal);
            $(modal).addClass('show');
        }
    });
});
