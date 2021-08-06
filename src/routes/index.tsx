import React from 'react'
import { useRoutes } from 'react-router-dom'
import { RouteListType } from '../interface/routes'
import { Login } from '../pages/auth/login'
import { Home } from '../pages/home'

const routeList: RouteListType = [
  {
    path: '/auth',
    element: <Login />
  },
  {
    path: `/home`,
    element: <Home />
  }
]

// eslint-disable-next-line
export default () => useRoutes(routeList)
