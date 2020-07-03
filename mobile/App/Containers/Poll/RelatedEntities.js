// @flow

import React from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

// Styles
import styles from '../Styles/Poll/RelatedEntitiesStyle'
import images from '../../Themes/Images'

// Components
import Entities from '../../Components/Entities/CardType1'

type Props = NavigationContainerProps & {
  storyLineData: Array<{
    reach: number,
    heading: string,
    storyTitle: string,
    friendsFollowing: number,
    updatedTime: number,
    following: boolean,
    trending: boolean
  }>
}

const relatedStoryLine = (props: Props) => {
  const { navigation, storyLineData } = props
  const { backIcon } = images

  const storyLineDataElements = storyLineData.map((item, index) => {
    const { title, count, profileIcons } = item
    return (
      <View key={index} style={styles.previewContainer}>
        <Entities title={title} count={count} profileIcons={profileIcons} />
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
        <Text style={styles.relatedText}>Related Entities</Text>
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
      title: 'India',
      count: 52,
      profileIcons: [images.EntitiesImage0]
    },
    {
      title: 'United States of America',
      count: 52,
      profileIcons: [images.EntitiesImage1]
    },
    {
      title: 'India',
      count: 52,
      profileIcons: [images.EntitiesImage0]
    },
    {
      title: 'United States of America',
      count: 52,
      profileIcons: [images.EntitiesImage1]
    },
    {
      title: 'India',
      count: 52,
      profileIcons: [images.EntitiesImage0]
    },
    {
      title: 'United States of America',
      count: 52,
      profileIcons: [images.EntitiesImage1]
    },
    {
      title: 'India',
      count: 52,
      profileIcons: [images.EntitiesImage0]
    },
    {
      title: 'United States of America',
      count: 52,
      profileIcons: [images.EntitiesImage1]
    }
  ]
}

export default relatedStoryLine
