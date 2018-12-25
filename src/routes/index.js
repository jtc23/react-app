import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import AllComponents from './components'
import routeConfig from './config'
import AuthRouter from '@/AuthRouter'
import Home from '@/pages/Home'
import Permission from '@/pages/Permission'
import User from '@/pages/User'
import Test from '@/pages/Test'
import Maps from '@/pages/Map'
import Bar from '@/pages/Echart/bar'
import Pie from '@/pages/Echart/pie'
import Line from '@/pages/Echart/line'
import Table from '@/pages/Table'
import Text from '@/components/Text'
import NotFound from '@/pages/404'


 export default class Routes extends React.Component {

 	componentWillMount(){
 		 	
 	}
 	render(){
 		return (
 			<div>
 			 <Switch>	
 			 	<AuthRouter path="/app/home" component={Home} />
 			 	<AuthRouter path="/app/permission" component={Permission} />
 			 	<AuthRouter path="/app/rich" component={Text} />
 			 	<AuthRouter path="/app/table/high" component={Table} />
 			 	<AuthRouter path="/app/charts/bar" component={Bar} />
 			 	<AuthRouter path="/app/charts/pie" component={Pie} />
 			 	<AuthRouter path="/app/charts/line" component={Line} />
 			 	<AuthRouter path="/app/user" component={User} />
 			 	<AuthRouter path="/app/city" component={Maps} />
 			 	<Redirect to="/404"  />
            </Switch>
            </div>
 			)
 	}


 }