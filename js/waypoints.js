$(function() {
    function onScrollInit( items, trigger ) {
        items.each( function() {
            const osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');

            osElement.css({
                '-webkit-animation-delay':  osAnimationDelay,
                '-moz-animation-delay':     osAnimationDelay,
                'animation-delay':          osAnimationDelay
            });

            const osTrigger = trigger || osElement;

            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            },{ triggerOnce: true, offset: '80%' });
        });
    }

    onScrollInit( $('.os-animation') );
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});

$(document).ready(function() {
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        const target = this.hash;
        const $target = $(target);

        $('html, body').stop().animate({'scrollTop': $target.offset().top}, 900);
    });
});

// waypoints.js
