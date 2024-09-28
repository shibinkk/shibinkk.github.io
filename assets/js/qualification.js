var $element = $('.each-event, .title');
var $window = $(window);

$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');

function check_for_fade() {
    var window_height = $window.height();
    var scroll_top = $window.scrollTop();

    $.each($element, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_offset = $element.offset().top;

        // Check if the element is within the viewport
        if (scroll_top + window_height > element_offset + 50) {
            $element.addClass("fade-in");
        } else {
            $element.removeClass("fade-in");
        }
    });
}
