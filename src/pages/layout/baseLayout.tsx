import React, { Suspense } from 'react';
import { Layout, Nav, Button, Avatar } from '@douyinfe/semi-ui';
import { IconBell } from '@douyinfe/semi-icons';
import { Fallback, SwitchMode } from '@/component';
import { BaseLayoutProps } from './inerface';
import { SiderMenu } from './component';
import { Outlet } from 'react-router';

export const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
    const { siderMenu, siderMenuTitle, logo } = props
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout>
            <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)', height: "100vh" }}>
                <SiderMenu data={siderMenu} title={siderMenuTitle} logo={logo} />
            </Sider>
            <Layout style={{ width: '100%', overflow: "hidden" }}>
                <Header style={{ backgroundColor: 'var(--semi-color-bg-1)', position: 'relative', top: 0, right: 0 }}>
                    <Nav
                        mode="horizontal"
                        footer={
                            <>
                                <Button
                                    theme="borderless"
                                    icon={<IconBell size="large" />}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                />
                                <SwitchMode />
                                <Avatar color="orange" size="small">
                                    YJ
                                </Avatar>
                            </>
                        }
                    ></Nav>
                </Header>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                        overflow: "auto",
                        height: "calc(100vh - 64px)"
                    }}
                >
                    <Suspense fallback={<Fallback />}>
                        <Outlet />
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    );
};
