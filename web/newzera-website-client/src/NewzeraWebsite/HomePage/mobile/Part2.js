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
  const [side, changeSide] = useState(false)

  const showSidebar = () => {
    changeSide(true)
  }

  const hideSidebar = () => {
    changeSide(false)
  }
  return (
    <div>
      <div className="background2-mob">
        <div className="header-1-mob">
          <div>
            <img className="newzera-img-mob" src="assests/newzera-white-mob2x.jpg" alt="" />
          </div>
          <div>
            <Sidebar side={side} sidebarClose={hideSidebar} />
            <span onClick={showSidebar} onKeyPress={showSidebar} role="presentation">
              <img className="icon-menu-mob" src="assests/icon-menu2x.jpg" alt="" />
            </span>
          </div>
        </div>
        <div className="para-1-mob">
          <div className="heading-1-mob">Ownership-part2</div>
          <div className="content-1-mob">
            We strive to inform and inspire our audience with quality content and create a positive.
          </div>
          <div className="buttons-1-mob">
            <div style={{ textAlign: 'left' }}>
              <span
                className="dot-mob"
                onClick={props.changeDisplay1}
                onKeyPress={props.changeDisplay1}
                role="presentation"
              />
              <span
                className="dot-active-mob"
                onClick={props.changeDisplay2}
                onKeyPress={props.changeDisplay2}
                role="presentation"
              />
              <span
                className="dot-mob"
                onClick={props.changeDisplay3}
                onKeyPress={props.changeDisplay3}
                role="presentation"
              />
            </div>
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
        <div className="specifications-6-mob">
          <div className="box-6-mob">
            <div
              className="cross-mob"
              onClick={handleClose}
              onKeyPress={handleClose}
              role="presentation">
              <img style={{ height: '2vh', cursor: 'pointer' }} src="assests/close.jpg" alt="" />
            </div>
            <div className="para-6-1-mob">Contact</div>
            <div className="para-6-2-mob">
              Stay updated! <br />
              Get our newslleter to know what’s news!
            </div>
            <div className="para-6-3-mob">
              <input className="placeholder-class-mob" type="text" placeholder="Full Name" />
              <hr style={{ color: 'http://www.newzera.com/DCDCE9', opacity: '1' }} />
              <div style={{ paddingTop: '4.06vh' }}>
                <input className="placeholder-class-mob" type="text" placeholder="Email" />
                <hr style={{ color: 'http://www.newzera.com/DCDCE9', opacity: '1' }} />
              </div>
            </div>
            <div className="para-6-4-mob">
              <button type="button" className="submit-6-mob">
                Submit
              </button>
            </div>
            <div className="para-6-5-mob">Need more info? info@newzera.com</div>
            <div className="footer-icons-6-mob">
              <span>
                {/* <a href="#" alt=""> */}
                <img className="icons-img-mob" src="assests/facebook-color-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span className="icon-space-mob">
                {/* <a href="#" alt=""> */}
                <img className="icons-img-mob" src="assests/instagram-color-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span className="icon-space-mob">
                {/* <a href="#" alt=""> */}
                <img className="icons-img-mob" src="assests/linkedin-color-1.jpg" alt="df" />
                {/* </a> */}
              </span>
              <span className="icon-space-mob">
                {/* <a href="#" alt=""> */}
                <img className="icons-img-mob" src="assests/twitter-color-1.jpg" alt="df" />
                {/* </a> */}
              </span>
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

const Sidebar = ({ sidebarClose, side }) => {
  const showHideClassName = side ? 'modal display-block' : 'modal display-none'
  const [show, changeShow] = useState(false)

  const showModal = () => {
    changeShow(true)
  }

  const hideModal = () => {
    changeShow(false)
  }

  return (
    <div className={showHideClassName}>
      <Modal show={show} handleClose={hideModal} />
      <section className="modal-main">
        <div className="sidebar-mob">
          <div
            className="cross-sidebar-mob"
            onClick={sidebarClose}
            onKeyPress={sidebarClose}
            role="presentation">
            <img style={{ height: '2vh', cursor: 'pointer' }} src="assests/close.jpg" alt="" />
          </div>
          <div className="icons-sidebar-mob">
            <Link to="/#/">
              <span className="selectLink">Home</span>
            </Link>
            <div style={{ paddingTop: '5vh' }} />
            <Link to="/about-us#/">About</Link>
            <div style={{ paddingTop: '5vh' }} />
            <a href="https://medium.com/@newzera">Blog</a>
            <div style={{ paddingTop: '5vh' }} />
            <Link to="/careers#/">Careers</Link>
            <div style={{ paddingTop: '5vh' }} />
            <span onClick={showModal} onKeyPress={showModal} role="presentation">
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </span>
            <div style={{ paddingTop: '5vh' }} />
            <Link to="/help-centre#/">Help</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

Sidebar.defaultProps = {
  side: false,
  sidebarClose: false
}

Sidebar.propTypes = {
  side: PropTypes.bool,
  sidebarClose: PropTypes.string
}
// const container = document.createElement('div')
// document.body.appendChild(container)

export default Part2
