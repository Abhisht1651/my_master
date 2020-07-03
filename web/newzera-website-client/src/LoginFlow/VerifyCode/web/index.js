// @flow

import React, { useState, useEffect } from 'react'
import './VerifyCodeWeb.css'
import OtpInputhere from './OTPReader'

function VerifyCodeWeb() {
  const [seconds, setSeconds] = useState(60)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    let interval = null
    if (seconds === 0) {
      setIsActive(false)
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 60) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ paddingTop: '4.72vh' }} />
      <div style={{ padding: '0 11.04vw' }}>
        <img className="newzeraLogoLoginFlow" src="assests/Newzerawhite2x.jpg" alt="" />
      </div>
      <div style={{ paddingTop: '16.48vh' }} />
      <div style={{ padding: '0 0 0 17.70vw' }}>
        <div className="flex2LoginFlow">
          <div className="box4LoginFlow" />
          <div style={{ paddingLeft: '8.75vw' }}>
            <div style={{ width: '17.86vw' }}>
              <div className="headsignLoginflow">
                <center>Verification Code</center>
              </div>
              <div style={{ paddingTop: '3.14vh' }} />
              <div className="verifyhead2Loginflow">
                <center>
                  Please add verification code sent to you via your email in the field below.
                </center>
              </div>
              <div style={{ paddingTop: '20.98vh' }} />
              <div className="flex3LoginFlow">
                <div>
                  <OtpInputhere />
                </div>
              </div>
              <div style={{ paddingTop: '6.01vh' }} />
              <button type="button" className="button3LoginFlow">
                Continue
              </button>
              <div style={{ paddingTop: '5.41vh' }} />
              <div className="verifytimeLoginflow">
                <center>
                  <span style={{ color: 'white' }}>Resend</span> 00:{seconds} sec
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyCodeWeb
