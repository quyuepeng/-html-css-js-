$("#bes").css({"backgroundColor":"black"});
function xunhuan(){
    var a=document.documentElement.clientWidth;
    var heig=  document.body.scrollTop
    if(heig>=420){
        $("#imftus").css({"opacity":"1"});
    }
}
setInterval(xunhuan,100)