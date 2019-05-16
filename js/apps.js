$(document).ready(function(){

    // SMOOTH SCROOL
    $('a[href^="#"]').on('click', function(evt){
      evt.preventDefault(); 
      var target = $(this).attr('href');
      $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1000 );
    })

    // BURGER MENU
    $('#toggle-menu').on('click', function(){
      if($('#menu').hasClass('burgerOff')){
        $('#menu').addClass('burgerOn');
        $('#menu').removeClass('burgerOff');
      } else {
        $('#menu').addClass('burgerOff');
        $('#menu').removeClass('burgerOn');
      }
    })
  $(document).click(function(e){
    var subjectElement = $('#navbar');
    if(e.target.id != subjectElement.attr('id') && !subjectElement.has(e.target).length){
        $('#menu').addClass('burgerOff');
        $('#menu').removeClass('burgerOn');
    }
  })
});