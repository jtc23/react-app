import React from 'react'
import { Row, Col, Card, Table, Popconfirm, Button } from 'antd'
import './index.less'
import { gettable } from '@/axios'
import Loading from '@/components/Loading'


export default class HighTable extends React.Component {

    constructor(props) {
        super(props);
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '30%'
        }, {
            title: 'age',
            dataIndex: 'age',
        }, {
            title: 'address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record, index)}>
                                <span>Delete</span>
                            </Popconfirm>
                        ) : null
                );
            },
        }];
        this.state = {
            deleteIndex: -1
        };
    }

     componentDidMount(){
      this.getTableList();
    }

        getTableList(){
           gettable().then(res=>{
            this.setState({
                dataSource: res.data.map((item,index)=>{
                            return {
                                key:item.id,
                                name:item.name,
                                age:item.age,
                                address:item.address
                            }
                }),
                disPlay:"none",
                count:res.data.length
            });
           });

}
    onDelete = (record, index) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ deleteIndex: record.key});
        setTimeout(() => {
            this.setState({ dataSource })
        }, 500);
    }
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `某男性青年 ${count}`,
            age: 32,
            address: `浦东新区XXXX`,
        };
        this.setState({
            dataSource: [newData, ...dataSource],
            count: count + 1,
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <React.Fragment>
                <Loading display={this.state.disPlay}  />
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card bordered={false}>
                                    <Button className="editable-add-btn mb-s" onClick={this.handleAdd}>Add</Button>
                                    <Table
                                        bordered
                                        dataSource={dataSource}
                                        columns={columns}
                                        rowClassName={(record, index) => {
                                            if (this.state.deleteIndex === record.key) return 'animated zoomOutLeft min-black';
                                            return 'animated fadeInRight';
                                        }}
                                    />
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
