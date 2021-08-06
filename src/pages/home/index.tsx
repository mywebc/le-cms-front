import { Button } from 'antd'
import React, { memo } from 'react'

export const Home = memo(() => {
  const handleOnLoginOut = () => {
    console.log('退出登录')
  }

  return (
    <div>
      这是主页<Button onClick={handleOnLoginOut}>loginOut</Button>
    </div>
  )
})
