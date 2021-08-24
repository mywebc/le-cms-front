import { ForwardRefExoticComponent } from 'react'

export interface MenuType {
  name: string
  title: string
  label: string
  key: string
  path: string
  theIcon?: ForwardRefExoticComponent<any>
  children?: MenuType[]
}
