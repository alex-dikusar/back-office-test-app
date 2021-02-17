import React from 'react';
import './SideNav.scss';

import { TeamOutlined, BankOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Item } = Menu;
const { Sider } = Layout;

function SideNav() {
  return (
      <Sider className="site-layout-background">
          <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
          >
              <Item key="1" icon={<TeamOutlined />} >Users</Item>
              <Item key="2" icon={<BankOutlined />} >Organizations</Item>
              <Item key="3" icon={<CreditCardOutlined />} >Payments</Item>
          </Menu>
      </Sider>
  );
}

export default SideNav;
