$(function(){
    //以下是banner图
    (function(){
        var len=$(".banner .img").length;
        var index=0;
        var show= $(".banner .img");
        var prev=$(".banner .prev");
        var next= $(".banner .next");
        var box=$(".banner");
        function lunbo(len,index,show,prev,next,box){
            next.click(function(){
                index++;
                if(index>len-1){
                    index=0;
                }
                show.fadeOut().eq(index).fadeIn();
            });

            prev.click(function(){
                index--;
                if(index<0){
                    index=len-1;
                }
                show.fadeOut().eq(index).fadeIn();
            });

            var right=function(){
                index++;
                if(index>len-1){
                    index=0;
                }
                show.fadeOut().eq(index).fadeIn();
            };
            var timer=setInterval(right,1500);
            box.hover(function(){
                clearInterval(timer);
            },function(){
                timer=setInterval(right,1500);
            })
        }

        lunbo(len,index,show,prev,next,box)
    })();

    //以下是官方合作的选项卡
    $(".part1 .slide-nav a").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".slide-wrapper li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })
    $(".xuan a").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".slide-box").eq($(this).index()).addClass("active").siblings().removeClass("active");

    })

    //以下是官方合作右边的
    $(".part1 .news-nav .a").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".txt-list").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })

    //全新比武大会
    $(".part2 .news-nav a").mouseenter(function(){
        $(".part2 .news-nav a").removeClass("active").eq($(this).index()).addClass("active");
        $(".part2 .slide-item").removeClass("active").eq($(this).index()).addClass("active");
    })
var targer = 1
    var timer;
    function loop(){
        console.log(1);
        $(".notice-con .ul")[0].style.left=$(".notice-con .ul")[0].offsetLeft-targer+"px"
    }
    timer=setInterval(loop,30)












})
