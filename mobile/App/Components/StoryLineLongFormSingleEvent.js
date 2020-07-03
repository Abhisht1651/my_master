// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, ImageBackground, TouchableOpacity, ImageProps } from 'react-native'
// Styles
import styles from './Styles/StoryLineLongFormSingleEventStyle'
import images from '../Themes/Images'

type Props = {
  reach: number,
  heading: string,
  storyTitle: string,
  previewText: string,
  updatedTime: string,
  comments: number,
  onPressShare: PropTypes.func,
  onPressReact: PropTypes.func,
  onPressRaven: PropTypes.func,
  onPressComments: PropTypes.func,
  storyImage: ImageProps,
  iconRelatedEntity: Array<{ image: ImageProps, onPressEntity: PropTypes.func }>
}
const storyLineLongFormSingleEvent = (props: Props) => {
  const {
    reach,
    storyTitle,
    updatedTime,
    heading,
    previewText,
    comments,
    onPressReact,
    onPressRaven,
    onPressShare,
    onPressComments,
    storyImage,
    iconRelatedEntity
  } = props
  const {
    iconStoryLineInactive,
    iconStoryLineTrending,
    iconStoryLineReach,
    voterIcon1,
    voterIcon2,
    voterIcon3,
    shareIcon,
    reactIcon,
    ravenIcon,
    sourceIcon
  } = images
  const voterIcons = [voterIcon1, voterIcon2, voterIcon3]
  const commentIconsElement = voterIcons.map((voterIcon, index) => (
    <Image source={voterIcon} key={index} style={styles.commentsIcon} />
  ))
  const relatedEntityIconContainer = iconRelatedEntity.map((item, index) => {
    const { image, onPressEntity } = item
    return (
      <TouchableOpacity key={index} onPress={onPressEntity}>
        <Image source={image} key={index} style={styles.relatedEntityIcon} />
      </TouchableOpacity>
    )
  })
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>{heading}</Text>
        <View style={styles.dot} />
        <Image source={iconStoryLineInactive} style={styles.storyLineIconHeading} />
        <Text style={styles.headingText}>Inactive</Text>
        <View style={styles.dot} />
        <Image source={iconStoryLineTrending} style={styles.storyLineIconHeading} />
        <Text style={styles.headingText}>Trending</Text>
      </View>
      <View style={styles.reachContainer}>
        <Image source={iconStoryLineReach} style={styles.reachIcon} />
        <Text style={styles.reachText}>{reach}K Reached</Text>
      </View>
      <Text style={styles.newsTitleText}>{storyTitle}</Text>
      <Text style={styles.updateTimeText}>Updated {updatedTime} ago</Text>
      <View style={styles.previewContainer}>
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
storyLineLongFormSingleEvent.defaultProps = {
  reach: 45,
  heading: 'World',
  storyTitle: 'UK exit from the European Union',
  previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
  updatedTime: '2m',
  comments: 34,
  onPressReact: () => {},
  onPressRaven: () => {},
  onPressShare: () => {},
  onPressComments: () => {},
  storyImage: images.storyImage,
  iconRelatedEntity: [
    { image: images.iconStoryLineRelatedEntity1, onPressEntity: () => {} },
    { image: images.iconStoryLineRelatedEntity2, onPressEntity: () => {} },
    { image: images.iconStoryLineRelatedEntity3, onPressEntity: () => {} },
    { image: images.iconStoryLineRelatedEntity4, onPressEntity: () => {} }
  ]
}
export default storyLineLongFormSingleEvent
