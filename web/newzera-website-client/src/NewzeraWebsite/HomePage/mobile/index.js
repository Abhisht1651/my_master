// @flow

import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './HomePage.css'

// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'
// import '../../Fonts/BananaGrotesk-Regular.otf'

import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'

function HomePageMob() {
  const [display, setDisplay] = useState('first')

  const changeDisplay1 = () => {
    setDisplay('first')
  }

  const changeDisplay2 = () => {
    setDisplay('second')
  }

  const changeDisplay3 = () => {
    setDisplay('third')
  }

  const renderInner = () => {
    // var x;

    // return(<Part1
    //       changeDisplay1={changeDisplay1()}
    //       changeDisplay2={changeDisplay2()}
    //       changeDisplay3={changeDisplay3()}
    //     />)

    // x = (display === 'first' ? (
    //     <Part1
    //       changeDisplay1={changeDisplay1()}
    //       changeDisplay2={changeDisplay2()}
    //       changeDisplay3={changeDisplay3()}
    //     />
    //   ) : ((display === 'second') ?  (
    //     <Part2
    //       changeDisplay1={changeDisplay1()}
    //       changeDisplay2={changeDisplay2()}
    //       changeDisplay3={changeDisplay3()}
    //     />
    //   ) : (<Part3
    //       changeDisplay1={changeDisplay1()}
    //       changeDisplay2={changeDisplay2()}
    //       changeDisplay3={changeDisplay3()}
    //     />)))

    // return x;

    if (display === 'first') {
      return (
        <Part1
          changeDisplay1={changeDisplay1}
          changeDisplay2={changeDisplay2}
          changeDisplay3={changeDisplay3}
        />
      )
    }
    if (display === 'second') {
      return (
        <Part2
          changeDisplay1={changeDisplay1}
          changeDisplay2={changeDisplay2}
          changeDisplay3={changeDisplay3}
        />
      )
    }
    if (display === 'third') {
      return (
        <Part3
          changeDisplay1={changeDisplay1}
          changeDisplay2={changeDisplay2}
          changeDisplay3={changeDisplay3}
        />
      )
    }
    return null
  }

  // class HomePageMob extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       display: 'first'
  //     }
  //   }

  //   changeDisplay1 = () => {
  //     this.setState({ display: 'first' })
  //   }

  //   changeDisplay2 = () => {
  //     this.setState({ display: 'second' })
  //   }

  //   changeDisplay3 = () => {
  //     this.setState({ display: 'third' })
  //   }

  //   renderInner() {
  //     const { display } = this.state

  //     if (display === 'first') {
  //       return (
  //         <Part1
  //           changeDisplay1={this.changeDisplay1}
  //           changeDisplay2={this.changeDisplay2}
  //           changeDisplay3={this.changeDisplay3}
  //         />
  //       )
  //     }
  //     if (display === 'second') {
  //       return (
  //         <Part2
  //           changeDisplay1={this.changeDisplay1}
  //           changeDisplay2={this.changeDisplay2}
  //           changeDisplay3={this.changeDisplay3}
  //         />
  //       )
  //     }
  //     if (display === 'third') {
  //       return (
  //         <Part3
  //           changeDisplay1={this.changeDisplay1}
  //           changeDisplay2={this.changeDisplay2}
  //           changeDisplay3={this.changeDisplay3}
  //         />
  //       )
  //     }
  //     return null
  //   }

  //   render() {
  return (
    <div>
      {renderInner()}
      <div style={{ backgroundColor: '#7B46E4' }}>
        <div className="balance-para-mob">
          A balance between news consumption and social engagement.
        </div>
        <div className="strive-para-mob">
          We strive to inform and inspire our audience with quality content and create a positive
          and fun global social network that serves first to the core values of honest journalism.
        </div>
        <div className="app-buttons-mob">
          <div>
            <img className="app-img-mob" src="assests/AppStore2x-new.jpg" alt="" />
          </div>
          <div>
            <img className="play-img-mob" src="assests/GooglePlay-2x.jpg" alt="" />
          </div>
        </div>
        <div className="flex-1-footer-mob">
          <div>
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
          <div style={{ verticleAlign: 'middle' }}>
            <Link to="/help-centre#/">Help Center</Link>
          </div>
        </div>
        <div className="flex-1-last-mob">
          © 2020 Newzera Tech Labs Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default HomePageMob
