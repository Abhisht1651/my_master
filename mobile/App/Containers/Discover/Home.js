// @flow
import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, ImageProps } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'

// Styles
import styles from '../Styles/Discover/HomeStyle'
import images from '../../Themes/Images'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

// Components
import { BottomNav } from '../../Components/BottomNav'
import SearchBar from '../../Components/Searchbars/SearchBarDefault'
import RelatedPoll from '../../Components/RelatedPoll'
import PopularPoll from '../../Components/PopularPoll'
import Entities from '../../Components/Entities/CardType2'
import StoryLineShortestCard from '../../Components/StoryLineShortesCard'
import StoryLineShortCard from '../../Components/StoryLineShortCardDefualt'

type Props = NavigationContainerProps & {
  relatedEntitiesData: Array<{ title: string, profileIcons: ImageProps, count: number }>,
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
  }>,
  suggestedFriendsData: Array<{ title: string, profileIcons: ImageProps, count: number }>
}

const Home = (props: Props) => {
  const {
    navigation,
    relatedPollData,
    relatedStoryLineData,
    relatedEntitiesData,
    suggestedFriendsData
  } = props

  const [result, setResult] = useState(Array(relatedPollData.length).fill(false))

  const setPollResult = (index) => {
    const updatedRelatedPollDataResults = [...result]
    updatedRelatedPollDataResults[index] = true
    setResult(updatedRelatedPollDataResults)
  }

  const relatedEntitiesDisplay = ({
    item,
    index
  }: {
    item: { title: string, profileIcons: Array<ImageProps>, count: number },
    index: number
  }) => {
    const { title, profileIcons, count } = item
    return (
      <View key={index} style={styles.previewContainerEntities}>
        <Entities title={title} profileIcons={profileIcons} count={count} />
      </View>
    )
  }

  const relatedFriendssDisplay = ({
    item,
    index
  }: {
    item: { title: string, profileIcons: Array<ImageProps>, count: number },
    index: number
  }) => {
    const { title, profileIcons, count } = item
    return (
      <View key={index} style={styles.previewContainerEntities}>
        <Entities type={2} title={title} profileIcons={profileIcons} count={count} />
      </View>
    )
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

  return (
    <View style={styles.container}>
      <View style={styles.superContainer}>
        <ScrollView>
          <View>
            <View style={styles.header}>
              <Text style={styles.headerText}>Discover</Text>
              <TouchableOpacity
                style={styles.searchContainer}
                onPress={() => navigation.navigate('Search')}>
                <SearchBar
                  onSearchHandler={() => {}}
                  onTouchStart={() => navigation.navigate('Search')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.trendingEventsContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Trending Events</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Trending Events')}>
                  <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.trendingEventsDisplay}>
                <View style={styles.trendingEventsDisplayItems}>
                  <StoryLineShortestCard type={2} />
                </View>
                <View style={styles.trendingEventsDisplayItems}>
                  <StoryLineShortestCard type={2} />
                </View>
                <View style={styles.trendingEventsDisplayItems}>
                  <StoryLineShortestCard type={2} />
                </View>
                <View style={styles.trendingEventsDisplayItemsLast}>
                  <StoryLineShortestCard type={2} />
                </View>
              </View>
            </View>
            <View style={styles.suggestionsContainerEntities}>
              <View style={styles.titleContainerEntities}>
                <Text style={styles.titleText}>Suggested Entities</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Related Entities')}>
                  <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.scrollViewContainer}>
                <Carousel
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  data={relatedEntitiesData}
                  useScrollView
                  inactiveSlideOpacity={1}
                  inactiveSlideScale={1}
                  sliderWidth={wp('100%')}
                  itemWidth={wp('30%')}
                  renderItem={relatedEntitiesDisplay}
                />
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.suggestionsContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Suggested Storylines</Text>
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
            <View style={styles.divider} />
            <View style={styles.suggestionsContainerEntities}>
              <View style={styles.titleContainerEntities}>
                <Text style={styles.titleText}>Suggested Friends</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Suggested Friends')}>
                  <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.scrollViewContainer}>
                <Carousel
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  data={suggestedFriendsData}
                  useScrollView
                  inactiveSlideOpacity={1}
                  inactiveSlideScale={1}
                  sliderWidth={wp('100%')}
                  itemWidth={wp('30%')}
                  renderItem={relatedFriendssDisplay}
                />
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.suggestionsContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Popular Polls</Text>
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
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <BottomNav
          search
          activityonPress={() => props.navigation.navigate('ActivityFeed')}
          chatsonPress={() => props.navigation.navigate('RavenAll')}
          newsfeedonPress={() => props.navigation.navigate('NewsFeed')}
        />
      </View>
    </View>
  )
}

Home.defaultProps = {
  relatedEntitiesData: [
    { title: 'India', profileIcons: [images.EntitiesImage0], count: 52 },
    { title: 'USA', profileIcons: [images.EntitiesImage1], count: 52 },
    { title: 'India', profileIcons: [images.EntitiesImage0], count: 52 },
    { title: 'USA', profileIcons: [images.EntitiesImage1], count: 52 },
    { title: 'India', profileIcons: [images.EntitiesImage0], count: 52 },
    { title: 'USA', profileIcons: [images.EntitiesImage1], count: 52 },
    { title: 'India', profileIcons: [images.EntitiesImage0], count: 52 },
    { title: 'USA', profileIcons: [images.EntitiesImage1], count: 52 }
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
  ],
  suggestedFriendsData: [
    { title: 'Ross', profileIcons: [images.voterIcon1], count: 4 },
    { title: 'Rachel', profileIcons: [images.voterIcon2], count: 4 },
    { title: 'Robin', profileIcons: [images.voterIcon3], count: 4 },
    { title: 'Ross', profileIcons: [images.voterIcon1], count: 4 },
    { title: 'Rachel', profileIcons: [images.voterIcon2], count: 4 },
    { title: 'Robin', profileIcons: [images.voterIcon3], count: 4 },
    { title: 'Ross', profileIcons: [images.voterIcon1], count: 4 },
    { title: 'Rachel', profileIcons: [images.voterIcon2], count: 4 },
    { title: 'Robin', profileIcons: [images.voterIcon3], count: 4 }
  ]
}

export default Home
