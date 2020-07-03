// @flow

import React, { useState } from 'react'
import Images from '../Themes'

import CategoryFilter from './CategoryFilter'
import StorylineActive from './StorylineActive'
import ActivePoll from './Poll/Active'
import EndedPoll from './Poll/Ended'
import './Styles/NewsfeedMainStyle.css'

type Props = {
  storiesImage1: Array<string>,
  storiesImage2: Array<string>,
  storiesName: Array<string>
}

function NewsfeedMain(props: Props) {
  const { storiesName, storiesImage1, storiesImage2 } = props

  const [isCat, setCat] = useState(false)

  const openCat = () => {
    setCat(true)
  }

  const closeCat = () => {
    setCat(false)
  }

  const allEntities = storiesName.map((name, index) => (
    <div key={index} style={{ paddingRight: '1.23vw' }}>
      <div className="white-grad">
        <div className="containerNewsfeed">
          <img src={storiesImage1[index]} className="storiesNewsfeed" alt="" />
          <div className="overlayNewsfeed white-grad2">
            <img src={storiesImage2[index]} className="storiesNameNewsfeed" alt="" />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '2vh' }} />
      <div style={{ width: '100%' }}>
        <div className="flex3Newsfeed">
          <div className="storiesNametextNewsfeed">{name}</div>
        </div>
      </div>
    </div>
  ))
  return (
    <div style={{ backgroundColor: 'black', width: '31.19vw' }}>
      <div style={{ paddingLeft: '2.12vw' }}>
        <div style={{ paddingTop: '5.11vh' }} />
        <div className="allStoriesNewsfeed">
          <div className="flex2Newsfeed">{allEntities}</div>
        </div>
        <div style={{ paddingRight: '1vw' }}>
          <div style={{ position: 'absolute', zIndex: '1' }}>
            {isCat && (
              <div style={{ padding: '0.2vh 0 0 1.45vw' }}>
                <CategoryFilter closeCat={closeCat} />
              </div>
            )}
          </div>
          <hr style={{ opacity: '0.2' }} />
        </div>
      </div>
      <div style={{ paddingLeft: '2.76vw' }}>
        <div className="flex2Newsfeed">
          <div
            onClick={openCat}
            onKeyPress={openCat}
            role="presentation"
            style={{ cursor: 'pointer' }}>
            {!isCat && (
              <img src={Images.CategoryFilter} className="categoryFilterImgNewsfeed" alt="" />
            )}
          </div>
          <div style={{ paddingLeft: '1.04vw' }} />
          <div className="categoryFiltertextNewsfeed">
            <div style={{ paddingTop: '0.74vh' }} />
            Category Filter
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '3.7vh' }} />
      <StorylineActive />
      <div style={{ paddingTop: '3.7vh' }} />
      <ActivePoll />
      <div style={{ paddingTop: '3.7vh' }} />
      <EndedPoll />
      <div style={{ paddingTop: '35.11vh' }} />
    </div>
  )
}

NewsfeedMain.defaultProps = {
  storiesName: ['You', 'Donald', 'Modi', 'You', 'Donald', 'Modi'],
  storiesImage1: [
    Images.Demo3,
    Images.Demo3,
    Images.Demo3,
    Images.Demo3,
    Images.Demo3,
    Images.Demo3
  ],
  storiesImage2: [Images.John, Images.John, Images.John, Images.John, Images.John, Images.John]
}

export default NewsfeedMain
