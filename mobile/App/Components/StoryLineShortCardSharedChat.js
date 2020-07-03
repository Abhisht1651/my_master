// @flow
import React from 'react'
import { View, Text, Image, ImageProps } from 'react-native'

// Styles
import styles from './Styles/StoryLineShortCardSharedChatStyle'
import images from '../Themes/Images'

type Props = {
  sender: string,
  heading: string,
  reach: number,
  storyTitle: string,
  trending: boolean,
  storyImage: ImageProps
}

const storyLineShortCardSharedChat = (props: Props) => {
  const { sender, heading, reach, storyTitle, trending, storyImage } = props
  const { iconStoryLineTrending, iconStoryLineReach } = images

  return (
    <View style={styles.container}>
      <View style={styles.senderContainer}>
        <Text style={styles.senderText}>{sender} send you a storyline!</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.heading}>
        <Text style={styles.headingText}>{heading}</Text>
        {trending ? <View style={styles.dot} /> : null}
        {trending ? (
          <Image source={iconStoryLineTrending} style={styles.iconStoryLineTrending} />
        ) : null}
        {trending ? <Text style={styles.headingText}> Trending</Text> : null}
      </View>
      <View style={styles.reachContainer}>
        <Image source={iconStoryLineReach} style={styles.iconStoryLineReach} />
        <Text style={styles.reachContainerText}> Reached {reach}K people</Text>
      </View>
      <Text style={styles.newsTitleText}>{storyTitle}</Text>
      <View style={styles.imageContainer}>
        <Image source={storyImage} style={styles.image} />
      </View>
    </View>
  )
}

storyLineShortCardSharedChat.defaultProps = {
  sender: 'Sophie',
  heading: 'World',
  reach: 45,
  storyTitle: 'Brexit: UK exit from the European Union',
  trending: true,
  storyImage: images.storyImage
}

export default storyLineShortCardSharedChat
