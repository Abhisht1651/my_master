// @flow

import React from 'react'

import Images from './Themes'

import './index.css'

import ReplyComment from './Types/ReplyComment'
import LiveStoryline from './Types/LiveStoryline'

function Notifications() {
  return (
    <div className="mainNOT" style={{ padding: '0 10vw 0 10vw' }}>
      <div style={{ paddingTop: '2.82vh' }} />
      <div className="main2NOT">
        <div className="flex1NOT">
          <div style={{ paddingLeft: '9vw' }} />
          <div className="textHeadNOT" style={{ paddingTop: '1.8vh' }}>
            Notifications
          </div>
          <div style={{ paddingLeft: '5.69vw' }} />
          <div style={{ paddingTop: '2.8vh' }}>
            <img src={Images.Notifications} className="notifyImgNOT" alt="" />
          </div>
        </div>
        <div style={{ paddingTop: '3.08vh' }} />
        <ReplyComment />
        <LiveStoryline />
      </div>
    </div>
  )
}

export default Notifications
