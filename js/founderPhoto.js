var activeFounder = function(id, topMeasurement) {
  if ($(window).scrollTop() > topMeasurement) {
    $('.founder.active').removeClass('active');
    $('.founderPhoto img.active').removeClass('active');
    $(id + 'Photo').addClass('active');
    $(id).addClass('active');
  }
}

var scrollStuff = function() {

  var founderPhoto = $('.founderPhoto').offset().top;
  var founders = $('#founderNektarios').offset().top - 200;
  var founderDiff = 300;
  var founderJordan = $('#founderJordan').offset().top - founderDiff;
  var founderJakob = $('#founderJakob').offset().top - founderDiff;
  var founderAlex = $('#founderAlex').offset().top - founderDiff;
  var founderCarsten = $('#founderCarsten').offset().top - founderDiff;
  var founderNektarios = $('#founderNektarios').offset().top - founderDiff;

  $(document).on('scroll', window, function() {
    if ($(window).scrollTop() > founderPhoto) {
      $('.founderPhoto').addClass('founderPhoto-fixed');
    }
    else {
      $('.founderPhoto').removeClass('founderPhoto-fixed').css('top', '');
    }

    if ($(window).scrollTop() > founders) {
      $('.founderPhoto').removeClass('founderPhoto-fixed').css('top', founders);
    }

    if ($(window).scrollTop() < founders && $(window).scrollTop() > founderPhoto ) {
      $('.founderPhoto').addClass('founderPhoto-fixed').css('top', 0);
    }
    activeFounder('#founderJordan', founderJordan);
    activeFounder('#founderJakob', founderJakob);
    activeFounder('#founderCarsten', founderCarsten);
    activeFounder('#founderAlex', founderAlex);
    activeFounder('#founderNektarios', founderNektarios);
  });

}

$(document).ready(function() {
  scrollStuff();
});



// $(document).ready(function(){
//   var founderPhoto = $('.founderPhoto').offset().top;
//   $(document).on('custom-scroll', window, function() {
//     if ($(window).scrollTop() > founderPhoto) {
//       $('.founderPhoto').addClass('founderPhoto-fixed');
//     }
//     else {
//       $('.founderPhoto').removeClass('founderPhoto-fixed').css('top', '');
//     }
//   });
//
//   var founders = $('#founderNektarios').offset().top - 200;
//   $(window).on('scroll', function() {
//     if ($(window).scrollTop() > founders) {
//       $('.founderPhoto').removeClass('founderPhoto-fixed').css('top', founders);
//     }
//
//     if ($(window).scrollTop() < founders && $(window).scrollTop() > founderPhoto ) {
//       $('.founderPhoto').addClass('founderPhoto-fixed').css('top', 0);
//     }
//   });
//
//   var founderDiff = 300;
//   var founderJordan = $('#founderJordan').offset().top - founderDiff;
//   $(window).scroll(function() {
//     activeFounder('#founderJordan', founderJordan);
//   });
//
//   var founderJakob = $('#founderJakob').offset().top - founderDiff;
//   $(window).scroll(function() {
//     activeFounder('#founderJakob', founderJakob);
//   });
//
//   var founderCarsten = $('#founderCarsten').offset().top - founderDiff;
//   $(window).scroll(function() {
//     activeFounder('#founderCarsten', founderCarsten);
//   });
//
//   var founderAlex = $('#founderAlex').offset().top - founderDiff;
//   $(window).scroll(function() {
//     activeFounder('#founderAlex', founderAlex);
//   });
//
//   var founderNektarios = $('#founderNektarios').offset().top - founderDiff;
//   $(window).scroll(function() {
//     activeFounder('#founderNektarios', founderNektarios);
//   });
//
//   listenForScrollEvent($(window));
// });
