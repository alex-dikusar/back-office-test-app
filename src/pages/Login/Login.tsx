import React from 'react';
import { Redirect } from 'react-router-dom';
import './Login.scss';

import { Form, Input, Button, Alert } from 'antd';

const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 6 },
};
const tailLayout = {
    wrapperCol: { offset: 9, span: 6 },
};

function Login({ onLoginProceed, isLoggedIn, isAuthFailed }: any) {
    if (isLoggedIn) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <div data-test-id="login-page" className="form-wrapper">
            <Form
                {...layout}
                name="basic"
                onFinish={onLoginProceed}
                onFinishFailed={() => {}}
            >
                {
                    isAuthFailed &&
                    <Form.Item className="auth-error-message">
                      <Alert message="Username or password is invalid" type="error" />
                    </Form.Item>
                }

                <Form.Item
                    data-test-id="username"
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    data-test-id="password"
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                        data-test-id="login-submit"
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
