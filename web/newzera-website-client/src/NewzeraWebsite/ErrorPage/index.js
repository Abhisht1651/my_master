// @flow

import React from 'react'
import ErrorPageWeb from './web'
import ErrorPageMob from './mob'
import '../index.css'

function ErrorPage() {
  return (
    <div>
      <div className="web">
        <ErrorPageWeb />
      </div>
      <div className="mob">
        <ErrorPageMob />
      </div>
    </div>
  )
}

export default ErrorPage
