import React from 'react'
import {Form, Input, Button} from 'antd'
export default class Text extends React.Component {
	constructor(props){
		super(props)
		
	}
	ComponentWillReceiveProps(){
		console.log('updated了')
	}
	ComponentDidUpdate(){
		console.log('updated了')
	}

 render(){
 	return(
 		<div>
 		<button
 		onClick={()=>{this.props.outPut('点击了这个按钮')}}
 		>{this.props.text}</button>
 		</div>
 	)
 }
}