// @flow

import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'

import MainPage from './MainPage'
import GetStarted from './GetStarted'
import Login from './Login'
import VerifyCode from './VerifyCode'

function LoginFlow() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Router>
        <div id="/">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/getStarted" component={GetStarted} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/verify" component={VerifyCode} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default LoginFlow
