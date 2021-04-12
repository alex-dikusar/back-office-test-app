import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideNav.scss';

import { TeamOutlined, BankOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Item } = Menu;
const { Sider } = Layout;

function SideNav() {
  const { pathname } = useLocation();
  return (
      <Sider className="site-layout-background">
          <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              selectedKeys={[pathname]}
          >
              <Item key="/users" icon={<TeamOutlined />} >
                  <Link data-test-id="users-tab" to="/users">Users</Link>
              </Item>
              <Item key="/groups" icon={<BankOutlined />} >
                  <Link data-test-id="groups-tab" to="/groups">Groups</Link>
              </Item>
          </Menu>
      </Sider>
  );
}

export default SideNav;
