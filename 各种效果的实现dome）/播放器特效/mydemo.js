//1.����express��Դ
var myexpress = require("./server/node_modules/express");//�����ⲿ�ļ��Ĺ淶
//2.���ɷ��������� ִ��express�����ȫ�ֺ���������һ��express����������
var app = myexpress();// ����
//3.���ö˿ں�
app.set("port",8897);//��ֵ�Դ�ֵ
//4.�����������ö˿ں�
app.listen(app.get("port"),function(){
    console.log("success������the port is��"+app.get("port"));
});
//5������app
app.configure(function(){
    //��־ģ��
    app.use(myexpress.logger("dev"));
    //6.2����postģ��
    app.use(myexpress.bodyParser());//����post���������
    app.use(myexpress.methodOverride());//��get����ת����post
    //console.log(__dirname);//c:\Users\yanggjian\WebstormProjects\mynodejs\day2
    //__dirname Ĭ�ϵ�ȫ�ֱ��� ������Ŀ��Ŀ¼ js�ĸ���Ŀ¼ day2
    app.use(myexpress.static(__dirname+"/client"));
    //��վĬ��ͼ��
    //app.use(myexpress.favicon(__dirname+"/client/images/my_plane.gif"));
    //����ģ�� ����̨��ӡ ������ʹ��
    app.use(myexpress.errorHandler());
});

