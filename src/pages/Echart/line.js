import React from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from './echartTheme'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Line extends React.Component {

    state = {}

    componentWillMount(){
        echarts.registerTheme('Imooc',echartTheme);
    }

    getOption() {
        let option = {
            title: {
                text: '工作时间图'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                     data: [
                        9,
                        10,
                        9,
                        11,
                        10,
                        8,
                        0
                    ]
                }
            ]
        }
        return option;
    }

    getOption2() {
        let option = {
            title: {
                text: '对比图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['个人时间','平均时间']
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '个人时间',
                    type: 'line',
                    stack: '总量',
                     data: [
                        9,
                        10,
                        9,
                        11,
                        10,
                        8,
                        0
                    ]
                },
                {
                    name: '平均时间',
                    type: 'line',
                    stack: '总量',
                    data: [
                         9,
                        9,
                        9,
                        9,
                        9,
                        1,
                        1
                    ]
                },
            ]
        }
        return option;
    }

    getOption3() {
        let option = {
            title: {
                text: '工作时间图'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type:'category',
                boundaryGap: false,
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                     data: [
                        9,
                        10,
                        9,
                        11,
                        10,
                        8,
                        0
                    ],
                    areaStyle: {}
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="折线图表之一">
                    <ReactEcharts
                        option={this.getOption()}
                        theme="Imooc"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
                <Card title="折线图表之二" style={{marginTop:10}}>
                    <ReactEcharts
                        option={this.getOption2()}
                        theme="Imooc"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
                <Card title="折线图表之三" style={{marginTop:10}}>
                    <ReactEcharts
                        option={this.getOption3()}
                        theme="Imooc"
                        notMerge={true}
                        lazyUpdate={true}
                        style={{
                        height: 500
                    }}/>
                </Card>
            </div>
        );
    }
}