import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AuthRouter extends Component {
    render() {  
        const { component: Component,...rest } = this.props
        const route=<Component {...this.props} />
        return (
            <Route {...rest} render={props => {
              return this.props.loginstate ? <Component {...props} /> : <Redirect to="/login"  />
                  
            }} />
        )
      }
}
const  mapStateToProps = (state) => {
  return{
    loginstate: state.loginstate
  }
}
export default connect(mapStateToProps)(withRouter(AuthRouter)); 


