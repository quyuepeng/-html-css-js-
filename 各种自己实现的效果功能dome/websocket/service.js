////1.加载express资源
var myexpress = require("./server/node_modules/express");//加载外部文件的规范
var app = myexpress();

console.log(__dirname);
////__dirname 默认的全局变量 代表项目根目录 js的父级目录 day2
//app.use(myexpress.static(__dirname));
app.use(myexpress.static('client'));
////网站默认图标
////app.use(myexpress.favicon(__dirname+"song/favicon.ico"));
////错误模块 控制台打印 开发中使用
//app.use(myexpress.errorHandler());
var ws = require("./server/node_modules/nodejs-websocket");
console.log("开始建立连接...")

var game1 = null,game2 = null , game1Ready = false , game2Ready = false;
var server = ws.createServer(function(conn){
    console.log("1111")
    conn.on("text", function (str) {
        console.log("收到的信息为:"+str)
        if(str==="game1"){
            game1 = conn;
            game1Ready = true;
            conn.sendText("success");
        }
        if(str==="game2"){
            game2 = conn;
            game2Ready = true;
        }

        if(game1Ready&&game2Ready){
            game2.sendText(str);
        }

        conn.sendText(str+"ccccccccc")
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(8002)
console.log("WebSocket建立完毕")

console.log("服务器启动")
app.listen(3000);
