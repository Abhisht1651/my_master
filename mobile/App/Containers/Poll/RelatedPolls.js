// @flow

import React from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import PropTypes from 'prop-types'
import RelatedPoll from '../../Components/RelatedPoll'

// Styles
import styles from '../Styles/Poll/RelatedPollsStyle'
import images from '../../Themes/Images'

type Props = NavigationContainerProps & {
  pollsData: Array<{
    question: string,
    votes: number,
    timeLeft: number,
    isPollActive: boolean,
    voterIcons: Array<string>,
    option: Array<string>,
    onPressVote: PropTypes.func
  }>
}

const relatedPolls = (props: Props) => {
  const { navigation, pollsData } = props
  const { backIcon } = images

  const storyLineDataElements = pollsData.map((item, index) => {
    const { question, votes, timeLeft, isPollActive, voterIcons, option, onPressVote } = item
    return (
      <View key={index} style={styles.previewContainer}>
        <RelatedPoll
          question={question}
          votes={votes}
          timeLeft={timeLeft}
          isPollActive={isPollActive}
          voterIcons={voterIcons}
          option={option}
          onPressVote={onPressVote}
        />
      </View>
    )
  })
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? <View style={styles.topCover} /> : null}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.relatedText}>Related Polls</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContainer}>{storyLineDataElements}</View>
      </ScrollView>
    </View>
  )
}

relatedPolls.defaultProps = {
  pollsData: [
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England'],
      onPressVote: () => {}
    },
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England'],
      onPressVote: () => {}
    },
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England'],
      onPressVote: () => {}
    }
  ]
}

export default relatedPolls
