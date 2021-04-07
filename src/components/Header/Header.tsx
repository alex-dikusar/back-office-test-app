import React from 'react';
import './Header.scss';

import { UserOutlined, SettingOutlined, BellOutlined, EditOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, Button, Space, Dropdown } from 'antd';
const { Header: AntHeader } = Layout;
const { Item: MenuItem, Divider } = Menu;

const menu = (onLogout: () => void) => (
    <Menu>
        <MenuItem  key="0">
            <a href="http://www.alipay.com/">Profile</a>
        </MenuItem >
        <MenuItem  key="1">
            <a href="http://www.taobao.com/">Settings</a>
        </MenuItem >
        <Divider />
        <MenuItem onClick={onLogout} key="3">Logout</MenuItem>
    </Menu>
);

function Header({ onLogout }: any) {
  return (
      <AntHeader className="header">
          <Space>
              <div className="logo" />
              {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
              {/*    <MenuItem key="1">Inbox</MenuItem>*/}
              {/*    <MenuItem key="2">Data</MenuItem>*/}
              {/*    <MenuItem key="3">Reports</MenuItem>*/}
              {/*</Menu>*/}
          </Space>
          <Space>
              <Space className="button-group">
                  <Button icon={<EditOutlined />} ghost />
                  <Button icon={<SettingOutlined />} ghost />
                  <Button icon={<BellOutlined />} ghost />
              </Space>
              <Dropdown overlay={menu(onLogout)}>
                  <Avatar icon={<UserOutlined />} />
              </Dropdown>
          </Space>
      </AntHeader>
  );
}

export default Header;
