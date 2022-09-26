$(function(){
    $('.insta_inner li:nth-child(1) a').click(function(){
        $('.popup1').fadeIn();//show()
    });
    $('.insta_inner li:nth-child(2) a').click(function(){
        $('.popup2').fadeIn();//show()
    }); 
    $('.insta_inner li:nth-child(3) a').click(function(){
        $('.popup3').fadeIn();//show()
    });



    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});