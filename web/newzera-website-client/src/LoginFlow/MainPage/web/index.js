// @flow

import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import './MainPage.css'

function MainPageWeb() {
  return (
    <div>
      <div style={{ paddingTop: '4.72vh' }} />
      <div style={{ padding: '0 11.04vw 0 12.72vw' }}>
        <div className="flexLoginFlow">
          <div>
            <img className="newzeraLogoLoginFlow" src="assests/Newzerawhite2x.jpg" alt="" />
          </div>
          <div>
            <button type="button" className="button1LoginFlow">
              ABOUT
            </button>
            <span style={{ paddingLeft: '2.08vw' }} />
            <Link to="/login#/">
              <button type="button" className="button2LoginFlow">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '25.6vh' }} />
      <div style={{ padding: '0 0 0 17.70vw' }}>
        <div className="flex2LoginFlow">
          <div style={{ width: '31.25vw' }}>
            <div className="text1LoginFlow">Lorem ipsum dolor sit amet, consetetur</div>
            <div style={{ paddingTop: '5.74vh' }} />
            <div className="text2LoginFlow">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            </div>
            <div style={{ paddingTop: '3.88vh' }} />
            <Link to="/getStarted#/">
              <button type="button" className="button2LoginFlow">
                GET STARTED
              </button>
            </Link>
            <span style={{ paddingLeft: '2.08vw' }} />
            <button type="button" className="button1LoginFlow">
              Watch Video
            </button>
          </div>
          <div style={{ paddingLeft: '2.08vw' }}>
            <div className="boxLoginFlow" />
          </div>
        </div>
        <div style={{ paddingTop: '58.61vh' }} />
        <div className="flex2LoginFlow">
          <div className="boxLoginFlow" />
          <div style={{ paddingLeft: '2.08vw' }}>
            <div style={{ width: '31.25vw' }}>
              <div className="text1LoginFlow">Lorem ipsum dolor sit amet, consetetur</div>
              <div style={{ paddingTop: '5.74vh' }} />
              <div className="text2LoginFlow">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '62.3vh' }} />
        <div className="flex2LoginFlow">
          <div style={{ width: '31.25vw' }}>
            <div className="text1LoginFlow">Lorem ipsum dolor sit amet, consetetur</div>
            <div style={{ paddingTop: '5.74vh' }} />
            <div className="text2LoginFlow">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            </div>
          </div>
          <div style={{ paddingLeft: '2.08vw' }}>
            <div className="boxLoginFlow" />
          </div>
        </div>
        <div style={{ paddingTop: '47.5vh' }} />
        <div className="box2LoginFlow" />
        <div style={{ paddingTop: '3.42vh' }} />
        <div style={{ width: '31.25vw' }}>
          <div className="text1LoginFlow">Lorem ipsum dolor sit amet, consetetur</div>
        </div>
      </div>
      <div style={{ paddingTop: '33.6vh' }} />
      <div className="flex3LoginFlow">
        <div className="box3LoginFlow" />
      </div>
      <div style={{ paddingTop: '3.33vh' }} />
      <div className="flex3LoginFlow">
        <div style={{ width: '37.9vw' }}>
          <div className="flex3LoginFlow">
            <div className="text1LoginFlow">Lorem ipsum dolor sit</div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '2.03vh' }} />
      <div className="flex3LoginFlow">
        <div style={{ width: '37.9vw' }}>
          <div className="flex3LoginFlow">
            <div className="text2LoginFlow">
              <center>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              </center>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '2.31vh' }} />
      <div className="flex3LoginFlow">
        <Link to="/getStarted#/">
          <button type="button" className="button2LoginFlow">
            GET STARTED
          </button>
        </Link>
      </div>
      <div style={{ paddingTop: '12.03vh' }} />
      <div className="footerLoginFlow">
        <div style={{ paddingTop: '7.4vh' }} />
        <div className="flex2LoginFlow">
          <div className="footer1LoginFlow">© NEWZERA Group India Ltd.</div>
          <div className="footer2LoginFlow">
            About Us
            <br />
            Contact
            <br />
            Terms & Conditions
          </div>
          <div className="footer3LoginFlow">
            <div className="flex2LoginFlow">
              <div style={{ width: '2.66vw' }}>
                <img className="socialImgLoginflow" src="assests/facebookLoginflow.jpg" alt="" />
              </div>
              <div>Facebook</div>
            </div>
            <div className="flex2LoginFlow">
              <div style={{ width: '2.66vw' }}>
                <img className="socialImgLoginflow" src="assests/twitterLoginflow.jpg" alt="" />
              </div>
              <div>Twitter</div>
            </div>
            <div className="flex2LoginFlow">
              <div style={{ width: '2.66vw' }}>
                <img className="socialImgLoginflow" src="assests/instagramLoginflow.png" alt="" />
              </div>
              <div>Instagram</div>
            </div>
          </div>
          <div className="footer4LoginFlow">
            Subscribe to our newsletter
            <div style={{ paddingTop: '2.22vh' }} />
            <input className="emailinputLoginFlow" type="text" placeholder="Email Address" />
            <span style={{ paddingLeft: '2.08vw' }} />
            <button type="button" className="button5LoginFlow">
              OK
            </button>
          </div>
          <div className="footer5LoginFlow">
            497 Evergreen Rd. Roseville, CA 95673 <br />
            +44 345 678 903 <br />
            adobexd@mail.com
          </div>
        </div>
        <div style={{ paddingTop: '9.81vh' }} />
      </div>
    </div>
  )
}

export default MainPageWeb
