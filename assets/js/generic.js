/* Global letiable */
var window_height;
var window_width;

/* Get window width & height */
function getHeightWidth() {
  /* Set height & width of user-end windows to letiable */
  window_height = $(window).height();
  window_width = $(window).width();
}

/* Scroll to top of window */
function scrollToTop(time_counter){
    $("body,html,document").animate(
        {
        scrollTop: 0
        },
        time_counter
    );
}

/* This is section onLoad JS script needed */
$(window).on("load", function () {
  scrollToTop(10);
});

/* Toggle sidebar collapsed when resize */
$(window).on("resize", function () {
  // setSidebar();
});

/* This is section document ready JS script needed */
$(function () {});
