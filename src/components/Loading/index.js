import React from 'react'
import { Icon } from 'antd'
import "antd/dist/antd.css"
import './index.less'

export default class Loading extends React.Component {
		constructor(props){
			super(props);
	}

	render(){
		return (
			<div className="loading" style={{display:this.props.display}}>
			  <div className="loading-icon"><Icon type="loading"/></div>
				<p>玩命加载中...</p>
			</div>
			);
	}
}