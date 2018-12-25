import React from 'react'
import { Button } from 'antd'
import './App.less'
import { TransitionGroup,CSSTransition } from 'react-transition-group' 
import {withRouter } from 'react-router'


class App extends React.Component {
	 componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }
    componentDidMount(){
    
    }
  render() {
    return (

	     <div className="appContainer">
            { this.props.children}
	      </div>
    );
  }
}

export default withRouter(App);
