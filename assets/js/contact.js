$(document).ready(function () {
    $("#formContact").validate({
        rules: {
            "fields[title]": {
                required: true,
            },
            "fields[phone]": {
                required: true,
            },
            "fields[name]": {
                required: true,
            },
            "fields[note]": {
                required: true,
            },
            "fields[email]": {
                required: true,
            },
            "fields[services]": {
                required: true,
            },
        },
        messages: {
            "fields[title]": {
                required: "Bạn chưa nhập thông tin",
            },
            "fields[phone]": {
                required: "Bạn chưa nhập thông tin",
            },
            "fields[name]": {
                required: "Bạn chưa nhập thông tin",
            },
            "fields[note]": {
                required: "Bạn chưa nhập thông tin",
            },
            "fields[email]": {
                required: "Bạn chưa nhập thông tin",
            },
            "fields[services]": {
                required: "Bạn chưa nhập thông tin",
            },
        },
    });
    $("#formContact").submit(function (e) {
        e.preventDefault();
        if ($(this).valid()) {
            console.log("asd");
        }
    });
});