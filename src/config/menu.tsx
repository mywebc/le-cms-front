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
  }
]
