// @flow

import React from 'react'
import Images from '../Themes'
import './SidebarStyle.css'

type Props = {
  name: string,
  imgid: string,
  newsfeed: boolean,
  storylines: boolean,
  entities: boolean,
  friends: boolean,
  activity: boolean,
  user: boolean
}

function Sidebar(props: Props) {
  const { name, imgid, newsfeed, storylines, entities, friends, activity, user } = props
  return (
    <div className="backgroundNewsfeed">
      <div style={{ paddingTop: '4.72vh' }} />
      <div style={{ paddingLeft: '2.08vw' }}>
        <img src={Images.NewzeraLogo} className="NewzeraLogoNewsfeed" alt="" />
      </div>
      <div style={{ padding: '0 2.18vw 0 2.18vw' }} className={user ? 'opaqBG' : ''}>
        <div style={{ paddingTop: '6.94vh' }} />
        <div className="flex1Newsfeed">
          <div className="flex2Newsfeed">
            <div>
              <img src={imgid} className="profileNewsfeed" alt="" />
            </div>
            <div style={{ padding: '1.388vh 0 0 1.46vw' }}>
              <div className="profileText1Newsfeed">{name}</div>
              <div style={{ paddingTop: '0.81vh' }} />
              <div className="profileText2Newsfeed">@{name}</div>
            </div>
          </div>
          <div>
            <div style={{ paddingTop: '2.31vh' }} />
            <img src={Images.DownArrow} className="downarrowNewsfeed" alt="" />
          </div>
        </div>
        <div style={{ paddingTop: '6.94vh' }} />
      </div>
      <div style={{ paddingLeft: '2.08vw' }} className={newsfeed ? 'opaqBG' : ''}>
        <div className="flex2Newsfeed">
          <div style={{ width: '2.39vw' }}>
            <div style={{ paddingTop: '1.52vh' }} />
            <img src={Images.NewsFeed} className="iconsNewsfeed" alt="" />
            <div style={{ paddingTop: '1.52vh' }} />
          </div>
          <div>
            <div style={{ paddingTop: '2vh' }} />
            <div className="profileText3Newsfeed">NewsFeed</div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: '2.08vw' }} className={storylines ? 'opaqBG' : ''}>
        <div className="flex2Newsfeed">
          <div style={{ width: '2.39vw' }}>
            <div style={{ paddingTop: '1.52vh' }} />
            <img src={Images.FollowedStorylines} className="iconsNewsfeed" alt="" />
            <div style={{ paddingTop: '1.52vh' }} />
          </div>
          <div>
            <div style={{ paddingTop: '2vh' }} />
            <div className="profileText3Newsfeed">Followed Storylines</div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: '2.08vw' }} className={entities ? 'opaqBG' : ''}>
        <div className="flex2Newsfeed">
          <div style={{ width: '2.39vw' }}>
            <div style={{ paddingTop: '1.52vh' }} />
            <img src={Images.FollowedEntities} className="iconsNewsfeed" alt="" />
            <div style={{ paddingTop: '1.52vh' }} />
          </div>
          <div>
            <div style={{ paddingTop: '2vh' }} />
            <div className="profileText3Newsfeed">Followed Entities</div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: '2.08vw' }} className={friends ? 'opaqBG' : ''}>
        <div className="flex2Newsfeed">
          <div style={{ width: '2.39vw' }}>
            <div style={{ paddingTop: '1.52vh' }} />
            <img src={Images.Friends} className="iconsNewsfeed" alt="" />
            <div style={{ paddingTop: '1.52vh' }} />
          </div>
          <div>
            <div style={{ paddingTop: '2vh' }} />
            <div className="profileText3Newsfeed">Friends</div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: '2.08vw' }} className={activity ? 'opaqBG' : ''}>
        <div className="flex2Newsfeed">
          <div style={{ width: '2.39vw' }}>
            <div style={{ paddingTop: '1.52vh' }} />
            <img src={Images.FriendsActivity} className="iconsNewsfeed" alt="" />
            <div style={{ paddingTop: '1.52vh' }} />
          </div>
          <div>
            <div style={{ paddingTop: '2vh' }} />
            <div className="profileText3Newsfeed">Activity Feed</div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '22.2vh' }} />
      <div style={{ paddingLeft: '0.677vw' }}>
        <button type="button" className="button1Newsfeed">
          <div className="flex2Newsfeed">
            <div style={{ paddingLeft: '3.17vw' }}>
              <img src={Images.Raven} className="iconRavenNewsfeed" alt="" />
            </div>
            <div style={{ paddingLeft: '0.98vw', paddingTop: '0.4vh' }}>Display Ravens</div>
          </div>
        </button>
      </div>
      <div style={{ paddingTop: '9.2vh' }} />
      <div style={{ padding: '0 2.18vw 0 2.18vw' }}>
        <div className="flex1Newsfeed">
          <div className="flex2Newsfeed">
            <div style={{ width: '2.39vw' }}>
              <div style={{ paddingTop: '1.52vh' }} />
              <img src={Images.Settings} className="iconRavenNewsfeed" alt="" />
            </div>
            <div>
              <div style={{ paddingTop: '2vh' }} />
              <div className="profileText3Newsfeed">Settings</div>
            </div>
          </div>
          <div>
            <div style={{ paddingTop: '1.52vh' }} />
            <img src={Images.NightMode} className="iconRavenNewsfeed" alt="" />
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: '2.08vw' }} />
    </div>
  )
}

Sidebar.defaultProps = {
  name: 'Shivam Saraf',
  imgid: Images.John,
  newsfeed: true,
  storylines: false,
  entities: false,
  friends: false,
  activity: false,
  user: false
}

export default Sidebar
