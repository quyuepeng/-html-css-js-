var start=document.getElementById("start");
var achievement=document.getElementById("achievement");
var more=document.getElementById("more");
var dropout=document.getElementById("dropout");
var gamekaishi=document.getElementById("gamekaishi");
var stops=document.getElementById("stop")

var mycanvas =document.getElementById("mycanvas")
var ctx =document.getElementById("mycanvas").getContext("2d");
var fish1 = document.getElementById("fish1");
var fish2 = document.getElementById("fish2");
var fish3 = document.getElementById("fish3");
var fish4 = document.getElementById("fish4");
var fish5 = document.getElementById("fish5");
var fish6 = document.getElementById("fish6");
var fish7 = document.getElementById("fish7");
var fish8 = document.getElementById("fish8");
var fish9 = document.getElementById("fish9");
var fish10 = document.getElementById("fish10");
var shark1 = document.getElementById("shark1");
var shark2 = document.getElementById("shark2");

var fish1m = document.getElementById("fish1m");
var fish2m= document.getElementById("fish2m");
var fish3m = document.getElementById("fish3m");
var fish4m = document.getElementById("fish4m");
var fish5m = document.getElementById("fish5m");
var fish6m = document.getElementById("fish6m");
var fish7m = document.getElementById("fish7m");
var fish8m = document.getElementById("fish8m");
var fish9m = document.getElementById("fish9m");
var fish10m = document.getElementById("fish10m");
var shark1m = document.getElementById("shark1m");
var shark2m = document.getElementById("shark2m");
var consolea = document.getElementById("console");
var energy = document.getElementById("energy");

var cannon1 = document.getElementById("cannon1");
var cannon2 = document.getElementById("cannon2");
var cannon3 = document.getElementById("cannon3");
var cannon4 = document.getElementById("cannon4");
var cannon5 = document.getElementById("cannon5");
var cannon6 = document.getElementById("cannon6");
var cannon7 = document.getElementById("cannon7");

var cannon_minus = document.getElementById("cannon_minus");
var cannon_plus = document.getElementById("cannon_plus");
var activity=document.getElementById("activity");

var bullet1 = document.getElementById("bullet1");
var bullet2 = document.getElementById("bullet2");
var bullet3 = document.getElementById("bullet3");
var bullet4 = document.getElementById("bullet4");
var bullet5 = document.getElementById("bullet5");
var bullet6 = document.getElementById("bullet6");
var bullet7 = document.getElementById("bullet7");

var web1s = document.getElementById("web1s");
var web2s = document.getElementById("web2s");
var web3s = document.getElementById("web3s");
var web4s = document.getElementById("web4s");
var web5s = document.getElementById("web5s");
var web6s = document.getElementById("web6s");
var web7s = document.getElementById("web7s");
var shunzi=document.getElementById("shunzi")
var sk;
var fillshu=0;
var wilth=0;
var x=0;
var arc=0;
var fishArray = new Array();
var bulletArray= new Array();

var webArraywilths= new Array("91","117","133","157","147","183","207");
var webArrayhiegts= new Array("91","114","132","157","140","181","208");
var ssssuzu=new Array();
var gunhight=Array("74","76","76","83","85","90","94");
var clickswilth;
var clickshight;
var gamefengshu=1000;

var redpacket=document.getElementById("redpacket")
var redpacketimg1=document.getElementById("redpacketimg1");
var redpacketimg2=document.getElementById("redpacketimg2");
var redpacketbox=0;
var redpacketnumber;
var redpacketmoney=0;

var ceng=document.getElementById("ceng");
var redpacketmoneyArry=new Array();
var money=0;
var txt=document.getElementById("txt");
var stopping=false;
var dropouts=document.getElementById("dropouts")
var ll=0;

var activitycover=document.getElementById("activitycover")
function run(){
    ctx.beginPath();

    s1=setInterval(Createfish,800);
    s2=setInterval(Createfish2,800);
    s3=setInterval(Move,120);
    s4= setInterval(omit,100);
    s5=setInterval(collide,100);
    ctx.stroke();
    ctx.restore();

}
function Createfish(){
    var a =parseInt(Math.random()*100);
    if(a>=0&&a<10||a>64){
       var f = new fishistencil(ctx,fish1,55,37,4,1,10);
       fishArray.push(f);
    }else if(a>=10&&a<20){
        var f = new fishistencil(ctx,fish2,78,64,4,1,20);
        fishArray.push(f);
    }else if(a>=20&&a<30){
        var f = new fishistencil(ctx,fish3,72,56,4,1,30);
        fishArray.push(f);
    }else if(a>=30&&a<38){
        var f = new fishistencil(ctx,fish4,77,59,4,1,40);
        fishArray.push(f);
    }else if(a>=38&&a<45){
        var f = new fishistencil(ctx,fish5,107,122,4,1,50);
        fishArray.push(f);
    }
    else if(a>=45&&a<50){
        var f = new fishistencil(ctx,fish6,105,79,6,1,60);
        fishArray.push(f);
    }else if(a>=50&&a<54){
        var f = new fishistencil(ctx,fish7,92,151,5,1,80);
        fishArray.push(f);
    }else if(a>=54&&a<57){
        var f = new fishistencil(ctx,fish8,174,126,6,1,90);
        fishArray.push(f);
    }else if(a>=57&&a<60){
        var f = new fishistencil(ctx,fish9,166,183,6,1,100);
        fishArray.push(f);
    }else if(a>=60&&a<62){
        var f = new fishistencil(ctx,fish10,178,187,5,1,120);
        fishArray.push(f);
    }else if(a==62){
        var f = new fishistencil(ctx,shark1,509,270,6,1,150);
        fishArray.push(f);
    }else if(a==63){
        var f = new fishistencil(ctx,shark2,516,273,6,1,200);
        fishArray.push(f);
    }
}//创建鱼
function Createfish2(){
    var a =parseInt(Math.random()*100);
    if(a>=0&&a<10||a>64){
        var f = new fishistencil(ctx,fish1m,55,37,4,2,10);
        fishArray.push(f);
    }else if(a>=10&&a<20){
        var f = new fishistencil(ctx,fish2m,78,64,4,2,20);
        fishArray.push(f);
    }else if(a>=20&&a<30){
        var f = new fishistencil(ctx,fish3m,72,56,4,2,30);
        fishArray.push(f);
    }else if(a>=30&&a<38){
        var f = new fishistencil(ctx,fish4m,77,59,4,2,40);
        fishArray.push(f);
    }else if(a>=38&&a<45){
        var f = new fishistencil(ctx,fish5m,107,122,4,2,50);
        fishArray.push(f);
    }
    else if(a>=45&&a<50){
        var f = new fishistencil(ctx,fish6m,105,79,6,2,60);
        fishArray.push(f);
    }else if(a>=50&&a<54){
        var f = new fishistencil(ctx,fish7m,92,151,5,2,80);
        fishArray.push(f);
    }else if(a>=54&&a<57){
        var f = new fishistencil(ctx,fish8m,174,126,6,2,90);
        fishArray.push(f);
    }else if(a>=57&&a<60){
        var f = new fishistencil(ctx,fish9m,166,183,6,2,100);
        fishArray.push(f);
    }else if(a>=60&&a<62){
        var f = new fishistencil(ctx,fish10m,178,187,5,2,120);
        fishArray.push(f);
    }else if(a==62){
        var f = new fishistencil(ctx,shark1m,509,270,6,2,150);
        fishArray.push(f);
    }else if(a==63){
        var f = new fishistencil(ctx,shark2m,516,273,6,2,200);
        fishArray.push(f);
    }

}//创建鱼
function Move(){

    ctx.clearRect(0,0,800,500);
    for(var i=0;i<fishArray.length;i++){//鱼动
        fishArray[i].move();
    }
    for(var i=0;i<bulletArray.length;i++){//子弹动
        bulletArray[i].move();
    }
    consoles();

}//移动
function fishistencil(ctx,imgNode,cutx,cuty,n,direction,gamefenshu){//创建鱼模板
    this.ctx=ctx;
    this.imgNode=imgNode;
    this.cutx=cutx;
    this.cuty=cuty;
    this.speech=parseInt(Math.random()*10)+1;
    this.yiy=parseInt(Math.random()*(500-cuty));
    this.drawx=cutx;
    this.drawy=cuty;
    this.isDie=false;
    this.jishu=20;
    this.y=0;
    this.n=n-1;
    this.direction=direction;
    this.fenshu=gamefenshu;
    if(this.direction==1){
        this.yix=-cutx;
        this.move=function(){
            this.y=this.y+this.cuty;
            if(this.isDie==true){
                this.speech=0;
                this.jishu--;
                if(this.y>this.cuty*(this.n+1)*2){
                    this.y=this.cuty*(this.n+2);
                }
            }else if(this.isDie==false){
                if(this.y>this.cuty*this.n){
                    this.y=0;
                }
            }
            this.yix=this.yix+this.speech;
            this.drawFish();
        }
    }else if(this.direction==2){
        this.yix=800+cutx;
        this.move=function(){
            this.y=this.y+this.cuty;
            if(this.isDie==true){
                this.speech=0;
                this.jishu--;
                if(this.y>this.cuty*(this.n+1)*2){
                    this.y=this.cuty*(this.n+2);
                }
            }else if(this.isDie==false){
                if(this.y>this.cuty*this.n){
                    this.y=0;
                }
            }
            this.yix=this.yix-this.speech;
            this.drawFish();
        }
    }
    this.drawFish=function(){
        this.ctx.drawImage(this.imgNode,0,this.y,this.cutx,this.cuty,this.yix,this.yiy,this.drawx,this.drawy)
    }
    this.drawFish();
}
function omit(){
    for(var i=0;i<fishArray.length;i++){
        if(fishArray[i].yix>800&&fishArray[i].direction==1){
            fishArray.splice(i,1);
        }
        if(fishArray[i].yix<-fishArray[i].cutx&&fishArray[i].direction==2){
            fishArray.splice(i,1);
        }
        for(var a=0;a<bulletArray.length;a++){
            var zidanwilth=400-(bulletArray[a].yiy*Math.sin(arc));
            var zidanhilth=500+(bulletArray[a].yiy*Math.cos(arc));
            if(Number(fishArray[i].yix)+(Number(fishArray[i].cutx)/2)>zidanwilth&&Number(fishArray[i].yix)+(Number(fishArray[i].cutx)/2)<Number(bulletArray[a].yix)+zidanwilth){
                if(Number(fishArray[i].yiy)+(Number(fishArray[i].cuty)/2)>zidanhilth&&Number(fishArray[i].yiy)+(Number(fishArray[i].cuty)/2)<zidanhilth+Number(bulletArray[a].cuty)){
                    bulletArray[a].isDie=true;
                    fishArray[i].isDie=true
                    gamefengshu=gamefengshu+fishArray[i].fenshu;
                }
            }
        }
        if(fishArray[i].jishu<10){
            fishArray.splice(i,1);
            redpacketnumber=parseInt(Math.random()*10000);
            if(redpacketnumber<100&&1<redpacketnumber){
                redpacketmoney=parseInt(Math.random()*1000)*0.01;
                console.log(redpacketmoney)
                redpacketsup();
                redpacketmoneyArry.push(redpacketmoney);
            }else if(redpacketnumber<3200&&3000<redpacketnumber){
                redpacketmoney=parseInt(Math.random()*500)*0.1;
                console.log(redpacketmoney)
                redpacketsup();
                redpacketmoneyArry.push(redpacketmoney);
            }else if(redpacketnumber<5500&&5450<redpacketnumber){
                redpacketmoney=parseInt(Math.random()*100)*0.2;
                console.log(redpacketmoney)
                redpacketsup();
                redpacketmoneyArry.push(redpacketmoney);
            }else if(redpacketnumber<9900&&9980<redpacketnumber){
                redpacketmoney=parseInt(Math.random()*100)*0.5;
                console.log(redpacketmoney)
                redpacketsup();
                redpacketmoneyArry.push(redpacketmoney);
            }else if(redpacketnumber==3333){
                redpacketmoney=parseInt(Math.random()*5)*50;
                console.log(redpacketmoney)
                redpacketsup();
                redpacketmoneyArry.push(redpacketmoney);
            }

        }
    }

    for(var i=0;i<bulletArray.length;i++){//子弹出界删除
        if(bulletArray[i].yiy<-500){
            bulletArray.splice(i,1);
        }
    }
}//出边界删除

function consoles(){//加载
    ctx.drawImage(consolea,10,430);
    ctx.drawImage(energy,0,0,wilth,19,553,475,wilth,19);
    ctx.drawImage(cannon_minus,370,470);
    ctx.drawImage(cannon_plus,465,470);
    jifeng();
    chasegun();
    zidancollide();
}
function jifeng(){//积分
    var a=new Array();
    var b=new Array();
    var c=new Array();
    a[0]=parseInt(gamefengshu/100000);
    a[1]=parseInt(gamefengshu%100000/10000);
    a[2]=parseInt(gamefengshu%10000/1000);
    a[3]=parseInt(gamefengshu%1000/100);
    a[4]=parseInt(gamefengshu%100/10);
    a[5]=parseInt(gamefengshu%10);
    for(var i=0;i< a.length;i++){
        if(a[i]==9){
            b[i]=0
        }else if(a[i]==8){
            b[i]=1;
        }else if(a[i]==7){
            b[i]=2;
        }else if(a[i]==6){
            b[i]=3;
        }else if(a[i]==5){
            b[i]=4;
        }else if(a[i]==4){
            b[i]=5;
        }else if(a[i]==3){
            b[i]=6;
        }else if(a[i]==2){
            b[i]=7;
        }else if(a[i]==1){
            b[i]=8;
        }else if(a[i]==0){
            b[i]=9;
        }
        c[i]=b[i]*24;
    }
    ctx.drawImage(shunzi,0,c[0],20,24,30,475,20,24);
    ctx.drawImage(shunzi,0,c[1],20,24,52,475,20,24);
    ctx.drawImage(shunzi,0,c[2],20,24,76,475,20,24);
    ctx.drawImage(shunzi,0,c[3],20,24,98,475,20,24);
    ctx.drawImage(shunzi,0,c[4],20,24,122,475,20,24);
    ctx.drawImage(shunzi,0,c[5],20,24,146,475,20,24);
}
function chasegun(){//创建炮
    ctx.save()
    ctx.translate(437,500-(gunhight[fillshu]/2));
    ctx.rotate(arc);
    if(fillshu==0){
        ctx.drawImage(cannon1,0,x,74,gunhight[fillshu],-37,-37,74,gunhight[fillshu]);
    }else if(fillshu==1){
        ctx.drawImage(cannon2,0,x,74,gunhight[fillshu],-37,-37,74,gunhight[fillshu]);
    }else if(fillshu==2){
        ctx.drawImage(cannon3,0,x,74,gunhight[fillshu],-37,-37,74,gunhight[fillshu]);
    }else if(fillshu==3){
        ctx.drawImage(cannon4,0,x,74,gunhight[fillshu],-37,-37,74,gunhight[fillshu]);
    }else if(fillshu==4){
        ctx.drawImage(cannon5,0,x,74,gunhight[fillshu],-37,-37,74,gunhight[fillshu]);
    }else if(fillshu==5){
        ctx.drawImage(cannon6,0,x,74,gunhight[fillshu],-37,-37,74,gunhight[fillshu]);
    }else if(fillshu==6){
        ctx.drawImage(cannon7,0,x,74,gunhight[fillshu],-37,-37,74,gunhight[fillshu]);
    }
    ctx.stroke();
    ctx.restore();
}//建立炮
//========================================
function bombbegain(){
    clearInterval(sk);
        sk=setInterval(bian,100);
//        sk2=setInterval(clear,500)
}
function bian(){
        x=x+gunhight[fillshu];
        if(x>(gunhight[fillshu]*4)){
            x=0;
            clearInterval(sk);
        }
}
//开炮变化=====================================
function jian(){//变炮
    fillshu=fillshu-1;
    if(fillshu<0){
        fillshu=6;
    }
}
function jia(){//变炮
    fillshu=fillshu+1;
    if(fillshu>6){
        fillshu=0;
    }
}

function Clickcoordinates(){//获取点击坐标
    var canvas = document.getElementById('mycanvas');
    clickswilth = event.clientX - canvas.getBoundingClientRect().left;
    clickshight =event.clientY - canvas.getBoundingClientRect().top;
//    alert(clickshight)
    if(clickswilth>373&&clickswilth<407&&clickshight>475&&clickshight<500){
        jian();
    }else if(clickswilth>468&&clickswilth<502&&clickshight>475&&clickshight<500){
        jia();
    }
    if(clickswilth>9&&clickswilth<800&&clickshight>0&&clickshight<450){
        wilth=wilth+2;
        Createbullet();
    }
    if(wilth>213){
        wilth=0;
        gamefengshu=gamefengshu+1000;
    }
    if(gamefengshu<0||gamefengshu>100000){
        quit();
    }
}
function games(){
    Clickcoordinates();
}
// img 节点
//    // 剪切图片的起始X坐标
//    // 和Y坐标
//    //剪切 宽度
//    //剪切高度
//    //绘制X坐标
//    //绘制Y坐标
//    //绘制的宽度
//    //绘制高度
function bullettemplate(ctx,imgNode,cutx,cuty,arc){//子弹模板
    this.ctx=ctx;
    this.imgNode=imgNode;
    this.cutx=cutx;
    this.cuty=cuty;
    this.yix=-cutx;
    this.yiy=-cuty;
    this.drawx=cutx;
    this.drawy=cuty;
    this.arc=arc;
    this.speech=15;
    this.jishu=10;
    this.isDie=false;
    this.w=420;
    this.h=470;
    this.move=function(){
        this.yix=this.cutx/2;
        this.yiy=this.yiy-this.speech;
        this.drawbullet();
         if(this.isDie==true){
             this.speech=0;
             this.jishu--;
         }
    }
    this.drawbullet=function(){
        this.ctx.save()
        this.ctx.translate(this.w,this.h);
        this.ctx.rotate(this.arc);
        this.ctx.drawImage(this.imgNode,0,0,this.cutx,this.cuty,this.yix,this.yiy,this.drawx,this.drawy)
        this.ctx.stroke();
        this.ctx.restore();
    }
    this.drawbullet();
}
function Createbullet(){
    bombbegain();
    if(fillshu==0){
        var f = new bullettemplate(ctx,bullet1,24,26,arc);
        bulletArray.push(f);
        gamefengshu=gamefengshu-20;
    }else if(fillshu==1){
        var f = new bullettemplate(ctx,bullet2,25,29,arc);
        bulletArray.push(f);
        gamefengshu=gamefengshu-50;
    }else if(fillshu==2){
        var f = new bullettemplate(ctx,bullet3,27,31,arc);
        bulletArray.push(f);
        gamefengshu=gamefengshu-100;
    }else if(fillshu==3){
        var f = new bullettemplate(ctx,bullet4,29,33,arc);
        bulletArray.push(f);
        gamefengshu=gamefengshu-200;
    }else if(fillshu==4){
        var f = new bullettemplate(ctx,bullet5,30,34,arc);
        bulletArray.push(f);
        gamefengshu=gamefengshu-300;
    }else if(fillshu==5){
        var f = new bullettemplate(ctx,bullet6,31,35,arc);
        bulletArray.push(f);
        gamefengshu=gamefengshu-400;
    }else if(fillshu==6){
        var f = new bullettemplate(ctx,bullet7,32,38,arc);
        bulletArray.push(f);
        gamefengshu=gamefengshu-500;
    }
    arc= getArc(clickswilth,clickshight,800,500);
//    alert(arc);
//    alert(clickswilth)
//    alert(bulletArray[0].yix)
}
function collide(){//碰撞
     for(var i=0;i<bulletArray.length;i++){//子弹出界删除
            if(bulletArray[i].yiy<clickshight-500||bulletArray[i].isDie==true){
//                bulletArray.splice(i,1);
                bulletArray[i].isDie=true;
                bulletArray[i].speech=0;
                if(fillshu==0){
                    bulletArray[i].imgNode=web1s;
                }else if(fillshu==1){
                    bulletArray[i].imgNode=web2s;
                }else if(fillshu==2){
                    bulletArray[i].imgNode=web3s;
                }else if(fillshu==3){
                    bulletArray[i].imgNode=web4s;
                }else if(fillshu==4){
                    bulletArray[i].imgNode=web5s;
                }else if(fillshu==5){
                    bulletArray[i].imgNode=web6s;
                }else if(fillshu==6){
                    bulletArray[i].imgNode=web7s;
                }
                bulletArray[i].w=430-bulletArray[i].cutx;
                bulletArray[i].h=560-bulletArray[i].cuty;
                bulletArray[i].cutx=webArraywilths[fillshu];
                bulletArray[i].cuty=webArrayhiegts[fillshu];
                bulletArray[i].drawx=webArraywilths[fillshu];
                bulletArray[i].drawy=webArrayhiegts[fillshu];
            }
            if(bulletArray[i].jishu<6){
                bulletArray.splice(i,1)
            }
     }
}

//获取炮台角度数
/**
 *x鼠标点击x坐标
 *y鼠标点击的y坐标
 *width 画布的宽度
 *height 画布的高度
 **/
function getArc(x,y,width,height){
    var arc;
    if(y==height){
        arc=(x>=width/2)?Math.PI/2:(-1*Math.PI/2);
    }
    else{
        arc=Math.atan((x-(width/2))/(height-y));
    }
    return arc;
}

function quit(){//低分退出
    for(var i=0;i<redpacketmoneyArry.length;i++){
        money=Number(money)+Number(redpacketmoneyArry[i]);
    }
    clearInterval(s1);
    clearInterval(s2);
    clearInterval(s3);
    clearInterval(s4);
    clearInterval(s5);
    mycanvas.onclick=""
    ceng.style.display="block";
    ceng.innerHTML="<h2>恭喜您</h2><p>游戏结束，您共获得了 "+money+" 元的红包</p>"
    document.onclick=function(){
        fanhui();
    }
}
function fanhui(){
    ll++;
    if(ll==2){
        gamekaishi.style.marginTop="50%";
        gamekaishi.style.opacity="1";
        ceng.style.display="none";
        stops.style.zIndex="-1"
        dropouts.style.zIndex="-1";
        document.onclick="";
        mycanvas.onclick=function(){
            games();
        }
    }
    if(ll>1){
        ll=0;
    }
}
function stop(){
    if(stopping==false){
        clearInterval(s1);
        clearInterval(s2);
        clearInterval(s3);
        clearInterval(s4);
        clearInterval(s5);
        mycanvas.onclick=""
        stopping=true;
        stops.innerText="开始"
    }else{
        run();
        stopping=false;
        mycanvas.onclick=function(){
            games();
        }
        stops.innerText="暂停"

    }

}

function redpacketsdown(){//显现红包
    if(redpacketbox==0){
        redpacket.style.display="block";
        redpacketimg1.style.display="none";
        redpacketimg2.style.display="block";
        redpacket.style.width="200px";
        redpacket.style.marginLeft="44%";
        redpacketbox=1;
        txt.style.display="block"
        txt.innerHTML="<h6>亲爱的用户：</h6><p>您获的了<span> " +redpacketmoney+
            " </span>元的红包,祝您获得大奖</p>"
    }else{
        redpacketsup;
        redpacket.style.display="none";
        redpacketbox=0;
    }

}
function redpacketsup(){//显现红包2
        redpacket.style.display="block";
        redpacketimg2.style.display="none";
        redpacketimg1.style.display=" block";
        redpacket.style.width="50px";
        redpacket.style.marginLeft="48%";
        txt.style.display="none"
}
//======================================================初始界面

function bianhua(obj){
    if(obj.id=="start"){
        start.src="images/boundary/cover_button_start_down.png"
    }else if(obj.id=="achievement"){
        achievement.src="images/boundary/cover_button_honor_down.png"
    }else if(obj.id=="more"){
        more.src="images/boundary/cover_button_more_down.png"
    }else if(obj.id=="dropout"){
        dropout.src="images/boundary/cover_button_over_down.png"
    }

}

function bianhua2(obj){
    if(obj.id=="start"){
        start.src="images/boundary/cover_button_start_up.png"
    }else if(obj.id=="achievement"){
        achievement.src="images/boundary/cover_button_honor_up.png"
    }else if(obj.id=="more"){
        more.src="images/boundary/cover_button_more_up.png"
    }else if(obj.id=="dropout"){
        dropout.src="images/boundary/cover_botton_over_up.png"
    }

}

function jinrugame(){
    gamekaishi.style.transition="all 1s linear"
    gamekaishi.style.marginTop="13%";
    if(gamekaishi.style.marginTop=="13%"){
        gamekaishi.style.opacity="0";
        run();
        stops.style.zIndex="0"
        dropouts.style.zIndex="0"
    }
}

function coverssup(){
    activitycover.style.display="none"
}
function coverssdown(){
    activitycover.style.display="block"
}
var noticeboard=document.getElementById("noticeboard");
var wen=document.getElementById("wen")
function gonggao(){
    noticeboard.style.transition="all 1s linear";
    noticeboard.style.marginTop="-500px";
    noticeboard.style.opacity="1";
    wen.innerHTML="<h1>尊敬的客户：</h1><p>&nbsp;&nbsp;您总共获取了 "+redpacketmoney+" 元的红包</p>" +
        "<br>(点击离开本页面)"
}
function gonggaodown(){
    noticeboard.style.marginTop="0px";
    noticeboard.style.opacity="0";
}
