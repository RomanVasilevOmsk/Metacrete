$(document).ready(function(){
    //---------Parallax-----------//
    // Кешируем объект окна
    $window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // Назначаем объект
        $(window).scroll(function() {
            // Прокручиваем фон со скоростью var.
            // Значение yPos отрицательное, так как прокручивание осуществляется вверх!
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Размещаем все вместе в конечной точке
            var coords = '50% '+ yPos + 'px';
            // Смещаем фон
            $bgobj.css({ backgroundPosition: coords });
            });
        });
        //---------Parallax-----------//

    //---------Modals-----------//

    //Modal-phone
    $(".js-show-modal").on("click", function(e) {
        e.preventDefault();
        var currentModal = $(this).attr("href");
        $(currentModal + ", #js-overlay").fadeIn(500);
        $("body").addClass("open-modal");
    });

    $("#js-overlay, .js-modal-close").on("click", function(e) {
        e.preventDefault();
        $(".js-modal, .js-modal-features-approach, .js-modal-features-availability, .js-modal-features-quality, .js-modal-features-price, .js-modal-features-objects, .js-modal-features-destruction, #js-overlay").fadeOut(100);
        $("body").removeClass("open-modal");
    });

    //Modal-features
    $(".js-show-modal-features").on("click", function(e) {
        e.preventDefault();
        var currentModal = $(this).attr("href");
        $(currentModal + ", #js-overlay").fadeIn(500);
        $("body").addClass("open-modal");
    });

    //$("#js-overlay, .js-modal-close").on("click", function(e) {
    //    e.preventDefault();
    //    $(".js-modal-features6, #js-overlay").fadeOut(100);
    //    $("body").removeClass("open-modal");
    //});

    //---------Modals-----------//

    //---------Mask-----------//
    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    //---------Mask-----------//

    //---------Gallery-----------//
    $("#js-lightgallery").lightGallery({
        mode: "lg-slide-skew-rev",
        download: false,
        thumbContHeight: 50
    });
    //---------Gallery-----------//

    //---------Carousel-----------//
    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false
    });

    $(".js-slider-prev").on("click", function() {
        $('#js-testimonials-slider').slick("slickPrev");
    });

    $(".js-slider-next").on("click", function() {
        $('#js-testimonials-slider').slick("slickNext");
    });
    //---------Carousel-----------//

    $('form').submit(function(event) {
        var required = $(this).find('input[required]');
        var error = false;
        for (var i = 0; i <= (required.length - 1); i++) {
            if (required[i].value == '') {
                required[i].style.borderColor = 'red';
                error = true;
            } else
                required[i].style.borderColor = '#fcc500';
        }
        if (error) event.preventDefault();
        else { dataLayer.push({ 'event': 'sendaction' }); }
    });
    $('.js-phone-wrap').click(function() { dataLayer.push({ 'event': 'sendaction' }); });
    $('.js-email-link').click(function() { dataLayer.push({ 'event': 'sendaction' }); });
});


