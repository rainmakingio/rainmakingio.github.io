$(document).ready(function(){

  $('body').on('click', '.menutoggle', function(e) {
    e.preventDefault();
    $('.menu').addClass('menu-active');
  });

  $('body').on('click', '.menu__close', function(e) {
    e.preventDefault();
    $('.menu').removeClass('menu-active');

    $('.minipageContainer.active').removeClass('active');
  });
});
