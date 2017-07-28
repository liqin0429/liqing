$(function () {
    //banner图轮播
    Zlunbo(".bannerbox li",".banner .neikuan",".bannerli li",2,"#ae581c",3000,500,1,"#fff",".next",".prev",type=1)
//    咖啡文化轮播
    function Zlunbo2(pic,bigbannerBox,lunbodian1,tuBigZ,liactivebgColor,lunboTime,donghuaTime,tuZ,lisColor,type=1){
        if(type==0){
            var flag=true;
            const tupian=$(pic);
            const banner=$(bigbannerBox)[0];
            const li=$(lunbodian1);
            tupian[0].style.zIndex=tuBigZ;
            li[0].style.background=liactivebgColor;
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
            tupian[0].style.opacity=1;
            const xinxi=$(".Main-xinxi");
             xinxi[0].style.zIndex=2;

            const li=$(lunbodian1);
            li[0].style.background=liactivebgColor;
            var flag=true;
            var num=0;
            for(let j=0;j<li.length;j++){
                li[j].onclick=function(){
                    if(flag){
                        flag=false;
                        for(let i=0;i<tupian.length;i++){
                            tupian[i].style.zIndex=tuZ;
                            tupian[i].style.opacity=0.15;
                            li[i].style.background=lisColor;
                            xinxi[i].style.zIndex=1;

                        }
                        tupian[j].style.zIndex=tuBigZ;
                        xinxi[j].style.zIndex=2;

                        // banner.style.background=color[j];
                        li[j].style.background=liactivebgColor;
                        animate(tupian[j],{opacity:1},donghuaTime,function(){
                            flag=true;

                            num=j;
                        });
                    }
                }
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
                    tupian[i].style.opacity=0.15;
                    li[i].style.background=lisColor;
                }
                tupian[num].style.zIndex=tuBigZ;

                li[num].style.background=liactivebgColor;
                animate(tupian[num],{opacity:1},donghuaTime,function(){
                    flag=true;
                });
            }
        }
    }

    Zlunbo2(".Main-banner li",".Main-banner",".Mainli li",2,"#c47f4b",3000,500,1,"#ffcb8a",type=1);
    //back
    let scroll= scrollobj();
    const back=$(".back")[0];
    back.onclick=function(){
        animate(scroll,{scrollTop:0},500);
    }
})