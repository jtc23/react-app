import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import NotFound from './pages/404'
import LoginForm from './pages/login'
import MainPage from './mainPage'



export default class Router extends React.Component{
   render(){
    const isLogged = JSON.parse(sessionStorage.getItem("isLogin"))==="1" ? true : false;
        
    return (
    	<HashRouter>
    		<App>
    			<Switch>
                    <Route exact path="/" render={() => <Redirect to="/app/home"  />} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/app" component={MainPage} />
                    <Redirect to="/404"  />
                 </Switch> 
    		</App>
    	</HashRouter>
    );
}
}
