// @flow

import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import './ErrorPageWeb.css'

// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'
// import '../../Fonts/BananaGrotesk-Thin.otf'

function ErrorPageWeb() {
  return (
    <div>
      <div style={{ paddingTop: '12.38vh' }} />
      <div className="error">
        <div>
          <img className="error-img" src="assests/error.jpg" alt="" />
        </div>
      </div>
      <div style={{ paddingTop: '1.36vh' }} />
      <div className="error">
        <div className="t404">404</div>
      </div>
      <div style={{ paddingTop: '1.69vh' }} />
      <div className="error">
        <div className="time">Time Travel much?</div>
      </div>
      <div className="error">
        <div className="time">Looks like you’re in the wrong era!</div>
      </div>
      <div style={{ paddingTop: '6.9vh' }} />
      <div className="error">
        <div>
          <Link to="/#/">
            <button type="button" className="home-button">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPageWeb
