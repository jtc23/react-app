import React from 'react'
import { Card, Table, Modal, Button, message, Badge } from 'antd'
import { NavLink } from 'react-router-dom'
import { user } from '@/axios'
import "antd/dist/antd.css"
import Loading from '@/components/Loading'
import './index.less'



export default class User extends React.Component {

constructor(props){
	super(props);
	this.state={
		userlist:[],
		selectedRowKeys:[],
		disPlay:"block"
	}
}
	getUserList(){
        user().then(res=>{
            res.data.map((item,index)=>{
                        item.key=index
                    })
            this.setState({
                    userlist:res.data,
                    disPlay:"none"
                })
        })
		// let basicurl="https://www.easy-mock.com/mock/5c0e035e0f8e282e08dd2f6d/webpack4-react";
		// axios.get(basicurl+'/permission').then((res)=>{							
		// 	if(res.status==200 && res.data.code==0){
		// 		res.data.data.map((item,index)=>{
		// 				item.key=index
		// 			})
		// 		this.setState({
		// 			userlist:res.data.data,
		// 			disPlay:"none"
		// 		})
		// 	}
		// })
	}

	componentDidMount(){
		this.getUserList();
	}

render(){
	const selectedRowKeys=this.state.selectedRowKeys
	const rowSelection={
		type:'checkbox',
		selectedRowKeys,
		onChange:(selectedRowKeys,selectedRows)=>{
			this.setState({
				selectedRowKeys,
				selectedRows
			});
		}
	}
	function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}
	 const columns = [
            {
                title: 'id',
                key: 'id',
                width:80,
                dataIndex: 'id',
                fixed: 'left',
                render(id){
                	return 	(<NavLink to={`/user/${id}`} > {id+1}</NavLink>);
                }
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                dataIndex: 'username',
                fixed: 'left'
            },

            {
                title: '性别',
                key: 'sex',
                width: 120,
                dataIndex: 'sex',
                sorter:(a)=>a.sex==0,
                 filters: [{text:"男",value:1},{text:"女",value:0}],
                 filterMultiple: false,
                 onFilter: (value, record) => {record.sex== value},
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
             {
                title: '年龄',
                key: 'age',
                width: 120,
                dataIndex: 'age',
                sorter:(a,b)=>a.age-b.age
            },
            {
                title: '婚姻状况',
                key: 'married',
                width: 120,
                dataIndex: 'married',
                sorter:(a)=>a.married==0,
                render(married) {
                    return married ==0 ?'未婚':'已婚';

                    }
                   
            },
            {
                title: '状况',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '在职',
                        '2': '离职',
                        '3': '待加入'
 
                    }
                    return config[state];
                }
            },
            {
                title: '生日',
                key: 'date',
                width: 200,
                dataIndex: 'date'
            },
             {
                title: '邮箱',
                key: 'email',
                width: 200,
                dataIndex: 'email'
            },
            {
                title: '地址',
                key: 'address',
                width: 200,
                dataIndex: 'address'
            },
            {
                title: '备注',
                key: 'other',
                width: 200,
                dataIndex: 'other'
            }
        ]

        return (
        	<React.Fragment>
        	<Loading display={this.state.disPlay}/>
	        	<div className="user">
	        		<Card  title="员工信息列表页">
	        			<Table
	        			bordered
	        			rowSelection={rowSelection}
	        				columns={columns}
	        				dataSource={this.state.userlist}
	        				pagination={false}
	        				scroll={{y:280,x:1450
	        				}}
	        				onChange={onChange}

	        			/>
	        		</Card>
	        	</div>
        	</React.Fragment>
        	)
}

}