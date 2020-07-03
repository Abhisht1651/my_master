// @flow

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/PollStoryStyle'
import images from '../Themes/Images'

// Components
import { MediumThinnerButton } from './Buttons/MediumThinnerButton'

type Props = {
  question: string,
  votes: number,
  timeLeft: number,
  isPollActive: boolean,
  voterIcons: Array<string>,
  option: Array<string>,
  comments: number,
  onPressVote: PropTypes.func,
  onPressShare: PropTypes.func,
  onPressReact: PropTypes.func,
  onPressRaven: PropTypes.func,
  onPressComment: PropTypes.func,
  onPressComments: PropTypes.func
}

const pollStory = (props: Props) => {
  const {
    pollActiveIcon,
    pollInactiveIcon,
    commentIcon,
    shareIcon,
    ravenIcon,
    reactIcon,
    menuIcon
  } = images
  const {
    question,
    votes,
    timeLeft,
    isPollActive,
    voterIcons,
    option,
    comments,
    onPressVote,
    onPressReact,
    onPressRaven,
    onPressShare,
    onPressComment,
    onPressComments
  } = props
  const pollIcon = isPollActive ? pollActiveIcon : pollInactiveIcon
  const pollText = isPollActive ? `${timeLeft} hours left` : 'Poll ended'

  const [optionSelected, setOptionSelected] = useState(0)

  const optionSelectFunction = (currentOption) => {
    if (currentOption === optionSelected) {
      setOptionSelected(0)
      return
    }
    setOptionSelected(currentOption)
  }

  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <Image source={voterIcon} key={index} style={styles.voterIcon} />
  ))

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Image source={menuIcon} style={styles.menuIcon} />
        <Text style={styles.pollText}>Poll</Text>
      </View>
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
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(1)}>
          <View style={styles.option}>
            {optionSelected === 1 ? <View style={styles.optionFill} /> : null}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option[0]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(2)}>
          <View style={styles.option}>
            {optionSelected === 2 ? <View style={styles.optionFill} /> : null}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option[1]}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(3)}>
          <View style={styles.option}>
            {optionSelected === 3 ? <View style={styles.optionFill} /> : null}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option[2]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer} onPress={() => optionSelectFunction(4)}>
          <View style={styles.option}>
            {optionSelected === 4 ? <View style={styles.optionFill} /> : null}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{option[3]}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <MediumThinnerButton
          title="Vote"
          outline
          onPress={optionSelected !== 0 ? onPressVote : () => {}}
        />
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

pollStory.defaultProps = {
  question: 'Who are your favorites for the World Cup 2020?',
  votes: 54,
  timeLeft: 2,
  isPollActive: true,
  voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
  option: ['India', 'West Indies', 'Australia', 'England'],
  comments: 154,
  onPressVote: () => {},
  onPressReact: () => {},
  onPressRaven: () => {},
  onPressShare: () => {},
  onPressComment: () => {},
  onPressComments: () => {}
}

export default pollStory
