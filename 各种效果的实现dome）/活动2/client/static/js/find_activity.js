/**
 * Created by a on 2017/2/8.
 */
var picList = document.getElementById("picList");
var divList = document.getElementById("divList");
var audio = document.getElementsByClassName("audio");
var audio2 = document.getElementsByClassName("audio2");
var playAudio = document.getElementsByClassName("play");
var playAudio2 = document.getElementsByClassName("newPlay");
var songSize = 30;
var j;
var token = window.demo.getToken();
function ToSignUp(){
    if(token == ""){
        mui.alert('你还未登录哦，请先登录！', '<img src="/static/image/smallPic.png" class="smallPic">', function () {
            window.location.href="javascript:demo.jumpToLogin()";
        });
    }else{
        window.location.href="find_activity_worksList.html";
    }
}
var activityId = window.demo.getActivityId();
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}
url = parseURL(location.href);
var activity_detail_hot_api_url = 'http://' + url.host + ':' + url.port + '/api/activity/song/hot?activityId=' + activityId+'&page=1&size='+songSize;
window.onload = function()
{
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    }
    else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            respHotData = JSON.parse(xmlhttp.responseText);
            if (0 == respHotData['status']){
                activityHotDetail = (respHotData['data']['songs']);
                autoPic();
            }else{
            document.getElementById("picList").innerHTML="TOP暂时没有排名哦！"
            }
            var x;
            function autoPic() { //TOP 30
                var topFirst = document.getElementById("topFirst");
                for (x = 0; x < 1; x++) {
                    topFirst.innerHTML = '<div class="rankingContent">'
                    + '<audio src=' + activityHotDetail['songUrl'] + ' class="audio"></audio>'
                    + '<div class="rankingList">'
                    + '<div class="rankingNumber"><img src="/static/image/find_ranking_number1.png" alt=""/></div>'
                    + '<div class="contentDetail">'
                    + '<div class="songPic"><img src=' + activityHotDetail['portrait'] + ' alt=""/></div>'
                    + '<p class="songName">' + activityHotDetail['songName'] + '</p>'
                    + '<p class="author">' + activityHotDetail['userName'] + '</p>'
                    + '<div class="listenAndCommentIndex">'
                    + '<img src="/static/image/home_icon_listen.png" alt=""/>'
                    + '<span>' + activityHotDetail['listenCount'] + '</span>'
                    + '<img src="/static/image/home_icon_comment.png" alt="" class="commentImg"/>'
                    + '<span>' + activityHotDetail['commentCount'] + '</span>'
                    + '</div>'
                    + '<div class="playBtn">'
                    + '<img src="/static/image/find_activity_stop.png" alt="" class="play"/>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                }
                var topSecond = document.getElementById("topSecond");
                for (x = 1; x < 2; x++) {
                    topSecond.innerHTML = '<div class="rankingContent">'
                    + '<audio src=' + activityHotDetail['songUrl'] + ' class="audio"></audio>'
                    + '<div class="rankingList">'
                    + '<div class="rankingNumber"><img src="/static/image/find_ranking_number2.png" alt=""/></div>'
                    + '<div class="contentDetail">'
                    + '<div class="songPic"><img src=' + activityHotDetail['portrait'] + ' alt=""/></div>'
                    + '<p class="songName">' + activityHotDetail['songName'] + '</p>'
                    + '<p class="author">' + activityHotDetail['userName'] + '</p>'
                    + '<div class="listenAndCommentIndex">'
                    + '<img src="/static/image/home_icon_listen.png" alt=""/>'
                    + '<span>' + activityHotDetail['listenCount'] + '</span>'
                    + '<img src="/static/image/home_icon_comment.png" alt="" class="commentImg"/>'
                    + '<span>' + activityHotDetail['commentCount'] + '</span>'
                    + '</div>'
                    + '<div class="playBtn">'
                    + '<img src="/static/image/find_activity_stop.png" alt="" class="play"/>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                }
                var topThird = document.getElementById("topThird");
                for (x = 2; x < 3; x++) {
                    topThird.innerHTML = '<div class="rankingContent">'
                    + '<audio src=' + activityHotDetail['songUrl'] + ' class="audio"></audio>'
                    + '<div class="rankingList">'
                    + '<div class="rankingNumber"><img src="/static/image/find_ranking_number3.png" alt=""/></div>'
                    + '<div class="contentDetail">'
                    + '<div class="songPic"><img src=' + activityHotDetail['portrait'] + ' alt=""/></div>'
                    + '<p class="songName">' + activityHotDetail['songName'] + '</p>'
                    + '<p class="author">' + activityHotDetail['userName'] + '</p>'
                    + '<div class="listenAndCommentIndex">'
                    + '<img src="/static/image/home_icon_listen.png" alt=""/>'
                    + '<span>' + activityHotDetail['listenCount'] + '</span>'
                    + '<img src="/static/image/home_icon_comment.png" alt="" class="commentImg"/>'
                    + '<span>' + activityHotDetail['commentCount'] + '</span>'
                    + '</div>'
                    + '<div class="playBtn">'
                    + '<img src="/static/image/find_activity_stop.png" alt="" class="play"/>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                }
                for (x = 3; x < 30; x++) {
                    picList.innerHTML += '<div class="rankingContent">'
                    + '<audio src=' + activityHotDetail[x]['songUrl'] + ' class="audio"></audio>'
                    + '<div class="rankingList">'
                    + '<div class="rankingNumber">' + (x + 1) + '</div>'
                    + '<div class="contentDetail">'
                    + '<div class="songPic"><img src=' + activityHotDetail[x]['portrait'] + ' alt=""/></div>'
                    + '<p class="songName">' + activityHotDetail[x]['songName'] + '</p>'
                    + '<p class="author">' + activityHotDetail[x]['userName'] + '</p>'
                    + '<div class="listenAndCommentIndex">'
                    + '<img src="/static/image/home_icon_listen.png" alt=""/>'
                    + '<span>' + activityHotDetail[x]['listenCount'] + '</span>'
                    + '<img src="/static/image/home_icon_comment.png" alt="" class="commentImg"/>'
                    + '<span>' + activityHotDetail[x]['commentCount'] + '</span>'
                    + '</div>'
                    + '<div class="playBtn">'
                    + '<img src="/static/image/find_activity_stop.png" alt="" class="play"/>'
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
                    $(".play").toggle(function () {
                            for (j = 0; j < x; j++) {
                                if (playAudio[j] == this) {
                                    playAudio[j].src = "/static/image/find_activity_play.png";
                                    audio[j].play();
                                } else {
                                    playAudio[j].src = "/static/image/find_activity_stop.png";
                                    audio[j].pause();
                                }
                            }
                        }, function () {
                            for (j = 0; j < x; j++) {
                                if (playAudio[j] == this) {
                                    playAudio[j].src = "/static/image/find_activity_stop.png";
                                    audio[j].pause();
                                }
                            }
                        }
                    );
                }
            }

        }
    };
    xmlhttp.open("GET",activity_detail_hot_api_url,true);
    //alert(activity_detail_hot_api_url);
    xmlhttp.send();
};

//new 30
var activity_detail_new_api_url = 'http://' + url.host + ':' + url.port + '/api/activity/song?activityId=' + activityId+'&page=1&size='+songSize;
function newContent(){
    var http;
    if (window.XMLHttpRequest) {
        http = new XMLHttpRequest();
    } else {
        http = new ActiveXObject("Microsoft.XmlHttp");
    }
    http.open("GET", activity_detail_new_api_url, true);
    //alert(activity_detail_new_api_url);
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            respNewData = JSON.parse(http.responseText);
            if (0 == respNewData['status']){
                var activityNewDetail = (respNewData['data']['songs']);
                autoDiv();
            }else{
                document.getElementById("divList").innerHTML="NEW暂时没有排名哦！"
            }
            var y;
            function autoDiv(){ // NEW 30
                for(y=0;y<30;y++){
                    divList.innerHTML +='<div class="rankingContent">'
                    +'<audio src='+activityNewDetail[y]['songUrl']+' class="audio2"></audio>'
                    +'<div class="rankingList">'
                    +'<div class="contentDetail newContentDetail">'
                    +'<div class="songPic"><img src='+activityNewDetail[y]['portrait']+' alt=""/></div>'
                    +'<p class="songName">'+activityNewDetail[y]['songName']+'</p>'
                    +'<p class="author">'+activityNewDetail[y]['userName']+'</p>'
                    +'<div class="listenAndCommentIndex">'
                    +'<img src="/static/image/home_icon_listen.png" alt=""/>'
                    +'<span>'+activityNewDetail[y]['listenCount']+'</span>'
                    +'<img src="/static/image/home_icon_comment.png" alt="" class="commentImg"/>'
                    +'<span>'+activityNewDetail[y]['commentCount']+'</span>'
                    +'</div>'
                    +'<div class="playBtn">'
                    +'<img src="/static/image/find_activity_stop.png" alt="" class="newPlay"/>'
                    +'</div>'
                    +'</div>'
                    +'</div>'
                    +'</div>';
                    $(".newPlay").toggle(function () {
                            for(j=0;j<y;j++){
                                if(playAudio2[j]== this){
                                    playAudio2[j].src="/static/image/find_activity_play.png";
                                    audio2[j].play();
                                }else{
                                    playAudio2[j].src="/static/image/find_activity_stop.png";
                                    audio2[j].pause();
                                }
                            }
                        },function(){
                            for(j=0;j<y;j++){
                                if(playAudio2[j]== this){
                                    playAudio2[j].src="/static/image/find_activity_stop.png";
                                    audio2[j].pause();
                                }
                            }
                        }
                    );
                }
            }
        }
    }
}newContent();
//滚动条事件
setInterval(rollingEvent,1);
function rollingEvent(){
    if(window.document.body.scrollTop>0){
        $(".indexNav").css("background-color","rgba(0,0,0,1)");
    }else{
        $(".indexNav").css("background-color","rgba(0,0,0,0)");
    }
}
//分享
var flag=0;
$(".shareBtn").click(function(){
    $('body,html').animate({scrollTop:0},10);
    $(".find_activity_meng").show();
    $(".find_activity_share").show();
    flag=1;
});
$(".find_activity_close").click(function(){
    $(".find_activity_meng").hide();
    $(".find_activity_share").hide();
    flag=0;
});
document.addEventListener('touchmove', function (event) {
    if(flag == 1){
        event.preventDefault(); //阻止默认事件
    }　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
});
$('.activity_share_rapsay').click(function(){
    alert('分享到你说');
    //window.location.href=''
});
$('.activity_share_pengyouquan').click(function(){
    alert('分享到朋友圈');
    //window.location.href=''
});
$('.activity_share_weixin').click(function(){
    alert('分享到微信');
    //window.location.href=''
});
$('.activity_share_QQ').click(function(){
    alert('分享到QQ');
    //window.location.href=''
});
$('.activity_share_weibo').click(function(){
    alert('分享到微博');
    //window.location.href=''
});
$('.activity_share_douban').click(function(){
    alert('分享到豆瓣');
    //window.location.href=''
});
$('.activity_share_zhihu').click(function(){
    alert('分享到知乎');
    //window.location.href=''
});
$('.activity_share_tieba').click(function(){
    alert('分享到贴吧');
    //window.location.href=''
});

//用户排名详情
//    var elem = document.getElementsByClassName("find_author_ranking")[0];
//    elem.addEventListener("swipeleft",function(){
//        $('.author_portrait').css("right","6.5rem");
//        $('.ranking_detail').css("width","1.75rem");
//        $('.competing_songName').show();
//    });
//    elem.addEventListener("swiperight",function(){
//        $('.author_portrait').css("right","1.5rem");
//        $('.ranking_detail').css("width","3rem");
//        $('.competing_songName').hide();
//    });