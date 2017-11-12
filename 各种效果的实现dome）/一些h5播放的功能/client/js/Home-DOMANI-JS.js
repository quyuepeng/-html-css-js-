/**
 * Created by Administrator on 2016/4/9 0009.
 */
var juxing3=document.getElementById("Juxing3");
var rightB=document.getElementById("RightB");
var box=document.getElementById("box");
var heard=document.getElementById("Heard");
//后面过渡图片的蒙层效果设置
function Fmover(){
    juxing3.style.backgroundColor="rgba(0,0,0,0.5)";
    juxing3.style.cursor="pointer";
    rightB.style.marginLeft=10+"px";
}
function Fmout(){
    juxing3.style.backgroundColor="rgba(0,0,0,0)";
    rightB.style.marginLeft=0+"px";
}
var cimg1=document.getElementById("Cimg1");
var su1=document.getElementById("su1");
var sunth1=document.getElementById("sunth1");
var heng1=document.getElementById("heng1");
var name1=document.getElementById("content-name1");
//分别对内容下面的十字旋转效果实现单独控制和图片放大，隐藏框的显示
function Cmover1(){
    cimg1.style.transform="scale(1.2,1.2)";
    cimg1.style.cursor="pointer";
    su1.style.transform="rotate(90deg)";
    heng1.style.transform="rotate(180deg)";
    name1.style.marginTop=-60+"px";
    sunth1.style.transform="rotate(90deg)";
}
function Cmout1(){
    cimg1.style.transform="scale(1,1)";
    su1.style.transform="rotate(0deg)";
    heng1.style.transform="rotate(-180deg)";
    name1.style.marginTop=0+"px";
    sunth1.style.transform="rotate(0deg)";
}
var cimg2=document.getElementById("Cimg2");
var su2=document.getElementById("su2");
var heng2=document.getElementById("heng2");
var name2=document.getElementById("content-name2");
function Cmover2(){
    cimg2.style.transform="scale(1.2,1.2)";
    cimg2.style.cursor="pointer";
    su2.style.transform="rotate(90deg)";
    heng2.style.transform="rotate(180deg)";
    name2.style.marginTop=-60+"px";
    sunth2.style.transform="rotate(90deg)";
}
function Cmout2(){
    cimg2.style.transform="scale(1,1)";
    su2.style.transform="rotate(0deg)";
    heng2.style.transform="rotate(-180deg)";
    name2.style.marginTop=0+"px";
    sunth2.style.transform="rotate(0deg)";
}
var content3=document.getElementById("content3");
var su3=document.getElementById("su3");
var heng3=document.getElementById("heng3");
function Cmover3(){
    content3.style.cursor="pointer";
    su3.style.transform="rotate(90deg)";
    heng3.style.transform="rotate(90deg)";
}
function Cmout3(){
    su3.style.transform="rotate(0deg)";
    heng3.style.transform="rotate(0deg)";
}
var cimg4=document.getElementById("Cimg4");
var su4=document.getElementById("su4");
var heng4=document.getElementById("heng4");
var name4=document.getElementById("content-name3");
function Cmover4(){
    cimg4.style.transform="scale(1.2,1.2)";
    cimg4.style.cursor="pointer";
    su4.style.transform="rotate(90deg)";
    heng4.style.transform="rotate(180deg)";
    name4.style.marginTop=-60+"px";
    sunth4.style.transform="rotate(90deg)";
}
function Cmout4(){
    cimg4.style.transform="scale(1,1)";
    su4.style.transform="rotate(0deg)";
    heng4.style.transform="rotate(-180deg)";
    name4.style.marginTop=0+"px";
    sunth4.style.transform="rotate(0deg)";
}
var cimg5=document.getElementById("Cimg5");
var su5=document.getElementById("su5");
var heng5=document.getElementById("heng5");
var name5=document.getElementById("content-name4");
function Cmover5(){
    cimg5.style.transform="scale(1.2,1.2)";
    cimg5.style.cursor="pointer";
    su5.style.transform="rotate(90deg)";
    heng5.style.transform="rotate(180deg)";
    name5.style.marginTop=-60+"px";
    sunth5.style.transform="rotate(90deg)";
}
function Cmout5(){
    cimg5.style.transform="scale(1,1)";
    su5.style.transform="rotate(0deg)";
    heng5.style.transform="rotate(-180deg)";
    name5.style.marginTop=0+"px";
    sunth5.style.transform="rotate(0deg)";
}
var cimg6=document.getElementById("Cimg6");
var su6=document.getElementById("su6");
var heng6=document.getElementById("heng6");
var name6=document.getElementById("content-name5");
function Cmover6(){
    cimg6.style.transform="scale(1.2,1.2)";
    cimg6.style.cursor="pointer";
    su6.style.transform="rotate(90deg)";
    heng6.style.transform="rotate(180deg)";
    name6.style.marginTop=-60+"px";
    sunth6.style.transform="rotate(90deg)";
}
function Cmout6(){
    cimg6.style.transform="scale(1,1)";
    su6.style.transform="rotate(0deg)";
    heng6.style.transform="rotate(-180deg)";
    name6.style.marginTop=0+"px";
    sunth6.style.transform="rotate(0deg)";
}
var content7=document.getElementById("content7");
var su7=document.getElementById("su7");
var heng7=document.getElementById("heng7");
function Cmover7(){
    content7.style.cursor="pointer";
    su7.style.transform="rotate(90deg)";
    heng7.style.transform="rotate(90deg)";
}
function Cmout7(){
    su7.style.transform="rotate(0deg)";
    heng7.style.transform="rotate(0deg)";
}
var cimg8=document.getElementById("Cimg8");
var su8=document.getElementById("su8");
var heng8=document.getElementById("heng8");
var name8=document.getElementById("content-name6");
function Cmover8(){
    cimg8.style.transform="scale(1.2,1.2)";
    cimg8.style.cursor="pointer";
    su8.style.transform="rotate(90deg)";
    heng8.style.transform="rotate(180deg)";
    name8.style.marginTop=-60+"px";
    sunth8.style.transform="rotate(90deg)";
}
function Cmout8(){
    cimg8.style.transform="scale(1,1)";
    su8.style.transform="rotate(0deg)";
    heng8.style.transform="rotate(-180deg)";
    name8.style.marginTop=0+"px";
    sunth8.style.transform="rotate(0deg)";
}
var content9=document.getElementById("content9");
var su9=document.getElementById("su9");
var heng9=document.getElementById("heng9");
function Cmover9(){
    content9.style.cursor="pointer";
    su9.style.transform="rotate(90deg)";
    heng9.style.transform="rotate(90deg)";
}
function Cmout9(){
    su9.style.transform="rotate(0deg)";
    heng9.style.transform="rotate(0deg)";
}
var kuai=document.getElementById("Kuai");
var kuai1=document.getElementById("Kuai1");
var kuai2=document.getElementById("Kuai2");
var kuai3=document.getElementById("Kuai3");
var logo=document.getElementById("logo2");
var menu=document.getElementById("menu");
var bdimg=document.getElementById("backgroundImg");
var ti=document.getElementById("Title");
var cont=document.getElementById("content");
var footer1=document.getElementById("Footer1");
var footer2=document.getElementById("Footer2");
//对菜单图标的样式做个控制
function caidanover(){
    kuai.style.cursor="pointer";
    if(parseInt(menu.style.marginLeft)==-1200){
        kuai1.style.marginTop=-3+"px";
        kuai3.style.marginTop=3+"px";
    }
    else{
        kuai1.style.marginTop=0+"px";
        kuai3.style.marginTop=0+"px";
    }
}
function caidanout(){
    kuai.style.cursor="pointer";
    kuai1.style.marginTop=0+"px";
    kuai3.style.marginTop=0+"px";
}
//实现点击移出菜单
function Tomenu(){
    kuai1.style.marginTop=0+"px";
    kuai3.style.marginTop=0+"px";
    if(parseInt(menu.style.marginLeft)==-1200){
        menu.style.marginLeft=0+"px";
        kuai1.style.top=15+"px";
        kuai3.style.top=15+"px";
        kuai1.style.transform="rotate(45deg)";
        kuai3.style.transform="rotate(-45deg)";
        kuai2.style.display="none";
        bdimg.style.display="none";
        ti.style.display="none";
        cont.style.display="none";
        footer1.style.display="none";
        footer2.style.display="none";
    }
    else{
        menu.style.marginLeft=-1200+"px";
        kuai1.style.top=9+"px";
        kuai3.style.top=21+"px";
        kuai1.style.transform="rotate(0deg)";
        kuai3.style.transform="rotate(0deg)";
        kuai2.style.display="block";
        bdimg.style.display="block";
        ti.style.display="block";
        cont.style.display="block";
        footer1.style.display="block";
        footer2.style.display="block";
    }
}
//滑动滚动条出现隐藏菜单背景框并改变颜色
setInterval(huaDong,1);
function huaDong(){
    if(window.document.body.scrollTop>0){
        juxing4.style.marginTop=0+"px";
        juxing4.style.backgroundColor="white";
        //juxing4.style.opacity=0.95;
        logo.style.color="black";
        kuai1.style.backgroundColor="black";
        kuai2.style.backgroundColor="black";
        kuai3.style.backgroundColor="black";
        box.style.height=634+"px";
    }
    else{
        juxing4.style.marginTop=-62+"px";
        juxing4.style.backgroundColor="#51EBCD";
        juxing4.style.opacity=1;
        logo.style.color="white";
        kuai1.style.backgroundColor="white";
        kuai2.style.backgroundColor="white";
        kuai3.style.backgroundColor="white";
        box.style.height=2685+"px";
    }
}
var backtop=document.getElementById("Backtop");
var juxing1=document.getElementById("Juxing1");
//控制返回箭头的颜色样式转换
function overcolor(){
    backtop.style.color="#55f7d7";
    juxing1.style.backgroundColor="#55f7d7";
    backtop.style.cursor="pointer";
}
function outcolor(){
    backtop.style.color="white";
    juxing1.style.backgroundColor="white";
}
var nowscrolly,Xtop;
var juxing4=document.getElementById("Juxing4");
//实现返回顶部的控制
function Totop(){
    Xtop=setInterval(settop,50);
}
function settop(){
    if(nowscrolly<=0){
        clearInterval(Xtop);
        juxing4.style.marginTop=-62+"px";
        juxing4.style.backgroundColor="#51EBCD";
        juxing4.style.opacity=1;
    }
    else{
        window.document.body.scrollTop=window.document.body.scrollTop-100;
        nowscrolly=window.document.body.scrollTop;
    }
}
var jiantouLB=document.getElementById("jianTouLB");
//到内容箭头动画的控制，和鼠标移上加点击的事件
function jLBover(){
    jiantouLB.style.webkitAnimation="jtLB 0.5s linear 3";
}
function jLBout(){
    setTimeout(jLBout1,1500);
}
function jLBout1(){
    jiantouLB.style.webkitAnimation="";
}
var b;
function Tocontent(){
    nowscrolly=window.document.body.scrollTop;
    b=setInterval(Tocontent1,20);
}
function Tocontent1(){
    if(nowscrolly>=634){
        clearInterval(b);
    }
    else{
        window.document.body.scrollTop=window.document.body.scrollTop+100;
        nowscrolly=window.document.body.scrollTop;
    }
}
var c;
function XHjiantou(){
    jLBover();
    jLBout();
    c=setTimeout(XHjiantou,6000);
}
var content1=document.getElementById("content1");
var content2=document.getElementById("content2");
var content4=document.getElementById("content4");
var content5=document.getElementById("content5");
var content6=document.getElementById("content6");
var content8=document.getElementById("content8");
var content9=document.getElementById("content9");
content1.style.marginTop=400+"px";
content2.style.marginTop=320+"px";
content3.style.marginTop=400+"px";
content4.style.marginTop=400+"px";
content5.style.marginTop=400+"px";
content6.style.marginTop=400+"px";
content7.style.marginTop=500+"px";
content8.style.marginTop=320+"px";
content9.style.marginTop=400+"px";
var v;
//实现页面初始化时，当滚动条滑到一定程度，内容会知道漂浮到指定位置。
function CScontent(){
    nowscrolly=window.document.body.scrollTop;
    console.log(window.document.body.scrollTop);
    if(nowscrolly>=300){
        setTimeout("content1.style.marginTop=0+'px'",0);
        setTimeout("content2.style.marginTop=0+'px'",300);
        setTimeout("content3.style.marginTop=0+'px'",600);
    }
    if(nowscrolly>=600){
        setTimeout("content4.style.marginTop=0+'px'",0);
    }
    if(nowscrolly>=700){
        setTimeout("content5.style.marginTop=0+'px'",0);
        setTimeout("content6.style.marginTop=0+'px'",300);
    }
    if(nowscrolly>=750){
        setTimeout("content7.style.marginTop=0+'px'",0);
    }
    if(nowscrolly>=1000){
        setTimeout("content9.style.marginTop=0+'px'",0);
    }
    if(nowscrolly>=1100){
        setTimeout("content8.style.marginTop=0+'px'",0);
        clearInterval(v);
    }
}
function kongzhiCScontent(){
    v=setInterval(CScontent,50);
}
var tu1=document.getElementById("Tu1");
var tu2=document.getElementById("Tu2");
var tu3=document.getElementById("Tu3");
var dsize1=document.getElementById("DSize1");
var dsize2=document.getElementById("DSize2");
var dsize3=document.getElementById("DSize3");
var dian1=document.getElementById("Dian1");
var dian2=document.getElementById("Dian2");
var dian3=document.getElementById("Dian3");
var number=1;
var p,q;
dsize1.style.marginTop=0+"px";
dsize2.style.marginTop=400+"px";
dsize3.style.marginTop=400+"px";
dian1.style.backgroundColor="rgba(255,255,255,0)";
function LB(){
    clearTimeout(b);
    if(number==1){
        tu1.style.marginLeft=0+"px";
        tu3.style.marginLeft=-1200+"px";
        setTimeout(LBcengci,600);
        setTimeout(function(){
            tu3.style.marginLeft=0+"px";
            wenzi();
        },1000);
        setTimeout(function(){
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },3000);
    }
    if(number==2){
        tu2.style.marginLeft=0+"px";
        tu1.style.marginLeft=-1200+"px";
        setTimeout(LBcengci,600);
        setTimeout(function(){
            tu1.style.marginLeft=0+"px";
            wenzi();
        },1000);
        setTimeout(function(){
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },3000);
    }
    if(number==3){
        tu3.style.marginLeft=0+"px";
        tu2.style.marginLeft=-1200+"px";
        setTimeout(LBcengci,600);
        setTimeout(function(){
            tu2.style.marginLeft=0+"px";
            wenzi();
        },1000);
        setTimeout(function(){
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },3000);
    }
    p=setTimeout(LB,3100);
}
function LBcengci(){
    if(number==1){
        tu1.style.zIndex=16;
        tu2.style.zIndex=15;
        tu3.style.zIndex=14;
    }
    if(number==2){
        tu1.style.zIndex=14;
        tu2.style.zIndex=16;
        tu3.style.zIndex=15;
    }
    if(number==3){
        tu1.style.zIndex=15;
        tu2.style.zIndex=14;
        tu3.style.zIndex=16;
    }
}
function wenzi(){
    if(number==1){
        dsize1.style.marginTop=0+"px";
        dian1.style.marginTop=0+"px";
        dian2.style.marginTop=0+"px";
        dian3.style.marginTop=0+"px";
        dian1.style.backgroundColor="rgba(255,255,255,0)";
        dian2.style.backgroundColor="rgba(255,255,255,1)";
        dian3.style.backgroundColor="rgba(255,255,255,1)";
        number=number+1;
    }
    else if(number==2){
        dsize2.style.marginTop=0+"px";
        dian1.style.marginTop=0+"px";
        dian2.style.marginTop=0+"px";
        dian3.style.marginTop=0+"px";
        dian1.style.backgroundColor="rgba(255,255,255,1)";
        dian2.style.backgroundColor="rgba(255,255,255,0)";
        dian3.style.backgroundColor="rgba(255,255,255,1)";
        number=number+1;
    }
    else if(number==3){
        dsize3.style.marginTop=0+"px";
        dian1.style.marginTop=0+"px";
        dian2.style.marginTop=0+"px";
        dian3.style.marginTop=0+"px";
        dian1.style.backgroundColor="rgba(255,255,255,1)";
        dian2.style.backgroundColor="rgba(255,255,255,1)";
        dian3.style.backgroundColor="rgba(255,255,255,0)";
        number=1;
    }
}
function Totu1(){
    clearTimeout(p);
    clearTimeout(q);
    if(number==3){
        tu1.style.zIndex=15;
        tu2.style.zIndex=16;
        tu3.style.zIndex=14;
        setTimeout(function(){
            tu1.style.marginLeft=0+"px";
        },100);
        setTimeout(function(){
            tu2.style.marginLeft=-1200+"px";
            tu3.style.marginLeft=-1200+"px";
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },700);
        setTimeout(function(){
            dsize1.style.marginTop=0+"px";
            dian1.style.marginTop=0+"px";
            dian2.style.marginTop=0+"px";
            dian3.style.marginTop=0+"px";
            dian1.style.backgroundColor="rgba(255,255,255,0)";
            dian2.style.backgroundColor="rgba(255,255,255,1)";
            dian3.style.backgroundColor="rgba(255,255,255,1)";
            tu1.style.zIndex=16;
            tu2.style.zIndex=15;
            tu3.style.zIndex=14;
        },1500);
        setTimeout(function(){
            tu2.style.marginLeft=0+"px";
            tu3.style.marginLeft=0+"px";
            number=2;
        },2000);
    }
    if(number==1){
        tu1.style.zIndex=15;
        tu2.style.zIndex=14;
        tu3.style.zIndex=16;
        setTimeout(function(){
            tu1.style.marginLeft=0+"px";
        },100);
        setTimeout(function(){
            tu2.style.marginLeft=-1200+"px";
            tu3.style.marginLeft=-1200+"px";
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },700);
        setTimeout(function(){
            dsize1.style.marginTop=0+"px";
            dian1.style.marginTop=0+"px";
            dian2.style.marginTop=0+"px";
            dian3.style.marginTop=0+"px";
            dian1.style.backgroundColor="rgba(255,255,255,0)";
            dian2.style.backgroundColor="rgba(255,255,255,1)";
            dian3.style.backgroundColor="rgba(255,255,255,1)";
            tu1.style.zIndex=16;
            tu2.style.zIndex=15;
            tu3.style.zIndex=14;
        },1500);
        setTimeout(function(){
            tu2.style.marginLeft=0+"px";
            tu3.style.marginLeft=0+"px";
            number=2;
        },2000);
    }
    if(number==2){
        return;
    }
    q=setTimeout(function(){
        dsize1.style.marginTop=400+"px";
        dsize2.style.marginTop=400+"px";
        dsize3.style.marginTop=400+"px";
        dian1.style.marginTop=400+"px";
        dian2.style.marginTop=400+"px";
        dian3.style.marginTop=400+"px";
        LB();
    },6000);
}
function Totu2(){
    clearTimeout(p);
    clearTimeout(q);
    if(number==3){
        tu1.style.zIndex=16;
        tu2.style.zIndex=15;
        tu3.style.zIndex=14;
        setTimeout(function(){
            tu2.style.marginLeft=0+"px";
        },100);
        setTimeout(function(){
            tu1.style.marginLeft=-1200+"px";
            tu3.style.marginLeft=-1200+"px";
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },700);
        setTimeout(function(){
            dsize2.style.marginTop=0+"px";
            dian1.style.marginTop=0+"px";
            dian2.style.marginTop=0+"px";
            dian3.style.marginTop=0+"px";
            dian1.style.backgroundColor="rgba(255,255,255,1)";
            dian2.style.backgroundColor="rgba(255,255,255,0)";
            dian3.style.backgroundColor="rgba(255,255,255,1)";
            tu1.style.zIndex=14;
            tu2.style.zIndex=16;
            tu3.style.zIndex=15;
        },1500);
        setTimeout(function(){
            tu1.style.marginLeft=0+"px";
            tu3.style.marginLeft=0+"px";
            number=3;
        },2000);
    }
    if(number==1){
        tu1.style.zIndex=14;
        tu2.style.zIndex=15;
        tu3.style.zIndex=16;
        setTimeout(function(){
            tu2.style.marginLeft=0+"px";
        },100);
        setTimeout(function(){
            tu1.style.marginLeft=-1200+"px";
            tu3.style.marginLeft=-1200+"px";
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },700);
        setTimeout(function(){
            dsize2.style.marginTop=0+"px";
            dian1.style.marginTop=0+"px";
            dian2.style.marginTop=0+"px";
            dian3.style.marginTop=0+"px";
            dian1.style.backgroundColor="rgba(255,255,255,1)";
            dian2.style.backgroundColor="rgba(255,255,255,0)";
            dian3.style.backgroundColor="rgba(255,255,255,1)";
            tu1.style.zIndex=14;
            tu2.style.zIndex=16;
            tu3.style.zIndex=15;
        },1500);
        setTimeout(function(){
            tu1.style.marginLeft=0+"px";
            tu3.style.marginLeft=0+"px";
            number=3;
        },2000);
    }
    if(number==3){
        return;
    }
    setTimeout(function(){
        dsize1.style.marginTop=400+"px";
        dsize2.style.marginTop=400+"px";
        dsize3.style.marginTop=400+"px";
        dian1.style.marginTop=400+"px";
        dian2.style.marginTop=400+"px";
        dian3.style.marginTop=400+"px";
        LB();
    },6000);
}
function Totu3(){
    clearTimeout(p);
    clearTimeout(q);
    if(number==2){
        tu1.style.zIndex=16;
        tu2.style.zIndex=14;
        tu3.style.zIndex=15;
        setTimeout(function(){
            tu3.style.marginLeft=0+"px";
        },100);
        setTimeout(function(){
            tu1.style.marginLeft=-1200+"px";
            tu2.style.marginLeft=-1200+"px";
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },700);
        setTimeout(function(){
            dsize3.style.marginTop=0+"px";
            dian1.style.marginTop=0+"px";
            dian2.style.marginTop=0+"px";
            dian3.style.marginTop=0+"px";
            dian1.style.backgroundColor="rgba(255,255,255,1)";
            dian2.style.backgroundColor="rgba(255,255,255,1)";
            dian3.style.backgroundColor="rgba(255,255,255,0)";
            tu1.style.zIndex=15;
            tu2.style.zIndex=14;
            tu3.style.zIndex=16;
        },1500);
        setTimeout(function(){
            tu1.style.marginLeft=0+"px";
            tu2.style.marginLeft=0+"px";
            number=1;
        },2000);
    }
    if(number==3){
        tu1.style.zIndex=14;
        tu2.style.zIndex=16;
        tu3.style.zIndex=15;
        setTimeout(function(){
            tu3.style.marginLeft=0+"px";
        },100);
        setTimeout(function(){
            tu1.style.marginLeft=-1200+"px";
            tu2.style.marginLeft=-1200+"px";
            dsize1.style.marginTop=400+"px";
            dsize2.style.marginTop=400+"px";
            dsize3.style.marginTop=400+"px";
            dian1.style.marginTop=400+"px";
            dian2.style.marginTop=400+"px";
            dian3.style.marginTop=400+"px";
        },700);
        setTimeout(function(){
            dsize3.style.marginTop=0+"px";
            dian1.style.marginTop=0+"px";
            dian2.style.marginTop=0+"px";
            dian3.style.marginTop=0+"px";
            dian1.style.backgroundColor="rgba(255,255,255,1)";
            dian2.style.backgroundColor="rgba(255,255,255,1)";
            dian3.style.backgroundColor="rgba(255,255,255,0)";
            tu1.style.zIndex=15;
            tu2.style.zIndex=14;
            tu3.style.zIndex=16;
        },1500);
        setTimeout(function(){
            tu1.style.marginLeft=0+"px";
            tu2.style.marginLeft=0+"px";
            number=1;
        },2000);
    }
    if(number==1){
        return;
    }
    q=setTimeout(function(){
        dsize1.style.marginTop=400+"px";
        dsize2.style.marginTop=400+"px";
        dsize3.style.marginTop=400+"px";
        dian1.style.marginTop=400+"px";
        dian2.style.marginTop=400+"px";
        dian3.style.marginTop=400+"px";
        LB();
    },6000);
}
//页面加载实现的效果函数
function start(){
    kongzhiCScontent();
    XHjiantou();
    LB();
}