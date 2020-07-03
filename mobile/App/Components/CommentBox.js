// @flow

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import styles from './Styles/CommentBoxStyle'
import images from '../Themes/Images'
import DropDown from './Dropdowns/DropDown3'

// type Props = {
//   name: string,
//   commentText: string,
//   replyCount: number,
//   isReply: boolean,
//   boostCount: number,
//   selectionHandler: (arg: number) => void,
//   onClickBoost: PropTypes.func,
//   onClickReply: PropTypes.func,
//   time: string
// }

const commentBox = (props) => {
  const {
    name,
    commentText,
    replyCount,
    isReply,
    boostCount,
    selectionHandler,
    onClickBoost,
    onClickReply,
    time
  } = props
  // console.log(props.time)
  const { replyIcon, boostIcon } = images
  return (
    <View style={styles.container}>
      <View style={styles.commentBoxContainer}>
        <View style={styles.commentBoxHeaderContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.headerRight}>
            <Text style={styles.daysText}>{time}</Text>
            <View style={styles.dropDown}>
              <DropDown
                getOption={selectionHandler}
                headerTitle="Options"
                content={['Edit Comment', 'Delete Comment']}
              />
            </View>
          </View>
        </View>
        <View style={styles.commentTextContainer}>
          <Text style={styles.commentText}>{commentText}</Text>
        </View>
        <View style={styles.actionContainer}>
          {!isReply ? (
            <TouchableOpacity onPress={onClickReply} style={styles.replyContainer}>
              <Image source={replyIcon} style={styles.replyIcon} />
              <Text style={styles.actionText}> {replyCount !== 0 ? replyCount : null} Reply</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity onPress={onClickBoost} style={styles.boostContainer}>
            <Image source={boostIcon} />
            <Text style={styles.actionText}> {boostCount} Boosts</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

commentBox.defaultProps = {
  name: 'Jammie Rice',
  commentText:
    'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
  replyCount: 1,
  isReply: false,
  boostCount: 450,
  selectionHandler: () => {},
  onClickBoost: () => {},
  onClickReply: () => {},
  time: '31 Days'
}

export default commentBox
