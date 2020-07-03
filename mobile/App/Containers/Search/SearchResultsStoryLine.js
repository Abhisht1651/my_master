// @flow

import React from 'react'
import { View, ImageProps } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

// Styles
import styles from '../Styles/Search/SearchResultsStoryLineStyle'
import images from '../../Themes/Images'

// Components
import StoryLineShortestCard from '../../Components/StoryLineShortesCard'

type Props = {
  data: Array<{
    category: string,
    description: string,
    source: string,
    trending: boolean,
    storyImage: ImageProps
  }>
}

const SearchResultsStoryLine = (props: Props) => {
  const { data } = props

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
        <View style={styles.divider} />
      </View>
    )
  })
  return (
    <View style={styles.container}>
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
