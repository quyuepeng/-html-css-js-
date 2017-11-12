//1、引入express框架
var express = require("./server/node_modules/express");
//2、创建服务器
var app = express();
//3、配置服务器
app.configure(function(){
    app.use(express.logger("dev"));//控制台日志 用户页面操作
    app.use(express.bodyParser());//必须设置 post才能获取参数
    app.use(express.methodOverride());//非get请求转换成post
    app.use(app.router);//路由分配 拦截作用 next()
    app.use(express.static(__dirname+"/client"));
    app.use(express.favicon());
    app.use(express.errorHandler);
});
//4、监听端口号，开启服务器
app.set("port",8888);
app.listen(app.get("port"),function(){
    console.log("服务器开启成功！端口号"+app.get("port"));
});
//五、服务器处理请求


