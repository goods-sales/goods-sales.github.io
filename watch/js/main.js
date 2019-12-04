;(function () {

    'use strict';

   


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        //carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}


$(document).ready(function() {
    $('.feedback').click(function() {
        $('.popup-window').show();
    });
    $('.close-popup').click(function() {
        $('.popup-window').hide();
    });
})