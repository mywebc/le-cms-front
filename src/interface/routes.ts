import { ReactChild } from 'react'

export type ListNode = {
  path: string
  auth?: boolean
  element?: ReactChild
  children?: ListNode[]
}

export type RouteListType = ListNode[]
