import React, { useState } from 'react';
import './Users.scss';

import { CheckSquareOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Layout, Table, Tag } from 'antd';
import MainLayout from '../../components/MainLayout/MainLayout';
const { Content: AntContent } = Layout;

const columns = [
    {
        title: 'Id',
        dataIndex: 'key'
    },
    {
        title: 'Registration Flow',
        dataIndex: 'flow',
        render: (flow: string) => {
            let color = flow === 'Regular' ? 'green' : 'yellow';
            return (
                <Tag color={color}>{flow}</Tag>
            )
        }
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
    },
    {
        title: 'Email Verified',
        dataIndex: 'emailVerified',
        render: (value: boolean) => {
            return (
                value ? <CheckSquareOutlined /> : <CloseSquareOutlined />
            )
        }
    },
    {
        title: 'Registration Origin',
        dataIndex: 'origin',
        render: (origin: string) => {
            let color = origin === 'APP' ? 'red' : 'purple';
            return (
                <Tag color={color}>{origin}</Tag>
            )
        }
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data: any[] = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        flow: (i % 2 === 0) ? 'Regular' : 'Specific',
        firstName: `Edward`,
        lastName: `King ${i}`,
        emailVerified: i % 2 === 0,
        origin: (i % 2 === 0) ? 'Mobile' : 'APP',
        address: `London, Park Lane no. ${i}`,
    });
}

function Users(props: any) {
    const [selectedRowKeys, setSelectedRows] = useState([]);
    const rowSelection = {
        selectedRowKeys,
        onChange: setSelectedRows,
    };

    return (
        <MainLayout {...props}>
            <AntContent data-test-id="users-page" className="site-layout-background">
                <Table rowSelection={rowSelection as any} columns={columns} dataSource={data} />
            </AntContent>
        </MainLayout>
    );
}

export default Users;
