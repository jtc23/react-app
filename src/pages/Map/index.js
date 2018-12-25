import React from 'react';
import Tecent from './tecent';
import { Row, Col, Card } from 'antd';

export default () => (
    <div>
        <Row gutter={16}>
            <Col md={24}>
                <div style={{height: 500}}>
                    <Card bordered={false} title="腾讯地图">
                        <Tecent />
                    </Card>
                </div>
            </Col>
        </Row>
    </div>
)