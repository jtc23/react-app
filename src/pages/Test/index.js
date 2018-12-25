import React from 'react'
import {Form, Input, Button} from 'antd'
import { admin } from '@/axios'



export default class Login extends React.Component {
	componentDidMount(){
		admin().then(res=>{console.log(res)});
	}

	render(){
		return (
				<div className='home'>
					测试
				</div>
			);
		}
	}