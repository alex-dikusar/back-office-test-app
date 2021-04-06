import React from 'react';
import { Layout } from 'antd';

import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';

function MainLayout({ children, ...props }: any) {
    return (
        <Layout>
            <Header {...props}/>
            <Layout>
                <SideNav {...props}/>
                {children}
            </Layout>
        </Layout>
    );
}

export default MainLayout;