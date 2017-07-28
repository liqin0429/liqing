$(function () {
    const list=$(".h_nav ul li");
    for(let i=0;i<list.length;i++){
        list[i].onmouseover=function () {
            list[i].classList.add("active");
        }
        list[i].onmouseout=function () {
            list[i].classList.remove("active");
        }
    }
})