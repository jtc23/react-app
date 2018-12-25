import React from 'react';
import { Icon } from 'antd'
import './index.less';
import "antd/dist/antd.css";
 
export default class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render () {
		return (
			<div className="head">
			 <Icon
                            className="nav_trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                        />
				<h1 className="title">企业后台管理系统</h1>
			</div>
			);
	}
}