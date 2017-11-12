 //mui初始化
			mui.init({
				swipeBack: true //启用右滑关闭功能
			});
			document.getElementById("pickDateBtn").addEventListener('tap', function() {
				var dDate = new Date();
				dDate.setFullYear(2014, 7, 16);
				var minDate = new Date();
				minDate.setFullYear(2010, 0, 1);
				var maxDate = new Date();
				maxDate.setFullYear(2016, 11, 31);
				plus.nativeUI.pickDate(function(e) {
					var d = e.date;
					pickDateBtn.innerText = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
				}, function(e) {
					pickDateBtn.innerText = "您没有选择日期";
				}, {
					title: "请选择日期",
					date: dDate,
					minDate: minDate,
					maxDate: maxDate
				});
			})