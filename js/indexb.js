$(document).ready(function(){

  $(window).scroll(function(){
      var sTop = $(this).scrollTop();

      if(sTop > 160){
        $('.sidebarlogobig').addClass('fadeOutUp');
        $('.sidebarmenu').show().addClass('fadeInUp');
        $('.sidebarlogosmall').show().addClass('fadeInUp');
        $('.sidebarmenulink').show().addClass('fadeInUp');
      }

  });

});
