$(document).ready(function(){
  $('.menu--hidden') .on('click', function(){
      $('.menu--nav') .css({top:0});
    });
  $('.menu--hidden') .on('dbclick', function(){
      $('.menu--nav') .css({top:-170});
    });
});

$(document).ready(function(){

  sliderCheck();

  $(window).on('resize', function(){
  sliderCheck();
  });

  function sliderCheck() {
    var width = $(window).width();
    if (width<768) {
     $('#slider').slick();
    }
    else{
    $('#slider').slick('unslick');
  }
  }
});