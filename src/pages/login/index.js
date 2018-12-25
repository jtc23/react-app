import React from 'react'
import {Form, Input, Button, Checkbox ,Icon,Card,Row,Col} from 'antd'
import { connect } from 'react-redux'
import  store  from '@/redux/store'
import {withRouter } from 'react-router'
import  * as actionCreators from '@/redux/action'
import "antd/dist/antd.css"
import Footer from '../../components/Footer'
import './index.less'
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props){
      super(props);
   }

handlelogin= ()=>{

        this.props.form.validateFields((err, values) => {
        if (!err) {
         this.props.changelogin(values);
        }
        });
}

  async pushpath (){
    await this.handlelogin();
     if(this.props.loginstate){
      this.props.history.push('/app/home');
    }  
    }
	handleSubmit = (e) => {
    e.preventDefault();
    this.pushpath();
 }

	render() {
   const {getFieldDecorator} = this.props.form;
      const isLogged = JSON.parse(sessionStorage.getItem("isLogin"))==="1" ? true : false;
    console.log(isLogged)
    return (
    <Card title="登录页面" id="login">
    <Form  className="login-form" onSubmit={(e)=>this.handleSubmit(e)}>
        <FormItem>
           {
              getFieldDecorator(
                  'userName',{
                      rules:[{required: true, message:'姓名不能为空！'}],
                  }
              )(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )
          }
        </FormItem>
        <FormItem>
            {
              getFieldDecorator(
                  "password",{
                      rules:[{required: true, message:"密码不能为空！"}]
                  }
              )(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )
          }
        </FormItem>
        <FormItem>
        	<Row>
        		<Col span={12}>
            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
        		</Col>
        		<Col span={12}><a className="login-form-forgot" href="">Forgot password</a></Col>

        		<Col span={24}>        		
        			<Button type="primary" htmlType="submit" className="login-form-button" >
            		Log in
          			</Button>
          		</Col>
        	</Row>
        </FormItem>
      </Form>
    </Card>

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
     changelogin (user) {
          store.dispatch(actionCreators.changelogin(user));
       }
         
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter((Form.create()(Login))));

