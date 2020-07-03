// @flow

import React from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, Platform, ImageProps } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import Source from '../../Components/Source'

// Styles
import styles from '../Styles/StoryLine/SourceScreenStyle'
import images from '../../Themes/Images'

type Props = NavigationContainerProps & {
  storyLineData: Array<{
    title: string,
    date: string,
    description: string,
    storyImage: ImageProps
  }>
}

const relatedStoryLine = (props: Props) => {
  const { navigation, storyLineData } = props
  const { backIcon } = images

  const storyLineDataElements = storyLineData.map((item, index) => {
    const { title, date, description, storyImage } = item
    return (
      <View key={index} style={styles.previewContainer}>
        <Source title={title} date={date} description={description} storyImage={storyImage} />
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
        <Text style={styles.relatedText}>Sources</Text>
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
      title: 'Forbes',
      description: 'AS Boris Delivers A Brexit Deal, EU Have Agreed…',
      storyImage: images.storyImage,
      date: '23 hours ago'
    },
    {
      title: 'Forbes',
      description: 'AS Boris Delivers A Brexit Deal, EU Have Agreed…',
      storyImage: images.storyImage,
      date: '23 hours ago'
    },
    {
      title: 'Forbes',
      description: 'AS Boris Delivers A Brexit Deal, EU Have Agreed…',
      storyImage: images.storyImage,
      date: '23 hours ago'
    },
    {
      title: 'Forbes',
      description: 'AS Boris Delivers A Brexit Deal, EU Have Agreed…',
      storyImage: images.storyImage,
      date: '23 hours ago'
    },
    {
      title: 'Forbes',
      description: 'AS Boris Delivers A Brexit Deal, EU Have Agreed…',
      storyImage: images.storyImage,
      date: '23 hours ago'
    },
    {
      title: 'Forbes',
      description: 'AS Boris Delivers A Brexit Deal, EU Have Agreed…',
      storyImage: images.storyImage,
      date: '23 hours ago'
    }
  ]
}

export default relatedStoryLine
