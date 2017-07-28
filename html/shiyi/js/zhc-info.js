$(document).ready(function(){
	$('.zhc-zan h1')[0].addEventListener('touchstart',function(){
		var val=parseInt($('.zhc-zan h1 span').html())
		$('.zhc-zan h1 span').html(val+=1)
	})
	$('.zhc-headerbottom a')[0].addEventListener('touchstart',function(){
		window.history.back()
	})
})