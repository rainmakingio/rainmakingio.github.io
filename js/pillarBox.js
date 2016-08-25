$(document).ready(function(){
  $('.pillar').mouseover(function() {
    $('.pillar-box').fadeIn();
    var pos = $(this).position();
    var posTop = pos.top - $(window).scrollTop();
    var posLeft = pos.left;
    var text = $(this).html();
    var title = '<div class="pillar pillar-active f1 mb2" style="top:'+posTop+'px; left:'+posLeft+'px;">'+ text + '</div>';
    $('.pillar-box').append(title);
  });

  $('body').on('mouseout', '.pillar-active', function(){
    console.log('bye')
    $('.pillar-box').fadeOut();
    $('.pillar-active').remove();
  });
});
