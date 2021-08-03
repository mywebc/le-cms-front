import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Login } from './pages/auth/login'
import "./App.css"
import { Home } from './pages/home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
