// @flow

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import './JobDescriptionPageMob.css'
import './style.css'
// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'
// import '../../Fonts/BananaGrotesk-Regular.otf'
import './ContactUsPopup/ContactUsPopup.css'

function JobDescriptionPageMob() {
  const [show, setShow] = useState(false)
  const [side, setSide] = useState(false)

  const showModal = () => {
    setShow(true)
  }

  const hideModal = () => {
    setShow(false)
  }

  const showSidebar = () => {
    setSide(true)
  }

  const hideSidebar = () => {
    setSide(false)
  }

  // class JobDescriptionPageMob extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       side: false,
  //       show: false
  //     }
  //   }

  //   showModal = () => {
  //     this.setState({ show: true })
  //   }

  //   hideModal = () => {
  //     this.setState({ show: false })
  //   }

  //   showSidebar = () => {
  //     this.setState({ side: true })
  //   }

  //   hideSidebar = () => {
  //     this.setState({ side: false })
  //   }

  //   render() {
  return (
    <div>
      <Modal show={show} handleClose={hideModal} />
      <div className="header-5-mob">
        <div>
          <img className="newzera-img-purple-mob" src="assests/newzera-purple-mob2x.jpg" alt="" />
        </div>
        <div>
          <Sidebar side={side} sidebarClose={hideSidebar} />
          <span onClick={showSidebar} onKeyPress={showSidebar} role="presentation">
            <img className="icon-menu-5-mob" src="assests/icon-menu-purple2x.jpg" alt="" />
          </span>
        </div>
      </div>
      <div className="para-5-1-mob">
        <div className="para-5-1-1-mob">UX Designer</div>
        <div className="para-5-1-2-mob">
          <div style={{ width: '34.13vw' }}>
            Category <br /> Consulting
          </div>
          <div>
            Location <br />
            Plano, TX
          </div>
        </div>

        <div className="para-5-1-3-mob">
          <button type="button" className="apply-5-1-mob">
            Apply
          </button>
        </div>
        <div className="para-5-1-4-mob">
          <span className="space-mob">You'll </span>get an opportunity to create stunning UI/UX,
          solve complex technical challenges such as making the app architecture scalable and have a
          positive impact on driving the Mobile Engineering efforts.
        </div>
        <div className="para-5-1-5-mob">
          <span className="space-mob">Lorem </span> ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="para-5-2-mob">
        <div className="para-5-2-1-mob">Roles & Responsibilities</div>
        <div className="para-5-2-2-mob">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <div style={{ paddingTop: '4.3vh' }}>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Work with product and design teams to convert them to production ready app
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Strong focus on creating delightful user experience
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Take end-to-end ownership of the feature releases
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>Write reusable, modular and efficient code</span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Build pixel-perfect, buttery smooth UIs across both mobile platforms.
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>Participate in code reviews</span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Developing new user-facing features using in React Native or React.js
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Building reusable components and front-end libraries for future use
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Translating designs and wireframes into high quality code
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Optimizing components for maximum performance across a vast array of web-capable
                devices and browsers
              </span>
            </div>
            <div style={{ paddingTop: '5vh' }}>
              <hr style={{ color: 'http://www.newzera.com/8F8FAF', opacity: '0.3' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="para-5-3-mob">
        <div className="para-5-3-1-mob">Good to Have</div>
        <div className="para-5-3-2-mob">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <div style={{ paddingTop: '4.3vh' }}>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>Experience with Unit Testing</span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>Experience Mobile Performance Optimisation</span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Experience of working with either Android or iOS
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Understanding of production deployment on App Store and Play Store
              </span>
            </div>
            <div>
              <span className="dot-2-mob" />
              <span style={{ paddingLeft: '5vw' }}>
                Familiarity with Firebase, Fabric and CI/CD automation
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '8.62vh', paddingLeft: '20vw' }}>
        <button type="button" className="apply-5-1-mob">
          Apply
        </button>
      </div>
      <div className="para-5-4-mob">
        <hr style={{ color: 'http://www.newzera.com/7B46E4', opacity: '0.3' }} />
        <div>
          <div className="footer-tag-5-mob">
            <div>
              <Link to="/about-us#/">About</Link>
            </div>
            <div>
              <a href="https://medium.com/@newzera">Blog</a>
            </div>
            <div>
              <Link to="/careers#/">Careers</Link>
            </div>
            <div onClick={showModal} onKeyPress={showModal} role="presentation">
              Contact
            </div>
            <div>
              <Link to="/help-centre#/">Help</Link>
            </div>
          </div>
          <div className="footer-icons-mob">
            <span>
              {/* <a href="#" alt=""> */}
              <img className="icons-img-mob" src="assests/facebook-purple-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-mob">
              {/* <a href="#" alt=""> */}
              <img className="icons-img-mob" src="assests/instagram-purple-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-mob">
              {/* <a href="#" alt=""> */}
              <img className="icons-img-mob" src="assests/linkedin-purple-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space-mob">
              {/* <a href="#" alt=""> */}
              <img className="icons-img-mob" src="assests/twitter-purple-1.jpg" alt="df" />
              {/* </a> */}
            </span>
          </div>
          <div className="footer-copyright-5-mob">
            © 2020 Newzera Newzera Tech Labs Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

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
            <Link to="/#/">Home</Link>
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
  sidebarClose: ''
}

Sidebar.propTypes = {
  side: PropTypes.bool,
  sidebarClose: PropTypes.string
}

export default JobDescriptionPageMob
