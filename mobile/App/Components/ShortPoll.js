// @flow
import React from 'react'
import { View, Text, Image } from 'react-native'

// Style
import styles from './Styles/ShortPollStyle'
import images from '../Themes/Images'

type Props = {
  border: boolean,
  question: string,
  votes: number,
  timeLeft: number,
  isPollActive: boolean,
  voterIcons: Array<string>
}

const shortPoll = (props: Props) => {
  const { border, question, votes, timeLeft, isPollActive, voterIcons } = props
  const { pollActiveIcon, pollInactiveIcon } = images
  const pollIcon = isPollActive ? pollActiveIcon : pollInactiveIcon
  const pollText = isPollActive ? `${timeLeft} hours left` : 'Poll ended'

  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <Image source={voterIcon} key={index} style={styles.voterIcon} />
  ))

  return (
    <View style={border ? styles.container : styles.containerWithoutBorder}>
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
    </View>
  )
}

shortPoll.defaultProps = {
  border: true,
  question: 'Who are your favorites for the World Cup 2020?',
  votes: 54,
  timeLeft: 2,
  isPollActive: true,
  voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3]
}

export default shortPoll
