$(document).ready(function(){
    console.log($('input'));
    $('input').on('focus',function(){
        $('.bottom').addClass('yc');
    })
    $('input').on('blur',function(){
        $('.bottom').removeClass('yc');
    })
})

