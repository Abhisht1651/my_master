// @flow

import React from 'react'
import HelpCentreWeb from './web'
import HelpCentreMob from './mob'
import '../index.css'

function HelpCentre() {
  return (
    <div>
      <div className="web">
        <HelpCentreWeb />
      </div>
      <div className="mob">
        <HelpCentreMob />
      </div>
    </div>
  )
}

export default HelpCentre
