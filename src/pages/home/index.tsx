import { Button } from 'antd'
import React, { memo, useState } from 'react'
import { apiUserInfo } from '../../api/auth'
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
      {!fullScreen && <div className="home_left">左边的缩略图</div>}
      <Button onClick={handleClick}>test</Button>

      <div className="home_right">
        <iframe
          src={
            'https://ppt2h5.qcloudtiw.com/0868sh7lgsh31nfem94c/index.html?page=3&step=12&fid=%231628662412037&originUrl=https%3A%2F%2Fppt2h5.qcloudtiw.com%2F0868sh7lgsh31nfem94c%2Findex.html'
          }
        />
      </div>
      {!fullScreen && <Button onClick={handleFullPage}>全屏</Button>}
    </div>
  )
})
