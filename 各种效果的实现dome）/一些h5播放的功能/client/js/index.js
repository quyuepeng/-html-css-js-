/**
 * Created by Administrator on 2016/4/9.
 */
var header = document.getElementById("header");
var toNext = document.getElementById("to_next");
var toTop = document.getElementById("to_top");
var bannerOP = document.getElementsByClassName("bannerOP");//轮播图
var bannerCircle = document.getElementsByClassName("circle");//小圆点
var bannerNode = document.getElementById("banner_node");
var addP = document.getElementsByClassName("addP");//瀑布流赶脚
var nav = document.getElementById("nav");//导航按钮
var navS = nav.getElementsByTagName("div");//三横杆菜单
var navAll = document.getElementById("nav_all");//导航页
var loading = document.getElementById("loading");//加载中
var all = document.getElementById("all");//全部内容
var timer;//轮播点击定时器
var timer0;//自动轮播定时器
var timer1;
var num = 0;//当前轮播位置
var num2;//自动轮播位置


window.onload = function (){
    setTimeout(login,Math.round(Math.random()*5000));
};
function autoB(){//自动轮播
    num2 = num + 1;
    if(num2 >2){
        num2 = 0;
    }
    cClick(bannerCircle[num2]);
}
function weizhi(){//导航栏移动变色+ 瀑布流


    //console.log(document.body.scrollTop);
    if(document.body.scrollTop >1){
        header.style.backgroundColor = "rgba(255,255,255,.95)";
        header.style.color = "black";
        for(var i=0; i<navS.length;i++){
            navS[i].style.backgroundColor = "black";
        }
        header.style.height = "50px";
    }else{
        header.setAttribute("style","");
        for(var j=0; j<navS.length;j++){
            navS[j].setAttribute("style","");
        }
        header.style.height = "5px";
        header.style.width = "100%";
    }

    if(document.body.scrollTop > 300){//第一行
        addP[0].style.marginTop= "0";
        addP[0].style.opacity = 1;
        setTimeout(function (){addP[4].style.marginTop= "0";addP[4].style.opacity = 1;},200);
        setTimeout(function (){addP[7].style.marginTop= "0";addP[7].style.opacity = 1;},400);
    }
    if(document.body.scrollTop > 600){//第二行
        addP[1].style.marginTop= "30px";
        addP[1].style.opacity = 1;
        setTimeout(function (){addP[2].style.marginTop= "0";addP[2].style.opacity = 1;},200);
        setTimeout(function (){addP[5].style.marginTop= "0";addP[5].style.opacity = 1;},400);
        setTimeout(function (){addP[8].style.marginTop= "0";addP[8].style.opacity = 1;},600);
    }
    if(document.body.scrollTop > 1000){//第三行
        addP[3].style.marginTop= "0";
        addP[3].style.opacity = 1;
        setTimeout(function (){addP[6].style.marginTop= "0";addP[6].style.opacity = 1;},200);
    }

}

function navClick(){//展开菜单栏
    if(navS[1].style.display != "none"){
        color =document.defaultView.getComputedStyle(header,null).color;
        bColor = document.defaultView.getComputedStyle(header,null).backgroundColor;
        navAll.style.left = "0";
        document.body.style.overflowY = "hidden";
        header.style.color = "white";
        header.style.backgroundColor = "rgba(0,0,0,0)";
        navS[0].style.backgroundColor = "white";
        navS[0].style.webkitTransform = "rotate(45deg)";
        navS[0].style.marginTop = "15px";
        navS[1].style.display = "none";
        navS[2].style.backgroundColor = "white";
        navS[2].style.webkitTransform = "rotate(-45deg)";
        navS[2].style.marginTop = "-4px";
    }else{
        for(var i=0;i<navS.length;i++){
            navS[i].setAttribute("style","");
        }
        navAll.style.left = "-1366px";
        document.body.removeAttribute("style");
        if(document.body.scrollTop >1){
            header.style.backgroundColor = "rgba(255,255,255,.95)";
            header.style.color = "black";
            for(var k=0; k<navS.length;k++){
                navS[k].style.backgroundColor = "black";
            }
        }else{
            header.setAttribute("style","");
            for(var j=0; j<navS.length;j++){
                navS[j].setAttribute("style","");
            }
        }
    }


}


toNext.onclick = function (){//banner边按钮向下
        timer1=setInterval(function(){
            document.body.scrollTop = document.body.scrollTop + 57;
            if(document.body.scrollTop>= 620){
                clearInterval(timer1);
                document.body.scrollTop = 620;
            }
        },30)
};

toTop.onclick = function (){//返回顶部
    var nowScroll = document.body.scrollTop;//

    timer1=setInterval(function(){//当返回顶部或鼠标滚动时停止定时器
        if(document.body.scrollTop<1 || document.body.scrollTop > nowScroll){
            clearInterval(timer1);
        }else{
            document.body.scrollTop = document.body.scrollTop - 80;
            nowScroll  = document.body.scrollTop;
        }
    },30)
};

//点击第一个小圆点

function cClick(obj) {
    for (var j = 0; j < bannerCircle.length; j++) {
        if (bannerCircle[j] == obj) {
            bannerCircle[j].style.backgroundColor = "rgba(0,0,0,0)";
            bannerOP[j].style.width = "1349px";
            bannerOP[j].style.left = "0";
            bannerOP[j].style.zIndex = "22";
            bannerOP[j].style.webkitTransition = "all 1s linear";
            clearTimeout(timer);
            clearInterval(timer0);
            timer0 = setInterval(autoB,5000);
            //bannerN(j);
            num = j;
            bannerNode.style.bottom = "-400px";//banner文字
            setTimeout(function() {bannerNode.style.bottom = "50px";},1000)
        } else {
            bannerCircle[j].setAttribute("style", "");
            bannerOP[j].style.left = "-1349px";
            bannerOP[j].style.webkitTransition = "all 1s linear";
            timer = setTimeout(a,1000);
            //bannerOP[j].setAttribute("style", "");
            bannerOP[j].style.zIndex = 0;
        }
    }
}
function a(){//清除设置样式
    for(var i=0;i<bannerOP.length;i++){
        if(i == num){
            bannerN(i);
        }else{
            bannerOP[i].setAttribute("style", "");
        }
    }
}
function bannerN(number){//轮播文字
    var h4=bannerNode.getElementsByTagName("h4")[0];
    var h3=bannerNode.getElementsByTagName("h3")[0];
    if(number == 0){
        h4.innerHTML = "Scribner Publishing";
        h3.innerHTML ="STEPHEN KING SHINES ON.";
    }else if(number == 1){
        h4.innerHTML = "New England Aquarium";
        h3.innerHTML ="A WORLD BELOW THE SURFACE.";
    }else if(number == 2){
        h4.innerHTML = "Oribe";
        h3.innerHTML ="STYLE. LUXURY. BEAUTY.";
    }
}

function login(){
    loading.setAttribute("style","");
    all.style.display = "block";
    loading.style.display = "none";
    header.style.width = "100%";

    bannerOP[0].style.width= "1349px";
    bannerOP[0].style.left = "0";
    bannerCircle[0].style.backgroundColor= "rgba(0,0,0,0)";

    for(var i = 0; i<addP.length;i++){//瀑布流前提
        addP[i].style.marginTop = "120px";
        addP[i].style.opacity = 0;
    }

    timer0 = setInterval(autoB,5000);
}