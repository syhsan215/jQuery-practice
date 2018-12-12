$(document).ready(function(){
    //固定在右上角的下拉式選單
    $('.dropdown-button').click(function(event){
        event.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
        
    });
    
    //打開隱藏右側bar
    $('.aside-button').click(function(){
        $('body').toggleClass('open');
    })
    //關閉隱藏右側bar
    $('.aside-closebtn').click(function(){
        $('body').removeClass('open');
    });
    //固定在右下角的top小工具
    $('.top a').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},5000);


    });
    
})