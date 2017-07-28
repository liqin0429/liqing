$(document).ready(function(){
//	联系人数
	$('.zhc-actop h6').html($('.zhc-list li').length)
	
//	点击左滑
	$('.zhc-li-right p').hover(function(){
		$(this).css('right','0')
		$(this).children().first().css('display','inline-block')
		$(this).children('span').css('display','none')
	},function(){
		$(this).css('right','-1.6rem')
		$(this).children().first().css('display','none')
		$(this).children('span').css('display','inline-block')
	})
//		删除
	$('.zhc-li-right p img').each(function(index,value){
		value.addEventListener('touchstart',function(){
			$(this).parentsUntil('ul').remove()	
		})
	})
		
	$('.zhc-headerbottom a')[0].addEventListener('touchstart',function(){
		window.history.back()
	})
	
})
