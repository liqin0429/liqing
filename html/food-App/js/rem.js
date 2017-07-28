(function(){
    var designwidth=750;
    var fontsize=100;
    function resize(){
        var width=document.documentElement.clientWidth;
        var size=width/designwidth*fontsize;
        var html=document.querySelector('html');
        html.style.fontSize=size+"px";
    }
    resize();
    window.onresize=resize;
})(window,document);

// window.onload=function(){
// 	//常量
// 	const designwidth=750;
// 	const fontSize=100;
// 	// 驼峰命名方式 
// 	// document.querySelector("html").style.fontSize=fontSize+"px";
// 	function resizeFont(){
// 		var CW=document.documentElement.clientWidth;
// 		// console.log(CW);
// 		var radio=CW/designwidth;
// 		var newFontSize=fontSize*radio;
// 		document.querySelector("html").style.fontSize=newFontSize+"px";
// 	}
// 	resizeFont();
// 	// 屏幕大小改变的时候
// 	window.onresize=resizeFont;
// }