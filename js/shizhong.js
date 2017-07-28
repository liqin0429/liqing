	var tops=document.querySelector("li:nth-child(1)");
	var bottom=document.querySelector("li:nth-child(3)");
	var front=document.querySelector("li:nth-child(5)");
	var hou=document.querySelector("li:nth-child(6)");
	var box=document.querySelector(".box");
	var clientW=window.innerWidth;
	var clientH=window.innerHeight;

    window.onresize=function(){
                clientW=window.innerWidth;
                clientH=window.innerHeight;
             }

	tops.style.width=tops.style.height=bottom.style.width=bottom.style.height=clientW+"px";
	bottom.style.top=clientH-clientW+"px";
	front.style.transform=`translateZ(${clientW}px)`;
    // front.style.transform="rotateY(180deg)"; 
	box.style.transform="translateZ(-500px)";
	box.style.transformOrigin="center center 500px";
	 var startangle=0;
    var nowangle=0;
    document.onmousedown=function (e) {
        var sx=e.clientX;
        document.onmousemove=function (e) {
            var cx=e.clientX;
            nowangle=cx-sx;
            box.style.transform=`translateZ(-500px) rotateY(${startangle+nowangle}deg)`;
        }
        document.onmouseup=function (e) {
            startangle+=nowangle;
            document.onmousemove=null;
            document.onmouseup=null;
        }
    }
    		var div = document.createElement("div");
            div.style.cssText = "width:200px;height:200px;background-image:url(img/f.gif);float:right; margin-right: 80px; border-radius:50%;position:relative;background-repeat: no-repeat;background-position: center;background-size: 141%;";
            hou.appendChild(div);
            for (let i = 0; i < 60; i++) {
                let kd = document.createElement("div");
                kd.style.cssText = "width:4px;height:5px;background:#fff;position:absolute;left:98px;top:0;transform-origin:2px 100px";
                if (i % 5 == 0) {
                    kd.style.height = '8px';
                    kd.style.background = '#000';
                }
                let angle = i * 6;
                kd.style.transform = `rotate(${angle}deg)`
                div.appendChild(kd);
            }
            var circle = document.createElement("div");
            circle.style.cssText = "width:10px;height:10px;border-radius:50%;background:#000;left:95px;top:95px;position:absolute;z-index:1";
            div.appendChild(circle);
//            时针
            var hour = document.createElement("div");
            hour.style.cssText = "width:60px;height:5px;background:#fff;left:100px;top:98px;position:absolute;transform-origin:left center;";
            div.appendChild(hour);
            //           分针
            var minute = document.createElement("div");
            minute.style.cssText = "width:80px;height:3px;background:#fff;left:100px;top:99px;position:absolute;transform-origin:left center;";
            div.appendChild(minute);
            //            秒针
            var second = document.createElement("div");
            second.style.cssText = "width:110px;height:1px;background:red;left:80px;top:100px;position:absolute;transform-origin:20px center;";
            div.appendChild(second);

            function setTime() {
                var date = new Date();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                hour.style.transform = `rotate(${hours / 12 * 360 - 90 + minutes / 60 * 30}deg)`;
                minute.style.transform = `rotate(${(minutes / 60) * 360 - 90 + seconds / 60 * 6}deg)`;
                second.style.transform = `rotate(${seconds / 60 * 360 - 90}deg)`;
            }

            setTime();
            setInterval(setTime, 1000);
            zylunbo2(".zhanshibox>div",".zhanshibox",".right",".left",500)