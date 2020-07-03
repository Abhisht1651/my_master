// @flow

import React from 'react'
import Images from '../Themes'
import './TrendingStyle.css'

type Props = {
  suggestedEntitiesImage: Array<string>,
  suggestedEntitiesName: Array<string>,
  suggestedEntitiesFollow: Array<number>
}

function Trending(props: Props) {
  const { suggestedEntitiesImage, suggestedEntitiesName, suggestedEntitiesFollow } = props
  const allEntities = suggestedEntitiesName.map((name, index) => (
    <div key={index}>
      <div style={{ paddingRight: '0.416vw' }}>
        <div className="entriesnumNewsfeed">
          <div style={{ paddingTop: '1.85vh' }} />
          <div className="flex3Newsfeed">
            <img src={suggestedEntitiesImage[index]} className="entitiesImgNewsfeed" alt="" />
          </div>
          <div style={{ paddingTop: '1.11vh' }} />
          <div className="flex3Newsfeed">
            <div className="entitiesNameNewsfeed">{name}</div>
          </div>
          <div style={{ paddingTop: '1.11vh' }} />
          <div className="flex3Newsfeed">
            <div className="entitiesFollowNewsfeed">{suggestedEntitiesFollow[index]} friends</div>
          </div>
          <div className="flex3Newsfeed">
            <div className="entitiesFollowNewsfeed">follow</div>
          </div>
          <div style={{ paddingTop: '1.01vh' }} />
        </div>
      </div>
      <div style={{ paddingTop: '6.67vh' }} />
    </div>
  ))

  return (
    <div className="background2Newsfeed">
      <div style={{ paddingTop: '4.62vh' }} />
      <div style={{ padding: '0 2.18vw 0 2.08vw' }}>
        <div className="flex1Newsfeed">
          <div className="flex2Newsfeed">
            <div className="search1Newsfeed">
              <div style={{ padding: '0.92vh 0 0 1.03vw' }}>
                <img src={Images.Search} className="search2Newsfeed" alt="" />
              </div>
            </div>
            <div>
              <input className="search3Newsfeed" type="text" placeholder="Search" />
            </div>
          </div>
          <div style={{ paddingTop: '0.92vh' }}>
            <img src={Images.Notifications} className="iconsNewsfeed" alt="" />
          </div>
        </div>
        <div style={{ paddingTop: '2.62vh' }} />
        <hr style={{ opacity: '0.2' }} />
        <div style={{ paddingTop: '2.62vh' }} />
        <div className="flex1Newsfeed">
          <div className="trendingtextNewsfeed">Trending</div>
          <div className="viewalltextNewsfeed">View all</div>
        </div>
        <div style={{ paddingTop: '2.12vh' }} />
        <div className="trendingviewNewsfeed">
          <div style={{ padding: '0 1.36vw 0 1.36vw' }}>
            <div className="flex1Newsfeed">
              <div className="trendingtext1Newsfeed">
                <div style={{ paddingTop: '3.025vh' }} />
                <div className="flex2Newsfeed">
                  <div>
                    World
                    <span style={{ paddingLeft: '0.52vw' }} />.
                  </div>
                  <div style={{ paddingLeft: '0.34vw' }} />
                  <div>
                    <img src={Images.Trending} className="trendingimgNewsfeed" alt="" />
                  </div>
                  <div style={{ paddingLeft: '0.41vw' }} />
                  <div>Trending</div>
                </div>
              </div>
              <div>
                <div style={{ paddingTop: '2.41vh' }} />
                <button type="button" className="followbutton1newsfeed">
                  Follow
                </button>
              </div>
            </div>
            <div className="flex2Newsfeed">
              <div>
                <img src={Images.Reach} className="reachimgNewsfeed" alt="" />
              </div>
              <div style={{ paddingLeft: '0.27vw' }} />
              <div className="reachtextNewsfeed">
                <div style={{ paddingTop: '0.5vh' }} />
                45K Reached
              </div>
            </div>
            <div style={{ paddingTop: '3.26vh' }} />
            <div className="trendingheadNewsfeed">UK exit from the European Union</div>
            <div className="reachtextNewsfeed">Updated 2m ago</div>
          </div>
          <div style={{ paddingTop: '2.17vh' }} />
          <img src={Images.Demo1} className="trendingimg2Newsfeed" alt="" />
          <div style={{ paddingTop: '0vh' }} />
        </div>
        <div style={{ paddingTop: '1.62vh' }} />
        <hr style={{ opacity: '0.2' }} />
        <div style={{ paddingTop: '1vh' }} />
        <div className="flex1Newsfeed">
          <div className="trendingtextNewsfeed">Suggested entities</div>
          <div className="viewalltextNewsfeed">View all</div>
        </div>
        <div style={{ paddingTop: '2.1vh' }} />
        <div className="allEntitiesListNewsfeed">
          <div className="flex2Newsfeed">{allEntities}</div>
        </div>
        <div className="flex4Newsfeed">
          <div className="msgbuttonNewsfeed">
            <div style={{ paddingTop: '2.68vh' }} />
            <div className="flex3Newsfeed">
              <img src={Images.Message} className="msgbuttonImageNewsfeed" alt="" />
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '2.68vh' }} />
      </div>
    </div>
  )
}

Trending.defaultProps = {
  suggestedEntitiesName: ['India', 'Donald', 'India', 'Donald'],
  suggestedEntitiesFollow: [3, 64, 2, 1],
  suggestedEntitiesImage: [Images.India, Images.Demo2, Images.India, Images.Demo2]
}

export default Trending
