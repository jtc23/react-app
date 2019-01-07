import React from 'react'
import { Card, Table, Modal, Button, message, Badge,Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import { userdetail } from '@/axios'
import "antd/dist/antd.css"
import Loading from '@/components/Loading'


export default class User extends React.Component {
   constructor(props){
    super(props);
    this.state={
        selectedRowKeys:[],
        list:[]
    }
}
  componentWillMount(){


}
  componentDidMount(){
    userdetail().then(res=>{
      this.setState({
        userdetaillist:res.data,
        list:res.data.slice(0,10),
        disPlay:"none"
      });
    });
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
        const columns = [
            {
                title: 'id',
                key: 'id',
                width:80,
                dataIndex: 'id',
                fixed: 'left',
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
                            dataSource={this.state.list}
                            pagination={false}

                        />
                        <Icon type="loading" large/>
                    </Card>
                </div>
            </React.Fragment>
            )
    }
}
