// @flow

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import './HomePage.css'

// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'
// import '../../Fonts/BananaGrotesk-Regular.otf'

type Props = {
  changeDisplay1: PropTypes.func,
  changeDisplay2: PropTypes.func,
  changeDisplay3: PropTypes.func
}

function Part2(props: Props) {
  const [show, changeShow] = useState(false)

  const showModal = () => {
    changeShow(true)
  }

  const hideModal = () => {
    changeShow(false)
  }
  return (
    <div>
      <Modal show={show} handleClose={hideModal} />
      <div className="background2">
        <div className="flex-3-1-new">
          <div className="flex-3-1-1-new">
            <div>
              <img className="newzera-img" src="assests/Newzerawhite2x.jpg" alt="" />
            </div>
          </div>
          <div className="flex-3-1-2-new">
            <div className="nav-bar-3-new">
              <Link to="/#/">
                <span className="selectLink">Home</span>
              </Link>{' '}
              <Link to="/about-us#/">About</Link> <a href="https://medium.com/@newzera">Blog</a>{' '}
              <Link to="/careers">Careers</Link>{' '}
              <span onClick={showModal} onKeyPress={showModal} role="presentation">
                <span style={{ cursor: 'pointer' }}>Contact</span>
              </span>
            </div>
          </div>
        </div>
        <div className="balance-para-new">
          A balance between news consumption and social engagement.
        </div>
        <div className="new-para">
          <div className="flex-1-2-1-new">
            <div className="strive-para-new">
              We strive to inform and inspire our audience with quality content and create a
              positive and fun global social network that serves first to the core values of honest
              journalism.
            </div>
            <div className="app-buttons-new">
              <div>
                <img className="app-img-new" src="assests/AppNew.jpg" alt="" />
              </div>
              <div>
                <img className="play-img-new" src="assests/GoogleNew.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex-1-2-2-new">
            <span
              style={{
                fontsize: '2.22vh',
                fontFamily: 'BananaGrotesk-Semibold'
              }}>
              Ownership part2
            </span>
            <div className="carousel-para-new">
              We strive to inform and inspire our audience with quality content and create a
              positive.
            </div>
            <div>
              <div style={{ textAlign: 'left' }}>
                <span
                  className="dot"
                  onClick={props.changeDisplay1}
                  onKeyPress={props.changeDisplay1}
                  role="presentation"
                />
                <span
                  className="dot-active"
                  onClick={props.changeDisplay2}
                  onKeyPress={props.changeDisplay2}
                  role="presentation"
                />
                <span
                  className="dot"
                  onClick={props.changeDisplay3}
                  onKeyPress={props.changeDisplay3}
                  role="presentation"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1-footer">
          <div className="flex-1-footer-1">
            <Link to="/help-centre#/">Help Center</Link>
            <span style={{ paddingLeft: '1.909vw' }}>
              © 2020 Newzera Tech Labs Pvt. Ltd. All Rights Reserved.
            </span>
          </div>
          <div className="flex-1-footer-2">
            <span className="icon-space-new">
              {/* <a href="#" alt=""> */}
              <img src="assests/facebook-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-new">
              {/* <a href="#" alt=""> */}
              <img src="assests/instagram-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-new">
              {/* <a href="#" alt=""> */}
              <img src="assests/linkedin-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-new">
              {/* <a href="#" alt=""> */}
              <img src="assests/twitter-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Part2.defaultProps = {
  changeDisplay1: () => {},
  changeDisplay2: () => {},
  changeDisplay3: () => {}
}

// Part2.propTypes = {
//   changeDisplay1: PropTypes.func,
//   changeDisplay2: PropTypes.func,
//   changeDisplay3: PropTypes.func
// }

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div style={{ padding: '16.41vh 26.94vw 16.91vh 27.22vw' }}>
          <div className="specifications">
            <div
              className="cross"
              onClick={handleClose}
              onKeyPress={handleClose}
              role="presentation">
              <img style={{ height: '1.5vh', cursor: 'pointer' }} src="assests/close.jpg" alt="" />
            </div>
            <div className="contact">Contact</div>
            <div className="stay-up">Stay updated! Get our newslleter to know what’s news!</div>
            <div className="inputs">
              <div className="input-text">
                <span className="name">Name</span>
                <input
                  className="placeholder-class"
                  type="text"
                  placeholder="Insert your name here"
                />
              </div>
              <div style={{ paddingTop: '2.4vh' }}>
                <div className="input-text">
                  <span className="name">E-mail</span>
                  <span>
                    <input
                      className="placeholder-class"
                      type="text"
                      placeholder="Insert your e-mail here"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="submit-button">
              <button className="submit-button-6" type="button">
                Submit
              </button>
            </div>
            <div className="footer-6">
              <div className="footer-6-content">Need more info? info@newzera.com</div>
              <div className="footer-icons">
                <span style={{ paddingRight: '2.08vw' }}>
                  {/* <a href="#" alt=""> */}
                  <img src="assests/facebook-color-1.jpg" alt="" />
                  {/* </a> */}
                </span>
                <span style={{ paddingRight: '2.5vw' }}>
                  {/* <a href="#" alt=""> */}
                  <img src="assests/instagram-color-1.jpg" alt="" />
                  {/* </a> */}
                </span>
                <span style={{ paddingRight: '2.15vw' }}>
                  {/* <a href="#" alt=""> */}
                  <img src="assests/linkedin-color-1.jpg" alt="" />
                  {/* </a> */}
                </span>
                <span>
                  {/* <a href="#" alt=""> */}
                  <img src="assests/twitter-color-1.jpg" alt="" />
                  {/* </a> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Modal.defaultProps = {
  show: false,
  handleClose: ''
}

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.string
}

export default Part2
