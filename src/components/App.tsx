import React from 'react';
import './App.scss';
import Header from './Header/Header';
import SideNav from './SideNav/SideNav';
import Content from './Content/Content';

import { Layout } from 'antd';

function App() {
  return (
      <Layout>
        <Header/>
        <Layout>
          <SideNav/>
          <Content/>
        </Layout>
      </Layout>
  );
}

export default App;
