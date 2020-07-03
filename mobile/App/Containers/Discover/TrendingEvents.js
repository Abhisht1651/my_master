// @flow

import React from 'react'
import { View, Text, ImageProps, Platform, TouchableOpacity, Image } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

// Styles
import styles from '../Styles/Discover/TrendingEventsStyle'
import images from '../../Themes/Images'

// Components
import StoryLineShortestCard from '../../Components/StoryLineShortesCard'

type Props = NavigationContainerProps & {
  data: Array<{
    category: string,
    description: string,
    source: string,
    trending: boolean,
    storyImage: ImageProps
  }>
}

const SearchResultsStoryLine = (props: Props) => {
  const { navigation, data } = props
  const { backIcon } = images

  const storyLineDataElements = data.map((item, index) => {
    const { category, description, trending, source, storyImage } = item
    return (
      <View key={index} style={styles.displayItem}>
        <StoryLineShortestCard
          category={category}
          description={description}
          trending={trending}
          storyImage={storyImage}
          source={source}
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
        <Text style={styles.relatedText}>Trending Events</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.displayContainer}>{storyLineDataElements}</View>
      </ScrollView>
    </View>
  )
}

SearchResultsStoryLine.defaultProps = {
  data: [
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    },
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    },
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    },
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    },
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    },
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    },
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    },
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    },
    {
      category: 'World',
      description: 'Ray Contreras talks about the different accents',
      trending: true,
      source: 'Forbes',
      storyImage: images.storyImage
    }
  ]
}

export default SearchResultsStoryLine
