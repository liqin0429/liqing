$(function () {
    function louceng2(anniu,Section,donghuaTime){
        const btn=$(anniu);
        const section=$(Section);
        let scroll= scrollobj();
        for(let i=0;i<btn.length;i++){
            btn[i].onclick=function(){
                animate(scroll,{scrollTop:section[i].offsetTop+780},donghuaTime);
            }
        }
    }
    louceng2(".nrbbbox",".Main-nr",500)
})