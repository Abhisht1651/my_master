// @flow

import React from 'react'
import './ContactUsPopup.css'

// import '../Fonts/BananaGrotesk-Medium.otf'
// import '../Fonts/BananaGrotesk-Light.otf'
// import '../Fonts/BananaGrotesk-Semibold.otf'
// import '../Fonts/BananaGrotesk-Bold.otf'
// import '../Fonts/BananaGrotesk-Regular.otf'

function ContactUsPopup() {
  return (
    <div className="padd">
      <div className="specifications">
        <div className="cross">&times;</div>
        <div className="contact">Contact</div>
        <div className="stay-up">Stay updated! Get our newslleter to know what’s news!</div>
        <div className="inputs">
          <div className="input-text">
            <span className="name">Name</span>
            <input className="placeholder-class" type="text" placeholder="Insert your name here" />
          </div>
          <div style={{ paddingTop: '2.4vh' }}>
            <div className="input-text">
              <span className="name">E-mail</span>
              <input
                className="placeholder-class"
                type="text"
                placeholder="Insert your e-mail here"
              />
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
  )
}

export default ContactUsPopup
