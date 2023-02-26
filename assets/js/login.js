modalTitle = 'Gửi yêu cầu khôi phục thành công';
modalClass = 'recover-modal';
modalBody = '<div class="success-checkmark">' +
    '<div div class="check-icon" >' +
    '<span class="icon-line line-tip"></span>' +
    '<span class="icon-line line-long"></span>' +
    '<div class="icon-circle"></div>' +
    '<div class="icon-fix"></div>' +
    '</div ></div >';
modalFooter = '<a href="javascript:void(0)" class="bg-info p-3 rounded color-white fw-bold" onclick="$(this).parents(\'.modal\').removeClass(\'show\')"> Đồng ý </a>';
$(document).ready(function () {
    $("#login").validate({
        rules: {
            "fields[username]": {
                required: true,
            },
            "fields[password]": {
                required: true,
            },
        },
        messages: {
            "fields[username]": {
                required: "Bạn chưa nhập tài khoản",
            },
            "fields[password]": {
                required: "Bạn chưa nhập mật khẩu",
            },
        },
    });
    $("#login").submit(function (e) {
        e.preventDefault();
        // if ($(this).valid()) {
        //     $('body').append(modal);
        //     $(modal).addClass('show');
        // }
    });
    $("#recoverAccount").validate({
        rules: {
            "fields[rsUsername]": {
                required: true,
            },
            "fields[rsEmail]": {
                required: true,
                email: true,
            },
        },
        messages: {
            "fields[rsUsername]": {
                required: "Bạn chưa nhập tài khoản",
            },
            "fields[rsEmail]": {
                required: "Bạn chưa nhập địa chỉ email khôi phục",
                email: "Vui lòng nhập địa chỉ email chính xác"
            },
        },
    });
    $("#recoverAccount").submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            $('body').append(modal);
            $(modal).addClass('show');
        }
    });
});
