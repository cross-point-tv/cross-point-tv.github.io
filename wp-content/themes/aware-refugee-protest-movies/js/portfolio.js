jQuery(document).ready(function(){

   var $ = jQuery;

   $(window).load(function() {

           $('body.home.page .portfolioitem').mouseenter(function() {
               $('div[class*="skill-icon-"]', $(this)).fadeIn();
           });

           $('body.home.page .portfolioitem').mouseleave(function(event) {
               $('div[class*="skill-icon-"]', $(this)).fadeOut();
           });
   });
});
