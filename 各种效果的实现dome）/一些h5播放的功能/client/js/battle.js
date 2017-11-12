window.onload=function(){
    var allfont=16;
    var myVedio1=document.getElementById("song1");
    var myVedio2=document.getElementById("song2");
    var man1play=document.getElementById("man1");
    var man2play=document.getElementById("man2");
	var myVedio = null;
	var bars=document.getElementById("bars");
	var move=document.getElementById("move");
	var barWidth=(screen.width-152)/allfont;
	var pBarTouchmoveHandler = function(event){
        if (event.targetTouches.length == 1) {	
			clearInterval(timers);		
            var touch = event.targetTouches[0];	
			var spanX=(touch.pageX-80)/allfont;
			move.style.marginLeft=spanX+"rem";
			if(spanX<0){
				move.style.marginLeft=0;
			}
			if(spanX>barWidth){
				move.style.marginLeft=barWidth+"rem";
				}
			bars.style.width=move.style.marginLeft;
			myVedio.currentTime=spanX*myVedio.duration/barWidth;
			}
	}
	var pBarTouchendHandler = function(event){ 
        if (event.targetTouches.length == 0) {
		clearInterval(timers);
			timers=setInterval(function(){
		move.style.marginLeft=myVedio.currentTime/myVedio.duration*barWidth+"rem";
		bars.style.width=move.style.marginLeft;
	},10)
        }
    }
		man1play.onclick=function(){
			 if(myVedio1.paused==0){
			   myVedio1.pause();
			   man1play.src=("image/播放.png");
			 }else{
			   myVedio2.pause();
			   man2play.src=("image/播放.png");
			   myVedio1.play();
			   man1play.src=("image/暂停.png");
			   myVedio=myVedio1;
               playerStart();			   
			}
			}
		man2play.onclick=function(){
			if(myVedio2.paused==0){
			   myVedio2.pause();
			   man2play.src=("image/播放.png");
			 }
			 else{
			   myVedio1.pause();
			   man1play.src=("image/播放.png");
			   myVedio2.play();
			   man2play.src=("image/暂停.png");
			   myVedio=myVedio2;
			   playerStart();
			}
			}
	var proportion=document.getElementById("proportion");
    var proportions=document.getElementById("proportions");	
	var p1=document.getElementById("p1");
	var p2=document.getElementById("p2");
	var p1value=parseInt(p1.innerText);
	var p2value=parseInt(p2.innerText);
	    proportions.style.width=proportion.offsetWidth*p1value/(p1value+p2value)/allfont+"rem";
	function formatSeconds(timer){
        var theTime = parseInt(timer);// 秒
        var theTime1 = 0;// 分
		var theTimer=0
        if(theTime > 60) {
           theTime1 = parseInt(theTime/60);
           theTime = parseInt(theTime%60);
		   if(theTime1<10){theTime1="0"+theTime1;}
		   if(theTime<10){theTime="0"+theTime;}
		   theTimer=theTime1+":"+theTime;
		}else{
			if(theTime<10){theTime="0"+theTime;}
			theTimer="00"+":"+theTime;
			}
		return theTimer;
	}
	var starttime=document.getElementById("starttime");
	var stoptime=document.getElementById("stoptime");
	var timer = null;
	var timers = null;
	function playerStart(){ 
	    var progressBar=document.getElementById("progress-bar");
		clearInterval(timer);
		clearInterval(timers);
		starttime.innerHTML=formatSeconds(myVedio.currentTime);
	 timer=setInterval(function(){
		starttime.innerHTML=formatSeconds(myVedio.currentTime);
	},500);
        stoptime.innerHTML=formatSeconds(myVedio.duration);
	var bar=document.getElementById("bar");
	    bar.style.width=barWidth+"rem";

	    progressBar.removeEventListener('touchmove', pBarTouchmoveHandler, false);
		progressBar.removeEventListener('touchend', pBarTouchendHandler , false);
	
	 timers=setInterval(function(){
		move.style.marginLeft=myVedio.currentTime/myVedio.duration*barWidth+"rem";
		bars.style.width=move.style.marginLeft;
	},10);
	    progressBar.addEventListener('touchmove', pBarTouchmoveHandler, false);
		progressBar.addEventListener('touchend', pBarTouchendHandler , false);
	}
	
	
}