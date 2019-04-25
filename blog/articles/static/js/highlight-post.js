$(document).ready(function () {
    $('.one-post').hover(function (event) {
            $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0.3'}, 300);
            $(event.currentTarget).animate({color: '#efff00'}, 300);
        },
        function (event) {
            $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'}, 300);
            $(event.currentTarget).animate({color: '#0082ff'}, 300);

        });
    $('#logo').hover(function (event) {
            $(event.currentTarget).animate({width: '30%'}, 300);
        },
        function (event) {
            $(event.currentTarget).animate({width: '15%'}, 300);
        });
});
