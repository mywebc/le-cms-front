import React, { memo, useEffect, useState } from 'react'
import { Layout, Menu, Breadcrumb, message, Button } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  AndroidOutlined
} from '@ant-design/icons'
import './index.scss'
import { selectUser } from '../../store/userSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { apiGetLogout, apiUserInfo } from '../../api/auth'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export const LeLayout: React.FC = memo(() => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const navigate = useNavigate()
  const userState = useSelector(selectUser)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    ;(async () => {
      const { data, code, status } = await apiUserInfo()
      if (status) {
        message.success('获取用户信息成功')
      }
    })()
  }, [])

  const handleLogout = async () => {
    const { code, msg } = await apiGetLogout()
    if (code === 0) {
      message.success(msg)
      navigate('/auth')
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }} className="le-layout">
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <AndroidOutlined />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div>
            <Button onClick={handleLogout}>退出</Button>
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
})
