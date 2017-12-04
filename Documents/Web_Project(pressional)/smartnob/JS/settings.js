/**
 * Created by mypc on 17-12-3.
 */
$(function () {
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.modal').modal();
});

$("#service").click(function () {
    $("#service").toggleClass("red");
})