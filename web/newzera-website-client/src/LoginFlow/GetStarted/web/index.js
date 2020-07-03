// @flow

import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import './GetStartedWeb.css'

function GetStartedWeb() {
  const [name, changeName] = useState('')
  const [email, changeEmail] = useState('')
  const [password, changePassword] = useState('')
  const [confirmPassword, changeConfirmPassword] = useState('')

  const checkpassword = () => {
    return (
      password === confirmPassword &&
      password !== '' &&
      confirmPassword !== '' &&
      name !== '' &&
      email !== ''
    )
  }

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
                <center>Getting Started</center>
              </div>
              <div style={{ paddingTop: '3.28vh' }} />
              <input
                className="inputLoginFlow"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => changeName(e.target.value)}
              />
              <hr style={{ marginLeft: '0.15vw', color: '#DCDCE9', opacity: '0.5' }} />
              <div style={{ paddingTop: '1.055vh' }} />
              <input
                className="inputLoginFlow"
                type="email"
                placeholder="Email/Phone no"
                value={email}
                onChange={(e) => changeEmail(e.target.value)}
              />
              <hr style={{ marginLeft: '0.15vw', color: '#DCDCE9', opacity: '0.5' }} />
              <div style={{ paddingTop: '1.055vh' }} />
              <input
                className="inputLoginFlow"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => changePassword(e.target.value)}
              />
              <hr style={{ marginLeft: '0.15vw', color: '#DCDCE9', opacity: '0.5' }} />
              <div style={{ paddingTop: '1.055vh' }} />
              <input
                className="inputLoginFlow"
                type="text"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => changeConfirmPassword(e.target.value)}
              />
              <hr style={{ marginLeft: '0.15vw', color: '#DCDCE9', opacity: '0.5' }} />
              <input type="checkbox" />
              <span className="checkTextLoginFlow">
                I accept the <span style={{ color: 'white' }}>Terms of Use</span> &{' '}
                <span style={{ color: 'white' }}>Privacy Policy</span>.
              </span>
              <div style={{ paddingTop: '5.64vh' }} />

              {!checkpassword() && (
                <button type="button" disabled className="button3LoginFlow">
                  Continue
                </button>
              )}
              {checkpassword() && (
                <Link to="/verify#/">
                  <button type="button" className="button3LoginFlow">
                    Continue
                  </button>
                </Link>
              )}

              <div style={{ paddingTop: '4vh' }} />
              <div className="footsignLoginflow">
                <center>
                  Already an user?{' '}
                  <span className="boldLoginFlow">
                    <Link to="/login#/">Log in</Link>
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

export default GetStartedWeb
