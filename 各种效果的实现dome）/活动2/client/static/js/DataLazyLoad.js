(function($, window, undefined) {
	$.fn.DataLazyLoad = function(options) {
		var elements = $(this);
		var settings = {
			offset: 200,
			load: function() {},
			page: 2
		};
		if (options) {
			$.extend(settings, options);
		}
		var winHeight = $(window).height();
		var locked = false;
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			var offset = $(elements).offset().top + $(elements).height() - (scrollTop + winHeight);
			if (offset < settings.offset && !locked) {
				locked = true;
				settings.load(settings.page, function() {
					locked = false;
				});
			}
			if (offset = 0) {
				$("#picList").go(0)
			}
		});
	};
	$.fn.DataLazyLoad = function(options) {
		var elements = $(this);
		var settings = {
			offset: 200,
			load: function() {},
			page: 2
		};
		if (options) {
			$.extend(settings, options);
		}
		var winHeight = $(window).height();
		var locked = false;
		var unLock = function(nextPage) {
			if (nextPage > 0) {
				settings.page = nextPage;
				locked = false;
			}
		};
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			var offset = $(elements).offset().top + $(elements).height() - (scrollTop + winHeight);
			if (offset < settings.offset && !locked) {
				locked = true;
				settings.load(settings.page, unLock);
			}
		});
	}
})(jQuery, window);
$(function() {
	$("#picList").DataLazyLoad({
		load: function(page, unLocked) {
			var html =  document.getElementById("picList");
			for (x = 10; x < 30; x++) {
				html += '<div class="rankingContent">'
				+'<audio src="static/Hello.mp3" class="audio"></audio>'
				+'<div class="rankingList">'
				+'<div class="rankingNumber">'+(x+1)+'</div>'
				+'<div class="contentDetail">'
				+'<div class="songPic"><img src="static/image/qq.jpg" alt=""/></div>'
				+'<p class="songName">总有刁民想害朕</p>'
				+'<p class="author">菲姐传奇</p>'
				+'<div class="listenAndCommentIndex">'
				+'<img src="static/image/home_icon_listen.png" alt=""/>'
				+'<span>9999</span>'
				+'<img src="static/image/home_icon_comment.png" alt="" class="commentImg"/>'
				+'<span>99</span>'
				+'</div>'
				+'<div class="playBtn">'
				+'<img src="static/image/find_activity_stop.png" alt="" class="play"/>'
				+'</div>'
				+'</div>'
				+'</div>'
				+'</div>';
			}
			$(html).appendTo('#picList');
			//Check whether to end
			//page = page >= max ? 0 : page + 1;
			////To prevent repeated load, The first parameter to the next page, No page is 0
			//unLocked(page);
			//if (page == 0) {
			//	$("<li class = 'h2'>The End!</li>").appendTo('#picList');
			//}
		}
	});
});