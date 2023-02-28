var modalFooter, modalTitle, modalBody, modalClass;
$.validator.addMethod("phoneVN", function (value, element) {
    var value2 = value;
    value = value.replace(/[\.\s\-]/g, '');
    return this.optional(element) || ((value.length > 9) && value.replace(/\s+/g, '').match(/^(0|\+?84|\(\+?84\))(9[0-9]|8[1-9]|7[0-3,6-9]|5[2,5,6,8,9]|3[2-9]|6[9]|2\d{2})\d{7}$/) && !value2.match(/^[\s|\.|\-]+|[\s|\.|\-]+$/));
}, "Vui lòng nhập số điện thoại chính xác");
$(document).ready(function () {
    $('.slider-box__item').hover(function () {
        $('.slider-box__item').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.slider-box__item').on('touchstart touchend', function () {
        $('.slider-box__item').removeClass('active');
        $(this).toggleClass('active');
    });
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $(".navbar").position();
        if (y > x.top) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });
    $('#backToTop').click(function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('#backToTop ').fadeIn();
        } else {
            $('#backToTop ').fadeOut();
        }
    }).scroll();
    $(window).resize(function () {
        if ($(window).width() < 1025) {
            $('.news-right .news-right__box').last().hide();
        }
    }).resize();
    $("label").each(function () {
        if ($(this).data("required") === 1) {
            $(this).append('<span class="d-inline-block text-danger require-label">*</span>');
        }
    });
    modal = $('<div class="modal fade ' + modalClass + '" tabindex="-1" role="dialog"><div class="modal-dialog' + '" role="document"><div class="modal-content"><div class="modal-header">'
        + '<h4 class="modal-title">' + modalTitle + '</h4>' + '<button type="button" class="close" title="Đóng" onclick="$(this).parents(\'.modal\').removeClass(\'show\')">' + '<span aria-hidden="true"><i class="fas fa-times"></i></span></button>' + '</div > <div class="modal-body">' + modalBody + '</div>' + '<div class="modal-footer justify-content-center p-1">' + (modalFooter ? modalFooter : '') + '</div ></div ></div > ');
    var usingTypes = ['text', 'password', 'email'];
    $('input').each(function () {
        if (usingTypes.includes($(this).attr('type'))) {
            $(this).wrap("<div class='input-wrapper clear-text relative'></div>");
            $(this).after("  <a href=\"javascript:;\" class=\"icon clear-icon\">\n" +
                "      <i class=\"fas fa-times\"></i>\n" +
                "            </a>");
        }
    });
    $('.clear-icon').css("display", "none");
    $('.input-wrapper').each(function () {
        $(this).children("input").on({
            input: function () {
                $(this).parents(".input-wrapper").find(".clear-icon").css("display", "block");
            },
            focus: function () {
                $(this).parents().find(".clear-icon").css("display", "none");
            },
        });
    });
    $('.clear-icon').each(function () {
        $(this).click(function () {
            $(this).parents(".input-wrapper").find("input").val("");
        });
        $(this).on('focusout', function () {
            $(this).css("display", "none");
        });
    });
});
