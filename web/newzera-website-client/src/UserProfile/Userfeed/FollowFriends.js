// @flow

import React from 'react'
import Images from '../Themes'

import './Styles/UserfeedStyle.css'

type Props = {
  userImg: string,
  remTime: string,
  friends: Array<{ name: string, image: string }>
}

function FollowFriends(props: Props) {
  const { userImg, remTime, friends } = props

  const size = friends.length
  const rem = size - 4

  return (
    <div className="widthBackUF">
      <div className="flex2UF">
        <div className="flex1UF">
          <div>
            <img src={userImg} className="userImgUF" alt="" />
          </div>
          <div style={{ paddingLeft: '1.48vw' }} />
          <div>
            <span className="text1UF">You started following new </span>
            <span className="text2UF">Friends </span>
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
      <div className="flex1UF">
        <div>
          {size >= 1 && <img src={friends[0].image} className="friendsImg" alt="" />}
          {size >= 2 && (
            <span>
              <span style={{ paddingLeft: '0.47vw' }} />
              <img src={friends[1].image} className="friendsImg" alt="" />
            </span>
          )}
          {size >= 3 && (
            <span>
              <span style={{ paddingLeft: '0.47vw' }} />
              <img src={friends[2].image} className="friendsImg" alt="" />
            </span>
          )}
          {size >= 4 && (
            <span>
              <span style={{ paddingLeft: '0.47vw' }} />
              <img src={friends[3].image} className="friendsImg" alt="" />
            </span>
          )}
        </div>
        <div style={{ paddingLeft: '0.47vw' }} />
        {size >= 5 && (
          <div className="box1UF">
            <div className="text4UF" style={{ paddingTop: '1.36vh' }}>
              +{rem}
            </div>
          </div>
        )}
      </div>
      <div style={{ paddingTop: '1.36vh' }} />
      <div className="text5UF">
        {size >= 1 && <span>{friends[0].name}</span>}
        {size >= 2 && (
          <span>
            {size === 2 ? <span> and </span> : <span>,</span>}
            {friends[1].name}
          </span>
        )}
        {size >= 3 && (
          <span>
            {size === 3 ? <span> and </span> : <span>,</span>}
            {friends[2].name}
          </span>
        )}
        {size >= 4 && (
          <span>
            {size === 4 ? <span> and </span> : <span>,</span>}
            {friends[4].name}
          </span>
        )}
        {size >= 5 && <span> and {rem} more </span>}
      </div>
    </div>
  )
}

FollowFriends.defaultProps = {
  userImg: Images.John,
  remTime: '4 hr',
  friends: [
    { name: 'Peter Altamiran', image: Images.DemoUF3 },
    { name: 'Amelia Jones.', image: Images.John }
  ]
}

export default FollowFriends
