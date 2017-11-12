var maps=document.getElementById("maps");
var ifmaps=document.getElementById("ifmaps");
var cenimg=document.getElementsByClassName("cenimg");
var wenzijieshao=document.getElementsByClassName("wenzijieshao");

$(".wenzisian").hide();
$("#imftus").css({"opacity":"0","transition": "all 1s linear 0.5s"});

function mapsss(){
    var a=document.documentElement.clientWidth;
    var b=maps.style.height=a*0.3+"px";
    var c=document.body.clientWidth;
    var heig=  document.body.scrollTop
    ifmaps.style.height=b;
    if(heig>=0){
        $(".wenzisian").fadeIn("slow");
    }
    var simg=getStyle(cenimg[0],"height");
    $(".cen").css({"height":simg,"width":simg})
    if(heig>=1400){
        $("#imftus").css({"opacity":"1"});
    }
    if(heig>=2800){
        wenzijieshao[0].style.marginLeft="0px"
    }
    if(heig>=3200){
        wenzijieshao[1].style.marginLeft="0px"
    }
    if(heig>=3500){
        wenzijieshao[2].style.marginLeft="0px"
    }
    if(heig>=4200){
        $(".inpusrc").css({"marginLeft":"0px"});
    }
    if(c>=1200){
        if(heig>=750){
            $("#bannernavdix").addClass("navbar-fixed-top");
            $("#bannernavdix").css({"marginTop":"0px"})
        }else{
            $("#bannernavdix").removeClass("navbar-fixed-top")
            $("#bannernavdix").css({"marginTop":"2%"})
        }
    }
    if(c<1200&&c>=960){
        if(heig>=500){
            $("#bannernavdix").addClass("navbar-fixed-top");
            $("#bannernavdix").css({"marginTop":"0px"})
        }else{

            $("#bannernavdix").removeClass("navbar-fixed-top")
            $("#bannernavdix").css({"marginTop":"2%"})
        }
    }
    if(c<960&&c>=740){
        if(heig>=500){
            $("#bannernavdix").addClass("navbar-fixed-top");
            $("#bannernavdix").css({"marginTop":"0px"})
        }else{

            $("#bannernavdix").removeClass("navbar-fixed-top")
            $("#bannernavdix").css({"marginTop":"2%"})
        }
    }
    if(c<740&&c>=480){
        if(heig>=500){
            $("#bannernavdix").addClass("navbar-fixed-top");
            $("#bannernavdix").css({"marginTop":"0px"})
        }else{

            $("#bannernavdix").removeClass("navbar-fixed-top")
            $("#bannernavdix").css({"marginTop":"2%"})
        }
    }
    if(c<480){
        if(heig>=210){
            $("#bannernavdix").addClass("navbar-fixed-top");
            $("#bannernavdix").css({"marginTop":"0px"})
        }else{

            $("#bannernavdix").removeClass("navbar-fixed-top")
            $("#bannernavdix").css({"marginTop":"2%"})
        }
    }
}
setInterval(mapsss,100)
function getStyle(node, property){
    if (node.style[property]) {
        return node.style[property];
    }else if (node.currentStyle){
        return node.currentStyle[property];
    }else if (document.defaultView && document.defaultView.getComputedStyle){
        var style = document.defaultView.getComputedStyle(node, null);
        return style.getPropertyValue(property);
    }
return null;
}


