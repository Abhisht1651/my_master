// @flow

import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import PropTypes from 'prop-types'
import './JobDescriptionPage.css'
import './style.css'
// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'
// import '../../Fonts/BananaGrotesk-Regular.otf'
import './ContactUsPopup/ContactUsPopup.css'

function JobDescriptionPageWeb() {
  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow(true)
  }

  const hideModal = () => {
    setShow(false)
  }

  // class JobDescriptionPageWeb extends Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       show: false
  //     }
  //   }

  //   showModal = () => {
  //     this.setState({ show: true })
  //   }

  //   hideModal = () => {
  //     this.setState({ show: false })
  //   }

  //   render() {
  return (
    <div>
      <Modal show={show} handleClose={hideModal} />
      <div className="flex-5-1">
        <div className="flex-5-1-1">
          <div>
            <img className="newzera-img-5" src="assests/newzera-img-purple2x.jpg" alt="" />
          </div>
        </div>
        <div className="flex-5-1-2">
          <div className="nav-bar-5">
            <Link to="/#/">Home</Link> <Link to="/about-us#/">About</Link>{' '}
            <a href="https://medium.com/@newzera">Blog</a> <Link to="/careers">Careers</Link>{' '}
            <span onClick={showModal} onKeyPress={showModal} role="presentation">
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </span>
          </div>
        </div>
      </div>
      <div className="background-5">
        <div className="flex-5-2">
          <div>
            <div className="flex-5-2-1-head">UX Designer</div>
            <div className="flex-5-2-1-subhead">
              <span style={{ fontFamily: 'BananaGrotesk-Bold' }}>Category</span>
              <span
                style={{
                  fontFamily: 'BananaGrotesk-Light',
                  paddingLeft: '0.763vw'
                }}>
                Consulting
              </span>
              <span
                style={{
                  fontFamily: 'BananaGrotesk-Bold',
                  paddingLeft: '2.22vw'
                }}>
                Location
              </span>
              <span
                style={{
                  fontFamily: 'BananaGrotesk-Light',
                  paddingLeft: '0.763vw'
                }}>
                Plano, TX
              </span>
            </div>
          </div>
          <div className="flex-5-2-2" />
        </div>

        <div className="flex-5-3">
          <div>
            <div className="flex-5-3-1">
              <span className="space">You'</span>ll get an opportunity to create stunning UI/UX,
              solve complex technical challenges such as making the app architecture scalable and
              have a positive impact on driving the Mobile Engineering efforts.
            </div>

            <div style={{ paddingTop: '4.56vh', paddingLeft: '4.16vw' }}>
              <button type="button" className="apply-button">
                Apply
              </button>
            </div>
          </div>
          <div className="flex-5-3-2">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-5-4">
        <div>
          <div className="flex-5-4-1" />
        </div>
        <div className="flex-5-4-2">
          <div>
            <div className="lists-expanded-5">
              <div className="lists-expanded-heading-5">Roles & Responsibilities</div>
              <div className="lists-expanded-content-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <div style={{ paddingTop: '2.71vh' }}>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Work with product and design teams to convert them to production ready app
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Strong focus on creating delightful user experience
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Take end-to-end ownership of the feature releases
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Write reusable, modular and efficient code
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Build pixel-perfect, buttery smooth UIs across both mobile platforms.
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>Participate in code reviews</span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Developing new user-facing features using in React Native or React.js
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Building reusable components and front-end libraries for future use
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Translating designs and wireframes into high quality code
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Optimizing components for maximum performance across a vast array of web-capable
                    devices and browsers
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: '5.92vh' }}>
                <hr />
              </div>
            </div>
          </div>
          <div>
            <div className="lists-expanded-5">
              <div className="lists-expanded-heading-5">Going To have</div>
              <div className="lists-expanded-content-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <div style={{ paddingTop: '2.71vh' }}>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>Experience with Unit Testing</span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Experience Mobile Performance Optimisation
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Experience of working with either Android or iOS
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Understanding of production deployment on App Store and Play Store
                  </span>
                </div>
                <div>
                  <span className="dot-5" />
                  <span style={{ paddingLeft: '1.31vw' }}>
                    Familiarity with Firebase, Fabric and CI/CD automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 9.13vh 0 9.13vh' }}>
        <span style={{ opacity: '0' }}>
          <hr style={{ color: 'http://www.newzera.com/8F8FAF', opacity: '0.5' }} />
        </span>
        <br />
        <div className="flex-5-footer">
          <div className="nav-bar-footer-5">
            <Link to="/about-us#/">About</Link> <a href="https://medium.com/@newzera">Blog</a>{' '}
            <span onClick={showModal} onKeyPress={showModal} role="presentation">
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </span>{' '}
            <Link to="/careers#/">Careers</Link> <Link to="/help-centre#/">Help</Link>{' '}
          </div>
          <div>© 2020 Newzera Newzera Tech Labs Pvt. Ltd. All Rights Reserved.</div>
          <div style={{ textAlign: 'right' }}>
            <span className="icon-space">
              {/* <a href="#" alt=""> */}
              <img src="assests/facebook-purple-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space">
              {/* <a href="#" alt=""> */}
              <img src="assests/instagram-purple-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span className="icon-space">
              {/* <a href="#" alt=""> */}
              <img src="assests/linkedin-purple-1.jpg" alt="df" />
              {/* </a> */}
            </span>
            <span>
              {/* <a href="#" alt=""> */}
              <img src="assests/twitter-purple-1.jpg" alt="df" />
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

export default JobDescriptionPageWeb
