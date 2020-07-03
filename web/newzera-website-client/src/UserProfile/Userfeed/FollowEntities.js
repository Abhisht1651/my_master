// @flow

import React from 'react'
import Images from '../Themes'

import './Styles/UserfeedStyle.css'

type Props = {
  userImg: string,
  remTime: string,
  entities: Array<{ name: string, image: string }>
}

function FollowEntities(props: Props) {
  const { userImg, remTime, entities } = props

  const size = entities.length
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
            <span className="text1UF">You started following these </span>
            <span className="text2UF">Entites </span>
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
          {size >= 1 && <img src={entities[0].image} className="entitiesImg" alt="" />}
          {size >= 2 && (
            <span>
              <span style={{ paddingLeft: '0.47vw' }} />
              <img src={entities[1].image} className="entitiesImg" alt="" />
            </span>
          )}
          {size >= 3 && (
            <span>
              <span style={{ paddingLeft: '0.47vw' }} />
              <img src={entities[2].image} className="entitiesImg" alt="" />
            </span>
          )}
          {size >= 4 && (
            <span>
              <span style={{ paddingLeft: '0.47vw' }} />
              <img src={entities[3].image} className="entitiesImg" alt="" />
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
        {size >= 1 && <span>{entities[0].name}</span>}
        {size >= 2 && (
          <span>
            {size === 2 ? <span> and </span> : <span>,</span>}
            {entities[1].name}
          </span>
        )}
        {size >= 3 && (
          <span>
            {size === 3 ? <span> and </span> : <span>,</span>}
            {entities[2].name}
          </span>
        )}
        {size >= 4 && (
          <span>
            {size === 4 ? <span> and </span> : <span>,</span>}
            {entities[4].name}
          </span>
        )}
        {size >= 5 && <span> and {rem} more </span>}
      </div>
    </div>
  )
}

FollowEntities.defaultProps = {
  userImg: Images.John,
  remTime: '4 hr',
  entities: [
    { name: 'Donald Trump', image: Images.DemoUF2 },
    { name: 'Brazil', image: Images.DemoUF1 },
    { name: 'United Kingdom', image: Images.DemoUF3 },
    { name: 'United States', image: Images.DemoUF3 },
    { name: 'United States', image: Images.DemoUF3 },
    { name: 'United States', image: Images.DemoUF3 },
    { name: 'United States', image: Images.DemoUF3 },
    { name: 'United States', image: Images.DemoUF3 },
    { name: 'United States', image: Images.DemoUF3 }
  ]
}

export default FollowEntities
