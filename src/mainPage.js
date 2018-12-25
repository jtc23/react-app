import React from 'react'
import { Row,Col } from 'antd'
import {withRouter } from 'react-router'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import "antd/dist/antd.css"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavMenu from '@/components/Menu'
import BreadCrumb from '@/components/Bread'
import Routes from '@/routes'
import  './index.less'

 class Mainpage extends React.Component {
 	 constructor(props) {
        super(props);
    }
     state = {
	        collapsed: false
    };
    componentWillMount() {
        // if(!this.props.loginstate){
        //     this.props.history.push("/login");
        // }
    }
     toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

	render(){
		const { component: Component, ...rest } = this.props;
		return (
				<React.Fragment>
					<Header toggle={this.toggle} collapsed={this.state.collapsed}/>
					<Row className='container' type="flex">
						<Col span={4}>
							<NavMenu  collapsed={this.state.collapsed}/>
						</Col>
						<Col span={20}>
							<BreadCrumb />
						<div className="main-container">
							<Routes />
						</div>
							<Footer />
						</Col>
					</Row>
					
					
				</React.Fragment>
			);
		}
	}

	const  mapStateToProps = (state) => {
  return{
    loginstate: state.loginstate
  }
}
const  mapDispatchToProps = (dispatch) => {
  return{
      
  }
}
	export default connect(mapStateToProps,mapDispatchToProps) (withRouter(Mainpage));