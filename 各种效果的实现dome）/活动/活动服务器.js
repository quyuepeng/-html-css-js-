//1.加载express资源
var myexpress = require("./server/node_modules/express");//加载外部文件的规范
//2.生成服务器对象 执行express里面的全局函数，返回一个express服务器对象
var app = myexpress();// 对象
//3.设置端口号
app.set("port",8893);//键值对存值
//4.给服务器设置端口号
app.listen(app.get("port"),function(){
    console.log("活动服务器启动成功，端口号为"+app.get("port"));
});
//5、配置app
app.configure(function(){
    //日志模块
    app.use(myexpress.logger("dev"));
    //6.2设置post模块
    app.use(myexpress.bodyParser());//设置post的请求参数
    app.use(myexpress.methodOverride());//非get方法转换成post
    //console.log(__dirname);//c:\Users\yanggjian\WebstormProjects\mynodejs\day2
    //__dirname 默认的全局变量 代表项目根目录 js的父级目录 day2
    app.use(myexpress.static(__dirname+"/client"));
    //网站默认图标
    //app.use(myexpress.favicon(__dirname+"/client/images/my_plane.gif"));
    //错误模块 控制台打印 开发中使用
    app.use(myexpress.errorHandler());
});

