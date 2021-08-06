import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RenderRouter from './routes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
