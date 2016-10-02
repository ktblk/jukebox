// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .






// $(document).ready(function() {
//      var carousel = $("#carousel").waterwheelCarousel({
//        flankingItems: 4,
//        movingToCenter: function ($item) {
//          $('#callback-output').append('movingToCenter: ' + $item.attr('id') + '<br/>');
//          console.log($item);
//
//        },
//        movedToCenter: function ($item) {
//          $('#callback-output').append('movedToCenter: ' + $item.attr('id') + '<br/>');
//          console.log($item);
//          $item.next().css({top: "10px"});
//          $item.prev().css({top: "10px"});
//         //  $item.next().next().css({top: "0px"});
//         //  $item.prev().prev().css({top: "0px"});
//        },
//        movingFromCenter: function ($item) {
//          $('#callback-output').append('movingFromCenter: ' + $item.attr('id') + '<br/>');
//          console.log($item);
//        },
//        movedFromCenter: function ($item) {
//          $('#callback-output').append('movedFromCenter: ' + $item.attr('id') + '<br/>');
//          console.log($item);
//
//        },
//        clickedCenter: function ($item) {
//          $('#callback-output').append('clickedCenter: ' + $item.attr('id') + '<br/>');
//          console.log($item);
//        }
//      });
//      $('#prev').bind('click', function () {
//        carousel.prev();
//        $('#callback-output').html("");
//        return false
//      });
//      $('#next').bind('click', function () {
//        carousel.next();
//        return false;
//      });
//      $('#reload').bind('click', function () {
//        newOptions = eval("(" + $('#newoptions').val() + ")");
//        carousel.reload(newOptions);
//        return false;
//      });
//    });
//

















// $(document).ready(function(){
//   $('.your-class').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 5,
//
//   });
// });

// $(function(){
//   $('.your-class').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 5,
//   }).on('afterChange', function (event, slick, currentSlide) {
//     console.log(event, slick, currentSlide);
//   });
//

// $('.your-class').on('afterChange', function (event, slick, currentSlide) {
// console.log(event, slick, currentSlide);
// });
// SLICK
// $(function(){
//   $('.your-class').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 5,
//   }).on('afterChange', function (event, slick, currentSlide) {
//     console.log(event, slick, currentSlide);
//   });
// })
//
// $('.selector').slick({
//   nextArrow: '<i class="fa fa-arrow-right"></i>',
//   prevArrow: '<i class="fa fa-arrow-left"></i>',
// // add the rest of your options here
// });
// SLICK
