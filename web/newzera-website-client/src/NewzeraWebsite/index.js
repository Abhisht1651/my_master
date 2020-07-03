// @flow

import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'

import HomePage from './HomePage'
import AboutUsPage from './AboutUsPage'
import HelpCentre from './HelpCentre'
import CareersPage from './CareersPage'
import JobDescriptionPage from './JobDescriptionPage'
import ErrorPage from './ErrorPage'

function NewzeraWebsite() {
  return (
    <Router>
      <div id="/">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about-us" component={AboutUsPage} />
          <Route exact path="/help-centre" component={HelpCentre} />
          <Route exact path="/careers" component={CareersPage} />
          <Route exact path="/job-description" component={JobDescriptionPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default NewzeraWebsite
