import { Button } from 'antd'
import React, { memo, useState } from 'react'
import { apiUserInfo } from '../../api/auth'
import { LeLayout } from '../../components/Layout'
import './home.scss'

export const Home = memo(() => {
  const [fullScreen, setFullScreen] = useState<boolean>(false)

  const handleOnLoginOut = () => {
    console.log('退出登录')
  }

  const handleFullPage = () => {
    const wrapper = document.getElementsByClassName('home')[0]
    console.log('home', wrapper)
    setFullScreen(true)
    wrapper.requestFullscreen()
  }

  const handleClick = async () => {
    const aa = await apiUserInfo()
    console.log('aaaa', aa)
  }

  return (
    <div className="home">
      <LeLayout />
    </div>
  )
})
