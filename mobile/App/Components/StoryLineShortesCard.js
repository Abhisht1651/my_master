// @flow
import React from 'react'
import { View, Text, Image, ImageProps } from 'react-native'

// Styles
import styles from './Styles/StoryLineShortestCardStyle'
import images from '../Themes/Images'

type Props = {
  category: string,
  type: number,
  storyTitle: string,
  date: string,
  description: string,
  source: string,
  trending: boolean,
  storyImage: ImageProps
}

const storyLineShortestCard = (props: Props) => {
  const { category, type, storyTitle, date, description, source, trending, storyImage } = props
  const { iconStoryLineTrending } = images

  const headingTextContainer = (
    <View style={styles.heading}>
      <Text style={styles.headingText}>{category}</Text>
      {trending ? <View style={styles.dot} /> : null}
      {trending ? (
        <Image source={iconStoryLineTrending} style={styles.iconStoryLineTrending} />
      ) : null}
      {trending ? <Text style={styles.headingText}> Trending</Text> : null}
    </View>
  )

  return (
    <View style={styles.container}>
      {type === 3 ? (
        <View>
          {headingTextContainer}
          <Text style={styles.storyTitleText}>{storyTitle}</Text>
        </View>
      ) : null}
      <View style={styles.flexContainer}>
        <View style={styles.imageContainer}>
          <Image source={storyImage} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          {type === 1 ? headingTextContainer : null}
          {type === 3 ? (
            <View>
              <Text style={styles.dateText}>{date}</Text>
            </View>
          ) : null}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
          {type === 2 ? (
            <View style={styles.sourceTextContainer}>
              <Text style={styles.sourceByText}>Source by</Text>
              <Text style={styles.sourceText}>{source}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  )
}

storyLineShortestCard.defaultProps = {
  category: 'World',
  type: 1,
  storyTitle: 'UK exit from the European Union',
  date: 'Sept 21, 2019',
  description: 'Ray Contreras talks about the different accents',
  source: 'Forbes',
  trending: true,
  storyImage: images.storyImage
}

export default storyLineShortestCard
