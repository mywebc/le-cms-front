import React, { memo } from 'react'
import { Button, Form, Input } from 'antd'
import './login.scss'
import { apiPostLogin } from '../../api/auth'

export const Login: React.FC = memo(() => {
  const onFinish = async (values: any) => {
    console.log('Success:', values)
    const data = await apiPostLogin(values)
    console.log('data', data)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login_wrapper">
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})
