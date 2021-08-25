import React from 'react'
import { useRoutes } from 'react-router-dom'
import { LeLayout } from '../components/Layout'
import { RouteListType } from '../interface/routes'
import { Login } from '../pages/auth/login'
import { Analysis } from '../pages/dashboard/analysis'
import { Monitor } from '../pages/dashboard/monitor'
import { Workplace } from '../pages/dashboard/workplace'
import { Home } from '../pages/home'

const routeList: RouteListType = [
  {
    path: '/auth',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <LeLayout />,
    children: [
      {
        path: '/analysis',
        element: <Analysis />
      },
      {
        path: '/monitor',
        element: <Monitor />
      },
      {
        path: '/workplace',
        element: <Workplace />
      }
    ]
  }
]

// eslint-disable-next-line
export default () => useRoutes(routeList)
