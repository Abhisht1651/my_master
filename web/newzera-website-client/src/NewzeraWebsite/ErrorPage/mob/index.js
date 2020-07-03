// @flow

import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import './ErrorPageMob.css'

// import '../../Fonts/BananaGrotesk-Bold.otf'
// import '../../Fonts/BananaGrotesk-Thin.otf'
// import '../../Fonts/BananaGrotesk-Extralight.otf'

function ErrorPageMob() {
  return (
    <div>
      <div style={{ paddingTop: '12.9vh' }} />
      <div className="error">
        <div className="oopsMob">Oops! Not Found</div>
      </div>
      <div style={{ paddingTop: '12.38vh' }} />
      <div className="error">
        <div>
          <img className="error-imgMob" src="assests/errorMob.jpg" alt="" />
        </div>
      </div>
      <div style={{ paddingTop: '4.18vh' }} />
      <div className="error">
        <div className="t404Mob">404</div>
      </div>
      <div style={{ paddingTop: '1.72vh' }} />
      <div className="error">
        <div className="timeMob">Time Travel much?</div>
      </div>
      <div className="error">
        <div className="timeMob">Looks like you’re in the wrong era!</div>
      </div>
      <div style={{ paddingTop: '13.9vh' }} />
      <div className="error">
        <div>
          <Link to="/#/">
            <button type="button" className="home-buttonMob">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPageMob
