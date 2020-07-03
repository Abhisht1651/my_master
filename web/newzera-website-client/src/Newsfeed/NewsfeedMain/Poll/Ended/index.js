// @flow

import React from 'react'
import Images from '../../../Themes'
import '../PollStyle.css'

type Props = {
  question: string,
  votes: number,
  voterIcons: Array<string>,
  progressBar: Array<{ name: string, percentage: string }>,
  comments: number,
  winVoteImg: string
}

function ActivePoll(props: Props) {
  const { question, votes, voterIcons, progressBar, comments, winVoteImg } = props

  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <img
      src={voterIcon}
      key={index}
      className="imgVotesPoll"
      style={{ marginRight: '-0.73vw' }}
      alt=""
    />
  ))

  const totalQuestions = progressBar.length

  return (
    <div>
      <div className="backgroundPoll">
        <div style={{ paddingTop: '4.45vh' }} />
        <div style={{ padding: '0 1.93vw 0 1.93vw' }}>
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
              <div style={{ paddingTop: '1.2vh' }}>
                <div className="flex2Poll">
                  <div>
                    <img src={Images.PollEnded} className="pollendedImgPoll" alt="" />
                  </div>
                  <div style={{ paddingLeft: '0.62vw' }} />
                  <div className="text3Poll" style={{ paddingTop: '0.26vh' }}>
                    Poll ended
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '1.76vh' }} />
          <hr style={{ color: 'white', opacity: '0.15' }} />
          <div style={{ paddingTop: '5.1vh' }} />
          <div className="pollPercentPoll">
            {totalQuestions >= 1 && (
              <div>
                <div className="boxPoll">
                  <div>
                    <div
                      className="flex1Poll"
                      style={{
                        background: `linear-gradient(to right, #7B46E4 ${progressBar[0].percentage}, #E6ECED 0% )`
                      }}>
                      <div style={{ padding: '1.02vh 0 0vh 1vw' }}>
                        <div className="flex2Poll">
                          <div style={{ width: '2.6vw' }}>
                            <span className="text4Poll">{progressBar[0].percentage}</span>{' '}
                          </div>
                          <div>
                            <span className="text5Poll">{progressBar[0].name}</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ padding: '0.64vh 0.36vw 0 0' }}>
                        <img src={winVoteImg} className="winimgPoll" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: '2.59vh' }} />
              </div>
            )}
            {totalQuestions >= 2 && (
              <div>
                <div className="boxPoll">
                  <div>
                    <div
                      style={{
                        padding: '1.02vh 0 1.02vh 1vw',
                        background: `linear-gradient(to right, #47C3F4 ${progressBar[1].percentage}, #E6ECED 0% )`
                      }}>
                      <div className="flex2Poll">
                        <div style={{ width: '2.6vw' }}>
                          <span className="text4Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[1].percentage}
                          </span>
                        </div>
                        <div>
                          <span className="text5Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[1].name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: '2.59vh' }} />
              </div>
            )}
            {totalQuestions >= 3 && (
              <div>
                <div className="boxPoll">
                  <div>
                    <div
                      style={{
                        padding: '1.02vh 0 1.02vh 1vw',
                        background: `linear-gradient(to right, #47C3F4 ${progressBar[2].percentage}, #E6ECED 0% )`
                      }}>
                      <div className="flex2Poll">
                        <div style={{ width: '2.6vw' }}>
                          <span className="text4Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[2].percentage}
                          </span>
                        </div>
                        <div>
                          <span className="text5Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[2].name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: '2.59vh' }} />
              </div>
            )}
            {totalQuestions >= 4 && (
              <div>
                <div className="boxPoll">
                  <div>
                    <div
                      style={{
                        padding: '1.02vh 0 1.02vh 1vw',
                        background: `linear-gradient(to right, #47C3F4 ${progressBar[3].percentage}, #E6ECED 0% )`
                      }}>
                      <div className="flex2Poll">
                        <div style={{ width: '2.6vw' }}>
                          <span className="text4Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[3].percentage}
                          </span>
                        </div>
                        <div>
                          <span className="text5Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[3].name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: '2.59vh' }} />
              </div>
            )}
            {totalQuestions >= 5 && (
              <div>
                <div className="boxPoll">
                  <div>
                    <div
                      style={{
                        padding: '1.02vh 0 1.02vh 1vw',
                        background: `linear-gradient(to right, #47C3F4 ${progressBar[4].percentage}, #E6ECED 0% )`
                      }}>
                      <div className="flex2Poll">
                        <div style={{ width: '2.6vw' }}>
                          <span className="text4Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[4].percentage}
                          </span>
                        </div>
                        <div>
                          <span className="text5Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[4].name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: '2.59vh' }} />
              </div>
            )}
            {totalQuestions >= 6 && (
              <div>
                <div className="boxPoll">
                  <div>
                    <div
                      style={{
                        padding: '1.02vh 0 1.02vh 1vw',
                        background: `linear-gradient(to right, #47C3F4 ${progressBar[5].percentage}, #E6ECED 0% )`
                      }}>
                      <div className="flex2Poll">
                        <div style={{ width: '2.6vw' }}>
                          <span className="text4Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[5].percentage}
                          </span>
                        </div>
                        <div>
                          <span className="text5Poll" style={{ color: '#1F1F60' }}>
                            {progressBar[5].name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: '2.59vh' }} />
              </div>
            )}
          </div>
        </div>
        <div style={{ paddingTop: '5.14vh' }} />
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
                <img src={Images.Message} className="msgImgPoll" alt="" />
              </div>
              <div style={{ paddingLeft: '0.539vw' }} />
              <div className="text8Poll">Message</div>
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
  question: 'Who are your favorites for the World Cup 2020?',
  votes: 54,
  voterIcons: [Images.John, Images.Demo4, Images.John],
  progressBar: [
    { name: 'India', percentage: '53%' },
    { name: 'Australia', percentage: '12%' },
    { name: 'West Indies', percentage: '6%' },
    { name: 'England', percentage: '32%' }
  ],
  comments: 143,
  winVoteImg: Images.John
}

export default ActivePoll
