var activeFounder = function(id, topMeasurement) {
  if ($(window).scrollTop() > topMeasurement) {
    $('.founder.active').removeClass('active');
    $('.founderPhoto img.active').removeClass('active');
    $(id + 'Photo').addClass('active');
    $(id).addClass('active');
  }
}

$(document).ready(function(){
  var founderPhoto = $('.founderPhoto').offset().top;
  $(window).scroll(function() {
    if ($(window).scrollTop() > founderPhoto) {
      $('.founderPhoto').addClass('founderPhoto-fixed');
    }
    else {
      console.log('top')
      $('.founderPhoto').removeClass('founderPhoto-fixed').css('top', '');
    }
  });

  var founders = $('#founderNektarios').offset().top - 200;
  $(window).scroll(function() {
    if ($(window).scrollTop() > founders) {
      $('.founderPhoto').removeClass('founderPhoto-fixed').css('top', founders);
    }

    if ($(window).scrollTop() < founders && $(window).scrollTop() > founderPhoto ) {
      $('.founderPhoto').addClass('founderPhoto-fixed').css('top', 0);
    }
  });

  var founderDiff = 300;
  var founderJordan = $('#founderJordan').offset().top - founderDiff;
  $(window).scroll(function() {
    activeFounder('#founderJordan', founderJordan);
  });

  var founderJakob = $('#founderJakob').offset().top - founderDiff;
  $(window).scroll(function() {
    activeFounder('#founderJakob', founderJakob);
  });

  var founderCarsten = $('#founderCarsten').offset().top - founderDiff;
  $(window).scroll(function() {
    activeFounder('#founderCarsten', founderCarsten);
  });

  var founderAlex = $('#founderAlex').offset().top - founderDiff;
  $(window).scroll(function() {
    activeFounder('#founderAlex', founderAlex);
  });

  var founderNektarios = $('#founderNektarios').offset().top - founderDiff;
  $(window).scroll(function() {
    activeFounder('#founderNektarios', founderNektarios);
  });
});
