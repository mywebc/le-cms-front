import { Menu } from 'antd'
import { MenuType } from '../interface/menu'
import { PieChartOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import { useNavigate } from 'react-router-dom'

/**
 * generate menu function
 * @param menuList
 * @return menu
 */
export const GenerateMenu = (menuList: MenuType[]) => {
  const navigate = useNavigate()

  const handleMenuClick = (path: string) => {
    navigate(path)
  }

  return (
    <>
      {menuList.map(_ => {
        let element = null
        if (_.children && _.children.length > 0) {
          element = (
            <SubMenu key={_.key} icon={_.theIcon} title={_.title}>
              {GenerateMenu(_.children)}
            </SubMenu>
          )
        } else {
          element = (
            <Menu.Item
              key={_.key}
              onClick={() => {
                handleMenuClick(_.path)
              }}
            >
              {_.title}
            </Menu.Item>
          )
        }
        return element
      })}
    </>
  )
}
