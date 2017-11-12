window.onload=function(){
	var allfont=16;
	//var pic=document.getElementById("pic");
	//    pic.style.height=screen.width/allfont+"rem";
		//alert(pic.style.height);
	var wrapper=document.getElementById("wrapper");
	    wrapper.style.top=(screen.width-86.4)/allfont+"rem"; 
	var myVedio=document.getElementById("song");
	var plays=document.getElementById("plays");
	if (myVedio.pause==0){
		plays.src=("image/pauseBigIcon.png");
	}else{plays.src=("image/playBigIcon.png");}
		plays.onclick=function(){
	        if(myVedio.paused==0){
			   myVedio.pause();
			   plays.src=("image/playBigIcon.png");
			 }
			 else{
			   myVedio.play();
			   plays.src=("image/pauseBigIcon.png");
			}
		}
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
	var timer=setInterval(function(){
		starttime.innerHTML=formatSeconds(myVedio.currentTime);
	},500);
	var stoptime=document.getElementById("stoptime");
        stoptime.innerHTML=formatSeconds(myVedio.duration);
	var barWidth=(screen.width-152)/allfont;
	var bar=document.getElementById("bar");
	    bar.style.width=barWidth+"rem";
	var bars=document.getElementById("bars");
	var move=document.getElementById("move");
	var timers=setInterval(function(){
		move.style.marginLeft=myVedio.currentTime/myVedio.duration*barWidth+"rem";
		bars.style.width=move.style.marginLeft;
	},10)
    var progressBar=document.getElementById("progress-bar");
	var x=0;
	    progressBar.addEventListener('touchstart', function(event) {
			if (event.targetTouches.length == 1) {	
			    var touch = event.targetTouches[0]; 
				if(myVedio.play==1){
					x=1;
				}
				myVedio.pause();
			}
		},false);
	    progressBar.addEventListener('touchmove', function(event) {
        if (event.targetTouches.length == 1) {	
			//clearInterval(timers);   			
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
		}, false);
		progressBar.addEventListener('touchend', function(event) { 
        if (event.targetTouches.length == 0) {
			timers=setInterval(function(){
		move.style.marginLeft=myVedio.currentTime/myVedio.duration*barWidth+"rem";
		bars.style.width=move.style.marginLeft;
	},10)
        }
    }, false);
	}// JavaScript Document
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	