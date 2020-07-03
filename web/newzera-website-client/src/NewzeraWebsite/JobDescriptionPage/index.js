// @flow

import React from 'react'
import JobDescriptionPageWeb from './web'
import JobDescriptionPageMob from './mob'
import '../index.css'

function JobDescriptionPage() {
  return (
    <div>
      <div className="web">
        <JobDescriptionPageWeb />
      </div>
      <div className="mob">
        <JobDescriptionPageMob />
      </div>
    </div>
  )
}

export default JobDescriptionPage
