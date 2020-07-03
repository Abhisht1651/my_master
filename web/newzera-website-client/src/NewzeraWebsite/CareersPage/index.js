// @flow

import React from 'react'
import CareersPageWeb from './web'
import CareersPageMob from './mob'
import '../index.css'

function CareersPage() {
  return (
    <div>
      <div className="web">
        <CareersPageWeb />
      </div>
      <div className="mob">
        <CareersPageMob />
      </div>
    </div>
  )
}

export default CareersPage
