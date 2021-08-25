import { PieChartOutlined } from '@ant-design/icons'
import { MenuType } from '../interface/menu'

/**
 * mock menu
 */
export const menuList: MenuType[] = [
  {
    name: 'Dashboard',
    title: 'Dashboard',
    label: 'Dashboard',
    key: '1',
    path: '/dashboard',
    theIcon: <PieChartOutlined />,
    children: [
      {
        name: '分析页',
        title: '分析页',
        label: '分析页',
        key: '1-1',
        path: '/dashboard/analysis'
      },
      {
        name: '监控页',
        title: '监控页',
        label: '监控页',
        key: '1-2',
        path: '/dashboard/monitor'
      },
      {
        name: '工作台',
        title: '工作台',
        label: '工作台',
        key: '1-3',
        path: '/dashboard/workplace'
      }
    ]
  },
  {
    name: 'Permissions',
    title: '权限管理',
    label: 'Permissions',
    key: '2',
    path: '/permissions',
    theIcon: <PieChartOutlined />,
    children: [
      {
        name: '菜单权限',
        title: '菜单权限',
        label: '菜单权限',
        key: '2-1',
        path: '/permissions/menu'
      },
      {
        name: '角色权限',
        title: '角色权限',
        label: '监角色权限控页',
        key: '2-2',
        path: '/permissions/role'
      },
      {
        name: '操作权限',
        title: '操作权限',
        label: '操作权限',
        key: '2-3',
        path: '/permissions/operation'
      }
    ]
  }
]
