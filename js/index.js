src="jquery-3.3.1.min.js";
//banner
{
    let imgs=document.querySelectorAll(".main-banner-con2");
    let pagers=document.querySelectorAll(".pagerbox1");
    let banner=document.querySelector(".banner");
    console.log(imgs,pagers);

    pagers.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("main-banner-active");
                pagers[i].classList.remove("pagerbox-active");
            }
            this.classList.add('pagerbox-active');
            imgs[index].classList.add('main-banner-active');
            n=index;
        }

    });

    var n=0;
    let t=setInterval(move,3000);
    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("main-banner-active");
            pagers[i].classList.remove("pagerbox-active");
        }
        imgs[n].classList.add('main-banner-active');
        pagers[n].classList.add('pagerbox-active');
    }

    banner.onmouseenter=function (){
        clearInterval(t);
    }
    banner.onmouseleave=function (){
        t=setInterval(move,3000);
    }

    var flag=true;
    imgs.forEach(function(ele,index){		//检测flag执行完给它赋值true
            ele.addEventListener("transitionend", function(){	//整张图片过渡完之后
                flag=true;
            })
        }
    );
}

{
    let totop = document.querySelector(".totop");
    totop.onclick = function () {
        document.documentElement.scrollTop = 0;
        //获取当前网页的滚动值
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);

            }
            document.documentElement.scrollTop = st;
        }, 25)
        // console.log(t);


    }


    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".leftbar");
    // console.log(topbar, leftbar);

//window滚动事件
    window.onscroll = function () {

        let st = document.documentElement.scrollTop;

        if (st > 1200) {
            topbar.style.display = "block";
        } else {
            topbar.style.display = "none";
        }
        if (st > 1000) {
            leftbar.style.display = "block";
        } else {
            leftbar.style.display = "none";
        }

        // console.log(document.documentElement.scrollTop);
    }


    {
        // let tips = document.querySelectorAll(".leftbar-con a");
        // let contains = document.querySelectorAll(".containor");
        // console.log(tips, contains);
        $(window).scroll(function () {
            let st = $(window).scrollTop();
            $(".containor").each(function (index, ele) {
                // console.log($(".containor"));
                if (st >= $(".containor").eq(index).offset().top - 150) {

                    for (var i = 0; i < $(".leftbar-name1").length; i++) {

                        $(".leftbar-name1").removeClass("col" + (i + 1));
                    }

                    $(".leftbar-name1").eq(index).addClass("col" + (index + 1));


                }
            })
        })
    }
}

{
    console.log($(".rights"));
    $(".rights").mouseenter(function(index,ele){
        $(this).css({
            "color":"#fff"});
        $(this).find(".rightbar_gouwu_top").css({
            "color":"#fff"});
        $(this).css({
            "background":"#ff0036"});
        // $(this).find(".right_bars").css("right","35px");
        // $(this).find(".right_bars").css("display","block");
        $(this).find(".right_bars").show().animate({right:"35"},500)
    });
    $(".rights").mouseleave(function(index,ele){
        $(this).css({"background":""});
        $(this).css({"color":""
        });

        $(this).find(".right_bars").animate({right:"70"},500,function(){
            $(this).css("display","none");
        })

    });
}

