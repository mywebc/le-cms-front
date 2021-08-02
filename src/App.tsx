import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Login } from './pages/login'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
