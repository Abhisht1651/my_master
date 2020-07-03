// @flow

import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import PropTypes from 'prop-types'

import './CareersPageMob.css'

// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Regular.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'

function ButtonD() {
  return (
    <div>
      Current Openings{' '}
      <span style={{ paddingLeft: '5.6vw' }}>
        <img src="assests/Group-1.jpg" alt="" />
      </span>
    </div>
  )
}

function ButtonU() {
  return (
    <div>
      Current Openings{' '}
      <span style={{ paddingLeft: '5.6vw' }}>
        <img style={{ height: '1.48vh', width: '2.72vw' }} src="assests/Group-0.jpg" alt="" />
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
    linkStyle1 = { display: 'block', paddingLeft: '4.8vw' }
  } else {
    linkStyle1 = { display: 'none', paddingLeft: '4.8vw' }
  }
  let linkStyle2
  if (hover2) {
    linkStyle2 = { display: 'block', paddingLeft: '4.8vw' }
  } else {
    linkStyle2 = { display: 'none', paddingLeft: '4.8vw' }
  }
  let linkStyle3
  if (hover3) {
    linkStyle3 = { display: 'block', paddingLeft: '4.8vw' }
  } else {
    linkStyle3 = { display: 'none', paddingLeft: '4.8vw' }
  }
  let linkStyle4
  if (hover4) {
    linkStyle4 = { display: 'block', paddingLeft: '4.8vw' }
  } else {
    linkStyle4 = { display: 'none', paddingLeft: '4.8vw' }
  }
  return (
    <div>
      <div className="flex-links-mob" style={{ fontFamily: 'BananaGrotesk-Bold' }}>
        <div className="flex-links-1-mob">Title</div>
        <div className="flex-links-2-mob">Category</div>
        <div className="flex-links-3-mob">Location</div>
      </div>
      <Link to="/job-description#/">
        <div style={{ cursor: 'pointer' }}>
          <div
            className="flex-links-mob"
            style={{ paddingTop: '4.43vh' }}
            onMouseEnter={toggleHover1}
            onMouseLeave={toggleHover1}>
            <div className="flex-links-1-mob">UX Designer</div>
            <div className="flex-links-2-mob">Consulting</div>
            <div className="flex-links-3-mob">Plano, TX</div>
            <div style={linkStyle1}>
              <img style={{ height: '1.48vh' }} src="assests/Group-2.jpg" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: '3.57vh', width: '86.4vw' }}>
            <hr style={{ color: '#E6ECED', opacity: '0.3' }} />
          </div>
          <div
            className="flex-links-mob"
            style={{ paddingTop: '4.43vh' }}
            onMouseEnter={toggleHover2}
            onMouseLeave={toggleHover2}>
            <div className="flex-links-1-mob">Human Capital Senior Associate</div>
            <div className="flex-links-2-mob">Consulting</div>
            <div className="flex-links-3-mob">Toronto, CA</div>
            <div style={linkStyle2}>
              <img style={{ height: '1.48vh' }} src="assests/Group-2.jpg" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: '3.57vh', width: '86.4vw' }}>
            <hr style={{ color: '#E6ECED', opacity: '0.3' }} />
          </div>
          <div
            className="flex-links-mob"
            style={{ paddingTop: '4.43vh' }}
            onMouseEnter={toggleHover3}
            onMouseLeave={toggleHover3}>
            <div className="flex-links-1-mob">Business Advisory Services Associate</div>
            <div className="flex-links-2-mob">Consulting</div>
            <div className="flex-links-3-mob">Plano, TX</div>
            <div style={linkStyle3}>
              <img style={{ height: '1.48vh' }} src="assests/Group-2.jpg" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: '3.57vh', width: '86.4vw' }}>
            <hr style={{ color: '#E6ECED', opacity: '0.3' }} />
          </div>
          <div
            className="flex-links-mob"
            style={{ paddingTop: '4.43vh' }}
            onMouseEnter={toggleHover4}
            onMouseLeave={toggleHover4}>
            <div className="flex-links-1-mob">Human Capital Senior Associate</div>
            <div className="flex-links-2-mob">Consulting</div>
            <div className="flex-links-3-mob">Toronto, CA</div>
            <div style={linkStyle4}>
              <img style={{ height: '1.48vh' }} src="assests/Group-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

// function CareersPageMop(){
//   const[show,setShow] = useState('no')
//   const[buttonContent,setButtonContent] = useState(<ButtonU />)
//   const [side,setSide]=useState(false)
//   const [contact,setContact] = useState(false)
//   showSidebar = () => {
//     setSide(true);
//   }

//   hideSidebar = () => {
//     setSide(false);
//   }

//   showContact = () => {
//     setContact(true);
//   }

//   hideContact = () => {
//     setContact(false);
//   }

//   toggleShow = () => {
//       const p=show;
//       const bc = buttonContent;

//       p === 'no' ? setShow('yes') : setShow('no');
//       p === 'no' ? setButtonContent(<ButtonD />) : setButtonContent(<ButtonU />)

//     }

//   showLinks() {
//     const ps=show;

//     if (ps === 'no') {
//       return <Openings1 />
//     }
//     if (ps === 'yes') {
//       return <Openings2 />
//     }
//     return null
//   }

// }

// class CareersPageMob extends Component {
//   constructor(props) {
//     super(props)

//     state = {
//       show: 'no',
//       buttonContent: <ButtonU />,
//       side: false,
//       contact: false
//     }

//   }

//   showSidebar = () => {
//     setState({ side: true })
//   }

//   hideSidebar = () => {
//     setState({ side: false })
//   }

//   showContact = () => {
//     setState({ contact: true })
//   }

//   hideContact = () => {
//     setState({ contact: false })
//   }

//   toggleShow = () => {
//     const { show } = state
//     setState({
//       show: show === 'no' ? 'yes' : 'no',
//       buttonContent: show === 'no' ? <ButtonD /> : <ButtonU />
//     })
//   }

//   showLinks() {
//     const { show } = state

//     if (show === 'no') {
//       return <Openings1 />
//     }
//     if (show === 'yes') {
//       return <Openings2 />
//     }
//     return null
//   }

//   render() {

function CareersPageMob() {
  const [show, setShow] = useState('no')
  const [buttonContent, setButtonContent] = useState(<ButtonU />)
  const [side, setSide] = useState(false)
  const [contact, setContact] = useState(false)

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

  const toggleShow = () => {
    const p = show
    /* eslint-disable no-unused-expressions */
    p === 'no' ? setShow('yes') : setShow('no')
    /* eslint-disable no-unused-expressions */
    p === 'no' ? setButtonContent(<ButtonD />) : setButtonContent(<ButtonU />)
  }

  const showLinks = () => {
    const ps = show

    if (ps === 'no') {
      return <Openings1 />
    }
    if (ps === 'yes') {
      return <Openings2 />
    }
    return null
  }

  return (
    <div style={{ backgroundColor: '#7B46E4' }}>
      <Modal show={contact} handleClose={hideContact} />
      <div className="background4-4-mob">
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
      </div>
      <div className="para-4-1-mob">
        <div className="para-4-1-1-mob">Our Career Opportunities</div>
        <div className="para-4-1-2-mob">
          Baker Tilly continually invests in your personal and professional growth, supporting your
          efforts to continuously improve and hone your skills.
        </div>
        <div className="button-4-mob">
          <button type="button" className="main-button-4-mob" onClick={toggleShow}>
            {buttonContent}
          </button>
        </div>
      </div>
      <div className="para-4-2-mob">
        {showLinks()}
        <div style={{ paddingTop: '14.28vh' }}>
          <div style={{ width: '90.2vw' }}>
            <hr style={{ opacity: '0.3', backgroundColor: '#8F8FAF' }} />
          </div>
        </div>
      </div>
      <div className="footer-4-mob">
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
                <img className="icons-img-mob" src="assests/facebook-color-1.jpg" alt="df" />
              </span>
              <span className="icon-space-mob">
                <img className="icons-img-mob" src="assests/instagram-color-1.jpg" alt="df" />
              </span>
              <span className="icon-space-mob">
                <img className="icons-img-mob" src="assests/linkedin-color-1.jpg" alt="df" />
              </span>
              <span className="icon-space-mob">
                <img className="icons-img-mob" src="assests/twitter-color-1.jpg" alt="df" />
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
            <Link to="/careers#/">
              <span className="selectLink">Careers</span>
            </Link>
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

export default CareersPageMob
