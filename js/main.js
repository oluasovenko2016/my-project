$(document).ready(function () {
    $(".mobile-menu").click(function () { 
      $(".mobile-menu span").toggleClass("active"); 
      $(".nav").toggleClass("active"); 
      $(".header-block").toggleClass("active"); 
     })
     $(document).scroll(function(){
        let head = $(this).scrollTop()
        if(head > 1){
          $(".header").addClass("fixed");
        } else{
          $(".header").removeClass("fixed");
        }
     })
});
