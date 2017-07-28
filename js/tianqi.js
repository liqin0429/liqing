$(function () {
           function update(city) {
               $(".cityname").html(city);
               $(".weather tbody").empty();
               $.get("https://free-api.heweather.com/v5/weather",{city:city,key:"f83f293eedd8440aad69e3e0346ae412"},function (r) {
                   var arr=["今天","明天","后天"];
                   $.each(r.HeWeather5[0].daily_forecast,function (index,value) {
                       $("<tr>").html(function () {
                           return "<td>"+arr[index]+"</td><td>"+value.date+"</td><td>"+value.cond.txt_d+"</td><td>"+value.tmp.min+"℃~"+value.tmp.max+"℃"+"</td><td>"+value.wind.dir+"/"+value.wind.sc+"</td>"
                       }).appendTo(".weather tbody");
                   })
                   $.each(r.HeWeather5[0].suggestion,function (i,v) {
                       $("#"+i).find("td").eq(1).text(v.brf).end().eq(2).text(v.txt)
                   })
               })
           }
        //获取城市信息
        $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function () {
            var city=remote_ip_info.city;
            update(city);
        })
        //点击带来城市信息
        $(".toggle").click(function () {
            $(".area").slideToggle();//内容的显示与隐藏
        }).one("click",function () { //触发一次  点完就会注销
            $.getJSON("css/citys.json",function (r) { //getJSON不能远程获取  下载到本地citys.json
                var province={}; //所有省作为一个对象
                $.each(r,function (index,value) {
                    if(!province[value.provinceZh]){  //如果没有被遍历到
                        province[value.provinceZh]=[];
                    }
                    province[value.provinceZh].push(value.cityZh); //利用province的value
                })
                //联动
                $.each(province,function (i,v) {
                    $("<option>").text(i).val(i).appendTo(".province");  //text用于设置元素内容的文本   val()获得匹配元素的当前值。
                })

                $(".province").change(function () {
                    var val=$(this).val();//省的名字
                    $(".city").html("<option value=''>请选择市</option>>")
                    var citys=province[val];
                    $.each(citys,function (i,v) {
                        $("<option>").text(v).val(v).appendTo(".city"); //再次选择省份 市..
                    })
                })
                $(".city").change(function () {
                    if($(this).val()!=""){
                        update($(this).val())
                    }
                })
            })
        })

    })
