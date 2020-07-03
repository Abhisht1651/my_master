// @flow

import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './LoginWeb.css'

function Login() {
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
                <center>Login</center>
              </div>
              <div style={{ paddingTop: '8.12vh' }} />
              <input className="inputLoginFlow" type="text" placeholder="Email / Phone No." />
              <hr style={{ marginLeft: '0.15vw', color: '#DCDCE9', opacity: '0.5' }} />
              <div style={{ paddingTop: '1.055vh' }} />
              <input className="inputLoginFlow" type="text" placeholder="Password" />
              <hr style={{ marginLeft: '0.15vw', color: '#DCDCE9', opacity: '0.5' }} />
              <div style={{ paddingTop: '7.62vh' }} />
              <input type="checkbox" />
              <span className="checkTextLoginFlow">
                <span style={{ color: 'white' }}>Subscribe </span> to our daily updates on your{' '}
                <span style={{ color: 'white' }}>Email.</span>.
              </span>
              <div style={{ paddingTop: '5.64vh' }} />
              <button type="button" className="button3LoginFlow">
                Continue
              </button>
              <div style={{ paddingTop: '4vh' }} />
              <div className="footsignLoginflow">
                <center>
                  Not a member yet?{' '}
                  <span className="boldLoginFlow">
                    <Link to="/getStarted#/">Sign Up</Link>
                  </span>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
