// @flow

import React from 'react'
import Images from '../Themes'

import './MainIntroStyle.css'

type Props = {
  userImg: string,
  userName: string,
  userTitle: string,
  followers: number,
  friends: number,
  userAbout: string
}

function MainIntro(props: Props) {
  const { userImg, userName, userTitle, followers, friends, userAbout } = props
  return (
    <div className="backgroundMI">
      <div style={{ paddingTop: '4.62vh' }} />
      <img src={Images.Rect1} className="rectImgMI" alt="" />
      <div className="flex1MI">
        <div style={{ paddingLeft: '2.5vw' }} />
        <div>
          <img src={userImg} className="userImgMI" alt="" />
          <div style={{ paddingTop: '0.86vh' }} />
          <div className="editDPMI">Edit DP</div>
        </div>
        <div style={{ paddingLeft: '2.08vw' }} />
        <div>
          <div className="flex1MI">
            <div style={{ width: '12.45vw', paddingTop: '1.89vh' }}>
              <div className="userNameTextMI">{userName}</div>
              <div style={{ paddingTop: '0.248vh' }} />
              <div className="userTitleTextMI">{userTitle}</div>
              <div style={{ marginTop: '-0.4vh' }}>
                <span>
                  <img src={Images.FollowUser} className="followUserImgMI" alt="" />
                </span>
                <span style={{ paddingLeft: '0.208vw' }} />
                <span className="numFollowTextMI">{followers}K </span>
                <span className="numFollowText2MI">following </span>
                <span style={{ paddingLeft: '0.88vw' }} />
                <span>
                  <img src={Images.AddFriend} className="addFriendImgMI" alt="" />
                </span>
                <span style={{ paddingLeft: '0.208vw' }} />
                <span className="numFollowTextMI">{friends} </span>
                <span className="numFollowText2MI">Friends </span>
              </div>
            </div>
            <div style={{ paddingTop: '2.36vh' }}>
              <button type="button" className="editButtonMI">
                Edit
              </button>
            </div>
          </div>
          <div style={{ paddingTop: '0.85vh' }} />
          <div className="aboutUserMI">{userAbout}</div>
        </div>
      </div>
      <div style={{ paddingTop: '4vh' }} />
      <div style={{ padding: '0 1.94vw 0 1.94vw' }}>
        <div className="flex2MI">
          <div className="text1MI">What are you thinking?</div>
          <div>
            <img src={Images.Ellipses} className="ellipsesMI" alt="" />
          </div>
        </div>
        <div style={{ paddingTop: '4.6vh' }} />
        <input className="inputMI" type="text" placeholder="Time for catching up" />
        <div style={{ paddingTop: '3.6vh' }} />
        <hr style={{ color: 'white', opacity: '0.15' }} />
        <div style={{ paddingTop: '3.6vh' }} />
      </div>
    </div>
  )
}

MainIntro.defaultProps = {
  userImg: Images.John,
  userName: 'John Doe',
  userTitle: 'Biotechnician',
  followers: 209,
  friends: 400,
  userAbout: '“Biology & Chemistry degree. Love traveling and getting to know people.”'
}
export default MainIntro
