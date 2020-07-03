// @flow

import React from 'react'
import Images from '../Themes'

import './Styles/UserfeedStyle.css'
import './Styles/PostedStorylineStyle.css'
import TrendingUserfeed from './TrendingUserfeed'

type Props = {
  userImg: string,
  remTime: string,
  userName: string,
  storyHead: string,
  comments: number
}

function PostedStoryline(props: Props) {
  const { userImg, remTime, userName, storyHead, comments } = props

  return (
    <div className="widthBackUF">
      <div className="flex2UF">
        <div className="flex1UF">
          <div>
            <img src={userImg} className="userImgUF" alt="" />
          </div>
          <div style={{ paddingLeft: '1.48vw' }} />
          <div>
            <span className="text1UF">You posted a </span>
            <span className="text2UF">Storyline </span>
          </div>
          <div style={{ paddingLeft: '0.73vw' }} />
          <div className="text3UF" style={{ paddingTop: '1.2vh' }}>
            {remTime} ago
          </div>
        </div>
        <div>
          <img src={Images.Ellipses} className="ellipsesUF" alt="" />
        </div>
      </div>
      <div style={{ paddingTop: '2.19vh' }} />
      <div className="box1PS">
        <div style={{ paddingTop: '2.55vh' }} />
        <div style={{ paddingLeft: '1.15vw' }}>
          <div className="flex1UF">
            <div>
              <img src={userImg} className="userImgPS" alt="" />
            </div>
            <div style={{ paddingLeft: '1vw' }} />
            <div className="userNameTextPS" style={{ paddingTop: '2vh' }}>
              {userName}
            </div>
          </div>
          <div style={{ paddingTop: '2.98vh' }} />
          <div className="storyHeadTextPS">
            {storyHead}
            <span className="readMorePS"> Read More</span>
          </div>
          <div style={{ paddingTop: '1.72vh' }} />
          <TrendingUserfeed />
          <div style={{ paddingTop: '2.9vh' }} />
        </div>
        <hr style={{ color: 'white', opacity: '0.15' }} />
        <div style={{ paddingTop: '3.24vh' }} />
        <div style={{ padding: '0 3.08vw 0 2.4vw' }}>
          <div className="flex2UF">
            <div className="textComment1PS">{comments}K comments</div>
            <div className="textComment2PS flex1UF">
              <div style={{ paddingTop: '0.6vh' }}>
                <img src={Images.Comment} className="commentImgPS" alt="" />
              </div>
              <div>
                <span style={{ padding: '0.48vw' }} />
                Comment
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '3.23vh' }} />
        <hr style={{ color: 'white', opacity: '0.15' }} />
        <div style={{ paddingTop: '3.55vh' }} />
        <div style={{ padding: '0 7.91vw 0 7.82vw' }}>
          <div className="flex2UF textFooterPS">
            <div>
              <img src={Images.Boost} className="boostImgPS" alt="" />
              <span style={{ paddingLeft: '0.51vw' }} />
              Boost
            </div>
            <div>
              <img src={Images.Share} className="shareImgPS" alt="" />
              <span style={{ paddingLeft: '0.51vw' }} />
              Share
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '3.98vh' }} />
      </div>
    </div>
  )
}

PostedStoryline.defaultProps = {
  userImg: Images.John,
  remTime: '4 hr',
  userName: 'John Doe',
  comments: 121,
  storyHead:
    'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.'
}

export default PostedStoryline
