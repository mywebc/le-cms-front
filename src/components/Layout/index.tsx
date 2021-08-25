import React, { memo, Suspense, useEffect, useState } from 'react'
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
import { Outlet, useNavigate } from 'react-router-dom'
import { apiGetLogout, apiUserInfo } from '../../api/auth'
import { menuList } from '../../config/menu'
import { GenerateMenu } from '../../utils/common'

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
    // ;(async () => {
    //   const { data, code, status } = await apiUserInfo()
    //   if (status) {
    //     message.success('获取用户信息成功')
    //   }
    // })()
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
          {GenerateMenu(menuList)}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div>
            <Button onClick={handleLogout}>退出</Button>
          </div>
        </Header>
        <Content style={{ margin: '24px 24px' }}>
          <Outlet />
          <Suspense fallback={<div>加载中...</div>} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
})
