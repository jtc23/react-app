import React from 'react'
import {Form, Input, Button} from 'antd'



export default class Login extends React.Component {
	getarray(){
		let query=this.state.string
		if(query.indexOf('?')>-1){
			return query.substring(1)
		}else{
			return '没有参数'
		}
	}
	componentWillMount(){
		this.setState({
			string:this.props.location.search
		})
	}
	componentDidMount(){
		this.setState({
			query:this.getarray()
		});
	}
		
	

	render(){
		const date=new Date()
		const time=`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}  ${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}:${date.getSeconds().toString().padStart(2,"0")}`;
		return (
				<div className='home'>
					{time}<br />
					{this.state.query}
				</div>
			);
		}
	}