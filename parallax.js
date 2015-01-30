$(document).ready(function(){
   
   $(window).scroll(function(event) {
       
       var scrollPosition = $(window).scrollTop();
       console.log(scrollPosition);
       
       var backgroundOffset = 0 - (100 * scrollPosition/590);
       
       $('.landing-area').css({'background-position':'0px ' + backgroundOffset + 'px'});
       
       
   });
    
});




$('.growImage').mouseover(function(){
      //moving the div left a bit is completely optional
      //but should have the effect of growing the image from the middle.
      $(this).stop().animate({"width": "100%","left":"0px","top":"0px"}, 400,'swing');
    }).mouseout(function(){ 
      $(this).stop().animate({"width": "80%","left":"15px","top":"15px"}, 200,'swing');
    });;
});