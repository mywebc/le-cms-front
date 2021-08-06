import React, { memo } from 'react'
import { Button, Divider, Form, Input, message } from 'antd'
import './login.scss'
import { apiPostLogin, apiPostRegister } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

export const Login: React.FC = memo(() => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const handleLogin = async () => {
    const values = form.getFieldsValue()
    const data = await apiPostLogin(values)
    console.log('data', data)
    if (data.status) {
      message.success('登录成功')
      navigate('/home')
    }
  }

  const handleRegister = async () => {
    const values = form.getFieldsValue()
    const data = await apiPostRegister(values)
    console.log('data', data)
  }

  return (
    <div className="login_wrapper">
      <div className="login_content">
        <Form name="basic" form={form}>
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
            <Input />
          </Form.Item>

          <div className="login_btn">
            <Button type="primary" onClick={handleLogin}>
              login
            </Button>
            <Button type="primary" onClick={handleRegister}>
              register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
})
