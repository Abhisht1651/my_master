// @flow

import React, { useState } from 'react'
import './HomePage.css'

// import '../../Fonts/BananaGrotesk-Medium.otf'
// import '../../Fonts/BananaGrotesk-Light.otf'
// import '../../Fonts/BananaGrotesk-Semibold.otf'
// import '../../Fonts/BananaGrotesk-Bold.otf'
// import '../../Fonts/BananaGrotesk-Regular.otf'

import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'

function HomePage() {
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

  // class HomePage extends React.Component {
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
  return <div style={{ backgroundColor: '#7B46E4' }}>{renderInner()}</div>
}

export default HomePage
