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
        $(".js-modal, .js-modal-features6, #js-overlay").fadeOut(100);
        $("body").removeClass("open-modal");
    });
    //Modal-features6
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

    $("#js-lightgallery").lightGallery({
        mode: "lg-slide-skew-rev",
        download: false,
        thumbContHeight: 50
    });
});


