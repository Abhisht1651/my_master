// @flow

import React from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import StoryLineShortCard from '../../Components/StoryLineShortCardDefualt'

// Styles
import styles from '../Styles/Poll/RelatedStoryLinesStyle'
import images from '../../Themes/Images'

type Props = NavigationContainerProps & {
  storyLineData: Array<{
    reach: number,
    heading: string,
    storyTitle: string,
    friendsFollowing: string,
    updatedTime: string,
    following: boolean,
    trending: boolean
  }>
}

const relatedStoryLine = (props: Props) => {
  const { navigation, storyLineData } = props
  const { backIcon } = images

  const storyLineDataElements = storyLineData.map((item, index) => {
    const { reach, heading, storyTitle, friendsFollowing, updatedTime, following, trending } = item
    return (
      <View key={index} style={styles.previewContainer}>
        <StoryLineShortCard
          reach={reach}
          heading={heading}
          storyTitle={storyTitle}
          friendsFollowing={friendsFollowing}
          updatedTime={updatedTime}
          following={following}
          trending={trending}
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
        <Text style={styles.relatedText}>Related StoryLines</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContainer}>{storyLineDataElements}</View>
      </ScrollView>
    </View>
  )
}

relatedStoryLine.defaultProps = {
  storyLineData: [
    {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 Followers',
      updatedTime: '2m',
      following: true,
      trending: true
    },
    {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 Followers',
      updatedTime: '2m',
      following: true,
      trending: true
    },
    {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 Followers',
      updatedTime: '2m',
      following: true,
      trending: true
    }
  ]
}

export default relatedStoryLine
