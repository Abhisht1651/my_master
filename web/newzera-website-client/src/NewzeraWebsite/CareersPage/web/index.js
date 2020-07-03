// @flow

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'

import './CareersPageWeb.css'

// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Regular.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'

function ButtonD() {
  return (
    <div>
      Current Openings{' '}
      <span style={{ paddingLeft: '1.61vw' }}>
        <img src="assests/Group-1.jpg" alt="" />
      </span>
    </div>
  )
}

function ButtonU() {
  return (
    <div>
      Current Openings{' '}
      <span style={{ paddingLeft: '1.61vw' }}>
        <img src="assests/Group-0.jpg" alt="" />
      </span>
    </div>
  )
}

function Openings1() {
  return <div />
}

function Openings2() {
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const [hover4, setHover4] = useState(false)

  const toggleHover1 = () => {
    const h1 = hover1
    setHover1(!h1)
  }

  const toggleHover2 = () => {
    const h2 = hover2
    setHover2(!h2)
  }

  const toggleHover3 = () => {
    const h3 = hover3
    setHover3(!h3)
  }

  const toggleHover4 = () => {
    const h4 = hover4
    setHover4(!h4)
  }

  let linkStyle1
  if (hover1) {
    linkStyle1 = { display: 'block', paddingLeft: '7.26vw' }
  } else {
    linkStyle1 = { display: 'none', paddingLeft: '7.26vw' }
  }
  let linkStyle2
  if (hover2) {
    linkStyle2 = { display: 'block', paddingLeft: '7.26vw' }
  } else {
    linkStyle2 = { display: 'none', paddingLeft: '7.26vw' }
  }
  let linkStyle3
  if (hover3) {
    linkStyle3 = { display: 'block', paddingLeft: '7.26vw' }
  } else {
    linkStyle3 = { display: 'none', paddingLeft: '7.26vw' }
  }
  let linkStyle4
  if (hover4) {
    linkStyle4 = { display: 'block', paddingLeft: '7.26vw' }
  } else {
    linkStyle4 = { display: 'none', paddingLeft: '7.26vw' }
  }
  return (
    <div className="links-content">
      <div className="flex-links" style={{ fontFamily: 'BananaGrotesk-Bold' }}>
        <div className="flex-links-1">Title</div>
        <div className="flex-links-2">Category</div>
        <div className="flex-links-3">Location</div>
      </div>
      <Link to="/job-description#/">
        <div style={{ cursor: 'pointer' }}>
          <div
            className="flex-links"
            style={{ paddingTop: '5.43vh' }}
            onMouseEnter={toggleHover1}
            onMouseLeave={toggleHover1}>
            <div className="flex-links-1">Business Advisory Services Associate</div>
            <div className="flex-links-2">Consulting</div>
            <div className="flex-links-3">Plano, TX</div>
            <div style={linkStyle1}>
              <img src="assests/Group-2.jpg" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: '3.7vh', width: '68.88vw' }}>
            <hr style={{ color: '#E6ECED', opacity: '0.3' }} />
          </div>
          <div
            className="flex-links"
            style={{ paddingTop: '5.43vh' }}
            onMouseEnter={toggleHover2}
            onMouseLeave={toggleHover2}>
            <div className="flex-links-1">Human Capital Senior Associate</div>
            <div className="flex-links-2">Consulting</div>
            <div className="flex-links-3">Toronto, CA</div>
            <div style={linkStyle2}>
              <img src="assests/Group-2.jpg" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: '3.7vh', width: '68.88vw' }}>
            <hr style={{ color: '#E6ECED', opacity: '0.3' }} />
          </div>
          <div
            className="flex-links"
            style={{ paddingTop: '5.43vh' }}
            onMouseEnter={toggleHover3}
            onMouseLeave={toggleHover3}>
            <div className="flex-links-1">Business Advisory Services Associate</div>
            <div className="flex-links-2">Consulting</div>
            <div className="flex-links-3">Plano, TX</div>
            <div style={linkStyle3}>
              <img src="assests/Group-2.jpg" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: '3.7vh', width: '68.88vw' }}>
            <hr style={{ color: '#E6ECED', opacity: '0.3' }} />
          </div>
          <div
            className="flex-links"
            style={{ paddingTop: '5.43vh' }}
            onMouseEnter={toggleHover4}
            onMouseLeave={toggleHover4}>
            <div className="flex-links-1">Human Capital Senior Associate</div>
            <div className="flex-links-2">Consulting</div>
            <div className="flex-links-3">Toronto, CA</div>
            <div style={linkStyle4}>
              <img src="assests/Group-2.jpg" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: '3.7vh', width: '68.88vw' }}>
            <hr style={{ color: '#E6ECED', opacity: '0.3' }} />
          </div>
        </div>
      </Link>
    </div>
  )
}

function CareersPageWeb() {
  const [show, setShow] = useState(false)
  const [buttonContent, setButtonContent] = useState(<ButtonU />)
  const [showCareer, setShowCareer] = useState('no')

  const showModal = () => {
    setShow(true)
  }

  const hideModal = () => {
    setShow(false)
  }

  const toggleShow = () => {
    const p = showCareer
    /* eslint-disable no-unused-expressions */
    p === 'no' ? setShowCareer('yes') : setShowCareer('no')
    /* eslint-disable no-unused-expressions */
    p === 'no' ? setButtonContent(<ButtonD />) : setButtonContent(<ButtonU />)
  }

  const showLinks = () => {
    const ps = showCareer

    if (ps === 'no') {
      return <Openings1 />
    }
    if (ps === 'yes') {
      return <Openings2 />
    }
    return null
  }

  // class CareersPageWeb extends Component {
  //   constructor(props) {
  //     super(props)

  //     this.state = {
  //       show: false,
  //       showCareer: 'no',
  //       buttonContent: <ButtonU />
  //     }
  //   }

  //   showModal = () => {
  //     this.setState({ show: true })
  //   }

  //   hideModal = () => {
  //     this.setState({ show: false })
  //   }

  //   toggleShow = () => {
  //     const { showCareer } = this.state
  //     this.setState({
  //       showCareer: showCareer === 'no' ? 'yes' : 'no',
  //       buttonContent: showCareer === 'no' ? <ButtonD /> : <ButtonU />
  //     })
  //   }

  //   showLinks() {
  //     const { showCareer } = this.state

  //     if (showCareer === 'no') {
  //       return <Openings1 />
  //     }
  //     if (showCareer === 'yes') {
  //       return <Openings2 />
  //     }
  //     return null
  //   }

  //   render() {
  return (
    <div style={{ backgroundColor: '#7B46E4' }}>
      <Modal show={show} handleClose={hideModal} />
      <div className="flex-4-1">
        <div className="flex-4-1-1">
          <div>
            <img className="newzera-img" src="assests/Newzerawhite2x.jpg" alt="" />
          </div>
          <div className="heading-4">
            Our Career <br />
            Opportunities
          </div>
          <div className="content-4">
            <span className="space">Baker </span>Tilly continually invests in your personal and
            professional growth, supporting your efforts to continuously improve and hone your
            skills.
          </div>
          <div className="openings-button">
            <button type="button" className="main-button" onClick={toggleShow}>
              {buttonContent}
            </button>
          </div>
        </div>
        <div className="flex-4-1-2">
          <div className="nav-bar-4">
            <Link to="/#/">Home</Link> <Link to="/about-us#/">About</Link>{' '}
            <a href="https://medium.com/@newzera">Blog</a>{' '}
            <Link to="/careers">
              <span className="selectLink">Careers</span>
            </Link>{' '}
            <span onClick={showModal} onKeyPress={showModal} role="presentation">
              <span style={{ cursor: 'pointer' }}>Contact</span>
            </span>
          </div>
        </div>
      </div>
      <div style={{ padding: '5vh 0 0 0' }}>{showLinks()}</div>

      <div style={{ padding: '18.02vh 4.16vw 0 4vw' }}>
        <span>
          <hr style={{ opacity: '0.3', backgroundColor: '#8F8FAF' }} />
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
          <div style={{ textAlign: 'right' }}>
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

export default CareersPageWeb
