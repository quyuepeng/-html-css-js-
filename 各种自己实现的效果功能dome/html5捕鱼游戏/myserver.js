/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 16-1-17
 * Time: 下午5:25
 * To change this template use File | Settings | File Templates.
 */
var myexpress=require("./server/node_modules/express");
var app=myexpress();
app.set("port",8888);
app.configure(function(){
    app.use(myexpress.logger("dev"));//日志模块 开发者模块
//    __dirname 默认的全局变量 代表项目根路径
    app.use(myexpress.bodyParser());//设置获取post请求参数
    app.use(myexpress.methodOverride());//非get请求转换成post请求
    app.use(app.router);
    app.use(myexpress.static(__dirname+"/client"));

    app.use(myexpress.errorHandler());//错误模块 开发者模块
});

app.listen(app.get("port"),function(){
    console.log("服务器启动!")
});//监听端口
