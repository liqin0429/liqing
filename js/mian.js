		const star=$(".star")[0];
		const video=$("video")[0];
		const section=$("section")[0];
		const zanting=$(".zanting")[0];
		const alltimes=$(".alltimes")[0];
		const newtime=$(".newtime")[0];
		const progress=$(".progress")[0];
		const inner=document.querySelector(".inner");
		const quanp=$(".quanp")[0];
		const yin=$(".yin")[0];
		const bj=$(".bj")[0];
		const volinner=$(".volinner")[0]; 
		const mask=$(".mask")[0];
		const yinliang=$(".yinliang")[0];
		 var reload=document.querySelector(".reload");
		var l=progress.offsetWidth;
		let alltime;
		let newtimes;
		star.onclick=function(){
			video.play();
			star.style.display="none";
			zanting.value=zanting.getAttribute("value1");
		}
		var startflag=true;
		zanting.onclick=function(){
			if(startflag){
                video.play();
                star.style.display="none";
				zanting.value=zanting.getAttribute("value1");
            }else{
                video.pause();
                star.style.display="block";
				zanting.value=zanting.getAttribute("value2");
            }
             startflag=!startflag;
		}
		reload.onclick=function () {
            video.load();
            inner.style.width=0;
            star.style.display="block";
			zanting.value=zanting.getAttribute("value2");
            startflag=true;
        };
		video.oncanplay=function(){
			alltime=video.duration;
			alltimes.innerHTML=getTime(alltime);
		}
		function getTime(time){
			let h=Math.floor(time/60/60);
			let m=Math.floor(time/60%60);
			let s=Math.floor(time%60);
			return `${h<10?0+""+h:h}:${m<10?0+""+m:m}:${s<10?0+""+s:s}`
		}
		video.ontimeupdate=function(){
			newtimes=video.currentTime;
			newtime.innerHTML=getTime(newtimes);
            var width=newtimes/alltime;
            inner.style.width=width*100+"%";
		}
		console.log()
		progress.onmousedown=function(e){
            var ox=e.offsetX; //鼠标按下某位置到(直接或最早事件源)progress开始位置的距离
            var bili=ox/l; //鼠标按下某位置到progress开始位置的距离  与  progress总长的一个比例
            var pos=alltime*bili; //当前播放时间的位置 (duration返回当前音频/视频的长度（以秒计）)
            video.currentTime=pos;  //currentTime设置或返回音频/视频中的当前播放位置（以秒计）
            document.onmousemove=function (e) {
//                var ox=e.offsetX;  //onmousemove用e.offsetX;存在Bug
                var ox=e.clientX-progress.offsetLeft;
                var bili=ox/l;
                var pos=alltime*bili //当前播放时间位置 (duration返回当前音频/视频的长度（以秒计）)
                video.currentTime=pos;
            }
            document.onmouseup=function (e) {
                document.onmousemove=null;
                document.onmouseup=null;
            }
        }
		let flag=true;
		quanp.onclick=fukk;
		video.ondblclick=fukk;
		document.onkeydown=function(e){
			if(e.keyCode==27){
				flag=false;
				fukk();
			}
		}
		function fukk(){
			if(flag){

				flag=false;
			section.style.width="100%";
			section.style.height="100%";
			quanp.value=quanp.getAttribute("value3");
			//requestFullscreen() 任何东西全屏;cab
			if(section.requestFullscreen){
				section.requestFullscreen();
			}
			if(section.mozRequestFullScreen){
				section.mozRequestFullScreen();
			}
			if(section.webkitRequestFullScreen){
				section.webkitRequestFullScreen();
			}
			if(section.msRequestFullscreen){
				section.msRequestFullscreen();
			}
				l=progress.offsetWidth;
			}else{
				flag=true;
			section.style.width="700px";
			section.style.height="600px";
			quanp.value=quanp.getAttribute("value4");
			if(document.exitFullscreen){
				document.exitFullscreen();
			}
			if(document.mozCancelFullScreen){
				document.mozCancelFullScreen();
			}
			if(document.webkitCancelFullScreen){
				document.webkitCancelFullScreen();
			}
			if(document.msExitFullscreen){
				document.msExitFullscreen();
			}

			}

		}
		hover(yin,function(){
			bj.style.display="block"
		},function(){
			bj.style.display="none";
			window.onmousemove=null;
			window.onmouseup=null;
		})
		function fnvol(e){
			var oy=e.offsetY;
			oy=oy>100?100:oy;
			var v=1-oy/100;
			video.volume=v;
			if(v==0){
				yinliang.value=yinliang.getAttribute("value8");
			}else{
				yinliang.value=yinliang.getAttribute("value9");
			}
			volinner.style.marginTop=oy+"px";

		}
		mask.onmousedown=function(e){
			fnvol(e);
			window.onmousemove=function(e){
				fnvol(e);
			}
			window.onmouseup=function(){
				window.onmousemove=null;
				window.onmouseup=null;
			}
		}
		var yinflag=true;
		yinliang.onclick=function(){
			if(yinflag){
				yinliang.value=yinliang.getAttribute("value8");
				video.muted=true;
			}else{
				yinliang.value=yinliang.getAttribute("value9");
				video.muted=false;
			}
			yinflag=!yinflag;
		}