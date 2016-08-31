var contentHide = function(type) {
  var target = '.pillarbox-' + type;
  console.log(target)
  $(target).fadeOut();
}

var contentShow = function(type, pos) {
  var target = '.pillarbox-' + type;
  var targetText = target + ' .pbc__text';
  $(targetText).css('left', pos.left);
  $(targetText).css('top', pos.top + 35);
  $(target).fadeIn();
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
  $('.pillar').mouseover(function() {
    var type = $(this).data('type');
    var pos = $(this).position();
    positionTitles(this, pos, type);
    contentShow(type, pos);
  });

  $('body').on('mouseout', '.pillar-active', function(){
    var type = $(this).data('type');
    contentHide(type);
    $('.pillar-active').remove();
  });

});
