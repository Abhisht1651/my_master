// @flow

import React from 'react'
import HomePageWeb from './web'
import HomePageMob from './mobile'
import '../index.css'

function HomePage() {
  return (
    <div>
      <div className="web">
        <HomePageWeb />
      </div>
      <div className="mob">
        <HomePageMob />
      </div>
    </div>
  )
}

export default HomePage
