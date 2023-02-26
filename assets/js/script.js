var modalFooter, modalTitle, modalBody, modalClass;
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
});
