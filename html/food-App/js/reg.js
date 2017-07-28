$(function () {
   $(".del").click(function () {
       $(".login").attr("value","")
   })
    $(".icon-del3").click(function (event) {
        $(".reg").val("");
    })
    $(".icon-del2").click(function () {
        $(".pass").attr("value","")
    })
    $("button").click(function () {
        alert(1)
    })
})