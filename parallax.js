//$(document).ready(function(){

function main(function() {
    

   
   $(window).scroll(function(event) {
       
       var scrollPosition = $(window).scrollTop();
       console.log(scrollPosition);
       
       var backgroundOffset = 0 - (100 * scrollPosition/590);
       
       $('.landing-area').css({'background-position':'0px ' + backgroundOffset + 'px'});
       
       
   });
    
});




$(document).ready(main);