import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'

class AuthRouter extends Component {
    render() {  
        const isLogged = JSON.parse(sessionStorage.getItem("isLogin")) === "1" ? true : false;
        const { component: Component,...rest } = this.props
        const route=<Component {...this.props} />
        console.log(route)
        return (
            <Route {...rest} render={props => {
              return isLogged ? <Component {...props} /> : <Redirect to="/login"  />
                  
            }} />
        )
      }
}

export default withRouter(AuthRouter); 


