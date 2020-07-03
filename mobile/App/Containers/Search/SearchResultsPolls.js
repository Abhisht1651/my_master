// @flow

import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import styles from '../Styles/Search/SearchResultsPollsStyle'
import images from '../../Themes/Images'

// Components
import RelatedPoll from '../../Components/RelatedPoll'
import PopularPoll from '../../Components/PopularPoll'

type Props = {
  data: Array<{
    question: string,
    votes: number,
    timeLeft: number,
    isPollActive: boolean,
    voterIcons: Array<string>,
    option: Array<string>,
    onPressVote: PropTypes.func
  }>
}

const SearchResultsPolls = (props: Props) => {
  const { data } = props

  const [result, setResult] = useState(Array(data.length).fill(false))

  const setPollResult = (index) => {
    const updatedRelatedPollDataResults = [...result]
    updatedRelatedPollDataResults[index] = true
    setResult(updatedRelatedPollDataResults)
  }

  const pollDataElements = data.map((item, index) => {
    return (
      <View key={index} style={styles.displayItem}>
        {result[index] ? (
          <PopularPoll />
        ) : (
          <RelatedPoll
            question={item.question}
            votes={item.votes}
            timeLeft={item.timeLeft}
            isPollActive={item.isPollActive}
            voterIcons={item.voterIcons}
            option={item.option}
            onPressVote={() => setPollResult(index)}
          />
        )}
      </View>
    )
  })
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.displayContainer}>{pollDataElements}</View>
      </ScrollView>
    </View>
  )
}

SearchResultsPolls.defaultProps = {
  data: [
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

export default SearchResultsPolls
