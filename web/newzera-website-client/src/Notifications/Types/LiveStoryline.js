// @flow

import React from 'react'
import Images from '../Themes'
import './Styles/CommonStyle.css'

type Props = {
  seen: boolean,
  topic: string,
  num: number,
  time: string
}

function LiveStoryline(props: Props) {
  const { seen, topic, num, time } = props

  return (
    <div className={seen ? '' : 'seenBackNOT'}>
      <div style={{ paddingTop: '2.17vh' }} />
      <div className="flex1NOT">
        <div className="iconNOT" style={{ paddingTop: '0.5vh' }}>
          <span style={{ paddingLeft: '1.82vw' }} />
          <img src={Images.List} className="trendingImgNOT" alt="" />
        </div>
        <div style={{ width: '20vw' }}>
          <div className="flex2NOT">
            <div style={{ width: '12.4vw', paddingTop: '0.24vh' }}>
              <span className="text1NOT">Live Storyline: </span>
              <span className="text2NOT">{topic}</span>
            </div>
            <div style={{ paddingRight: '1.2vw' }}>
              <img src={Images.Ellipses} className="ellipsesImg" alt="" />
            </div>
          </div>
          <div style={{ paddingTop: '0.1vh' }} />
          <div className="flex2NOT">
            <div style={{ width: '15.4vw' }}>
              <span className="text3NOT">
                {num < 1000 ? num : `${Math.floor(num / 1000)}k`} people are reading this
              </span>
            </div>
            <div style={{ paddingRight: '1.2vw' }}>
              <span className="text3NOT">{time} ago</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '1.05vh' }} />
      <div style={{ padding: '0 1.2vw 0 1.82vw' }}>
        <hr style={{ color: 'white', opacity: '0.15' }} />
      </div>
    </div>
  )
}

LiveStoryline.defaultProps = {
  seen: false,
  topic: 'This is the name of the storyline, it can be two lines long.',
  num: 34422,
  time: '1 min'
}

export default LiveStoryline
