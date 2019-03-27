
$(document).ready(function(){

  sliderCheck();

  $(window).on('resize', function(){
  sliderCheck();
  });

  function sliderCheck() {
    var width = $(window).width();
    if (width<1280) {
     $('#slider').slick();
    }
    else{
    $('#slider').slick('unslick');
  }
  }
});


$(document).ready(function(){
  $('.menu--hidden') .on('click', function(){
    console.log($('.menu--nav').css("top"));

    if ($('.menu--nav').css("top") == "0px") {
      $('.menu--nav').css({top:-270})
      $('.mobile-menu').attr("id","mobile-menu")
      $('.mobile-menu--items').attr("id","mobile-menu--items")
    } else {
       $('.menu--nav') .css({top:0})
       $('.mobile-menu').attr("id","mobile-menu--active")
       $('.mobile-menu--items').attr("id","mobile-menu--items--active")
    }
    });
    });


