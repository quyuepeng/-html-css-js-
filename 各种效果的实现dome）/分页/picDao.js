//1、导入mysql组件
var mysql = require("./../node_modules/mysql");
exports.queryImgs = function(req,resp){
    //六、进行数据处理
    //2、创建连接
    console.log(req.body.picType);
    console.log(req.body.index);
    console.log(req.body.nums);
    var type = req.body.picType;//查询条件
    var index = req.body.index;//当前页数
    var nums = req.body.nums;//每页显示的数量
    var conn = getConnect();
    //3、打开连接
    conn.connect();
    //4、操作数据库
    var sql = "select t_pic.name,t_pic.url a,t_type.t_name from t_pic,t_type where t_pic.type = t_type.id ";
    var where = "";
    var array = [];
    if(type == null || type == undefined || type == ""){

    }else{
        //模糊查询
        //sql += " and t_type.t_name like ? ";
        //array.push("%"+type+"%");

        //多字段匹配
        where = " and (t_pic.name like ? or t_type.t_name like ? )";
        array.push("%"+type+"%");
        array.push("%"+type+"%");
        array.push("%"+type+"%");
        array.push("%"+type+"%");
    }
    var sqlAll = "SELECT *,(SELECT COUNT(*) FROM t_pic,t_type WHERE (t_pic.type = t_type.id " + where +")) counts " +
        "FROM t_pic,t_type WHERE (t_pic.type = t_type.id " + where +")LIMIT "+ (index - 1) * nums +","+nums;
    console.log(sqlAll);
    console.log(array);
    conn.query(sqlAll,array,function(err,data){
        console.log(err);
        console.log(data);
        //七、返回数据给前台，谁发送的请求，响应给谁
        resp.send(JSON.stringify(data));
        resp.end();
    });
    conn.end();
};
function getConnect(){
    var conn;
    conn = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123123",
        port:"3306",
        database:"mylhl"
    });
    return conn;
}