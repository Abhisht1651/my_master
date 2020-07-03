// @flow

import React, { useState } from 'react'
import Images from '../../../Themes'
import '../PollStyle.css'

type Props = {
  pollHead: string,
  question: string,
  votes: number,
  voterIcons: Array<string>,
  options: Array<string>,
  comments: number,
  timeLeft: string
}

function ActivePoll(props: Props) {
  const { pollHead, question, votes, voterIcons, options, comments, timeLeft } = props

  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <img
      src={voterIcon}
      key={index}
      className="imgVotesPoll"
      style={{ marginRight: '-0.73vw' }}
      alt=""
    />
  ))

  const [ans0, setAns0] = useState(false)
  const [ans1, setAns1] = useState(false)
  const [ans2, setAns2] = useState(false)
  const [ans3, setAns3] = useState(false)
  const [ans4, setAns4] = useState(false)
  const [ans5, setAns5] = useState(false)

  const totalQuestions = options.length

  const isAns0 = () => {
    setAns0(true)
    setAns1(false)
    setAns2(false)
    setAns3(false)
    setAns4(false)
    setAns5(false)
  }

  const isAns1 = () => {
    setAns0(false)
    setAns1(true)
    setAns2(false)
    setAns3(false)
    setAns4(false)
    setAns5(false)
  }

  const isAns2 = () => {
    setAns0(false)
    setAns1(false)
    setAns2(true)
    setAns3(false)
    setAns4(false)
    setAns5(false)
  }

  const isAns3 = () => {
    setAns0(false)
    setAns1(false)
    setAns2(false)
    setAns3(true)
    setAns4(false)
    setAns5(false)
  }

  const isAns4 = () => {
    setAns0(false)
    setAns1(false)
    setAns2(false)
    setAns3(false)
    setAns4(true)
    setAns5(false)
  }

  const isAns5 = () => {
    setAns0(false)
    setAns1(false)
    setAns2(false)
    setAns3(false)
    setAns4(false)
    setAns5(true)
  }

  return (
    <div>
      <div className="backgroundPoll">
        <div style={{ paddingTop: '4.45vh' }} />
        <div style={{ padding: '0 1.93vw 0 1.93vw' }}>
          <div className="flex2Poll">
            <div>
              <img src={Images.Poll} className="pollImgPoll" alt="" />
            </div>
            <div style={{ paddingLeft: '1vw' }} />
            <div className="textPollHead">{pollHead}</div>
          </div>
          <div style={{ paddingTop: '1.6vh' }} />
          <div className="text1Poll">{question}</div>
          <div style={{ paddingTop: '4.91vh' }} />
          <div className="flex1Poll">
            <div className="flex2Poll">
              <div>{voterIconsElement}</div>
              <div style={{ paddingLeft: '1.19vw' }} />
              <div style={{ paddingTop: '0.4vh' }}>
                <span className="text2Poll">{votes}K have voted</span>
              </div>
            </div>
            <div>
              <div style={{ paddingTop: '1.5vh' }}>
                <div className="flex2Poll">
                  <div>
                    <img src={Images.StorylineActive} className="pollendedImgPoll" alt="" />
                  </div>
                  <div style={{ paddingLeft: '0.62vw' }} />
                  <div className="text3Poll" style={{ paddingTop: '0.36vh' }}>
                    {timeLeft} left
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '1.76vh' }} />
          <hr style={{ color: 'white', opacity: '0.15' }} />
          <div style={{ paddingTop: '3.41vh' }} />
        </div>
        <div style={{ padding: '2.4vw' }}>
          {totalQuestions >= 2 && (
            <div>
              <div className="flex2Poll">
                <div style={{ width: '12.01vw' }}>
                  <div className="flex2Poll">
                    <div
                      className="bigCirclePoll"
                      onClick={isAns0}
                      onKeyPress={isAns0}
                      role="presentation">
                      <div className={ans0 ? 'smallCirclePoll' : ''} />
                    </div>
                    <div style={{ paddingLeft: '0.76vw' }} />
                    <div style={{ paddingTop: '0.4vh' }}>
                      <span className="text9Poll">{options[0]}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex2Poll">
                    <div
                      className="bigCirclePoll"
                      onClick={isAns1}
                      onKeyPress={isAns1}
                      role="presentation">
                      <div className={ans1 ? 'smallCirclePoll' : ''} />
                    </div>
                    <div style={{ paddingLeft: '0.76vw' }} />
                    <div style={{ paddingTop: '0.4vh' }}>
                      <span className="text9Poll">{options[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: '2.9vh' }} />
            </div>
          )}
          {totalQuestions >= 4 && (
            <div>
              <div className="flex2Poll">
                <div style={{ width: '12.01vw' }}>
                  <div className="flex2Poll">
                    <div
                      className="bigCirclePoll"
                      onClick={isAns2}
                      onKeyPress={isAns2}
                      role="presentation">
                      <div className={ans2 ? 'smallCirclePoll' : ''} />
                    </div>
                    <div style={{ paddingLeft: '0.76vw' }} />
                    <div style={{ paddingTop: '0.4vh' }}>
                      <span className="text9Poll">{options[2]}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex2Poll">
                    <div
                      className="bigCirclePoll"
                      onClick={isAns3}
                      onKeyPress={isAns3}
                      role="presentation">
                      <div className={ans3 ? 'smallCirclePoll' : ''} />
                    </div>
                    <div style={{ paddingLeft: '0.76vw' }} />
                    <div style={{ paddingTop: '0.4vh' }}>
                      <span className="text9Poll">{options[3]}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: '2.9vh' }} />
            </div>
          )}

          {totalQuestions >= 6 && (
            <div>
              <div className="flex2Poll">
                <div style={{ width: '12.01vw' }}>
                  <div className="flex2Poll">
                    <div
                      className="bigCirclePoll"
                      onClick={isAns4}
                      onKeyPress={isAns4}
                      role="presentation">
                      <div className={ans4 ? 'smallCirclePoll' : ''} />
                    </div>
                    <div style={{ paddingLeft: '0.76vw' }} />
                    <div style={{ paddingTop: '0.4vh' }}>
                      <span className="text9Poll">{options[4]}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex2Poll">
                    <div
                      className="bigCirclePoll"
                      onClick={isAns5}
                      onKeyPress={isAns5}
                      role="presentation">
                      <div className={ans5 ? 'smallCirclePoll' : ''} />
                    </div>
                    <div style={{ paddingLeft: '0.76vw' }} />
                    <div style={{ paddingTop: '0.4vh' }}>
                      <span className="text9Poll">{options[5]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div style={{ paddingTop: '3.76vh' }} />
          <button type="button" className="voteButtonPoll">
            Vote
          </button>
        </div>
        <div style={{ paddingTop: '3.41vh' }} />
        <hr style={{ color: 'white', opacity: '0.15' }} />
        <div style={{ paddingTop: '2.2vh' }} />
        <div style={{ padding: '0 2.4vw 0 2.4vw' }}>
          <div className="flex1Poll">
            <div className="text6Poll">{comments}K Comments</div>
            <div style={{ paddingTop: '1vh' }} className="flex2Poll">
              <div>
                <img src={Images.Comment} className="commentImgPoll" alt="" />
              </div>
              <div>
                <span style={{ paddingLeft: '0.48vw' }} />
              </div>
              <div>
                <span className="text7Poll">Comment</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '2.2vh' }} />
        <hr style={{ color: 'white', opacity: '0.15' }} />
        <div style={{ paddingTop: '3.43vh' }} />
        <div style={{ padding: '0 2.97vw 0 3vw' }}>
          <div className="flex1Poll">
            <div className="flex2Poll">
              <div>
                <img src={Images.Share} className="shareImgPoll" alt="" />
              </div>
              <div style={{ paddingLeft: '0.3625vw' }} />
              <div className="text8Poll">Share</div>
            </div>
            <div className="flex2Poll">
              <div>
                <img src={Images.Raven} className="msgImgPoll" alt="" />
              </div>
              <div style={{ paddingLeft: '0.539vw' }} />
              <div className="text8Poll">Invite</div>
            </div>
            <div className="flex2Poll">
              <div>
                <img src={Images.React} className="reactImgPoll" alt="" />
              </div>
              <div style={{ paddingLeft: '0.46vw' }} />
              <div className="text8Poll">React</div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '3.71vh' }} />
      </div>
    </div>
  )
}

ActivePoll.defaultProps = {
  pollHead: 'UK exit from the European Union',
  question: 'Who are your favorites for the World Cup 2020?',
  votes: 54,
  voterIcons: [Images.John, Images.Demo4, Images.John],
  options: ['India', 'Australia', 'West Indies', 'England'],
  comments: 143,
  timeLeft: '2 hours'
}

export default ActivePoll
