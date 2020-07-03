// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/PollResultStyle'
import images from '../Themes/Images'

type Props = {
  question: string,
  votes: number,
  timeLeft: number,
  isPollActive: boolean,
  voterIcons: Array<string>,
  progressBar: Array<{ name: string, percentage: string }>,
  participated: boolean,
  comments: number,
  activeProgressBar: number,
  onPressShare: PropTypes.func,
  onPressReact: PropTypes.func,
  onPressRaven: PropTypes.func,
  onPressComment: PropTypes.func,
  onPressComments: PropTypes.func
}

const pollResult = (props: Props) => {
  const {
    question,
    votes,
    timeLeft,
    isPollActive,
    voterIcons,
    progressBar,
    participated,
    comments,
    activeProgressBar,
    onPressReact,
    onPressRaven,
    onPressShare,
    onPressComment,
    onPressComments
  } = props
  const { pollActiveIcon, pollInactiveIcon, commentIcon, shareIcon, ravenIcon, reactIcon } = images
  const pollIcon = isPollActive ? pollActiveIcon : pollInactiveIcon
  const pollText = isPollActive ? `${timeLeft} hours left` : 'Poll ended'
  const fillColor = participated ? '#7B46E4' : '#47C3F4'

  const progressBarStyles = [
    { ...styles.progressFill, width: progressBar[0].percentage },
    { ...styles.progressFill, width: progressBar[1].percentage },
    { ...styles.progressFill, width: progressBar[2].percentage },
    { ...styles.progressFill, width: progressBar[3].percentage }
  ]

  progressBarStyles[activeProgressBar] = {
    ...progressBarStyles[activeProgressBar],
    backgroundColor: fillColor
  }

  const progressBarActivePercentageText = { ...styles.progressBarPercentageText, color: '#FFFFFF' }
  const progressBarActiveText = { ...styles.progressBarText, color: '#FFFFFF' }

  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <Image source={voterIcon} key={index} style={styles.voterIcon} />
  ))

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <View style={styles.voterAndVotesContainer}>
        <View style={styles.voterContainer}>
          <View style={styles.voterIconContainer}>{voterIconsElement}</View>
          <View style={styles.votesContainer}>
            <Text style={styles.votes}>{votes}K votes</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View style={styles.timeIconContainer}>
            <Image source={pollIcon} style={styles.pollIcon} />
          </View>
          <View style={styles.timeTextContainer}>
            <Text style={styles.timeText}>{pollText}</Text>
          </View>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={progressBarStyles[0]} />
          <View style={styles.progressBarTextContainer}>
            <Text
              style={
                activeProgressBar === 0
                  ? progressBarActivePercentageText
                  : styles.progressBarPercentageText
              }>
              {progressBar[0].percentage}
            </Text>
            <Text style={activeProgressBar === 0 ? progressBarActiveText : styles.progressBarText}>
              {progressBar[0].name}
            </Text>
          </View>
          {activeProgressBar === 0 && participated ? (
            <View style={styles.progressBarVoterIconContainer}>
              <Image source={voterIcons[0]} style={styles.progressBarVoterIcon} />
            </View>
          ) : null}
        </View>
        <View style={styles.progressBar}>
          <View style={progressBarStyles[1]} />
          <View style={styles.progressBarTextContainer}>
            <Text
              style={
                activeProgressBar === 1
                  ? progressBarActivePercentageText
                  : styles.progressBarPercentageText
              }>
              {progressBar[1].percentage}
            </Text>
            <Text style={activeProgressBar === 1 ? progressBarActiveText : styles.progressBarText}>
              {progressBar[1].name}
            </Text>
            {activeProgressBar === 1 && participated ? (
              <View style={styles.progressBarVoterIconContainer}>
                <Image source={voterIcons[0]} style={styles.progressBarVoterIcon} />
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={progressBarStyles[2]} />
          <View style={styles.progressBarTextContainer}>
            <Text
              style={
                activeProgressBar === 2
                  ? progressBarActivePercentageText
                  : styles.progressBarPercentageText
              }>
              {progressBar[2].percentage}
            </Text>
            <Text style={activeProgressBar === 2 ? progressBarActiveText : styles.progressBarText}>
              {progressBar[2].name}
            </Text>
            {activeProgressBar === 2 && participated ? (
              <View style={styles.progressBarVoterIconContainer}>
                <Image source={voterIcons[0]} style={styles.progressBarVoterIcon} />
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={progressBarStyles[3]} />
          <View style={styles.progressBarTextContainer}>
            <Text
              style={
                activeProgressBar === 3
                  ? progressBarActivePercentageText
                  : styles.progressBarPercentageText
              }>
              {progressBar[3].percentage}
            </Text>
            <Text style={activeProgressBar === 3 ? progressBarActiveText : styles.progressBarText}>
              {progressBar[3].name}
            </Text>
            {activeProgressBar === 3 && participated ? (
              <View style={styles.progressBarVoterIconContainer}>
                <Image source={voterIcons[0]} style={styles.progressBarVoterIcon} />
              </View>
            ) : null}
          </View>
        </View>
      </View>

      <View style={styles.commentContainer}>
        <TouchableOpacity onPress={onPressComments}>
          <Text style={styles.commentText}>{comments}K Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressComment} style={styles.commentButtonContainer}>
          <Image source={commentIcon} style={styles.commentIcon} />
          <Text style={styles.commentButtonText}>Comment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actionIconsContainer}>
        <TouchableOpacity onPress={onPressShare}>
          <Image source={shareIcon} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressRaven}>
          <Image source={ravenIcon} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressReact}>
          <Image source={reactIcon} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

pollResult.defaultProps = {
  question: 'Who are your favorites for the World Cup 2020?',
  votes: 54,
  timeLeft: 2,
  isPollActive: true,
  voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
  progressBar: [
    { name: 'India', percentage: '53%' },
    { name: 'Australia', percentage: '12%' },
    { name: 'West Indies', percentage: '6%' },
    { name: 'England', percentage: '29%' }
  ],
  participated: true,
  comments: 154,
  activeProgressBar: 0,
  onPressReact: () => {},
  onPressRaven: () => {},
  onPressShare: () => {},
  onPressComment: () => {},
  onPressComments: () => {}
}

export default pollResult
