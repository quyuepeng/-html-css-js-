/**
 * Created by a on 2017/4/11.
 */
var xuanzhe="";
var page=1;

//=====================================时间选择===
$("#times").click(function(){
    $("#timebox").slideToggle(300);
});
$("#times").click();

$("#timebuteen").click(function(){
    var timelong;
    var timebagein=$("#timebagein").val();
    var timeend=$("#timeend").val();
    if(timebagein==null||timebagein==""||timebagein==undefined||timeend==null||timeend==""||timeend==undefined){
        alert("您的时间段尚未选完！！！")
    }else if(timebagein>timeend){
        alert("起始时间大于结束时间")
    }else{
        timelong=timebagein+"~"+timeend;
        page=1;
        xuanzhe="&startTime="+timebagein+" 00:00:00&endTime="+timeend+" 23:59:59"
        //alert(xuanzhe)
        ajax()
    }

});

//===============列表刷新===============
var nt="beg";
var nd=1;
//====点击执行====
function dianjifenye(obj){

    var a=obj.id.split("number");
    page=Number(a[1]);
    ajax();

}


fenye.addfenyecaidan(nt,nd);

//=================================搜索==========

$("#findsangButten").click(function(){
    var stah=$("#findsang").val();

    page=1;
    xuanzhe="&musicName="+stah;
    ajax()
});

$("#releaseStatus").change(function(){
    var stah=$("#releaseStatus").val();

        page=1;
        xuanzhe="&status="+stah;
        ajax()
})

//===============================定义发布==============
function publishajax(obj){
    var r=confirm("您确定要发布此伴奏！！！");
    if (r==true){
        $(obj).attr("class","btn btn-orange-alt");
        $(obj).unbind("click");
        $("#loading").show();
        var musicid=obj.title;
        //console.log(musicid)
        $.ajax({
            type: "post",
            url: htmls.htmltest()+"/audiosys/publish",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"id":musicid}),
            beforeSend: function(request) {
                request.setRequestHeader("token",sessionStorage.token);
            },
            success: function(loget){
                $("#loading").hide();
                //console.log(loget);
                if(loget.status==0){
                    alert("发布成功！！！");
                    //location.reload(true);
                    ajax();
                }else{
                    alert(loget.msg);
                }

            },
            error:function(){
                $("#loading").hide();
                console.log("系统错误！！!错误代码00011 "+loget.status)
            }
        });
    }else {

    }

}

//=================加载===================
var updatecishu="";
function ajax(){
    $("#sng_table").html("");
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            //console.log(xmlhttp.responseText);
            var a=xmlhttp.responseText;
            var musicbox=JSON.parse(a);

            //console.log(musicbox.data.musics[i]);
            if(musicbox.status==0){
                nt = "beg";
                for(var i=0;i<musicbox.data.musics.length;i++){
                    var zhuangtai;
                    var fabubtn;
                    if(musicbox.data.musics[i].status==2){
                        zhuangtai="已删除";
                        fabubtn="<a class='btn btn-orange-alt'>发布</a>"
                    }else if(musicbox.data.musics[i].status==1){
                        zhuangtai="已发布";
                        fabubtn="<a class='btn btn-orange-alt'>发布</a>"
                    }else if(musicbox.data.musics[i].status==0){
                        zhuangtai="未发布"
                        fabubtn="<a class='btn btn-orange release' title='"+musicbox.data.musics[i].id+"'>发布</a>"
                    }
                    //if(musicbox.data.musics[i].publishNumber==0){
                    //}else{

                    //}

                    $("#sng_table").append("<tr><td>"+musicbox.data.musics[i].id+"</td>" +
                    " <td style='word-break:break-all;'>"+musicbox.data.musics[i].musicName+"</td>" +
                    " <td>"+musicbox.data.musics[i].updateNumber+"</td>" +
                    " <td>"+musicbox.data.musics[i].errorNumber+"</td>" +
                    " <td style='word-break:break-all;'>"+musicbox.data.musics[i].wavUrl+"</td> " +
                    "<td>"+musicbox.data.musics[i].lastUpdateTime+"</td>" +
                    " <td>"+musicbox.data.musics[i].lastPublishTime+"</td> " +
                    "<td>"+zhuangtai+"</td><td>"+musicbox.data.musics[i].publishNumber+"</td>" +
                    " <td>"+fabubtn+"</td>" +
                    " <td> <a class='btn btn-success update' title='"+musicbox.data.musics[i].musicName+"' data-up="+musicbox.data.musics[i].updateNumber+">更新</a> </td></tr>")
                }
                $(".release").click(function(){
                     publishajax(this);
                })

                $(".update").click(function(){
                    getkey();
                    updatecishu="_update_"+$(this).attr("data-up");
                    $("#musicname").val(this.title)
                    $("#addheader").html("更新伴奏")
                    $("#subnewuear").css({"display":"block"});
                    $("#subadduear").css({"display":"none"});
                    $("#addmengceng").css({"zIndex":"990","display":"block"});
                    $("#musicname").attr("readOnly","true");

                });
            }else if(musicbox.status==101) {
                nt="end";
            }
            else{
                    console.log(musicbox.msg)
            }
        }else if(xmlhttp.readyState==4 && xmlhttp.status!=200){
            console.log("系统错误！！!错误代码00010 "+xmlhttp.status);
        }
        fenye.addfenyecaidan(nt,page);
    }
    xmlhttp.open("GET",htmls.htmltest()+"/audiosys/music?page="+page+xuanzhe,true);

    xmlhttp.send();



}

ajax();

var accessKeyIdt;
var accessKeySecrett;
var SecurityTokent;

//========================打开关闭蒙层===============
$("#close").click(function(){
    $("#addmengceng").css({"zIndex":"-1","display":"none"});
    //$(".filebox").hide();
    $("#musicname").val("")
    music=" ";
    document.getElementById("file1").value="";
    document.getElementById("file2").value="";
    document.getElementById("file3").value="";
    document.getElementById("file4").value="";
    document.getElementById("file5").value="";
    document.getElementById("file6").value="";
    document.getElementById("file7").value="";
    updatecishu=""
    $("#filexingxi1").html("");
    $("#filexingxi2").html("");
    $("#filexingxi3").html("");
    $("#filexingxi4").html("");
    $("#filexingxi5").html("");
    $("#filexingxi6").html("");
    $("#filexingxi7").html("");
    count=[];
    ossurl=[];
    musicsize=0;

});

$("#addsong").click(function(){
    getkey();
    updatecishu=""
    $("#musicname").attr("readOnly",true);
    $("#addmengceng").css({"zIndex":"990","display":"block"});
    $("#addheader").html("新增伴奏")
    $("#subadduear").css({"display":"block"});
    $("#subnewuear").css({"display":"none"});

});
//==============================获取密匙==========
function getkey(){
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log(xmlhttp.responseText+"ssssssssssssssssss");
            var a=xmlhttp.responseText;
            var userrank=JSON.parse(a);
            console.log(userrank.data);
            if(userrank.status==0){
                accessKeyIdt=userrank.data.AccessKeyId;
                accessKeySecrett=userrank.data.AccessKeySecret;
                SecurityTokent=userrank.data.SecurityToken;
                client = new OSS.Wrapper({
                    region: 'oss-cn-shanghai',
                    accessKeyId: accessKeyIdt,
                    accessKeySecret: accessKeySecrett,
                    stsToken:SecurityTokent,
                    bucket: 'audio-assistant'
                });
                client2 = new OSS.Wrapper({
                    region: 'oss-cn-shanghai',
                    accessKeyId: accessKeyIdt,
                    accessKeySecret: accessKeySecrett,
                    stsToken:SecurityTokent,
                    bucket: 'heipa-storage'
                });

                client3 = new OSS.Wrapper({
                    region: 'oss-cn-shanghai',
                    accessKeyId: accessKeyIdt,
                    accessKeySecret: accessKeySecrett,
                    stsToken:SecurityTokent,
                    bucket: 'user-storage-temp'
                });
            }else{
                alert("获取授权失败!!!"+userrank.msg);
                console.log("获取授权失败!!!"+userrank.msg)
            }

        }else if(xmlhttp.readyState==4 && xmlhttp.status!=200){
            console.log("系统错误！！!错误代码00015 "+xmlhttp.status);
        }
    }
    xmlhttp.open("GET",htmls.htmltest()+"/audiosys/getOssToken",true);
    xmlhttp.setRequestHeader("token",sessionStorage.token);
    xmlhttp.send();
}
//===========================上传伴奏======================

var musrcurl=[];
var music;
function musicnametrue(){
    music=$("#musicname").val();
    musrcurl[0]=music;
};



var client;
var client2;
var client3;

var count=[];
var ossurl=[];
var musicsize=0;
document.getElementById('file1').addEventListener('change', function (e) {

    var filename=e.target.files[0].name;
    var end=filename.split(".");
    var endchuli=[" "];
    for(var xx=0;xx<(end.length-1);xx++){
        if(xx==0){
            endchuli[0]=end[xx];
        }else{
            endchuli[0]=endchuli[0]+"."+end[xx];
        }
    }
    endchuli[1]=end[end.length-1];
    end[0]=endchuli[0];
    end[1]=endchuli[1];
    end[1]=end[1].toLowerCase();
    var banduan=false;
    var xx=$("#musicname").val();
    if(end[1]=="wav"){
        end2=end;
        if(xx==" "||xx==null||xx==undefined||xx==""){
            $("#musicname").val(end2[0]);
            musicnametrue();
            banduan=true;
        }else{
            if(xx==end2[0]){
                musicnametrue();
                banduan=true;
            }else{
                $("#filexingxi1").html("文件名不一致，请重新选择！！！");
                banduan=false;
            }
        }
    }else{
        $("#filexingxi1").html("您的文件类型错误，请重新选择！！！");
    }

    if(banduan==true){
        if(end[1]=="wav"){
            $("#filexingxi1").html("文件上传中，请稍后。。。");
            var file = e.target.files[0];
            var storeAs ="music/"+music+updatecishu+".wav";
            //console.log(file.name + ' => ' + storeAs);
            client.multipartUpload(storeAs, file).then(function (result) {
                console.log(result.res.requestUrls[0]);
                var a=result.res.requestUrls[0];
                var as=a.split("?");
                console.log(as[0]);

                musrcurl[1]=as[0];
                $("#filexingxi1").html("文件上传成功！！！");
                count[0]=1;
            }).catch(function (err) {
                console.log(err);
                musrcurl[1]="";
                count[0]=0;
                $("#filexingxi1").html("文件上传失败，请重新选择文件！！！");
            });
        }else{
            $("#filexingxi1").html("您的文件类型错误，请重新选择！！！");
        }

    }else{

    }


});
document.getElementById('file7').addEventListener('change', function (e) {

    var filename=e.target.files[0].name;
    var end=filename.split(".");
    musicsize=e.target.files[0].size;
    var endchuli=[" "];
    for(var xx=0;xx<(end.length-1);xx++){
        if(xx==0){
            endchuli[0]=end[xx];
        }else{
            endchuli[0]=endchuli[0]+"."+end[xx];
        }
    }
    endchuli[1]=end[end.length-1];
    end[0]=endchuli[0];
    end[1]=endchuli[1];
    end[1]=end[1].toLowerCase();
    var banduan=false;
    var xx=$("#musicname").val();
    if(end[1]=="mp3"){
        end2=end;
        if(xx==" "||xx==null||xx==undefined||xx==""){
            $("#musicname").val(end2[0]);
            musicnametrue();
            banduan=true;
        }else{
            if(xx==end2[0]){
                musicnametrue();
                banduan=true;
            }else{
                $("#filexingxi7").html("文件名不一致，请重新选择！！！");
                banduan=false;
            }
        }
    }else{
        $("#filexingxi7").html("您的文件类型错误，请重新选择！！！");
    }



    if(banduan==true){
        var chuanwang=[0,0];
        if(end[1]=="mp3"){
            $("#filexingxi7").html("文件上传中，请稍后。。。");
            var file = e.target.files[0];
            var storeAs ="music/"+music+updatecishu+".mp3";
            //console.log(file.name + ' => ' + storeAs);

            client2.multipartUpload(storeAs, file).then(function (result) {
                console.log(result.res.requestUrls[0]);
                var a=result.res.requestUrls[0];
                var as=a.split("?");
                console.log(as[0]);
                ossurl[1]=as[0];
                chuanwang[0]=1;
                if(chuanwang[0]==1&&chuanwang[1]==1){
                    $("#filexingxi7").html("文件上传成功！！！");
                    count[4]=1;
                }
            }).catch(function (err) {
                console.log(err);
                ossurl[1]="";
                count[4]=0;
                $("#filexingxi7").html("文件上传失败，请重新选择文件！！！");
            });


            client3.multipartUpload(storeAs, file).then(function (result) {
                console.log(result.res.requestUrls[0]);
                var a=result.res.requestUrls[0];
                var as=a.split("?");
                console.log(as[0]);
                ossurl[2]=as[0];
                chuanwang[1]=1;
                if(chuanwang[0]==1&&chuanwang[1]==1){
                    $("#filexingxi7").html("文件上传成功！！！");
                    count[4]=1;
                }
            }).catch(function (err) {
                console.log(err);
                ossurl[2]="";
                count[4]=0;
                $("#filexingxi7").html("文件上传失败，请重新选择文件！！！");
            });
        }else{
            $("#filexingxi7").html("您的文件类型错误，请重新选择！！！");
        }

    }else{

    }


});
document.getElementById('file2').addEventListener('change', function (e) {
    var filename=e.target.files[0].name;
    var end=filename.split(".");
    var endchuli=[" "];
    for(var xx=0;xx<(end.length-1);xx++){
        if(xx==0){
            endchuli[0]=end[xx];
        }else{
            endchuli[0]=endchuli[0]+"."+end[xx];
        }
    }
    endchuli[1]=end[end.length-1];
    end[0]=endchuli[0];
    end[1]=endchuli[1];
    end[1]=end[1].toLowerCase();
    var banduan=false;
    var xx=$("#musicname").val();
    if(end[1]=="txt"){
        if(end[0].indexOf("_beat")>0){
            end2=end[0].split("_beat");
            if(xx==" "||xx==null||xx==undefined||xx==""){
                $("#musicname").val(end2[0]);
                musicnametrue();
                banduan=true;
            }else{
                if(xx==end2[0]){
                    musicnametrue();
                    banduan=true;
                }else{
                    $("#filexingxi2").html("文件名不一致，请重新选择！！！");
                    banduan=false;
                }
            }
        }else{
            $("#filexingxi2").html("文件名格式不对，请重新选择！！！");
            banduan=false;
        }
    }else{
        $("#filexingxi2").html("您的文件类型错误，请重新选择！！！");
    }

    if(banduan==true){
        if(end[1]=="txt"){
            $("#filexingxi2").html("文件上传中，请稍后。。。");
            var file = e.target.files[0];
            var storeAs ="music/"+music+updatecishu+"_beat.txt";
            console.log(file.name + ' => ' + storeAs);
            client.multipartUpload(storeAs, file).then(function (result) {
                console.log(result.res.requestUrls[0]);
                var a=result.res.requestUrls[0];
                var as=a.split("?");
                console.log(as[0]);
                musrcurl[2]=as[0];
                $("#filexingxi2").html("文件上传成功！！！");
                count[1]=1;

            }).catch(function (err) {
                console.log(err);
                musrcurl[2]="";
                count[1]=0;
                $("#filexingxi2").html("文件上传失败，请重新选择文件！！！");
            });
        }else{
            $("#filexingxi2").html("您的文件类型错误，请重新选择！！！");
        }
    }


});
document.getElementById('file3').addEventListener('change', function (e) {
    var filename=e.target.files[0].name;
    var end=filename.split(".");
    var endchuli=[" "];
    for(var xx=0;xx<(end.length-1);xx++){
        if(xx==0){
            endchuli[0]=end[xx];
        }else{
            endchuli[0]=endchuli[0]+"."+end[xx];
        }
    }
    endchuli[1]=end[end.length-1];
    end[0]=endchuli[0];
    end[1]=endchuli[1];
    end[1]=end[1].toLowerCase();
    var banduan=false;
    var xx=$("#musicname").val();
    if(end[1]=="txt"){
        if(end[0].indexOf("_info")>0){
            end2=end[0].split("_info");
            if(xx==" "||xx==null||xx==undefined||xx==""){
                $("#musicname").val(end2[0]);
                musicnametrue();
                banduan=true;
            }else{
                if(xx==end2[0]){
                    musicnametrue();
                    banduan=true;
                }else{
                    $("#filexingxi3").html("文件名不一致，请重新选择！！！");
                    banduan=false;
                }
            }
        }else{
            $("#filexingxi3").html("文件名格式不对，请重新选择！！！");
            banduan=false;
        }
    }else{
        $("#filexingxi3").html("您的文件类型错误，请重新选择！！！");
    }

    console.log(end[1]);
    if(banduan==true){
        if(end[1]=="txt"){
            $("#filexingxi3").html("文件上传中，请稍后。。。");
            var file = e.target.files[0];
            var storeAs ="music/"+music+updatecishu+"_info.txt";
            console.log(file.name + ' => ' + storeAs);
            client.multipartUpload(storeAs, file).then(function (result) {
                console.log(result.res.requestUrls[0]);
                var a=result.res.requestUrls[0];
                var as=a.split("?");
                console.log(as[0]);
                musrcurl[3]=as[0];
                $("#filexingxi3").html("文件上传成功！！！");
                count[2]=1;
            }).catch(function (err) {
                console.log(err);
                musrcurl[3]="";
                count[2]=0;
                $("#filexingxi3").html("文件上传失败，请重新选择文件！！！");
            });

        }else{
            $("#filexingxi3").html("您的文件类型错误，请重新选择！！！");
        }
    }


});

document.getElementById('file4').addEventListener('change', function (e) {
    var filename=e.target.files[0].name;
    var end=filename.split(".");
    var endchuli=[" "];
    for(var xx=0;xx<(end.length-1);xx++){
        if(xx==0){
            endchuli[0]=end[xx];
        }else{
            endchuli[0]=endchuli[0]+"."+end[xx];
        }
    }
    endchuli[1]=end[end.length-1];
    end[0]=endchuli[0];
    end[1]=endchuli[1];
    end[1]=end[1].toLowerCase();

    var banduan=false;
    var xx=$("#musicname").val();
    if(end[1]=="mid"){
        if(filename.indexOf("_1.mid")>0){
            end2=filename.split("_1.mid");
            if(xx==" "||xx==null||xx==undefined||xx==""){
                $("#musicname").val(end2[0]);
                musicnametrue();
                banduan=true;
            }else{
                if(xx==end2[0]){
                    musicnametrue();
                    banduan=true;
                }else{
                    $("#filexingxi4").html("文件名不一致，请重新选择！！！");
                    banduan=false;
                }
            }
        }else{
            $("#filexingxi4").html("文件名格式不对，请重新选择！！！");
            banduan=false;
        }
    }else{
        $("#filexingxi4").html("您的文件类型错误，请重新选择！！！");
    }


    if(banduan==true){
        if(end[1]=="mid"){
            $("#filexingxi4").html("文件上传中，请稍后。。。");
            var file = e.target.files[0];
            var storeAs ="music/"+music+updatecishu+"_1.mid";
            console.log(file.name + ' => ' + storeAs);
            client.multipartUpload(storeAs, file).then(function (result) {
                console.log(result.res.requestUrls[0]);
                var a=result.res.requestUrls[0];
                var as=a.split("?");
                console.log(as[0]);
                musrcurl[4]=as[0];
                $("#filexingxi4").html("文件上传成功！！！");
                count[3]=1;
            }).catch(function (err) {
                console.log(err);
                musrcurl[4]="";
                count[3]=0;
                $("#filexingxi4").html("文件上传失败，请重新选择文件！！！");
            });

        }else{
            $("#filexingxi4").html("您的文件类型错误，请重新选择！！！");
        }
    }


});
document.getElementById('file5').addEventListener('change', function (e) {
    var filename=e.target.files[0].name;
    var end=filename.split(".");
    var endchuli=[" "];
    for(var xx=0;xx<(end.length-1);xx++){
        if(xx==0){
            endchuli[0]=end[xx];
        }else{
            endchuli[0]=endchuli[0]+"."+end[xx];
        }
    }
    endchuli[1]=end[end.length-1];
    end[0]=endchuli[0];
    end[1]=endchuli[1];
    end[1]=end[1].toLowerCase();
    var banduan=false;
    var xx=$("#musicname").val();
    if(end[1]=="mid"){
        if(filename.indexOf("_2.mid")>0){
            end2=filename.split("_2.mid");
            if(xx==" "||xx==null||xx==undefined||xx==""){
                $("#musicname").val(end2[0]);
                musicnametrue();
                banduan=true;
            }else{
                if(xx==end2[0]){
                    musicnametrue();
                    banduan=true;
                }else{
                    $("#filexingxi5").html("文件名不一致，请重新选择！！！");
                    banduan=false;
                }
            }
        }else{
            $("#filexingxi5").html("文件名格式不对，请重新选择！！！");
            banduan=false;
        }
    }else{
        $("#filexingxi5").html("您的文件类型错误，请重新选择！！！");
    }


    if(banduan==true){
        if(end[1]=="mid"){
            $("#filexingxi5").html("文件上传中，请稍后。。。");
            var file = e.target.files[0];
            var storeAs ="music/"+music+updatecishu+"_2.mid";
            console.log(file.name + ' => ' + storeAs);
            client.multipartUpload(storeAs, file).then(function (result) {
                console.log(result.res.requestUrls[0]);
                var a=result.res.requestUrls[0];
                var as=a.split("?");
                console.log(as[0]);
                musrcurl[5]=as[0];
                $("#filexingxi5").html("文件上传成功！！！");
                count[6]=1;
            }).catch(function (err) {
                console.log(err);
                musrcurl[5]="";
                count[6]=0;
                $("#filexingxi5").html("文件上传失败，请重新选择文件！！！");
            });


        }else{
            $("#filexingxi5").html("您的文件类型错误，请重新选择！！！");
        }
    }


});

document.getElementById('file6').addEventListener('change', function (e) {
    var filename=e.target.files[0].name;
    var end=filename.split(".");
    var endchuli=[" "];
    for(var xx=0;xx<(end.length-1);xx++){
        if(xx==0){
            endchuli[0]=end[xx];
        }else{
            endchuli[0]=endchuli[0]+"."+end[xx];
        }
    }
    endchuli[1]=end[end.length-1];
    end[0]=endchuli[0];
    end[1]=endchuli[1];
    end[1]=end[1].toLowerCase();
    var banduan=false;
    var xx=$("#musicname").val();
    if(end[1]=="mid"){
        if(filename.indexOf("_3.mid")>0){
            end2=filename.split("_3.mid");
            if(xx==" "||xx==null||xx==undefined||xx==""){
                $("#musicname").val(end2[0]);
                musicnametrue();
                banduan=true;
            }else{
                if(xx==end2[0]){
                    musicnametrue();
                    banduan=true;
                }else{
                    $("#filexingxi6").html("文件名不一致，请重新选择！！！");
                    banduan=false;
                }
            }
        }else{
            $("#filexingxi6").html("文件名格式不对，请重新选择！！！");
            banduan=false;
        }
    }else{
        $("#filexingxi6").html("您的文件类型错误，请重新选择！！！");
    }

    if(banduan==true){
        if(end[1]=="mid"){

            $("#filexingxi6").html("文件上传中，请稍后。。。");
            var file = e.target.files[0];
            var storeAs ="music/"+music+updatecishu+"_3.mid";
            console.log(file.name + ' => ' + storeAs);
            client.multipartUpload(storeAs, file).then(function (result) {
                console.log(result.res.requestUrls[0]);
                var a=result.res.requestUrls[0];
                var as=a.split("?");
                console.log(as[0]);
                musrcurl[6]=as[0];
                $("#filexingxi6").html("文件上传成功！！！");
                count[5]=1;
            }).catch(function (err) {
                console.log(err);
                musrcurl[6]="";
                count[5]=0;
                $("#filexingxi6").html("文件上传失败，请重新选择文件！！！");
            });



        }else{
            $("#filexingxi6").html("您的文件类型错误，请重新选择！！！");
        }
    }


});
function adduearfile(){
    var count2=0;
    for(var i=0;i<5;i++){
        count2=count2+Number(count[i])
    }
    if(count2==5){
        for(var i=0;i<count.length;i++){
            count2=count2+Number(count[i])
        }
        $("#loading").show();
        var data={
            "wavSize":musicsize,
            "musicName":musrcurl[0],
            "wavUrl":musrcurl[1],
            "beatUrl":musrcurl[2],
            "infoUrl":musrcurl[3],
            "mid1Url":musrcurl[4],
            "mid2Url":musrcurl[5],
            "mid3Url":musrcurl[6],
            "ossWavUrlHeipaStorage":ossurl[1],
            "ossWavUrlUserStorage":ossurl[2]
        }
        console.log(data);
        //$("#subadduear").attr("class","btn btn-danger-alt");
        //$("#subadduear").unbind("click");
        $.ajax({
            type: "post",
            url: htmls.htmltest()+"/audiosys/music",
            dataType: "json",
            contentType: "application/json",
            data:JSON.stringify(data),
            beforeSend: function(request) {
                request.setRequestHeader("token",sessionStorage.token);
            },
            success: function(loget){
                $("#loading").hide();
                //console.log(loget);
                if(loget.status==0){
                    alert("伴奏添加成功！！！");
                    location.reload(true);
                }else{
                    alert(loget.msg);
                }
            },
            error:function(){
                $("#loading").hide();
                alert("系统错误！！!错误代码00012 "+loget.status)
                console.log("系统错误！！!错误代码00012 "+loget.status)
            }
        });
    }else{
        alert("文件未上传完！！！")
    }
}
$("#subadduear").click(function(){

    adduearfile();

});
//============================更新======
function newuearfile(){
    var count2=0;
    for(var i=0;i<5;i++){
        count2=count2+Number(count[i])
    }
    if(count2==5){
        for(var i=0;i<count.length;i++){
            count2=count2+Number(count[i])
        }
        $("#loading").show();
       var data={
            "wavSize":musicsize,
            "musicName":musrcurl[0],
            "wavUrl":musrcurl[1],
            "beatUrl":musrcurl[2],
            "infoUrl":musrcurl[3],
            "mid1Url":musrcurl[4],
            "mid2Url":musrcurl[5],
            "mid3Url":musrcurl[6],
            "ossWavUrlHeipaStorage":ossurl[1],
            "ossWavUrlUserStorage":ossurl[2]
        }
        console.log(data+"=========文件上传内容");
        //$("#subnewuear").attr("class","btn btn-danger-alt");
        //$("#subnewuear").unbind("click");
        $("#loading").show();
        $.ajax({
            type: "put",
            url: htmls.htmltest()+"/audiosys/music",
            dataType: "json",
            contentType: "application/json",
            data:JSON.stringify(data),
            beforeSend: function(request) {
                request.setRequestHeader("token",sessionStorage.token);
            },
            success: function(loget){
                $("#loading").hide();
                //console.log(loget);
                if(loget.status==0){
                    alert("伴奏更新成功！！！");
                    //location.reload(true);
                    ajax();
                }else{
                    alert(loget.msg);
                }
            },
            error:function(){
                $("#loading").hide();
                alert("系统错误！！!错误代码00013 "+loget.status);
                console.log("系统错误！！!错误代码00013 "+loget.status);
            }
        });
    }else{
        alert("文件未上传完！！！")
    }
}

$("#subnewuear").click(function(){
    newuearfile();
    //for(var i=0;i<)
    //var count2=0;

});

//======================================批量上传====================
$("#more").click(function(){
    getkey();
    $("#morefilemengceng").css({"zIndex":"990","display":"block"});
});
$("#colse").click(function(){
    $("#morefilemengceng").css({"zIndex":"-1","display":"none"});
    $("#filetrue").click();
});
$("#choose").click(function(){
    $("#filemore").click();
});
var filemore = document.getElementById("filemore");
var filesnameArry=[];

$("#filemore").change(function(){

    $("#morefilemengceng h1 span").html(filemore.files.length);
    filesnameArry=[];

    for(var i=0;i<filemore.files.length;i++){
        var filename = filemore.files[i].name;
        //==================类型转化为小写
        var end=filename.split(".");
        var endchuli=[" "];
        for(var xx=0;xx<(end.length-1);xx++){
            if(xx==0){
                endchuli[0]=end[xx];
            }else{
                endchuli[0]=endchuli[0]+"."+end[xx];
            }
        }
        endchuli[1]=end[end.length-1];
        end[0]=endchuli[0];
        end[1]=endchuli[1];
        end[1]=end[1].toLowerCase();
        filename=end[0]+"."+end[1];
        var filenamec;

        if(filename.indexOf(".wav") > 0 ){
            filenamec=filename.replace(".wav","");

        }else if(filename.indexOf("_1.mid") > 0 ){
            filenamec=filename.replace("_1.mid","");

        }else if(filename.indexOf("_2.mid") > 0 ){
            filenamec=filename.replace("_2.mid","");

        }else if(filename.indexOf("_3.mid") > 0 ){
            filenamec=filename.replace("_3.mid","");

        }else if(filename.indexOf("_beat.txt") > 0 ){
            filenamec=filename.replace("_beat.txt","");

        }else if(filename.indexOf("_info.txt") > 0 ){
            filenamec=filename.replace("_info.txt","");
        }else if(filename.indexOf(".mp3") > 0 ){
            filenamec=filename.replace(".mp3","");
        }
        if(filesnameArry.length==0){
            filesnameArry.push({
                "size":1,
                "lens":0,
                "wavSize":0,
                "musicName":filenamec,
                "wavUrl":"",
                "beatUrl":"",
                "infoUrl":"",
                "mid1Url":"",
                "mid2Url":"",
                "mid3Url":"",
                "ossWavUrlHeipaStorage":"",
                "ossWavUrlUserStorage":""
            });
        }else{
            var filespanduan=true;
            for(var j=0;j<filesnameArry.length;j++){
                if(filesnameArry[j].musicName==filenamec){
                    filesnameArry[j].size+=1;
                    filespanduan=false;
                    break;
                }
            }
            if( filespanduan==true){
                filesnameArry.push({
                    "size":1,
                    "lens":0,
                    "wavSize":0,
                    "musicName":filenamec,
                    "wavUrl":"",
                    "beatUrl":"",
                    "infoUrl":"",
                    "mid1Url":"",
                    "mid2Url":"",
                    "mid3Url":"",
                    "ossWavUrlHeipaStorage":"",
                    "ossWavUrlUserStorage":""
                });
            }
        }
    }
    console.log(filesnameArry);


    for(var i=0;i<filemore.files.length;i++) {
        var filename = filemore.files[i].name;
        var filtext = filemore.files[i];
        //==================类型转化为小写
        var end = filename.split(".");
        var endchuli=[" "];
        for(var xx=0;xx<(end.length-1);xx++){
            if(xx==0){
                endchuli[0]=end[xx];
            }else{
                endchuli[0]=endchuli[0]+"."+end[xx];
            }
        }
        endchuli[1]=end[end.length-1];
        end[0]=endchuli[0];
        end[1]=endchuli[1];
        end[1] = end[1].toLowerCase();
        filename = end[0] + "." + end[1];
        shangchuan(filename,filtext);
    }
});

$("#filetrue").click(function(){
    filesnameArry=[];
    $("#filemore").val("");
    $("#morefilemengceng h1 span").html(0);
    $("#filesuccseefil span").html("");
    $("#fileerror span").html("");
});

function shangchuan(obj,objf){
    var file = objf;
    var storeAs ="music/"+obj;
    var fsize=objf.size;
    if(obj.indexOf(".wav") > 0 ||obj.indexOf("_1.mid") > 0||obj.indexOf("_2.mid") > 0||obj.indexOf("_3.mid") > 0||obj.indexOf("_beat.txt") > 0||obj.indexOf("_info.txt") > 0){
        $("#fileing span").append(obj+"<br>");
        client.multipartUpload(storeAs, file).then(function (result) {
            console.log(result.res.requestUrls[0]);
            var a=result.res.requestUrls[0];
            var as=a.split("?");
            console.log(as[0]);
            var ccc=$("#fileing span").html();
            ccc=ccc.replace(obj+"<br>","");
            $("#fileing span").html(ccc);
            for(var j=0;j<filesnameArry.length;j++){
                if(filesnameArry[j].musicName+".wav"==obj){
                    filesnameArry[j].wavUrl=as[0];
                    filesnameArry[j].lens+=1;
                    $("#filesuccseefil span").append(obj+"<br>");
                    if(filesnameArry[j].lens==filesnameArry[j].size){
                        sqlajax(filesnameArry[j])
                    }
                    break;
                }
                if(filesnameArry[j].musicName+"_1.mid"==obj){
                    filesnameArry[j].mid1Url=as[0];
                    filesnameArry[j].lens+=1;
                    $("#filesuccseefil span").append(obj+"<br>");
                    if(filesnameArry[j].lens==filesnameArry[j].size){
                        sqlajax(filesnameArry[j])
                    }
                    break;
                }
                if(filesnameArry[j].musicName+"_2.mid"==obj){
                    filesnameArry[j].mid2Url=as[0];
                    filesnameArry[j].lens+=1;
                    $("#filesuccseefil span").append(obj+"<br>");
                    if(filesnameArry[j].lens==filesnameArry[j].size){
                        sqlajax(filesnameArry[j])
                    }
                    break;
                }
                if(filesnameArry[j].musicName+"_3.mid"==obj){
                    filesnameArry[j].mid3Url=as[0];
                    filesnameArry[j].lens+=1;
                    $("#filesuccseefil span").append(obj+"<br>");
                    if(filesnameArry[j].lens==filesnameArry[j].size){
                        sqlajax(filesnameArry[j])
                    }
                    break;
                }
                if(filesnameArry[j].musicName+"_beat.txt"==obj){
                    filesnameArry[j].beatUrl=as[0];
                    filesnameArry[j].lens+=1;
                    $("#filesuccseefil span").append(obj+"<br>");
                    if(filesnameArry[j].lens==filesnameArry[j].size){
                        sqlajax(filesnameArry[j])
                    }
                    break;
                }
                if(filesnameArry[j].musicName+"_info.txt"==obj){
                    filesnameArry[j].infoUrl=as[0];
                    filesnameArry[j].lens+=1;
                    $("#filesuccseefil span").append(obj+"<br>");
                    if(filesnameArry[j].lens==filesnameArry[j].size){
                        sqlajax(filesnameArry[j])
                    }
                    break;
                }
            }
        }).catch(function (err) {
            console.log(err);
            shangchuan(obj,objf);
            //$("#fileerror span").append(obj+"<br>");
        });
    }

    if(obj.indexOf(".mp3") > 0 ){
        var aa=0;
        $("#fileing span").append(obj+"<br>");
        client2.multipartUpload(storeAs, file).then(function (result) {
            console.log(result.res.requestUrls[0]);
            var a=result.res.requestUrls[0];
            var as=a.split("?");
            console.log(as[0]);
            var ccc=$("#fileing span").html();
            ccc=ccc.replace(obj+"<br>","");
            $("#fileing span").html(ccc);
            for(var j=0;j<filesnameArry.length;j++){
                if(filesnameArry[j].musicName+".mp3"==obj){
                    filesnameArry[j].ossWavUrlHeipaStorage=as[0];
                    filesnameArry[j].wavSize=fsize;
                    aa+=1;
                    if(aa==2){
                        filesnameArry[j].lens+=1;
                    }
                    $("#filesuccseefil span").append(obj+"<br>");
                    if(filesnameArry[j].lens==filesnameArry[j].size){
                        sqlajax(filesnameArry[j])
                    }
                    break;
                }
            }

        }).catch(function (err) {
            console.log(err);
            //$("#fileerror span").append(obj+"---Heipa<br>");
            shangchuan(obj,objf);
        });


        client3.multipartUpload(storeAs, file).then(function (result) {
            console.log(result.res.requestUrls[0]);
            var a=result.res.requestUrls[0];
            var as=a.split("?");
            console.log(as[0]);
            var ccc=$("#fileing span").html();
            ccc=ccc.replace(obj+"<br>","");
            $("#fileing span").html(ccc);
            for(var j=0;j<filesnameArry.length;j++){
                if(filesnameArry[j].musicName+".mp3"==obj){
                    filesnameArry[j].ossWavUrlUserStorage=as[0];
                    filesnameArry[j].wavSize=fsize;
                    aa+=1;
                    if(aa==2){
                        filesnameArry[j].lens+=1;
                    }
                    $("#filesuccseefil span").append(obj+"<br>");
                    if(filesnameArry[j].lens==filesnameArry[j].size){
                        sqlajax(filesnameArry[j])
                    }
                    break;
                }
            }
        }).catch(function (err) {
            console.log(err);
            //$("#fileerror span").append(obj+"---User<br>");
            shangchuan(obj,objf);
        });
    }
}
//=====================传值给数据库===========
function  sqlajax(objss){
    var data=objss;
    console.log(data);
    $.ajax({
        type: "post",
        url: htmls.htmltest()+"/audiosys/music",
        dataType: "json",
        contentType: "application/json",
        data:JSON.stringify(data),
        beforeSend: function(request) {
            request.setRequestHeader("token",sessionStorage.token);
        },
        success: function(loget){
            console.log(loget);
            if(loget.status==0){
                console.log("伴奏添加成功！！！");
                $("#filesuccseefil span").prepend(objss.musicName+"添加到数据库成功")
            }else{
                console.log(loget.msg+loget.status);
                $("#fileerror span").append(objss.musicName+".."+loget.msg+".."+loget.status+"添加到数据库失败")
            }
        },
        error:function(loget){
            $("#fileerror span").append(objss.musicName+"添加到数据库失败")
            console.log("系统错误！！!错误代码000999 "+loget)
        }
    });
}