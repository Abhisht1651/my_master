// @flow

import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageProps } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'

// Styles
import styles from '../Styles/Search/SearchResultsTopStyle'
import images from '../../Themes/Images'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

// Components
import RelatedPoll from '../../Components/RelatedPoll'
import PopularPoll from '../../Components/PopularPoll'
import StoryLineShortCard from '../../Components/StoryLineShortCardDefualt'
import Entities from '../../Components/Entities/CardType1'

type Props = NavigationContainerProps & {
  topResultsData: Array<{
    title: string,
    count: number,
    profileIcons: ImageProps
  }>,
  relatedPollData: Array<{
    question: string,
    votes: number,
    timeLeft: number,
    isPollActive: boolean,
    voterIcons: Array<string>,
    option: Array<string>
  }>,
  relatedStoryLineData: Array<{
    reach: number,
    heading: string,
    storyTitle: string,
    friendsFollowing: string,
    updatedTime: string,
    following: boolean,
    trending: boolean,
    storyImage: ImageProps
  }>
}

const SearchResultsTop = (props: Props) => {
  const { navigation, topResultsData, relatedPollData, relatedStoryLineData } = props

  const [result, setResult] = useState(Array(relatedPollData.length).fill(false))

  const setPollResult = (index) => {
    const updatedResults = [...result]
    updatedResults[index] = true
    setResult(updatedResults)
  }

  const relatedPollsDisplay = ({
    item,
    index
  }: {
    item: {
      question: string,
      votes: number,
      timeLeft: number,
      isPollActive: boolean,
      voterIcons: Array<string>,
      option: Array<string>
    },
    index: number
  }) => {
    return (
      <View key={index} style={styles.previewContainer}>
        {result[index] ? (
          <TouchableOpacity>
            <PopularPoll />
          </TouchableOpacity>
        ) : (
          <RelatedPoll
            question={item.question}
            votes={item.votes}
            timeLeft={item.timeLeft}
            isPollActive={item.isPollActive}
            voterIcons={item.voterIcons}
            option={item.option}
            onPressVote={() => setPollResult(index)}
          />
        )}
      </View>
    )
  }

  const relatedStoryLineDisplay = ({
    item,
    index
  }: {
    item: {
      reach: number,
      heading: string,
      storyTitle: string,
      friendsFollowing: string,
      updatedTime: string,
      following: boolean,
      trending: boolean,
      storyImage: ImageProps
    },
    index: number
  }) => {
    return (
      <View key={index} style={styles.previewContainer}>
        <StoryLineShortCard
          reach={item.reach}
          heading={item.heading}
          storyTitle={item.storyTitle}
          friendsFollowing={item.friendsFollowing}
          updatedTime={item.updatedTime}
          following={item.following}
          trending={item.trending}
          storyImage={item.storyImage}
        />
      </View>
    )
  }

  const topResultsDisplay = topResultsData.map((item, index) => {
    const { title, count, profileIcons } = item
    return (
      <View key={index} style={styles.topResultDisplay}>
        <Entities title={title} count={count} profileIcons={profileIcons} />
      </View>
    )
  })
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topResultsContainer}>
          <View style={styles.topResultstitleContainer}>
            <Text style={styles.topResultstitleText}>Top Results</Text>
            {topResultsDisplay}
          </View>
        </View>
        <View style={styles.suggestionsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Top Polls</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Related Polls')}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.scrollViewContainer}>
            <Carousel
              data={relatedPollData}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              sliderWidth={wp('100%')}
              itemWidth={wp('86.86%')}
              renderItem={relatedPollsDisplay}
            />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.suggestionsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Top Storyline</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Related StoryLines')}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.scrollViewContainer}>
            <Carousel
              data={relatedStoryLineData}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              sliderWidth={wp('100%')}
              itemWidth={wp('86.86%')}
              renderItem={relatedStoryLineDisplay}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

SearchResultsTop.defaultProps = {
  topResultsData: [
    {
      title: 'Donald Trump',
      count: 52,
      profileIcons: [images.EntitiesImage4]
    }
  ],
  relatedPollData: [
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England']
    },
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England']
    },
    {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
      option: ['India', 'West Indies', 'Australia', 'England']
    }
  ],
  relatedStoryLineData: [
    {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: images.storyImage
    },
    {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: images.storyImage
    },
    {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: images.storyImage
    }
  ]
}

export default SearchResultsTop
