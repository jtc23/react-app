import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import AuthRouter from './AuthRouter'
import LoginForm from './pages/login'
import MainPage from './mainPage'
import Home from './pages/Home'
import Permission from './pages/Permission'
import User from './pages/User'
import Test from './pages/Test'
import Maps from './pages/Map'
import Bar from './pages/Echart/bar'
import Pie from './pages/Echart/pie'
import Line from './pages/Echart/line'
import Table from './pages/Table'
import Text from '@/components/Text'
import NotFound from './pages/404'

export default [
  { path: "/login", name: "Login", component:LoginForm},
  { path: "/404", name: "NotFound", component:NotFound},
  { path: "/", name: "Home", component: MainPage ,auth: true,chidren:[
   { path: "/home", name: "Home", component: Home, auth: true },
  { path: "/permission", name: "permission", component: Permission, auth: true },
  { path: "/user", name: "User", component: User , auth: true},
  { path: "/rich", name: "rich", component: Test , auth: true},
  { path: "/table/high", name: "high", component: Table, auth: true },
  { path: "/charts/bar", name: "Bar", component: Bar, auth: true },
  { path: "/charts/pie", name: "pie", component: Pie, auth: true },
  { path: "/charts/line", name: "Line", component: Line, auth: true }
  ]}
 
]
                        