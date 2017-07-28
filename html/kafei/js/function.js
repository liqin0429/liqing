// window.onload=function(){
// 	const lis =document.querySelectorAll(".xxk li");
// 	const div =document.querySelectorAll(".xxk dl dt");
// 	const zhe =document.querySelector(".zhezhao .zz");
// 	const zhe1 =document.querySelector(".zhezhao");
// 	const banner =document.querySelectorAll(".bannerbox ul li");
// 	const banner1 =document.querySelector(".bannerbox .k1");
// 	xxka(lis,div);
// 	// zzhao(zhe1,zhe);
// 	xxka(banner,banner1);
// }


	// 选项卡   
	// btn选项卡按钮及父级   
	// con选项卡内容
	function xxka(btn,con){
		for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
		}
	}
}

function $(select,obj=document){
		if(typeof select=="function"){
			// window.onload=function(){
			// 	select();//回调函数
			// }
			window.addEventListener("load",select,false);
		}else if(typeof select=="string"){
			// alert(/^<\w+>$/.test(select));
			if(/^<\w+>$/.test(select)){
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);	
			}
			
		}
	}




// 遮罩 
// a  父级
// b  效果 出现 隐藏的子级
function zhezhu(box1,box2){
	for(let i=0;i<box1.length;i++){
		box1[i].onmouseover=function(){
			box2[i].style.opacity=0.5;
		}
		box1[i].onmouseout=function(){
			box2[i].style.opacity=0;
		}
	}
}



	function Zlunbo(pic,bigbannerBox,lunbodian,tuBigZ,liactivebgColor,lunboTime,donghuaTime,tuZ,lisColor,left,right,type=1){
		if(type==0){
		var flag=true;	
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lunbodian);
		// const color=colorArr;
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		tupian[0].style.zIndex=tuBigZ;
		li[0].style.background=liactivebgColor;
		// banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		
			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				if(flag){
				flag=false;
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[j].style.zIndex=tuBigZ;
			li[j].style.background=liactivebgColor;
			// banner.style.background=color[j];
			num=j;
			flag=true;
			}
			}
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
			move("l");	
			}
			
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onclick=function(){
			if(flag){
			move("r");	
			}
		}
		function move(type="l"){
			if(flag){

				flag=false;
				if(type=="l"){
			num++;
			if(num>tupian.length-1){
				num=0;
			}
		}if(type=="r"){
			num--;
			if(num<0){
				num=tupian.length-1;
			}
		}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			// banner.style.background=color[num];
			flag=true;
			}
		}
		}
		


		else if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			const leftbtn=$(left)[0];
			const rightbtn=$(right)[0];
			// const color=colorArr;
			tupian[0].style.opacity=1;
			li[0].style.background=liactivebgColor;
			// banner.style.background=color[0];
			var flag=true;
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}

			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
				if(flag){
				flag=false;
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					tupian[i].style.opacity=0.2;
					li[i].style.background=lisColor;

				}
				tupian[j].style.zIndex=tuBigZ;
				// banner.style.background=color[j];
				li[j].style.background=liactivebgColor;
				animate(tupian[j],{opacity:1},donghuaTime,function(){
				flag=true;
				
				num=j;	
				});			
			}
		}
	}

			leftbtn.onmouseover=function(){
			clearInterval(t);
		}

		leftbtn.onclick=function(){
			if(flag){
			move("l");	
			}
			
		}

		rightbtn.onmouseover=function(){
			clearInterval(t);
		}

		rightbtn.onclick=function(){
			if(flag){
			move("r");	
			}
		}
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,3000);
		}
	function move(type="l"){			
			flag=false;
			if(type=="l"){
			num++;
			if(num>tupian.length-1){
				num=0;
			}
			}else 
			if(type=="r"){
			num--;
			if(num<0){
				num=tupian.length-1;
			}
		}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					tupian[i].style.opacity=0.2;
					li[i].style.background=lisColor;
				}
				tupian[num].style.zIndex=tuBigZ;
				
				li[num].style.background=liactivebgColor;
				// banner.style.background=color[num];
				animate(tupian[num],{opacity:1},donghuaTime,function(){
					flag=true;
				});
				
			
			}
		}
	}





	function lunbo1(tu1,banner1,li1,colorarr,z2,lbcolor,lbcolor2,js,z1,youbtn,zuobtn){
			const tu=$(tu1);//banner图
			const banner =$(banner1)[0];//banner背景只有一个
			const li=$(li1);//轮播点 
			const color=colorarr//背景图颜色
			const youfan=$(youbtn)[0];
			const zuofan=$(zuobtn)[0];
			// console.log(zuofan);
			// console.log(youfan);
			tu[0].style.zIndex=z1;//轮播图层级
			li[0].style.background=lbcolor;//选中轮播点颜色
			banner.style.background=colorarr[0];
			var num=0;
			var t=setInterval(move,js);//轮播时间
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,js);//轮播时间
			}


			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for (let i=0; i<tu.length; i++) {
					// tu[i].style.opacity=0;
					tu[i].style.zIndex=z1;//初始图层级					
					li[i].style.background=lbcolor2//初始轮播点颜色
				};
				tu[j].style.zIndex=z2;//轮播图层级
				// animate(tu[num],{opacity:1},800);
				banner.style.background=colorarr[j];
				li[j].style.background=lbcolor;//选中轮播点颜色
				num=j;
				clearInterval(t);
			}
		}
		function move(){
				num++;
				if(num>=tu.length){
					num=0;
				}
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=z1;//初始图层级
					// tu[i].style.opacity=0;
					li[i].style.background=lbcolor2//初始轮播点颜色
				}
				tu[num].style.zIndex=z2;//轮播图层级
				// animate(tu[num],{opacity:1},800);
				banner.style.background=colorarr[num];
				li[num].style.background=lbcolor;//选中轮播点颜色
			}

	
		
		youfan.onmousedown=function(){
			// console.log(num);
			clearInterval(t);
			for(let i=0;i<tu.length;i++){
				// tu[i].style.opacity=0;
				tu[i].style.zIndex=z1;
				li[i].style.background=lbcolor2;
			}
			// tupian[num].style.opacity=0;
			// tupian[num].style.zIndex=tuZ;
			// li[num].style.background=lunboColor;
			num++;
			if(num>=tu.length){
				num=0;
			}
			banner.style.background=colorarr[num];
			tu[num].style.zIndex=z2;
			// animate(tu[num],{opacity:1},800);
			li[num].style.background=lbcolor;
		}
		youfan.onmouseup=function(){
			t=setInterval(move,js);
		}

		zuofan.onmousedown=function(){
			
			clearInterval(t);
			for(let i=0;i<tu.length;i++){
			// tu[i].style.opacity=0;
			// console.log(tu[num].style.opacity);
			tu[i].style.zIndex=z1;
			li[i].style.background=lbcolor2;
			}
			num--;
			if(num<0){
				num=tu.length-1;
			}
			banner.style.background=colorarr[num];
			tu[num].style.zIndex=z2;
			// animate(tu[num],{opacity:1},800);
			li[num].style.background=lbcolor;
		}
		zuofan.onmouseup=function(){
			t=setInterval(move,js);
		}
		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				clearInterval(t);
				for (let i = 0; i <li.length; i++) {					
					// tu[i].style.opacity=0;
					tu[i].style.zIndex=z1;
					li[i].style.background=lbcolor2;
				}
			banner.style.background=colorarr[j];
			tu[j].style.zIndex=z2;
			// animate(tu[j],{opacity:1},800);
			li[j].style.background=lbcolor;

			}			
		}
		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	}




	// 左右轮播


	// 获取轮播图       	  ".tu"       		tu1
//获取轮播图盒子		".img"				hezi
//获取左按钮			".leftBtn"			zuo
//获取右按钮			".rightBtn"			you
//获取轮播点			".box ul li"		li	
//动效时间					500      	    t2	
//自动播放时间				1000			t1
//普通轮播点颜色  		 "orange"			s1
//初始化第一个轮播点颜色   "#fff"			s2


			function zuoyoulunbo(tu1,hezi,zuo,you,t2){
			const tu =$(tu1);//获取轮播图
			const img=$(hezi)[0];//获取轮播图盒子
			const leftBtn=$(zuo)[0];//获取左按钮
			const rightBtn=$(you)[0];//获取右按钮
			const li=$(lis);//获取轮播点
			const imgw=parseInt(window.getComputedStyle(img,null).width);//获取轮播图宽度

			// 初始化
			var flag=true;//定义开关初始值
			for (let i=0; i<tu.length;i++){
				tu[i].style.left=imgw+"px";
			}//遍历轮播图，并把轮播图放在右边
			tu[0].style.left=0;//第一张轮播图放在中间，显示出来

			// li[0].style.background=s2;//初始化第一个轮播点颜色为白色
            //
			// var t=setInterval(move,t1);//自动播放时间//定义自动播放的效果

			var now=0;//当前轮播图初始值--下标
			var next=0;//其他轮播图初始值--下标

			// 轮播效果函数
			function move(type="l"){//默认左按钮入口
				flag=false;//默认开关为关闭状态
				if(type=="l"){//左按钮入口
				next++;//其他轮播图初始值不同于当前轮播图初始值，从右向左
				if(next>tu.length-1){ //移至最后一页
					next=0;//其他轮播图值返回0;
				}	
				tu[next].style.left=imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{left:-imgw},t2);//动效时间//当前画面用动画播放方式移动	
			}


			else if(type=="r"){  //右按钮入口
				next--;    //其他轮播图初始值不同于当前轮播图初始值，从左向右
				if (next<0){ //移至第一页
					next=tu.length-1;// 其他轮播图值返回最后一页
				}
				tu[next].style.left=-imgw+"px";//其他轮播图移出当前画面
				animate(tu[now],{left:imgw},t2);//当前画面动画播放
			}

				animate(tu[next],{left:0},500,function(){flag=true;//循环播放后开关打开
					// li[next].style.background=s2;//其他轮播点显示白色
					// li[now].style.background=s1;//当前轮播点显示橘色
					now=next;//因为最后一个now后面没有next，把最后一个赋值给now,重新进行下一轮循环 
				});				
}
			// img.onmouseover=function(){
			// 	clearInterval(t)
			// }
			// img.onmouseout=function(){
			// 	t=setInterval(move,t1);
			// }
			// leftBtn.onmouseover=function(){
			// 	clearInterval(t)
			// }
			leftBtn.onclick=function(){
				if(flag){
				move("l");
				}
			}
			// rightBtn.onmouseover=function(){
			// 	clearInterval(t)
			// }

			rightBtn.onclick=function(){
				if(flag){
					move("r");
				}
			}
		// 	window.onblur=function(){
		// 	clearInterval(t);
		// }
		// window.onfocus=function(){
		// 	t=setInterval(move,1000);
		// }
		// 	for(let j=0;j<li.length;j++){
		// 	li[j].onmouseover=function(){
		// 		clearInterval(t);
		// 		if(flag){
		// 		for (let i = 0; i <li.length; i++) {					
		// 			tu[i].style.left=imgw+"px";					
		// 			li[i].style.background=s1;
		// 		}
		// 		tu[j].style.left=0;
		// 		// animate(tu[j],{left:0},500);				
		// 		li[j].style.background=s2;
		// 		now=j;
		// 		next=j;

		// 		}
		// 	}			
		// }
	}
//解决scrollTop兼容性 
function scrollobj(){
		// let body=document.body;
		// let html=document.documentElement;
		// body.scrollTop=1;
		// html.scrollTop=1;
		// let obj;
		// if(body.scrollTop==0){
		// 	obj=html;
		// }else{
		// 	obj=body;
		// }
		// return obj;

		// 第二种方法
		document.body.scrollTop=1;
		document.documentElement.scrollTop=1;//赋不上值
		let obj=document.body.scrollTop?document.body:document.documentElement;

			return obj;

}


	// 楼层跳转 按需加载
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片
	// picurl  放图片的地址属性名
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// donghuaTime  动画时间
	// num  导航出现的高度
function louceng(anniu,Section,anniukuai,daohang,pic,picurl,chushise,activese,donghuaTime,num,dibu){
	const btn=$(anniu);
	const section=$(Section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	const db=$(dibu)[0];
	let scroll= scrollobj();
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}
	let flagx=true;
	let flags=false;

	//
	for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				for(let k=0;k<section.length;k++){
					if(scroll.scrollTop+0.5*CH>=section[k].offsetTop){
						for(let j=0;j<section.length;j++){
							btn[j].style.background=chushise;
						}
					btn[k].style.background=activese;
				}
			}
			btn[i].style.background=activese;
		}
	
			btn[i].onmouseout=function(){				
				btn[i].style.background=chushise;
				for(let k=0;k<section.length;k++){
					if(scroll.scrollTop+0.5*CH>=section[k].offsetTop){
						for(let j=0;j<section.length;j++){
							btn[j].style.background=chushise;
						}
						btn[k].style.background=activese;
					}
				}

			}
			
				
		}

	db.onclick=function(){
		animate(scroll,{scrollTop:0},donghuaTime);
	}
	//


	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=activese;
			}
			if(scroll.scrollTop+CH>=section[i].offsetTop){
				let img=$(pic,section[i]);
				for(let k=0;k<img.length;k++){
					img[k].src=img[k].getAttribute(picurl);
				}
			}
		}
		if(scroll.scrollTop>=num){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},donghuaTime,function(){
					flagx=true;
				})
			}
			btnbox.style.display="block";
		}else{
				if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
				}
				
			btnbox.style.display="none";

			}
	}

}


// 左右节点多图轮播
	// bigbannerBox 最大的盒子
	// picbox 放图片的盒子
	// pic 图片
	// left 左箭头
	// right 右箭头
	// num 轮播的图片个数
	// lunboTime 轮播时间
	// donghuaTime 动画时间
function jielunbo(bigbannerBox,picbox,pic,left,right,num,donghuaTime){
		const win=$(bigbannerBox)[0];
		const box=$(picbox)[0];
		const lis=$(pic);
		const boxchildrenlen=box.children.length;
		var n=num;
		const imgw=930;
		// const imgw=parseInt(window.getComputedStyle(document.querySelector(pic),null).width)*n;
		win.style.width=993+"px";
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		var flag=true;		
		// var t=setInterval(move,lunboTime);
		function move(type="l"){
			flag=false;

			if(type=="l"){
				animate(box,{marginLeft:-imgw},donghuaTime,function(){
				flag=true;
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.appendChild(first);
				}				
				box.style.marginLeft=0;
			});	
			}else if(type=="r"){
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.insertBefore(last,first);	
				}				
				box.style.marginLeft=-imgw+"px";
				animate(box,{marginLeft:0},donghuaTime,function(){
					flag=true;															
				})
			}
			
		}
		// win.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// win.onmouseout=function(){
		// 	 t=setInterval(move,lunboTime);
		// }
		leftbtn.onclick=function(){
			if(flag){
			move("r");
			}
			
		}
		rightbtn.onclick=function(){
			if(flag){
			move("l");
			}
		}

		// window.onblur=function(){
		// 	clearInterval(t);
		// }
		// window.onfocus=function(){
		// 	t=setInterval(move,1000);
		// }
}


function jielunbo1(bigbannerBox,picbox,pic,num,donghuaTime,lili,activeClass){
		const win=$(bigbannerBox)[0];
		const box=$(picbox)[0];
		const lis=$(pic);
		const li=$(lili);
		const boxchildrenlen=box.children.length;
		var n=num;
		// const imgw=930;
		const imgw=parseInt(window.getComputedStyle(document.querySelector(pic),null).width)*n;
		win.style.width=imgw+"px";
		// const leftbtn=$(left)[0];
		// const rightbtn=$(right)[0];
		var flag=true;		
		// var t=setInterval(move,lunboTime);
		function move(type="l"){
			flag=false;

			if(type=="l"){
				animate(box,{marginLeft:-imgw},donghuaTime,function(){
				flag=true;
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.appendChild(first);
				}				
				box.style.marginLeft=0;
			});	
			}else if(type=="r"){
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.insertBefore(last,first);	
				}				
				box.style.marginLeft=-imgw+"px";
				animate(box,{marginLeft:0},donghuaTime,function(){
					flag=true;															
				})
			}
			
		}
		for(let i=0;i<li.length;i++){
			li[i].onmouseover=function(){
			for(let j=0;j<li.length;j++){
				// console.log(li[i])
				li[j].classList.remove(activeClass);
				li[i].classList.add(activeClass);
				
				

				if(i>j){
					if(flag){
					move("r");
					// // li[i].classList.remove(activeClass);
					// li[j].classList.add(activeClass);
				}
				}else if(i<j){
					if(flag){
					move("l")					
					}
				}
				
			}
			
		}
		}
		// win.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// win.onmouseout=function(){
		// 	 t=setInterval(move,lunboTime);
		// }
		// leftbtn.onclick=function(){
		// 	if(flag){
		// 	move("r");
		// 	}
			
		// }
		// rightbtn.onclick=function(){
		// 	if(flag){
		// 	move("l");
		// 	}
		// }

		// window.onblur=function(){
		// 	clearInterval(t);
		// }
		// window.onfocus=function(){
		// 	t=setInterval(move,1000);
		// }

}


// 左右轮播 类名
// lunbotupian 轮播图
// lunbodakuai 放轮播块的大盒子
// lunbokuai 放轮播图的轮播快
// colorArr 放轮播块的大盒子的背景颜色集合
// lunbodian 轮播点
// zuojian 左按钮
// youjian 右按钮
// lunboTime 轮播时间
// activeClass 给第一个轮播点加上的类名，定义轮播点选中的颜色
function zylunbo(lunbotupian,lunbodakuai,lunbokuai,lunbodian,zuojian,youjian,lunboTime,donghuaTime,activeClass){
    const tu=document.querySelectorAll(lunbotupian);
    const banner=document.querySelector(lunbodakuai);
    const img=document.querySelector(lunbokuai);
    const lis=document.querySelectorAll(lunbodian);
    const imgw=parseInt(window.getComputedStyle(banner,null).width);
    const zuobtn=document.querySelector(zuojian);
    const youbtn=document.querySelector(youjian);
    for(i=0;i<tu.length;i++){
        tu[i].style.left=-imgw+"px";
    }
    tu[0].style.left=0;
    lis[0].classList.add(activeClass);
    var now=0;
    var next=1;
    var flag=true;
    var t=setInterval(move,lunboTime);
    function move(type="r"){
        flag=false;
        if(type=="r"){
            animate(tu[now],{left:-imgw},donghuaTime);
            tu[next].style.left=imgw+"px";
            animate(tu[next],{left:0},donghuaTime,function(){
                flag=true;
                now=next;
                next++;
                if(next>tu.length-1){
                    next=0;
                }
            })
        }else if(type=="l"){
            animate(tu[now],{left:imgw},donghuaTime);
            tu[next].style.left=-imgw+"px";
            animate(tu[next],{left:0},donghuaTime,function(){
                flag=true;
                now=next;
                next--;
                if(next<0){
                    next=tu.length-1;
                }
            })
        }

        lis[now].classList.remove(activeClass);
        lis[next].classList.add(activeClass);
    }
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,lunboTime);
    }
    zuobtn.onclick=function(){
        if(flag){
            move("l");
        }
    }
    window.onblur=function(){
        clearInterval(t);
    }
    window.onfocus=function(){
        t=setInterval(move,1000);
    }
    youbtn.onclick=function(){
        if(flag){
            move("r");
        }
    }
    for(let i=0;i<tu.length;i++){
        lis[i].onclick=function(){
            clearInterval(t);
            if(flag){
                if(i<now){
                    next=i;
                    move("l");
                }else if(i>now){
                    next=i;
                    move("r");
                }
            }
        }
    }
}
