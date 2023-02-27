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
    $("#formContact").validate({
        rules: {
            "fields[title]": {
                required: true,
            },
            "fields[phone]": {
                required: true,
                phoneVN: true,
            },
            "fields[name]": {
                required: true,
            },
            "fields[note]": {
                required: true,
            },
            "fields[email]": {
                required: true,
                email: true,
            },
            "fields[services]": {
                required: true,
            },
        },
        messages: {
            "fields[title]": {
                required: "Bạn chưa nhập tiêu đề",
            },
            "fields[phone]": {
                required: "Bạn chưa nhập số điện thoại",
            },
            "fields[name]": {
                required: "Bạn chưa nhập họ và tên",
            },
            "fields[note]": {
                required: "Bạn chưa nhập ghi chú",
            },
            "fields[email]": {
                required: "Bạn chưa nhập địa chỉ email",
                email: "Vui lòng nhập địa chỉ email chính xác"
            },
            "fields[services]": {
                required: "Bạn chưa chọn dịch vụ",
            },
        },
    });
    $("#formContact").submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            $('body').append(modal);
            $(modal).addClass('show');
        }
    });
});
