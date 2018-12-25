/**
 * Created by hao.cheng on 2017/5/5.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
// 引入雷达图
// import  'echarts/lib/chart/radar';
// 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
//引入title
// import 'echarts/lib/component/title';
//引入图例
// import 'echarts/lib/component/legend';
const mytextStyle={
    color:"#333",                //文字颜色
    fontStyle:"normal",         //italic斜体  oblique倾斜
    fontWeight:"normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
    // fontFamily:"sans-serif",   //字体系列
    fontSize:12,                //字体大小
};
export default class EchartsRadar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        };
        // this.indicator = []
    }
    
    
    /**
     * @description 配置图表
     * @returns 
     * @memberof EchartsRadar
     */
    getOption(){
         return {
            title: {
                text: '个人状态表'
            },
            //点击提示标签
            // tooltip: {},
            legend: {
                //图例文字展示
                data: [
                    { name:'最近一个月状况' }, 
                    { name:'一年平均状况' }],
                //图例显示在底部
                bottom:0,
                //图例背景颜色
                backgroundColor:"transparent",
                // 图例标记的图形宽度。[ default: 25 ]
                itemWidth:12,
                // 图例标记的图形高度。[ default: 14 ]
                itemHeight:9,
                //图例文字样式设置
                textStyle:mytextStyle
            },
            radar: {
                //雷达图绘制类型，支持 'polygon' 和 'circle' [ default: 'polygon' ]
                shape: 'polygon',
                splitNumber: 3,
                center:['50%','50%'],
                radius:'65%',
                //指示器名称和指示器轴的距离。[ default: 15 ]
                nameGap:5,
                triggerEvent:true,
                name: {
                    textStyle: {
                        color: '#999',
                        backgroundColor: 'transparent'
                        // borderRadius: 3,
                        // padding: [3, 5]
                   },
                   formatter:function(value,indicator){
                        value = value.replace(/\S{4}/g, function(match) {
                            return match + '\n'
                        })
                        // value = value + '\n' + indicator.value;
                        return '{a|'+value+'}'+ '\n' + '{b|'+indicator.value+'}'
                    },
                    //富文本编辑 修改文字展示样式
                    rich:{
                        a:{
                            color:"#999",
                            fontSize:12,
                            align: "center"
                            
                        },
                        b:{
                            color:"#333",
                            fontSize:17,
                            align: "center"
                        }
                    }
                },
                // 设置雷达图中间射线的颜色
                axisLine: {
                    lineStyle: {
                        color: '#ccc',
                    },
                },
                indicator: [
                    {"name":"平均任务完成度","value":400,"max":500},
                    {"name":"考勤状况","value":500,"max":500},
                    {"name":"打卡状况","value":450,"max":500},
                    {"name":"出现失误状况","value":100,"max":500},
                    {"name":"开小差次数","value":50,"max":500}
                    // {"name":"价格高于标价","value":200,"max":500},
                    // {"name":"卖新车","value":350,"max":500},
                    // {"name":"图片与车款不符合","value":333,"max":500}
                ],
                //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
                splitArea : {
                    show : false,
                    areaStyle : {
                        color: 'rgba(255,0,0,0)', // 图表背景的颜色
                    },
                }
            },
            series: [{
                name: '投诉统计',
                type: 'radar',
                //显示雷达图选中背景
                areaStyle: {normal: {}},
                data: [
                    {
                        value : [400, 500, 450, 100, 50],
                        // 设置区域边框和区域的颜色
                        itemStyle: {
                            normal: {
                                //雷达图背景渐变设置
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0.5,
                                    color: 'rgba(48,107, 231, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(73,168, 255, 0.7)'
                                }]),
                                //去除刻度
                                opacity:0,
                                //雷达图边线样式
                                lineStyle: {
                                    width: 0,
                                    color: '#306BE7',
                                },
                            },
                        },
                        name : '最近一个月状况',
                        id: "jintian"
                    },
                    {
                        value : [450, 500, 450, 150, 100],
                        // 设置区域边框和区域的颜色
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0.5,
                                    color: 'rgba(139,241, 134, 0.7)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,208, 131, 1)'
                                }]),
                                opacity:0,
                                lineStyle: {
                                    width: 0,
                                    color: '#8BF186',
                                },
                            },
                        },
                        name : '一年平均状况',
                        id: "zuotian"
                    }
                ]
            }]
        };
    }
    /**
     * @description 雷达图选中区域点击事件和外部显示标签点击事件
     * @param {any} param 
     * @param {any} echarts 
     * @memberof EchartsRadar
     */
    onChartClick(param,echarts){
        console.log(param)
    }
    /**
     * @description 点击legend事件
     * @param {any} param 
     * @param {any} echarts 
     * @memberof EchartsRadar
     */
    onChartLegendselectchanged(param,echarts){
        console.log(param)
    }
    componentWillReceiveProps(nextProps){
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    render(){
        let onEvents={
            'click': this.onChartClick.bind(this),
            'legendselectchanged': this.onChartLegendselectchanged.bind(this)
        }
        return(
            <div className="echartsRadar">
                <ReactEcharts
                    option={this.getOption()} 
                    notMerge={true}
                    lazyUpdate={true}
                    onEvents={onEvents}
                    style={{width: '100%',height:'500px'}}
                />
            </div>
        )
    }
}

