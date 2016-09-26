// number of drops created.
var nbDrop = 100;

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {
	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,1600);
	var dropTop = randRange(-1000,1400);
    var ran = Math.floor((Math.random() * 4 + 1));
	$('.rain-drops').append('<div class="drop drop-'+ran+'" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}
}

var blobScatter = function(x, y, ran) {
  var html = '<div class="rain-content-mouse rain-content-mouse-'+ran+' fadeOut" style="top:'+y+'px; left:'+x+'px;"></div>';
  $(html).appendTo('.rain-content').delay(3000).fadeOut(1);
}

$(document).ready(function(){

  $('body').click(function(e) {
    if ( $('.rain').hasClass('rain-click') ) {
      var y = e.offsetY - 500;
      var x = e.offsetX - 500;
      var ran = Math.floor((Math.random() * 3) + 1);
      var html = '<div class="rain-content-mouse rain-content-mouse-'+ran+' fadeOut" style="top:'+y+'px; left:'+x+'px;"></div>';
      blobScatter(x, y, ran);

      setTimeout(function(){
        if (x > 0) {
          var newX = x - 200;
          blobScatter(newX, y, ran);
        } else {
          var newX = x + 200;
          blobScatter(newX, y, ran);
        }
      }, 400);
      setTimeout(function(){
        if (x > 0) {
          var newX = x - 400;
          blobScatter(newX, y, ran);
        } else {
          var newX = x + 400;
          blobScatter(newX, y, ran);
        }
      }, 800);
    }
  });


  $('body').on('click', '#rainDropsTrigger', function(){
    createRain();
  });

  $('body').on('click', '#rainFallTrigger', function(e) {
    e.preventDefault();
    $('.rain-content-fall').addClass('animate');
    $('.rain-content-fall').addClass('active');
    setTimeout(function(){
      $('.rain-content-fall').removeClass('animate').removeClass('active');
    }, 2000);
  });

  $('body').on('click', '#rainPulseTrigger', function(e) {
    e.preventDefault();
    $('.rain-content-pulse').fadeIn(500)
    setTimeout(function(){
      $('.rain-content-pulse').fadeOut(500)
    }, 500);
  });

  $('body').on('click', '#rainImageTrigger', function(e) {
    e.preventDefault();
    $('.rain-content-image').fadeToggle(500)
    $('.rain').toggleClass('dim');
  });

  $('body').on('click', '#rainFollowTrigger', function(e) {
    e.preventDefault();
    $('.rain').toggleClass('rain-mousemove');
  });

  $('body').on('click', '#rainClickTrigger', function(e) {
    e.preventDefault();
    $('.rain').toggleClass('rain-click');
  });

  var blob = function(x, y, ran) {
    var html = '<div class="rain-content-mouse rain-content-mouse-'+ran+' fadeOut" style="top:'+y+'px; left:'+x+'px;"></div>';
    $(html).appendTo('.rain-content').delay(3000).fadeOut(1);
  }

  $(window).on('mousemove', function(e) {
    if ( $('.rain').hasClass('rain-mousemove') ) {
        var x = e.screenY - 500;
        var y = e.screenX - 500;
        var ran = Math.floor((Math.random() * 3) + 1);
        // blob(x, y, ran);

        var html = '<div class="rain-content-mouse rain-content-mouse-'+ran+' fadeOut" style="top:'+y+'px; left:'+x+'px;"></div>';
        $(html).appendTo('.rain-content').delay(3000).fadeOut(1);
    }
  });

  // $(document).on("ready", ".rain-content-mouse", function(){
  //   console.log('hi');
  //    $(this).fadeOut(500);
  //    setTimeout(function(){
  //      $(this).remove();
  //    }, 500);
  // });

});
