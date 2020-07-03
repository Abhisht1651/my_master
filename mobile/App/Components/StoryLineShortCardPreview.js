// @flow
import React, { useState } from 'react'
import { View, Text, Image, ImageProps } from 'react-native'
import Carousel from 'react-native-snap-carousel'

// Styles
import styles from './Styles/StoryLineShortCardPreviewStyle'
import images from '../Themes/Images'
import { widthPercentageToDP as wp } from '../Themes/ScreenMetrics'

type Props = {
  heading: string,
  storyTitle: string,
  trending: boolean,
  previews: Array<{ date: string, heading: string, image: ImageProps }>
}

const storyLineShortCardPreview = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const { heading, storyTitle, trending, previews } = props
  const { iconStoryLineTrending } = images

  function renderItem({
    item,
    index
  }: {
    item: { date: string, heading: string, image: ImageProps },
    index: number
  }) {
    return (
      <View
        key={index}
        style={activeSlide === index ? styles.currentPreviewContainer : styles.previewContainer}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.newsPreviewText}>{item.heading}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{heading}</Text>
        {trending ? <View style={styles.dot} /> : null}
        {trending ? <Image source={iconStoryLineTrending} style={styles.headingIcon} /> : null}
        {trending ? <Text style={styles.headingText}> Trending</Text> : null}
      </View>
      <Text style={styles.newsTitleText}>{storyTitle}</Text>
      <Text style={styles.previewText}>Choose a Preview</Text>
      <View style={styles.caraouselContainer}>
        <Carousel
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          data={previews}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          sliderWidth={wp('88%')}
          itemWidth={wp('76.86%')}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
    </View>
  )
}

storyLineShortCardPreview.defaultProps = {
  heading: 'World',
  storyTitle: 'UK exit from the European Union',
  trending: true,
  previews: [
    {
      date: 'Sept 21 2019',
      heading: 'AS Boris Delivers A Brexit Deal, EU have Agreed',
      image: images.newsImage
    },
    {
      date: 'Sept 21 2019',
      heading: 'AS Boris Delivers A Brexit Deal, EU have Agreed',
      image: images.newsImage
    },
    {
      date: 'Sept 21 2019',
      heading: 'AS Boris Delivers A Brexit Deal, EU have Agreed',
      image: images.newsImage
    }
  ]
}

export default storyLineShortCardPreview
