// @flow

import React, { useRef, useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import PropTypes from 'prop-types'
import './HelpCentreMob.css'

// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Regular.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect()
  const { offsetTop } = ele
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom
  }
}

function HelpCentreMob() {
  const [visibleSection, setVisibleSection] = useState()
  const [side, setSide] = useState(false)
  const [contact, setContact] = useState(false)
  const headerRef = useRef(null)
  const UNref = useRef(null)
  const AAPSref = useRef(null)
  const RAPref = useRef(null)

  const sectionRefs = [
    { section: 'UN', ref: UNref },
    { section: 'AAPS', ref: AAPSref },
    { section: 'RAP', ref: RAPref }
  ]

  const showSidebar = () => {
    setSide(true)
  }
  const hideSidebar = () => {
    setSide(false)
  }
  const showContact = () => {
    setContact(true)
  }
  const hideContact = () => {
    setContact(false)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const { height: headerHeight } = getDimensions(headerRef.current)
        const scrollPosition = window.scrollY + headerHeight

        const selected = sectionRefs.find(({ ref }) => {
          const ele = ref.current
          if (ele) {
            const { offsetBottom, offsetTop } = getDimensions(ele)
            return scrollPosition > offsetTop && scrollPosition < offsetBottom
          }
          return null
        })

        if (selected && selected.section !== visibleSection) {
          setVisibleSection(selected.section)
        } else if (!selected && visibleSection) {
          setVisibleSection(undefined)
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line
  }, [visibleSection])

  return (
    <div style={{ backgroundColor: '#7B46E4' }}>
      <Modal show={contact} handleClose={hideContact} />
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
      <div className="para-3-1-mob">Help Centre</div>
      <div className="para-3-2-mob">
        <div className="para-3-2-1-mob">
          <div className="flex-3-1-mob">
            <div
              className="box-3-mob"
              style={{ padding: '2.83vh 1.2vw 2.83vh 3.33vw' }}
              ref={headerRef}>
              <div className="flex-dot-mob">
                <div style={{ width: '2vw' }}>
                  <div
                    className={`header_link ${visibleSection === 'UN' ? '' : 'selected-dot-mob'}`}>
                    <span
                      className={`header_link ${
                        visibleSection === 'UN' ? 'dot-2-active-mob' : 'dot-2-head-mob'
                      }`}
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '3vw' }}>
                  <span className={`header_link ${visibleSection === 'UN' ? 'selected-mob' : ''}`}>
                    Using Newzera
                  </span>
                  <br />
                  <span style={{ paddingLeft: '5vw' }}>FAQs</span>
                  <br />
                  <span style={{ paddingLeft: '5vw' }}>Glossary</span>
                </div>
              </div>
              <div className="flex-dot-mob">
                <div style={{ width: '2vw' }}>
                  <div
                    className={`header_link ${
                      visibleSection === 'AAPS' ? '' : 'selected-dot-mob'
                    }`}>
                    <span
                      className={`header_link ${
                        visibleSection === 'AAPS' ? 'dot-2-active-mob' : 'dot-2-head-mob'
                      }`}
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '3vw' }}>
                  <span
                    className={`header_link ${visibleSection === 'AAPS' ? 'selected-mob' : ''}`}>
                    Account and Profile Settings
                  </span>
                </div>
              </div>
              <div className="flex-dot-mob">
                <div style={{ width: '2vw' }}>
                  <div
                    className={`header_link ${visibleSection === 'RAP' ? '' : 'selected-dot-mob'}`}>
                    <span
                      className={`header_link ${
                        visibleSection === 'RAP' ? 'dot-2-active-mob' : 'dot-2-head-mob'
                      }`}
                    />
                  </div>
                </div>
                <div style={{ paddingLeft: '3vw' }}>
                  <span className={`header_link ${visibleSection === 'RAP' ? 'selected-mob' : ''}`}>
                    Rules and Policies
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-3-2-mob">
            <div>
              <div className="cont-3-1-mob">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div id="UN" ref={UNref} style={{ paddingTop: '8.13vh' }}>
              <div className="head-3-1-mob">Using Newzera</div>
              <div className="cont-3-1-mob">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <div style={{ paddingTop: '4.4vh' }}>
                <hr className="hr-mob" />
              </div>
            </div>
            <div id="AAPS" ref={AAPSref} style={{ paddingTop: '8.13vh' }}>
              <div className="head-3-1-mob">Account and Profile Settings</div>
              <div className="cont-3-1-mob">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <div style={{ paddingTop: '4.4vh' }}>
                <hr className="hr-mob" />
              </div>
            </div>
            <div id="RAP" ref={RAPref} style={{ paddingTop: '8.13vh', paddingBottom: '4.6vh' }}>
              <div className="head-3-1-mob">Rules and Policies</div>
              <div className="cont-3-1-mob">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 4.19vw 0 4.4vw' }}>
        <hr style={{ opacity: '0.3', color: '#8F8FAF' }} />
      </div>
      <div className="footer-3-mob">
        <div className="footer-tag-mob">
          <div>
            <Link to="/about-us#/">About</Link>
          </div>
          <div>
            <a href="https://medium.com/@newzera">Blog</a>
          </div>
          <div>
            <Link to="/careers#/">Careers</Link>
          </div>
          <div onClick={showContact} onKeyPress={showContact} role="presentation">
            Contact
          </div>
          <div>
            <Link to="/help-centre#/">Help</Link>
          </div>
        </div>
        <div className="footer-icons-mob">
          <span>
            {/* <a href="#" alt=""> */}
            <img className="icons-img-mob" src="assests/facebook-white-1.jpg" alt="df" />
            {/* </a> */}
          </span>
          <span className="icon-space-mob">
            {/* <a href="#" alt=""> */}
            <img className="icons-img-mob" src="assests/instagram-white-1.jpg" alt="df" />
            {/* </a> */}
          </span>
          <span className="icon-space-mob">
            {/* <a href="#" alt=""> */}
            <img className="icons-img-mob" src="assests/linkedin-white-1.jpg" alt="df" />
            {/* </a> */}
          </span>
          <span className="icon-space-mob">
            {/* <a href="#" alt=""> */}
            <img className="icons-img-mob" src="assests/twitter-white-1.jpg" alt="df" />
            {/* </a> */}
          </span>
        </div>
        <div className="footer-copyright-mob">
          © 2020 Newzera Newzera Tech Labs Pvt. Ltd. All Rights Reserved.
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
            <Link to="/help-centre#/">
              <span className="selectLink">Help</span>
            </Link>
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

export default HelpCentreMob
