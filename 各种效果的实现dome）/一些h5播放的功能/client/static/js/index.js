
//音乐播放
var audio = document.getElementById("audio");
var progress = document.getElementById('progress');
var playpause = document.getElementById("play-pause");

audio.controls = false;

audio.addEventListener('timeupdate', function() {
  	updateProgress();
}, false);
//音乐播放状态切换
function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "Pause";
      playpause.src = 'static/image/playIcon.png';
      audio.play();
   } else {
      playpause.title = "Play";
      playpause.src = 'static/image/pauseIcon.png';
      audio.pause();
   }
}
//音乐播放时进度条
function updateProgress() {
	var percent = Math.floor((100 / audio.duration) * audio.currentTime);
	progress.value = percent;
	var canvas = document.getElementById('progress');
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = 150;
	var circ = Math.PI * 2;
	var quart = Math.PI / 2;
	var cpercent = percent / 100;
	context.beginPath();
	context.arc(centerX, centerY, radius, 0, ((circ) * cpercent), false);
	context.lineWidth = 5;
	context.strokeStyle = '#FE9827';
	context.stroke();
	if (audio.ended) resetPlayer();
}
//音乐播放完后重置
function resetPlayer() {
	  audio.currentTime = 0;
	var canvas = document.getElementById('progress');
	var context = canvas.getContext('2d');
	context.clearRect(0,0,canvas.width,canvas.height);
  	playpause.title = "Play";
	playpause.src = 'static/image/pauseIcon.png';
}