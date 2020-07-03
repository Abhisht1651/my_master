// @flow
// import React from 'react'
import React, { useState, useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import { View, Text, Image, ImageBackground, TouchableOpacity, ImageProps } from 'react-native'

// Styles
import styles from './Styles/StoryLineMajorEventStyle'
// import styles1 from '../Containers/Styles/StoryLine/HomeStyle'
import styles1 from '../Containers/Styles/StoryLine/HomeStyle'

import images from '../Themes/Images'
import Video from 'react-native-video'

// Components
import CommentBox from './CommentBox'

type Props = {
  previewText: string,
  comments: number,
  onPressComments: PropTypes.func,
  storyImage: ImageProps,
  topComment: {
    name: string,
    commentText: string,
    replyCount: number,
    isReply: boolean,
    boostCount: number,
    selectionHandler: (arg: number) => void
  },
  entityItems: Array<{ image: ImageProps, onPressEntity: PropTypes.func }>,
  voterIcons: Array<ImageProps>,
  onPressVoterIcons: PropTypes.func
}
const storyLineLongFormSingleEvent = (props: Props) => {
  const [paused, setPaused] = useState(true)
  const {
    previewText,
    comments,
    onPressComments,
    storyImage,
    topComment,
    entityItems,
    voterIcons,
    onPressVoterIcons,
    video
  } = props
  const { sourceIcon,player } = images
  const { name, commentText, replyCount, isReply, boostCount} = topComment
  // console.log(video,storyImage)

  const commentIconsElement = voterIcons.map((voterIcon, index) => (
    <TouchableOpacity key={index} onPress={onPressVoterIcons}>
      <Image source={voterIcon} style={styles.commentsIcon} />
    </TouchableOpacity>
  ))

  const relatedEntityIconContainer = entityItems.map((entityItem, i) => {
    const { image, onPressEntity } = entityItem
    return (
      <TouchableOpacity key={i} onPress={onPressEntity}>
        <Image source={image} style={styles.relatedEntityIcon} />
      </TouchableOpacity>
    )
  })
  if (!video){

    return (
      <View style={styles.container}>
        <ImageBackground source={storyImage} style={styles.image} imageStyle={styles.imageBorder}>
          <Image source={sourceIcon} style={styles.sourceImage} />
        </ImageBackground>
        <Text style={styles.previewText}>{previewText}</Text>
        <View style={styles.relatedEntityContainer}>
          <Text style={styles.EntityRelatedText}>Related entities</Text>
          <View style={styles.relatedEntityIconContainer}>{relatedEntityIconContainer}</View>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.commentsContainer} onPress={onPressComments}>
          {commentIconsElement}
          <Text style={styles.commentsText}>{comments}K comments</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <CommentBox
          name={name}
          commentText={commentText}
          replyCount={replyCount}
          isReply={isReply}
          boostCount={boostCount}
        />
      </View>
    )
  }
  console.log(storyImage)
  if(video){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles1.galleryImageContainer} onPress={() => setPaused(!paused)}>
          <Video
            source={{uri:storyImage.toString()}}
            poster="https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg"
            style={styles1.galleryImage}
            paused={paused}
            resizeMode="cover"
            posterResizeMode="cover"
          />
          {paused ? <Image source={player} style={styles1.player} /> : null}
        </TouchableOpacity>
        <Text style={styles.previewText}>{previewText}</Text>
        <View style={styles.relatedEntityContainer}>
          <Text style={styles.EntityRelatedText}>Related entities</Text>
          <View style={styles.relatedEntityIconContainer}>{relatedEntityIconContainer}</View>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.commentsContainer} onPress={onPressComments}>
          {commentIconsElement}
          <Text style={styles.commentsText}>{comments}K comments</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <CommentBox
          name={name}
          commentText={commentText}
          replyCount={replyCount}
          isReply={isReply}
          boostCount={boostCount}
        />
      </View>
    )
  } 
}

storyLineLongFormSingleEvent.defaultProps = {
  previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
  comments: 34,
  onPressComments: () => {},
  storyImage: images.storyImage,
  topComment: {
    name: 'Jammie Rice',
    commentText:
      'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
    replyCount: 1,
    isReply: false,
    boostCount: 450,
    selectionHandler: () => {}
  },
  entityItems: [
    { image: images.iconStoryLineRelatedEntity1, onPressEntity: () => {} },
    { image: images.iconStoryLineRelatedEntity2, onPressEntity: () => {} },
    { image: images.iconStoryLineRelatedEntity3, onPressEntity: () => {} },
    { image: images.iconStoryLineRelatedEntity4, onPressEntity: () => {} }
  ],
  voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
  onPressVoterIcons: () => {}
}

export default storyLineLongFormSingleEvent
