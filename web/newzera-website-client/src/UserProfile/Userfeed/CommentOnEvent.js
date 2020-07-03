// @flow

import React from 'react'
import Images from '../Themes'

import './Styles/UserfeedStyle.css'

type Props = {
  userImg: string,
  remTime: string
}

function CommentOnEvent(props: Props) {
  const { userImg, remTime } = props

  return (
    <div className="widthBackUF">
      <div className="flex2UF">
        <div className="flex1UF">
          <div>
            <img src={userImg} className="userImgUF" alt="" />
          </div>
          <div className="flex1UF">
            <div style={{ paddingLeft: '0.54vw' }} />
            <div style={{ paddingTop: '1vh' }}>
              <img src={Images.MsgBlue} className="msgBlueImgUI" alt="" />
            </div>
            <div style={{ paddingLeft: '0.431vw' }} />
            <div>
              <span className="text1UF">You commented on an event for a </span>
              <span className="text2UF">Storyline.</span>
            </div>
            <div style={{ paddingLeft: '0.73vw' }} />
            <div className="text3UF" style={{ paddingTop: '1.2vh' }}>
              {remTime} ago
            </div>
          </div>
        </div>
        <div>
          <img src={Images.Ellipses} className="ellipsesUF" alt="" />
        </div>
      </div>
    </div>
  )
}

CommentOnEvent.defaultProps = {
  userImg: Images.John,
  remTime: '4 hr'
}

export default CommentOnEvent
