/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 17-3-2
 * Time: 下午7:32
 * To change this template use File | Settings | File Templates.
 */
var myChart = echarts.init(document.getElementById('main'));
var qushi = echarts.init(document.getElementById('qushi'));
var tabls=document.getElementById('tabls');
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['人群','单位','院落']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:68, name:'人群',
                    itemStyle:{
                        normal:{color:'#58B2FF'}
                    }},
                {value:32, name:'单位',
                    itemStyle:{
                        normal:{color:'#4A8BDA'}
                    }},
                {value:0, name:'院落',
                    itemStyle:{
                        normal:{color:'#7FCDFF'}
                    }},
            ]
        }
    ]
};
myChart.setOption(option);

option2 = {
    title: {
        text: '数据采集趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['数据总数','人群','单位','院落']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['2015-04','2015-05','2015-06','2015-07','2015-08','2015-09']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'数据总数',
            type:'line',
            data:[600000, 650000, 670000, 610000, 705000, 860000],

            itemStyle:{
                normal:{color:'#58B2FF'}
            }
        },
        {
            name:'人群',
            type:'line',
            data:[200000, 250000, 270000, 220000, 315000, 460000],

            itemStyle:{
                normal:{color:'#4CD995'}
            }
        },
        {
            name:'单位',
            type:'line',
            data:[12000, 17000, 25000, 40000, 70500,130000],
            itemStyle:{
                normal:{color:'#FFD248'}
            }
        }
//            {
//                name:'院落',
//                type:'line',
//                data:[0, 0, 0, 0, 0,0],
//                itemStyle:{
//                    normal:{color:'red'}
//                }
//            }
    ]
};
qushi.setOption(option2);

$("#butten").click(function(){
    if(this.title==0){
        $("#butten").html(">");
        $("#aas").html("播放");
        this.title=1;
        donghua("paused");
    }else{
        $("#butten").html("||");
        $("#aas").html("暂停");
        this.title=0;
        donghua("running");
    }
});

function donghua(obj){
    $("#lunbo").css("animation-play-state",obj);
}
