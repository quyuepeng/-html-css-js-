myFocus.pattern.extend({//*********************2010世博******************
	'mF_expo2010':function(settings,$){
		var $focus=$(settings);
		var $picList=$focus.find('.pic li');
		$picList.each(function(i){
			this.style.display='none';
		});
		//PLAY
		$focus.play(function(prev){
			$picList.eq(prev).fadeOut();
		},function(next,n,prev){
			$picList.eq(next).fadeIn();
		});
		//Control
		settings.delay=200;//固定其延迟
	}
});