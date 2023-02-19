$(document).ready(function () {
    $('.slider-box--item').hover(function () {
        $('.slider-box--item').removeClass('active');
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
});