// @flow

import React from 'react'
import Images from '../Themes'

import './Styles/TrendingUserfeedStyle.css'

type Props = {
  reach: number
}

function TrendingUserfeed(props: Props) {
  const { reach } = props

  return (
    <div className="widthBackTUF">
      <div>
        <div style={{ padding: '0 1.92vw 0 1.92vw' }}>
          <div className="flex2TUF">
            <div className="trendingtext1TUF">
              <div style={{ paddingTop: '4.61vh' }} />
              <div className="flex1TUF">
                <div>
                  World
                  <span style={{ paddingLeft: '0.89vw' }} />.
                </div>
                <div style={{ paddingLeft: '0.4vw' }} />
                <div>
                  <img src={Images.Trending} className="trendingimgTUF" alt="" />
                </div>
                <div style={{ paddingLeft: '0.67vw' }} />
                <div>Trending</div>
              </div>
            </div>
            <div>
              <div style={{ paddingTop: '3.41vh' }} />
              <button type="button" className="followbutton1TUF">
                Follow
              </button>
            </div>
          </div>
          <div style={{ paddingTop: '1.93vh' }} />
          <div className="flex1TUF">
            <div>
              <img src={Images.Reach} className="reachimgTUF" alt="" />
            </div>
            <div style={{ paddingLeft: '0.33vw' }} />
            <div className="reachtextTUF">
              <div style={{ paddingTop: '0.4vh' }} />
              {reach}K Reached
            </div>
          </div>
          <div style={{ paddingTop: '4.52vh' }} />
          <div className="trendingheadTUF">UK exit from the European Union</div>
          <div className="reachtextTUF">Updated 2m ago</div>
        </div>
        <div style={{ paddingTop: '3.35vh' }} />
        <div>
          <img src={Images.DemoUF4} className="trendingimg2TUF" alt="" />
        </div>
      </div>
    </div>
  )
}

TrendingUserfeed.defaultProps = {
  reach: 42
}

export default TrendingUserfeed
