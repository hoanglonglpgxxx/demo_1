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
    modal = $('<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"><div class="modal-dialog' + '" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        + '<span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">'
        + '<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5'
        + ' 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></span></button>' + '<h4 class="modal-title"> AAAA </h4>' + '</div><div class="modal-body"></div>' + ('sdasd') + '</div></div></div>');
});