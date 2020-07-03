// @flow

import React from 'react'
import AboutUsPageWeb from './web'
import AboutUsPageMob from './mobile'
import '../index.css'

function AboutUsPage() {
  return (
    <div>
      <div className="web">
        <AboutUsPageWeb />
      </div>
      <div className="mob">
        <AboutUsPageMob />
      </div>
    </div>
  )
}

export default AboutUsPage
