import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Form, Toast } from '@douyinfe/semi-ui';
import { axiosService } from 'axios-services';
import { IconSemiLogo, IconUser, IconLock } from '@douyinfe/semi-icons';

import './login.scss'
import { login } from '../../services/login';

const { Content, Header } = Layout

export const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (values: any) => {
        if (values.userName === "admin" && values.password === 'admin') {
            navigate('/', { replace: true })
        } else {
            Toast.error('用户名密码错误')
        }
    }
    useEffect(() => {
        document.body.setAttribute('theme-mode', "")
    }, [])


    const sign = () => {
        axiosService.get('/api/users')
    }

    return (
        <Layout>
            {/* <Header style={{ padding: 10 }}>
                <span style={{ fontSize: '26px' }}>
                    <IconSemiLogo style={{ fontSize: 26 }} />
                    Semi Design Pro
                </span>
            </Header> */}
            <Content className="login-container">
                <div className="login">
                    <div className="login-title">
                        <IconSemiLogo style={{ fontSize: 40 }} />
                        Semi Design Pro
                    </div>
                    <Form
                        onSubmit={values => handleSubmit(values)}
                        // style={{ width: 400 }}
                        labelPosition="left"
                        labelAlign="right"
                        labelWidth="70px">
                        {({ formState, values, formApi }) => (
                            <>
                                <Form.Input
                                    noLabel
                                    field='userName'
                                    style={{ width: '100%' }}
                                    prefix={<IconUser />}
                                    placeholder='用户名：admin'
                                    rules={[
                                        { required: true, message: '请输入用户名/手机号' },
                                    ]}
                                />
                                <Form.Input
                                    noLabel
                                    field='password'
                                    type="password"
                                    prefix={<IconLock />}
                                    style={{ width: '100%' }}
                                    placeholder='密码：admin'
                                    rules={[
                                        { required: true, message: '请输入密码' },
                                    ]}
                                />
                                <Form.Checkbox field='agree' noLabel>记住密码</Form.Checkbox>
                                <div className="login-btn">
                                    {/* <Button onClick={sign} theme='borderless' style={{ color: 'rgb(101, 178, 252)', marginRight: 10, cursor: 'pointer' }}>去注册</Button> */}
                                    <Button htmlType='submit' type="primary" style={{ width: '100%' }}>登录</Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </Content>
        </Layout>
    )
}