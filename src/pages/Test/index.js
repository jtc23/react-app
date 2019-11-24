import React from 'react'
import {Form, Input, Button} from 'antd'
import { withRouter} from 'react-router'
import { connect } from 'react-redux'
import  * as actionCreators from '@/redux/action'
import  store  from '@/redux/store'
import Text from './TestText'

class Test extends React.Component {
	constructor(props){
		super(props)
		this.state={
			text:'1111',
		}
	}
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
		// const action=actionCreators.getTestData();
		// store.dispatch(action)
		this.props.getTestData();
		this.setState({
			query:this.getarray()
		});
	}
		
	textChange(e){
		this.setState({
			text:e.target.value
		})
	}
	outPut(value){
		alert(value)
	}

	render(){
		const date=new Date()
		const time=`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}  ${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}:${date.getSeconds().toString().padStart(2,"0")}`;
		return (
				<div className='home'>
					{time}<br />
					{JSON.stringify(this.props.listdata)}
					{this.state.query}

					<Text text={this.state.text} 
					outPut={value=>{this.outPut(value)}}/>
					<Input onChange={(e)=>{this.textChange(e)}} value={this.state.text} ref="txt"/>
				</div>
			);
		}
	}

const  mapStateToProps = (state) => {
  return{
    listdata: state.listdata
  }
}
const  mapDispatchToProps = (dispatch) => {
  return{
     getTestData () {
          store.dispatch(actionCreators.getTestData());
       }
         
    
  }
}
	export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Test));