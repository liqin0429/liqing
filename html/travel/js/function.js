// 1.函数库

function $(select,obj=document){
	if(typeof select == "function"){
		// window.onload=function(){
		// 	select();
		// }
		window.addEventListener("load",select,false);
	}
	else if(typeof select == "string"){
		// <dda1>，如果是<>则创建元素
		// ^<  以<开始     \w+  多于一个的字母数字下划线    >$  以>结束
		if(/^<\w+>$/.test(select)){
			return document.createElement(select.slice(1,-1));
		}
		else{
			return obj.querySelectorAll(select);
		}
		
	}

}


// 2.获得obj元素的style（width、height）样式值
//  attr(obj,style)
// obj：类型：dom元素
// style：类型：string
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}



// 3.选项卡函数
// btn：选项卡按钮。con是选项卡内容

	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			for(let j=0;j<con.length;j++){
				con[j].style.display="none";
			}
			con[i].style.display="block";
		}
		}
	}


// 4.遮罩函数
	// outer是外面的盒子，inner是加的遮罩

	function zhezhao_hanshu(outer,inner){
		for(let i=0;i<outer.length;i++){
		outer[i].onmouseover=function(){
			inner[i].style.display="block";
		}
		outer[i].onmouseout=function(){
			inner[i].style.display="none";
		}
		}
	}

// 5.下拉导航
// xaila_Nav(item,ul,num)
// item:上面的选项
// ul：下面的列表
// num：ul是item的第几个孩子
	// const item=$(".list_nav");
	// const ul=$(".list_box");
	// var num=2;
function xaila_Nav(item,ul,num){
	for(let i=0;i<ul.length;i++){
	let h=parseInt(attr(ul[i],"height"));
	ul[i].setAttribute("h",h);
	ul[i].style.height=0;
	}
	for(let i=0;i<item.length;i++){
		let ul=item[i].children[num];
		if(item[i].children[num]){
			// hover函数  hover (obj,overfun,outfun)；
			hover(item[i],function(){
				animate(ul,{height:ul.getAttribute("h")},300);
			},function(){
				animate(ul,{height:0},300);
			})
		}
	}
}

// 6.层级轮播图函数的封装
	// pic            轮播图  （字符串的选择器）  
	// bigbannerBox   通屏的banner盒子  （字符串的选择器）
	// lis            轮播点   （字符串的选择器）
	// colorArr       通屏banner盒子的所有颜色   (数组["red","blue"])
	// second         轮播图变化的时间 
	// tuactiveZ      轮播图获得焦点之后的层级
	// liactivebgcolor轮播点获得焦点之后的颜色
	// tuZ            轮播图的默认层级
	// liscolor       轮播点的默认颜色

		function lunbo(pic,bigbannerBox,lis,colorArr,second,tuactiveZ,liactivebgcolor,tuZ,liscolor){
			const tu = $(pic);
			const banner = $(bigbannerBox)[0];
			const li = $(lis);
			const color = colorArr;

			// 给出初始值
			tu[0].style.zIndex=tuactiveZ;
			li[0].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[0];
			var num = 0;
			var t = setInterval(move,second);
			// 轮播点的变化
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					// 回到默认样式
					for(let i=0;i<tu.length;i++){
						tu[i].style.zIndex=tuZ;
						li[i].style.backgroundColor=liscolor;

					}
					// 提高层级，轮播点变颜色，banner背景也跟着变颜色
					tu[j].style.zIndex=tuactiveZ;
					li[j].style.backgroundColor=liactivebgcolor;
					banner.style.backgroundColor=color[j];
					num=j;
				}
			}
			
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t = setInterval(move,second);
			}

			// 轮播图的变化，把他封装到一个函数中
			function move(){
				num++;
				if(num>2){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=tuZ;
					li[i].style.backgroundColor=liscolor;
				}
				// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
				tu[num].style.zIndex=tuactiveZ;
				li[num].style.backgroundColor=liactivebgcolor;
				banner.style.backgroundColor=color[num];
				}
			}



// 7.透明轮播图的封装函数
	// pic            轮播图  （字符串的选择器）  
	// bigbannerBox   通屏的banner盒子  （字符串的选择器）
	// lis            轮播点   （字符串的选择器）
	// colorArr       通屏banner盒子的所有颜色   (数组["red","blue"])
	// second         轮播图变化的时间 
	// second_inner   动画的变化时间，是second的一半 
	// tuactiveO      轮播图获得焦点之后的透明度
	// liactivebgcolor轮播点获得焦点之后的颜色
	// tuO            轮播图的默认透明度
	// liscolor       轮播点的默认颜色
			function lunbo_touming(pic,bigbannerBox,lis,colorArr,second,second_inner,tuactiveO,liactivebgcolor,tuO,liscolor){
			const tu = $(pic);
			const banner = $(bigbannerBox)[0];
			const li = $(lis);
			const color = colorArr;

			// 给出初始值
			tu[0].style.opacity=tuactiveO;
			li[0].style.backgroundColor=liactivebgcolor;
			banner.style.backgroundColor=color[0];
			var num = 0;
			var t = setInterval(move,second);
			// 轮播点的变化
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					// 回到默认样式
					for(let i=0;i<tu.length;i++){
						tu[i].style.opacity=tuO;
						li[i].style.backgroundColor=liscolor;

					}
					// 提高层级，轮播点变颜色，banner背景也跟着变颜色
					// tu[j].style.opacity=tuactiveO;
					animate(tu[j],{opacity:tuactiveO},second_inner);
					li[j].style.backgroundColor=liactivebgcolor;
					banner.style.backgroundColor=color[j];
					num=j;
				}
			}
			
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t = setInterval(move,second);
			}

			// 轮播图的变化，把他封装到一个函数中
			function move(){
				num++;
				if(num>2){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.opacity=tuO;
					li[i].style.backgroundColor=liscolor;
				}
				// 自动变化，提高层级，变轮播点的颜色，还有banner图的背景
				// tu[num].style.opacity=tuactiveO;
				animate(tu[num],{opacity:tuactiveO},second_inner);
				li[num].style.backgroundColor=liactivebgcolor;
				banner.style.backgroundColor=color[num];
				}
			}

			


// 8.左右轮播图的封装函数
	// pic:轮播图
	// lunbo_hezi:轮播盒子
	// lis：轮播点
	// zuoBtn：左箭头
	// youBtn：右箭头
	// second：轮播图的时间间隔时间
	// second_inner：轮播图轮播的动画时间，是second的一半

		function lunbo_zuoyou(pic,lunbo_hezi,zuoBtn,youBtn,lis,second,second_inner){
		// 获取轮播图
		const tu = $(pic);
		// 获取轮播盒子
		const img = $(lunbo_hezi)[0];
		// 获取左按钮
		const leftBtn = $(zuoBtn)[0];
		// 获取右按钮
		const rightBtn = $(youBtn)[0];
		// 获取轮播图的宽
		const imgW = parseInt(window.getComputedStyle(img,null).width);
		// 获取轮播点
		const li = $(lis);
		// 初始化
		// 开关开
		var flag = true;
		// 将轮播图都置于右边
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgW + "px";
		}	
		// 将第一张轮播图置于轮播盒子中，让他显示
		tu[0].style.left=0;
		// 将第一个轮播点变为白色 
		// li[0].style.backgroundColor="#fff";
		// 开始轮播
		var t = setInterval(move,second);
		// 当前轮播图的下标
		var now = 0;
		// 下一张图片的下标
		// next也可以为1，但在函数中就是让next++在最后
		var next = 0;
		// 轮播点的变化
		// 循环遍历每一个轮播点给他加事件
		// for(let i=0;i<li.length;i++){
		// 	li[i].onmouseover=function(){
		// 		clearInterval(t);
		// 		if(flag){
		// 			// 让所有的点都变为初始颜色
		// 		for(let j=0;j<li.length;j++){
		// 			li[j].style.backgroundColor="orange";
		// 			tu[j].style.left=imgW+"px";
		// 		}
		// 		// 鼠标移到哪个点身上就让他变颜色
		// 		li[i].style.backgroundColor="#fff";
		// 		tu[i].style.left=0;
		// 		// 让now和next也改变
		// 		now=i;
		// 		next=i;
		// 		}
		// 	}
		// }
		// 采用第二种方法做轮播点
		for(let i=0;i<li.length;i++){
			li[i].onmouseover=function(){
				clearInterval(t);
				if(flag){
					// 让所有的点都变为初始颜色
				for(let j=0;j<li.length;j++){
					li[j].classList.remove("active");
					tu[j].style.left=imgW+"px";
				}
				// 鼠标移到哪个点身上就让他变颜色
				li[i].classList.add("active");
				tu[i].style.left=0;
				// 让now和next也改变
				now=i;
				next=i;
				}
			}
		}
		// 轮播函数
		function move(type="l"){
			flag=false;
			// 开关是判断左箭头还是右箭头
			if(type=="l"){
				next++;
				if(next>tu.length-1){
					// 最后一张完了就是第一张
				next=0;
				}
				// 轮播
				// 下一张图做好准备
				tu[next].style.left=imgW+"px";
				// 让第一张图片移到左边
				animate(tu[now],{left:-imgW},second_inner);
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				// 轮播
					tu[next].style.left=-imgW+"px";
					animate(tu[now],{left:imgW},second_inner);
			}
			// 让下一张图移过来
			animate(tu[next],{left:0},second_inner,function(){
				// 轮播结束后需要执行的函数
				flag=true;
				// 轮播结束后轮播点再动
				// li[next].style.backgroundColor="#fff";
				// li[now].style.backgroundColor="orange";
				li[now].classList.remove("active");
				li[next].classList.add("active");
				now=next;
				
			});
		}
		// 鼠标移入轮播图，让时间间隔函数停止
		img.onmouseover=function(){
			clearInterval(t);
		}
		// 鼠标移出轮播图，让他继续轮播起来
		img.onmouseout=function(){
			// t不用重新定义
			t = setInterval(move,second);
		}
		// 鼠标移到左箭头，清除时间间隔函数
		leftBtn.onmouseover=function(){
			clearInterval(t);
		}
		// 鼠标移到右箭头
		rightBtn.onmouseover=function(){
			clearInterval(t);
		}
		// 点击左箭头
		leftBtn.onclick=function(){
			if(flag){
				move("l");
			}
		}	
		// 点击右箭头
		rightBtn.onclick=function(){
			if(flag){
				move("r");
			}
		}	
		}	


// 9.获取scrollTop前的对象
	function scrollobj(){
		// 解决当document.body.scrollTop=0时的问题，在谷歌中让页面一加载，就让他为1
		let body = document.body;
		let html = document.documentElement;
		body.scrollTop=100;//body为1（谷歌）    body为0（火狐）
		html.scrollTop=100;//html为0（谷歌）  html为1（火狐）
		let obj = body.scrollTop?body:html; //兼容性
		body.scrollTop=0;
		html.scrollTop=0;
			// console.log(document.body.scrollTop);   //只谷歌浏览器识别
			// console.log(document.documentElement.scrollTop);  //只火狐浏览器识别
			return obj; 
	}



// 10.只执行一次事件
// obj：对象
// type:要执行的事件
// fn：执行的事件函数
	function one(obj,type,fn){
		// 添加第一个type类型事件，执行fn
		obj.addEventListener(type,fn,false);
		// 添加第一个type类型事件，执行clear
		obj.addEventListener(type,clear,false);
		function clear(){
		alert(7);
			// 清除fn
			obj.removeEventListener(type,fn,false);
			// 清除clear
			obj.removeEventListener(type,clear,false);
		}
	}
	


// 11.楼层跳转（里面还有两个参数为定义：高度和颜色）
	// const btnBox = $(".btnBox")[0];
	// const btn = $(".btnBox li ");
	// const floor = $("section");
	// const nav = $("nav")[0];
	// const footer = $("footer")[0];
	function tiaozhuan(btnBox,btn,floor,nav,footers){
	const CH = document.documentElement.clientHeight;
	let sobj = scrollobj();
	// let sobj = document.body;


	// 楼层跳转
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(sobj,{scrollTop:floor[i].offsetTop},500);
		}
	}

	// 导航
	let flagx = true;   //开关向下走
	let flags = false;   //开关下上走
	window.onscroll=function(){
		for(let i=0;i<floor.length;i++){
			if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
				for(let j=0;j<floor.length;j++){
					btn[j].style.background="#999";
				}
				let colorT =$(".beauty_top i",floor[i])[0].style.backgroundColor;
				btn[i].style.background=colorT;
			}
			// 按需加载，需要某个楼层的图片再让他出现
			// console.log(floor[i])
			if(sobj.scrollTop+CH>=floor[i].offsetTop){
				let img = $("img",floor[i]);
				for(let j=0;j<img.length;j++){
				// console.log(img[j])
					img[j].src=img[j].getAttribute("imgurl");
				}
			}
		}
		// console.log(sobj)
		if(sobj.scrollTop>=720){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},500,function(){
					flagx=true;
				});
			}
			btnBox.style.display="block";
		}
		
		else{
			if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},500,function(){
					flags=true;
				});
			}
			btnBox.style.display="none";
		}
	}
	setTimeout(function(){
		animate(nav,{top:-50},function(){
			flags=true;
		});
	},1000)
	}





// 12.鼠标滚轮事件
function mouseWheel(obj,shang,xia){
	obj.addEventListener("mousewheel",scrollFn,false);
	obj.addEventListener("DOMMouseScroll",scrollFn,false);
	function scrollFn(e){
		e.preventDefault();	//阻止浏览器默认行为
		if(e.wheelDelta){
			//谷歌
			if(e.wheelDelta>0){
				shang();
				// alert(1);
			}else{
				xia();
				// alert(2);
			}
		}else{
			//火狐
			// if(e.wheelDelta>0){
			// 	shang();
			// }else{
			// 	xia();
			// 
			}
	}
}



// 13.封装cookie
	 // addCookie(key,val,[time])
	 // key   键名       string
	 // val   值         string
	 // time  过期时间   number 单位s（时间可填可不填）
		// 添加
		// addCookie("info","aaa",20);
		// addCookie("info2","aaab",20);
		function addCookie(key,val,time){
			// 对val进行编码（此时val可以任意输入）
			val=escape(val);
			// 如果设置了过期时间，单位是秒
			if(time){
				let date = new Date();
				time*=1000;
				date.setTime(date.getTime()+time);
				date = date.toGMTString();
				document.cookie=`${key}=${val};expires=${date}`
			// 默认的过期时间是会话
			}else{
				document.cookie=`${key}=${val}`;
			}
		}
		// 查看
			// console.log(getCookie("info2"));
			function getCookie(key){
				let cookies = document.cookie;
				// 字符串分割，有分号和空格
				let cookiearr=cookies.split("; ");
				let val;
				for(let i=0;i<cookiearr.length;i++){
					// 继续分割，得到名和值
					let arr=cookiearr[i].split("=");
					if(key==arr[0]){
						val=arr[1];
					}
				}
				// 再对他进行解码
				return unescape(val);
			}


		// 删除
		// 让他在在这个事件发生之前就失效
		// delCookie("info");
		// console.log(getCookie("info"));
		function delCookie(key){
			let date = new Date();
			// 设置失效时间
			date.setTime(date.getTime()-10000);
			date = date.toGMTString();
			document.cookie=`${key}=aa;expires=${date}`;
		}

// 去空格
	// type:before after side  all
	let str = " sdjfk fff ee  "
	console.log(delspace(str,"side"));
	function delspace(str,type="side"){
		let reg;
		if(type=="before"){
			reg=/^\s+/;
		}else if(type=="after"){
			reg=/\s+$/;
		}else if(type=="side"){
			reg=/^\s+|\s+$/g;
		}else if(type=="all"){
			reg=/\s/g;
		}
		return str.replace(reg,"");
	}
