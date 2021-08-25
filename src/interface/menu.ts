export interface MenuType {
  name: string
  title: string
  label: string
  key: string
  path: string
  theIcon?: React.ReactElement
  children?: MenuType[]
}
