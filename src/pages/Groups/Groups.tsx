import React, { useState } from 'react';
import './Groups.scss';
import MainLayout from '../../components/MainLayout/MainLayout';
import { CheckSquareOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Layout, Table, Tag } from 'antd';
const { Content: AntContent } = Layout;

const columns = [
    {
        title: 'Id',
        dataIndex: 'key'
    },
    {
        title: 'Group Title',
        dataIndex: 'groupTitle',
    },
    {
        title: 'Registration Origin',
        dataIndex: 'origin',
        render: (origin: string) => {
            let color = origin === 'APP' ? 'red' : 'blue';
            return (
                <Tag color={color}>{origin}</Tag>
            )
        }
    },
    {
        title: 'Is Active',
        dataIndex: 'isActive',
        render: (value: boolean) => {
            return (
                value ? <CheckSquareOutlined /> : <CloseSquareOutlined />
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
        groupTitle: `Group ${i}`,
        origin: (i % 2 === 0) ? 'Mobile' : 'APP',
        isActive: i % 2 === 0,
        address: `London, Park Lane no. ${i}`,
    });
}

function Groups(props: any) {
    const [selectedRowKeys, setSelectedRows] = useState([]);
    const rowSelection = {
        selectedRowKeys,
        onChange: setSelectedRows,
    };

    return (
        <MainLayout {...props}>
            <AntContent data-test-id="groups-page"  className="site-layout-background">
                <Table rowSelection={rowSelection as any} columns={columns} dataSource={data} />
            </AntContent>
        </MainLayout>
    );
}

export default Groups;
