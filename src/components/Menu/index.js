import React from 'react'
import { Menu, Icon,Button } from 'antd'
import "antd/dist/antd.css"
import "./index.less"
import { connect } from 'react-redux'
import { switchMenu } from '@/redux/action'
import { NavLink } from 'react-router-dom'
import MenuConfig from './menuConfig'
import  store  from '@/redux/store'
import  * as actionCreators from '@/redux/action'
/*下拉框*/
const SubMenu = Menu.SubMenu;
 
class NavMenu extends React.Component{
  constructor(props){
    super(props);
  }
    hasicon=(icon)=>{
      if(icon){
        return (
            <Icon type = {icon} />
          )
      }
      return null;
    }
   bulidMenu =(list)=>{
   		return list.map((item,index)=>{
   			if(item.children){
   				return ( <SubMenu title={<span> {this.hasicon(item.icon)}<span>{item.title} </span></span>  } key={item.key} >
   							{this.bulidMenu(item.children)}
   					</SubMenu>
   					)
   			}
        return (
            <Menu.Item title={item.title} key={item.key} >
              <NavLink to={item.key}>{this.hasicon(item.icon)} <span>{item.title}</span></NavLink>
            </Menu.Item>
          )

   		})
   }
   getopenKeys(string){
      if(string.indexOf('/',2)>0){
        return string.substring(0,string.indexOf('/',2));
      }
      return string;
   }


   componentWillMount(){
     const menuTree = this.bulidMenu(MenuConfig);
     let router=window.location.hash;
    let length=router.length;
    router=router.replace(/#|\?.*$/g,'');
     this.setState({
      menuTree,
      defaultSelectedKeys:[router],
      openKeys:[this.getopenKeys(router)]
     });
   }
  render() {
    return (
      <div >
        <Menu
          defaultSelectedKeys={this.state.defaultSelectedKeys?this.state.defaultSelectedKeys:''}
          defaultOpenKeys={this.state.openKeys?this.state.openKeys:['/ui']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.props.collapsed}
          className="navmenu"
          onClick={this.props.handleclick}
        >
         { this.state.menuTree }
        </Menu>
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
          handleclick({ item,key}){
            const bread={
              title:item.props.title,
              key:item.props.eventKey
            };

          store.dispatch(actionCreators.breadCrumb(bread));
       }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavMenu);