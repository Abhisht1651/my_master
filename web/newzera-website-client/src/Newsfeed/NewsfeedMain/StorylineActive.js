// @flow

import React from 'react'
import Images from '../Themes'
import './Styles/StorylineActiveStyle.css'

type Props = {
  voterIcons: Array<string>,
  entitiesIcons: Array<string>
}

function StorylineActive(props: Props) {
  const { voterIcons, entitiesIcons } = props

  const relatedEntities = entitiesIcons.map((entityIcon, index) => (
    <div key={index}>
      <div>
        <img src={entityIcon} className="imgEntitesStorylineActive" alt="" />
      </div>
      <div style={{ paddingLeft: '2vw' }} />
    </div>
  ))

  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <img
      key={index}
      src={voterIcon}
      className="imgVotesStorylineActive"
      style={{ marginRight: '-0.73vw' }}
      alt=""
    />
  ))

  return (
    <div className="backgroundStorylineActive">
      <div className="backgroundcolorStorylineActive">
        <div style={{ padding: '0 1.92vw 0 1.92vw' }}>
          <div className="flex1StorylineActive">
            <div style={{ paddingTop: '4.25vh' }}>
              <div className="flex2StorylineActive">
                <div className="text1StorylineActive">World</div>
                <div style={{ paddingLeft: '0.45vw' }} />
                <div style={{ paddingTop: '1.388' }}>
                  <div className="dotStorylineActive" />
                </div>
                <div style={{ paddingLeft: '0.45vw' }} />
                <div>
                  <img src={Images.StorylineActive} className="storylineActiveImg" alt="" />
                </div>
                <div style={{ paddingLeft: '0.5463vw' }} />
                <div className="text2StorylineActive">Active</div>
              </div>
            </div>
            <div style={{ paddingTop: '3.42vh' }}>
              <button type="button" className="followbutton1StorylineActive">
                Follow
              </button>
            </div>
          </div>
          <div className="flex2StorylineActive">
            <div>
              <img src={Images.Reach} className="reachImgStorylineActive" alt="" />
            </div>
            <div style={{ paddingLeft: '0.46vw' }} />
            <div className="text3StorylineActive">45K Reached</div>
            <div style={{ paddingLeft: '1.08vw' }} />
            <div>
              <img src={Images.People} className="peopleImgStorylineActive" alt="" />
            </div>
            <div style={{ paddingLeft: '0.51vw' }} />
            <div className="text3StorylineActive">241K Followers</div>
          </div>
          <div style={{ paddingTop: '4.35vh' }} />
          <div className="text4StorylineActive">UK exit from the European Union</div>
          <div style={{ paddingTop: '0.92vh' }} />
          <div className="text3StorylineActive">Updated 2m ago</div>
          <div style={{ paddingTop: '2.96vh' }} />
          <div className="storyboxStorylineActive">
            <img src={Images.Demo1} className="storyImageStorylineActive" alt="" />
            <div className="storyboxBorderStorylineActive">
              <div style={{ paddingTop: '2.96vh' }} />
              <div style={{ paddingLeft: '1.927vw' }}>
                <div className="text5StorylineActive">
                  Corbyn wins Labor conference Brexit vote in the latest polls
                </div>
                <div style={{ paddingTop: '1.11vh' }} />
                <div className="flex2StorylineActive">
                  <div className="text3StorylineActive" style={{ paddingTop: '0.5vh' }}>
                    Related Entities
                  </div>
                  <div style={{ paddingLeft: '1vw' }} />
                  <div className="flex2StorylineActive">{relatedEntities}</div>
                </div>
                <div style={{ paddingTop: '4.01vh' }} />
              </div>
              <hr style={{ color: 'white', opacity: '0.15' }} />
              <div style={{ paddingTop: '3.11vh' }} />
              <div className="flex2StorylineActive">
                <div style={{ paddingLeft: '1.83vw' }} />
                <div>{voterIconsElement}</div>
                <div style={{ paddingLeft: '1vw' }} />
                <div className="commentTextStorylineActive" style={{ paddingTop: '0.5vh' }}>
                  34K Comments
                </div>
              </div>
              <div style={{ paddingTop: '3.11vh' }} />
            </div>
            <div style={{ paddingTop: '2.59vh' }} />
            <div className="flex3StorylineActive">
              <div className="text6StorylineActive">July 25th,1991</div>
              <div style={{ paddingTop: '1.75vh' }} />
            </div>
            <div style={{ paddingTop: '5.92vh' }} />
            <div className="flex1StorylineActive" style={{ paddingLeft: '1vw' }}>
              <div>
                <div className="flex2StorylineActive">
                  <div>
                    <img src={Images.Share} className="shareImgStorylineActive" alt="" />
                  </div>
                  <div style={{ paddingLeft: '0.35vw' }} />
                  <div className="text7StorylineActive">Share</div>
                </div>
              </div>
              <div>
                <div className="flex2StorylineActive">
                  <div>
                    <img src={Images.Raven} className="ravenImgStorylineActive" alt="" />
                  </div>
                  <div style={{ paddingLeft: '0.53vw' }} />
                  <div className="text7StorylineActive">Raven</div>
                </div>
              </div>
              <div>
                <div className="flex2StorylineActive">
                  <div>
                    <img src={Images.React} className="reactImgStorylineActive" alt="" />
                  </div>
                  <div style={{ paddingLeft: '0.45vw' }} />
                  <div className="text7StorylineActive">React</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '4.9vh' }} />
      </div>
    </div>
  )
}

StorylineActive.defaultProps = {
  voterIcons: [Images.John, Images.Demo4, Images.John],
  entitiesIcons: [Images.India, Images.India, Images.India]
}

export default StorylineActive
