import React from 'react'
import { Row, Col, Card, Timeline, Icon } from 'antd'
import "antd/dist/antd.css"
import './index.less'
import b1 from '../../style/b1.jpg'
import EchartsProjects from '@/components/Echart'
import EchartsViews from '@/components/Echart/echartviews.js'

export default class Home extends React.Component {

	render(){
		return (
				<div className='home'>
					<Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="heart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">收藏</div>
                                        <h2>10</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">知识储备</div>
                                        <h2>31415</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="camera" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">照片</div>
                                        <h2>99+</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="mail" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">邮件</div>
                                        <h2>99+</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                               <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>工程进度</h3>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                <Timeline>
                                    <Timeline.Item color="green">抛弃create-react-app的旧webpack3版本使用更强大的webpack4</Timeline.Item>
                                    <Timeline.Item color="green">主体框架搭建 基本目录搭建和react-rudux解构</Timeline.Item>
                                    <Timeline.Item color="green">
                                    	完成路由分配和内页的header footer 左侧nav
                                    </Timeline.Item>
                                      <Timeline.Item color="green">
                                    	完成部分页面的redux功能和axios的接口
                                    </Timeline.Item>
                                    <Timeline.Item color="green">
                                    	完成登录页面的路由处理和权限认证
                                    </Timeline.Item>

                                    <Timeline.Item color="#108ee9">
                                    	完善内页的功能
                                  		比如：各种图表和表格
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>消息栏</h3>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>访问量统计</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <span className="card-tool"><Icon type="sync" /></span>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>
				</div>
			);
		}
	}