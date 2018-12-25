import React from 'react'
import { Menu, Icon, Button,Tag } from 'antd'
import './index.less'
import "antd/dist/antd.css"
import  store  from '@/redux/store'
import  * as actionCreators from '@/redux/action'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/*下拉框*/
class BreadCrumb extends React.Component{

   constructor(props){
   		super(props);
   }

   buildBreadCrumb(breadtree){
   		return breadtree.map((item,index)=>{
   		return (
   			<Tag type="primary" closable key={item.key} className="bread-icon" afterClose={()=>{this.props.deletecrumb(item.key)}}>
          		<NavLink to={item.key}><span>{item.title}</span></NavLink>
        	</Tag>
   			)
   		});
   }
   componentWillMount(){
   
   }


	render(){
			return (
					<div className="breadcrumb">
						{this.buildBreadCrumb(this.props.bread)}
					</div>
				);
			}
	}

const  mapStateToProps = (state) => {
  return{
  	bread: state.bread
  }
}

const  mapDispatchToProps = (dispatch) => {
  return{
       deletecrumb (key) {

          store.dispatch(actionCreators.deletecrumb(key));
       }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BreadCrumb);

