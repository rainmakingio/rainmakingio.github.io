var positionLogo = function() {
  var pos = $('.intro-logo').position()
  var posTop = pos.top;
  var posLeft = pos.left;
  $('.intro-logo-active').css('left', pos.left);
  $('.intro-logo-active').css('top', pos.top);
}

var contentHide = function(type) {
  var target = '.pillarbox-' + type;
  console.log(target)
  $(target).fadeOut();
  $('.intro-logo').removeClass('active');
  $('.intro-logo-active').hide()
  $('body').removeClass('pillarActive');
}

var contentShow = function(type, pos) {
  positionLogo();
  var target = '.pillarbox-' + type;
  var targetText = target + ' .pbc__text';
  $(targetText).css('left', pos.left);
  $(targetText).css('top', pos.top + 35);
  $(target).fadeIn();
  $('.intro-logo-active').show()
  $('body').addClass('pillarActive');
}

var positionTitles = function(el, pos, type) {
  var posTop = pos.top - $(window).scrollTop();
  var posLeft = pos.left;
  var text = $(el).html();
  var logo = '<div class="caps-small-f fixed" style="top:'+posTop+'px;">Rainmaking Builds</div>'
  var title = '<div data-type='+type+' class="pillar pillar-active f1 mb2" style="top:'+posTop+'px; left:'+posLeft+'px;">'+ text + '</div>';
  $('.pillarbox').prepend(title);
}

$(document).ready(function(){
  // $('.pillar').mouseover(function() {
  //   var type = $(this).data('type');
  //   var pos = $(this).position();
  //   setTimeout(function(){
  //     alert("Hello");
  //   }, 3000);
  //   positionTitles(this, pos, type);
  //   contentShow(type, pos);
  // });

  $('.pillarHoverBox').hover(function(){
    console.log('hover')
    var type = $(this).data('type');
    var pos = $(this).position();
    var self = this;
    timer = setTimeout(function(){
      positionTitles(self, pos, type);
      contentShow(type, pos);
    },  300);
  }, function(){
      clearTimeout(timer);
  });

  $('body').on('mouseout', '.pillar-active', function(){
    var type = $(this).data('type');
    contentHide(type);
    $('.pillar-active').remove();
  });


  var ilPos = $('.intro-logo').position();
  var ilPoTop = ilPos.top - $('.pillar-partnerships').height() - 5;
  console.log(ilPoTop)
  $(window).scroll(function() {
    if ($(window).scrollTop() > ilPoTop) {
      $('.intro-logo').addClass('intro-logo-inactive');
      $('.intro-gradient').addClass('intro-gradient-inactive');
      $('.intro-gradient.fixed').removeClass('fixed').css('top', $(window).scrollTop() + 'px');
      $('.pillar-partnerships').addClass('pillar-partnerships-active')
    } else {
      $('.intro-logo').removeClass('intro-logo-inactive');
      $('.intro-gradient').removeClass('intro-gradient-inactive');
      $('.intro-gradient').addClass('fixed').css('top', 0);
      $('.pillar-partnerships').removeClass('pillar-partnerships-active')
    }
  });

  $('body').on('click', '.pillar-partnerships', function(){
    $('html, body').animate({
      scrollTop: $( '.pillar-partnerships' ).offset().top - 60
    }, 500);
  });

});
