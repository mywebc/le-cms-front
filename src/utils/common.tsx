import { Menu } from 'antd'
import { MenuType } from '../interface/menu'
import { PieChartOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'

/**
 * generate menu function
 * @param menuList
 * @return menu
 */
export const generateMenu = (menuList?: MenuType[]) => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {menuList?.map(_ => {
        let element = null
        if (_.children) {
          element = (
            <SubMenu key={_.key} icon={<PieChartOutlined />} title={_.title}>
              {generateMenu(_.children)}
            </SubMenu>
          )
        } else {
          element = (
            <Menu.Item key={_.key} icon={<PieChartOutlined />}>
              {_.title}
            </Menu.Item>
          )
        }
      })}
    </Menu>
  )
}
