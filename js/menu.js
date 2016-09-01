$(document).ready(function(){
  $('.menutoggle').on('click', function(e) {
      e.preventDefault();
    $('.menu').addClass('menu-active');
  });

  $('.menu__close').on('click', function(e) {
    e.preventDefault();
    $('.menu').removeClass('menu-active');
  });
});
