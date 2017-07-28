jQuery(function(){
    jQuery("#fullpage").fullpage({
        slidesColor: ['#009999', '#CC6600', '#CCCC00', '#66CC66'],
        anchors:['page1','page2','page3','page4','page5','page6','page7','page8','page9','page10'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
                jQuery(".text").eq(index-1).css({
                    transform:"scale(2,2)"
                })
                if(index==1){
                    jQuery(".package").css({
                        transform:"rotateY(0deg)"
                    })
                }else{
                    jQuery(".package").css({
                        transform:"rotateY(90deg)"
                    })
                }
                if(index==2){
                    jQuery(".yunbox").css({
                        animation:"yundown 3s ease"
                    })
                }else{
                    jQuery(".yunbox").css({
                        animation:"yunup 3s ease",
                    })
                }
                if(index==3){
                    jQuery(".cole-left").css({
                        left:0,
                        opacity:0.8
                    })
                    jQuery(".cole-right").css({
                        right:0,
                        opacity:0.8
                    })

                }
                if(index==4){
                    jQuery(".pill-left").css({
                          left:0,
                          opacity:0.8
                    })
                    jQuery(".pill-right").css({
                        right:0,
                        opacity:0.8
                    })
                    jQuery(".pill-center").css({
                        bottom:0,
                        opacity:1
                    })
                }
                if(index==5){
                    jQuery(".vern").css({
                        bottom:0,
                    })

                }
            if(index==6){
                jQuery(".word").css({
                    opacity:1
                })
                jQuery(".word-1").css({
                   left:"-162px",
                    top:"-162px"
                })
                jQuery(".word-2").css({
                    right:"-163px",
                    top:"-162px",
                })
                jQuery(".word-3").css({
                    right:"-163px",
                    bottom:"-163px",
                })
                jQuery(".word-4").css({
                    left:"-162px",
                    bottom:"-163px",
                })

            }
        },
        onLeave: function(index, nextIndex, direction){
            jQuery(".text").eq(index-1).css({
                transform:"scale(1,1)"
            })
            if(index==1){
                jQuery(".package").css({
                    transform:"rotateY(90deg)"
                })
            }else{
                jQuery(".package").css({
                    transform:"rotateY(0deg)"
                })
            }
            if(index==2){
               jQuery(".yunbox").css({
                    animation:"yunup 3s ease"
                })
            }else{
                jQuery(".yunbox").css({
                    animation:"yundown 3s ease"
                })
            }
            if(index==3){
                jQuery(".cole-left").css({
                    left:"-2500px",
                    opacity:0.8
                })
                jQuery(".cole-right").css({
                    right:"-2500px",
                    opacity:0.8
                })

            }
            if(index==4){
                jQuery(".pill-left").css({
                    left:"-300px",
                    opacity:"0"
                })
               jQuery(".pill-right").css({
                    right:"-300px",
                    opacity:"0"
                })
                jQuery(".pill-center").css({
                    bottom:"-650px",
                    opacity:0
                })
            }
            if(index==5){
                jQuery(".vern").css({
                    bottom:"-500px"
                })

            }
            if(index==6){
                jQuery(".word").css({
                    opacity:0
                })
                jQuery(".word-1").css({
                    left:"-325px",
                    top:"-325px",
                })
                jQuery(".word-2").css({
                    right:"-325px",
                    top:"-325px",
                })
                jQuery(".word-3").css({
                    right:"-325px",
                    bottom:"-325px",
                })
                jQuery(".word-4").css({
                    left:"-325px",
                    bottom:"-325px",
                })

            }
        }
    })



})