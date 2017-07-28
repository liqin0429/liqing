function $(select,obj=document){
	if(typeof select == "function"){
		// window.onload=function(){
		// 	select();
		// }
		window.addEventListener("load",select,false)
	}else if(typeof select == "string"){
		// alert(/^<\w+>$/.test(select));
		if(/^<\w+>$/.test(select)){//开头是小于号,然后是字母数字下划线
			return document.createElement(select.slice(1,-1));
		}else{
			return obj.querySelectorAll(select)
		}
	}
}
  const start=$(".start")[0];
            // console.log(start);
            const video=$("video")[0];
            const section=$("section")[0];
            const pause=$(".pause")[0];
            const alltime=$(".alltime")[0];
            const progress=$("progress")[0]
            const nowtime=$(".nowtime")[0];
            const fullscreen=$(".fullscreen")[0];
            let alltimes;
            let nowtimes;
            start.onclick=function(){
                video.play();
                start.style.display="none";
            }
            pause.onclick=function(){
                if(video.paused){
                    video.play();
                    start.style.display="none";
                    pause.value=pause.getAttribute("value2");
                }else{
                    video.pause();
                    start.style.display="black";
                    pause.value=pause.getAttribute("value1")
                }
            }
            video.oncanplay=function(){
                 alltimes = video.duration;
                 alltime.innerHTML=getTime(alltimes);
            }
            video.ontimeupdate=function(){
                nowtimes = video.currentTime;
                nowtime.innerHTML=getTime(nowtimes);
                progress.value=1000*(nowtimes/alltimes);
            }
            progress.onclick=function(e){
                let x=e.offsetX;
                let bili=x/480;
                video.currentTime=bili*alltimes;
            }
            function getTime(time){
                let h=Math.floor(time/60/60);  //小时
                let f=Math.floor(time/60%60);  //分钟
                let s=Math.floor(time%60);
                 // 00:00:00
                return `${h<10?0+""+h:h}:${f<10?0+""+f:f}:${s<10?0+""+s:s}`
            }

            let flag=true;
            fullscreen.onclick=function(){
                if(flag){
                    flag=false;
                    section.style.width="100%";
                    section.style.height="100%";
                    fullscreen.value=fullscreen.getAttribute("value");
                    if(section.requestFullscreen){
                        section.requestFullscreen();
                    }
                    if(section.mozCancelFullScreen){
                        section.mozCancelFullScreen();
                    }
                    if(section.webkitRequestFullScreen){
                        section.webkitRequestFullScreen();
                    }
                    if(section.msRequestFullscreen){
                        msRequestFullscreen()
                    }

                }else{
                    flag=true;
                    section.style.width="480px";
                    section.style.height="400px";
                    if(document.exitFullscreen){
                        document.exitFullscreen();
                    }
                    if(document.mozCancelFullScreen){
                        document.mozCancelFullScreen();
                    }
                    if(document.webkitCancelFullScreen){
                        document.webkitCancelFullScreen()
                    }
                    if(document.msExitFullscreen){
                        document.msExitFullscreen()
                    }
                    
                }
            }
            // 文字出现部分
     title=$('img').attr('.title');
        $('img').mousemove(function(event){
            x=event.clientX;
            y=event.clientY;
            $('lianjie1').offset({ top:y+15, left:x+15});
            $('lianjie1').show().html(title);
        })
        $('img').mouseout(function(){
            $('lianjie1').hide()
        })



          var imgs = document.querySelectorAll(".item li");
    var btns = document.querySelectorAll(".carousel-indicators li");
    var box = document.querySelector(".banner");
    var nowbtn = btns[0];
    var nowimg = imgs[0];
    // 轮播图自动轮播
    var t = setInterval(move, 3000);
    var now = 0;
    var z = 10;
    function move() {
        imgs[now].classList.add("leftOut")
        btns[now].classList.remove("active")
        now++;
        if (now == imgs.length) {
            now = 0;
        }
        btns[now].classList.add("active");
        imgs[now].classList.add("leftIn")  //
        imgs[now].style.zIndex = z++;
    }
    imgs.forEach(function (img) {
        img.addEventListener("animationend", function () {
            img.className="";
            flag=true;
        })
    })
    //  清除时间间隔函数
    box.onmouseover = function () {
        clearInterval(t)
    }
    box.onmouseout = function () {
        t = setInterval(move, 3000);
    }
    // 遍历轮播点
    btns.forEach(function (btn, index) {
        // 轮播点的变化
        btn.onclick = function () {
            if (index == now) {  //当前张
                return;
            }
            if (index > now) {
                imgs[now].classList.add("leftOut");
                imgs[index].classList.add("leftIn")  //
//               点击的下标
            } else if (index < now) {
                imgs[now].classList.add("rihgtOut");
                imgs[index].classList.add("rihgtIn")  //  移入
            }
            btns[now].classList.remove("active")
            btns[index].classList.add("active")
            imgs[index].style.zIndex = z++;
            now = index;  //当前
//
        }
    })
    var flag = true;
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
   // 点击左右箭头
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
//    左键移出
    prev.onclick = function () {
        if(flag){
            flag = false;    
            imgs[now].classList.add("rihgtOut");
            btns[now].classList.remove("active")
            now--;
              if(now==-1){
                now=imgs.length-1;
            }
            imgs[now].classList.add("rihgtIn");
            imgs[now].style.zIndex=z++;
            btns[now].classList.add("active");
        }
      
    }
          
