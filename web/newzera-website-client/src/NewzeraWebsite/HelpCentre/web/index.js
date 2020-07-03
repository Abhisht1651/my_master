// @flow

import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import './HelpCentreWeb.css'

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

function HelpCentreWeb() {
  const [visibleSection, setVisibleSection] = useState()
  const [show, changeShow] = useState(false)
  const headerRef = useRef(null)
  const UNref = useRef(null)
  const AAPSref = useRef(null)
  const RAPref = useRef(null)

  const showModal = () => {
    changeShow(true)
  }

  const hideModal = () => {
    changeShow(false)
  }

  const sectionRefs = [
    { section: 'UN', ref: UNref },
    { section: 'AAPS', ref: AAPSref },
    { section: 'RAP', ref: RAPref }
  ]

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
      <Modal show={show} handleClose={hideModal} />
      <div className="flex-3-1">
        <div className="flex-3-1-1">
          <div>
            <img className="newzera-img" src="assests/Newzerawhite2x.jpg" alt="" />
          </div>
        </div>
        <div className="flex-3-1-2">
          <div className="nav-bar-3">
            <Link to="/#/">Home</Link> <Link to="/about-us#/">About</Link>{' '}
            <a href="https://medium.com/@newzera">Blog</a> <Link to="/careers">Careers</Link>{' '}
            <span onClick={showModal} onKeyPress={showModal} role="presentation">
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </span>
          </div>
        </div>
      </div>
      <div className="background-3">
        <div className="flex-3-2">
          <div>
            <div className="flex-3-2-1-head">Help Centre</div>
          </div>
          <div className="flex-3-2-2" />
        </div>

        <div className="flex-3-3">
          <div>
            <div className="flex-3-3-1" ref={headerRef}>
              <div className={`header_link ${visibleSection === 'UN' ? '' : 'flex-dot-web'}`}>
                <span
                  className={`header_link ${visibleSection === 'UN' ? 'dot-3-active' : 'dot-3'}`}
                />
                <span
                  className={`header_link ${
                    visibleSection === 'UN' ? 'selected-web' : 'selected-not-web'
                  }`}>
                  Using Newzera
                </span>
                <br />
                <span style={{ paddingLeft: '3.31vw' }}>FAQs</span>
                <br />
                <span style={{ paddingLeft: '3.31vw' }}>Glossary</span>
              </div>
              <div className={`header_link ${visibleSection === 'AAPS' ? '' : 'flex-dot-web'}`}>
                <span
                  className={`header_link ${visibleSection === 'AAPS' ? 'dot-3-active' : 'dot-3'}`}
                />
                <span
                  className={`header_link ${
                    visibleSection === 'AAPS' ? 'selected-web' : 'selected-not-web'
                  }`}>
                  Account and Profile Settings
                </span>
              </div>
              <div className={`header_link ${visibleSection === 'RAP' ? '' : 'flex-dot-web'}`}>
                <span
                  className={`header_link ${visibleSection === 'RAP' ? 'dot-3-active' : 'dot-3'}`}
                />
                <span
                  className={`header_link ${
                    visibleSection === 'RAP' ? 'selected-web' : 'selected-not-web'
                  }`}>
                  Rules and Policies
                </span>
              </div>
            </div>
          </div>
          <div className="flex-3-3-2">
            <div>
              <span className="space">Lorem </span>ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="flex-3-4-2">
              <div id="UN" ref={UNref}>
                <div className="lists-expanded-3">
                  <div className="lists-expanded-heading-3">Using Newzera</div>
                  <div className="lists-expanded-content-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <div style={{ paddingTop: '5.92vh' }}>
                    <hr />
                  </div>
                </div>
              </div>
              <div id="AAPS" ref={AAPSref}>
                <div className="lists-expanded-3">
                  <div className="lists-expanded-heading-3">Account and Profile Settings</div>
                  <div className="lists-expanded-content-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                  <div style={{ paddingTop: '5.92vh' }}>
                    <hr />
                  </div>
                </div>
              </div>
              <div id="RAP" ref={RAPref}>
                <div className="lists-expanded-3-last">
                  <div className="lists-expanded-heading-3">Rules and Policies</div>
                  <div className="lists-expanded-content-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-3-4">
        <div>
          <div className="flex-3-4-1" />
        </div>
        <div className="flex-3-4-2" />
      </div>
      <div style={{ padding: '0 4.09vw 0 4.09vw' }}>
        <span style={{ opacity: '0' }}>
          <hr style={{ color: '#8F8FAF', opacity: '0.3' }} />
        </span>
        <br />
        <div className="flex-2-footer">
          <div className="nav-bar-footer">
            <Link to="/about-us#/">About</Link> <a href="https://medium.com/@newzera">Blog</a>{' '}
            <span onClick={showModal} onKeyPress={showModal} role="presentation">
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </span>{' '}
            <Link to="/careers#/">Careers</Link> <Link to="/help-centre#/">Help</Link>{' '}
          </div>
          <div>© 2020 Newzera Newzera Tech Labs Pvt. Ltd. All Rights Reserved.</div>
          <div>
            <span className="icon-space">
              {/* <a href="#" alt=""> */}
              <img src="assests/facebook-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space">
              {/* <a href="#" alt=""> */}
              <img src="assests/instagram-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space">
              {/* <a href="#" alt=""> */}
              <img src="assests/linkedin-white-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span>
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

export default HelpCentreWeb
