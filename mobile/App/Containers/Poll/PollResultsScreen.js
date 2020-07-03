// @flow

import React, { useState, useRef } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity, ImageProps, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Carousel from 'react-native-snap-carousel'

// Styles
import styles from '../Styles/Poll/PollResultsScreenStyle'
import images from '../../Themes/Images'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

// Components
import CommentBar from '../../Components/Commentbars/Commentbar2'
import Bubbles from '../../Components/Icons/Bubbles'
import Entities from '../../Components/Entities/ThumbsLarge'
import DropDown from '../../Components/Dropdowns/DropDown2'
import StoryLineShortCard from '../../Components/StoryLineShortCardDefualt'
import RelatedPoll from '../../Components/RelatedPoll'
import CommentBox from '../../Components/CommentBox'
import PopularPoll from '../../Components/PopularPoll'

type Props = NavigationContainerProps & {
  question: string,
  votes: number,
  created: string,
  ran: string,
  timeLeft: string,
  isPollActive: boolean,
  voterIcons: Array<ImageProps>,
  progressBar: Array<{ name: string, percentage: string }>,
  participated: boolean,
  comments: number,
  activeProgressBar: number,
  commentsData: Array<{
    name: string,
    commentText: string,
    profilePic: ImageProps,
    boosts: number,
    replies: Array<{ name: string, commentText: string, profilePic: ImageProps, boosts: number }>
  }>,
  relatedEntitiesData: Array<{ title: string, profileIcons: Array<ImageProps> }>,
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

const pollResultsScreen = (props: Props) => {
  const {
    navigation,
    question,
    votes,
    timeLeft,
    isPollActive,
    voterIcons,
    progressBar,
    participated,
    created,
    ran,
    activeProgressBar,
    relatedPollData,
    relatedStoryLineData,
    commentsData,
    relatedEntitiesData
  } = props

  const { backIcon, pollActiveIcon, pollInactiveIcon, commentIcon } = images
  const pollIcon = isPollActive ? pollActiveIcon : pollInactiveIcon
  const fillColor = isPollActive ? '#7B46E4' : '#47C3F4'

  const [, setComment] = useState('')
  const [showReplies, setShowReplies] = useState(Array(commentsData.length).fill(0))
  const [result, setResult] = useState(Array(relatedPollData.length).fill(false))

  const inputHandler = (text) => {
    setComment(text)
  }

  const setPollResult = (index) => {
    const updatedRelatedPollData = [...result]
    updatedRelatedPollData[index] = true
    setResult(updatedRelatedPollData)
  }

  const toggleViewReplies = (index) => {
    if (showReplies[index] === 0) {
      const updatedShowReplies = [...showReplies]
      updatedShowReplies[index] = 1
      setShowReplies(updatedShowReplies)
    } else {
      const updatedShowReplies = [...showReplies]
      updatedShowReplies[index] = 0
      setShowReplies(updatedShowReplies)
    }
  }

  const pollResultNavigation = () => {
    navigation.navigate('PollResultsScreen')
  }

  const progressBarStyles = [
    { ...styles.progressFill, width: progressBar[0].percentage },
    { ...styles.progressFill, width: progressBar[1].percentage },
    { ...styles.progressFill, width: progressBar[2].percentage },
    { ...styles.progressFill, width: progressBar[3].percentage }
  ]

  progressBarStyles[activeProgressBar] = {
    ...progressBarStyles[activeProgressBar],
    backgroundColor: fillColor
  }

  const progressBarActivePercentageText = { ...styles.progressBarPercentageText, color: '#FFFFFF' }
  const progressBarActiveText = { ...styles.progressBarText, color: '#FFFFFF' }

  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <Image source={voterIcon} key={index} style={styles.voterIcon} />
  ))

  const relatedEntitiesDisplay = ({
    item,
    index
  }: {
    item: { title: string, profileIcons: Array<ImageProps> },
    index: number
  }) => {
    const { title, profileIcons } = item
    return (
      <View key={index} style={styles.previewContainerEntities}>
        <Entities title={title} profileIcons={profileIcons} />
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
          <TouchableOpacity onPress={() => pollResultNavigation()}>
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

  const repliesDisplay = (replies, type, commentIndex) => {
    const display1 = replies.map((reply, index) => {
      const { name, commentText, profilePic, boosts } = reply
      return (
        <View key={index} style={styles.replyContainer}>
          <Image source={profilePic} style={styles.commentsIcon} />
          <View style={styles.replyBoxContainer}>
            <CommentBox
              isReply
              name={name}
              commentText={commentText}
              profilePic={profilePic}
              onClickBoost={() => navigation.navigate('Boost Screen')}
              boosts={boosts}
            />
          </View>
        </View>
      )
    })
    const display2 =
      replies.length !== 0 ? (
        <TouchableOpacity
          style={styles.viewRepliesContainer}
          onPress={() => toggleViewReplies(commentIndex)}>
          <Text style={styles.viewRepliesText}>View {replies.length} Replies</Text>
          <DropDown type={2} getOption={() => {}} />
        </TouchableOpacity>
      ) : null

    if (type === 1) {
      return display1
    }
    return display2
  }

  const commentsElements = commentsData.map((item, index) => {
    const { name, commentText, profilePic, boosts, replies } = item
    return (
      <View key={index} style={styles.comments}>
        <View style={styles.commentIconContainer}>
          <Image source={profilePic} style={styles.commentsIcon} />
        </View>
        <View style={styles.commentBoxContainer}>
          <CommentBox
            name={name}
            commentText={commentText}
            boosts={boosts}
            onClickBoost={() => navigation.navigate('Boost Screen')}
            replyCount={replies.length}
          />
          {replies.length === 1 || showReplies[index] === 1
            ? repliesDisplay(replies, 1, index)
            : repliesDisplay(replies, 2, index)}
        </View>
      </View>
    )
  })

  const scrollRef = useRef<ScrollView>()

  const scrollToBottom = () => {
    scrollRef.current.scrollToEnd({ animation: true })
  }

  const progressBarDisplay = progressBar.map((item, index) => {
    const { name, percentage } = item
    let progressBarStyle = { ...styles.progressFill, width: percentage }
    if (index === activeProgressBar) {
      progressBarStyle = {
        ...progressBarStyle,
        backgroundColor: fillColor
      }
    }
    return (
      <View key={index} style={styles.progressBar}>
        <View style={progressBarStyle} />
        <View style={styles.progressBarTextContainer}>
          <Text
            style={
              activeProgressBar === index
                ? progressBarActivePercentageText
                : styles.progressBarPercentageText
            }>
            {percentage}
          </Text>
          <Text
            style={activeProgressBar === index ? progressBarActiveText : styles.progressBarText}>
            {name}
          </Text>
        </View>
        {activeProgressBar === index && participated ? (
          <View style={styles.progressBarVoterIconContainer}>
            <Image source={voterIcons[0]} style={styles.progressBarVoterIcon} />
          </View>
        ) : null}
      </View>
    )
  })

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.superContainer}>
      <View style={styles.superContainer}>
        <View style={styles.container}>
          <ScrollView ref={scrollRef}>
            {Platform.OS === 'ios' ? <View style={styles.topCover} /> : null}

            <View style={styles.mainDataContainer}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <Bubbles />
              </View>
              <View style={styles.divider} />
              <View style={styles.pollContainer}>
                <View style={styles.pollHeader}>
                  {isPollActive ? <Text style={styles.createdText}>{created}</Text> : null}
                  {isPollActive ? <View style={styles.dot} /> : null}
                  <View style={styles.timeIconContainer}>
                    <Image source={pollIcon} style={styles.pollIcon} />
                  </View>
                  <View style={styles.timeTextContainer}>
                    {isPollActive ? (
                      <Text style={styles.timeText}>{timeLeft}</Text>
                    ) : (
                      <Text style={styles.timeText}>Poll ended</Text>
                    )}
                  </View>
                  {!isPollActive ? <View style={styles.dot} /> : null}
                  {isPollActive ? null : <Text style={styles.createdText}>Ran for {ran}</Text>}
                </View>
                <View style={styles.questionContainer}>
                  <Text style={styles.questionText}>{question}</Text>
                </View>
                <View style={styles.voterContainer}>
                  <View style={styles.voterIconContainer}>{voterIconsElement}</View>
                  <View style={styles.votesContainer}>
                    <Text style={styles.votes}>{votes}K votes</Text>
                  </View>
                </View>
                <View style={styles.resultTextContainer}>
                  <Text style={styles.resultsText}>Results</Text>
                </View>
                <View style={styles.divider} />

                <View style={styles.progressBarContainer}>{progressBarDisplay}</View>
              </View>
            </View>
            <View style={styles.relatedContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Related Entities</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Related Entities')}>
                  <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.scrollViewContainer}>
                <Carousel
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  data={relatedEntitiesData}
                  inactiveSlideOpacity={1}
                  inactiveSlideScale={1}
                  sliderWidth={wp('100%')}
                  itemWidth={wp('20%')}
                  renderItem={relatedEntitiesDisplay}
                />
              </View>
              <View style={styles.divider} />
            </View>
            <View style={styles.relatedContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Related Polls</Text>
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
              <View style={styles.divider} />
            </View>
            <View style={styles.relatedContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Related StoryLine</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Related StoryLines')}>
                  <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
              </View>
              <Carousel
                data={relatedStoryLineData}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                sliderWidth={wp('100%')}
                itemWidth={wp('86.86%')}
                renderItem={relatedStoryLineDisplay}
              />
              <View style={styles.divider} />

              <View style={styles.commentsContainer}>
                <View style={styles.commentsHeaderContainer}>
                  <View style={styles.commentButtonContainer}>
                    <Image source={commentIcon} style={styles.commentIcon} />
                    <Text style={styles.commentButtonText}>154K Comments</Text>
                  </View>
                  <View style={styles.commentType}>
                    <Text style={styles.commentTypeText}>Most Popular</Text>
                    <DropDown
                      headerTitle="Sort by"
                      content={['Most popular', 'Most recent']}
                      getOption={() => {}}
                      type={2}
                    />
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.allCommentsContainer}>{commentsElements}</View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.containerBottom}>
          <View style={styles.commentInputContainer}>
            <CommentBar captureText={inputHandler} onTouchStart={() => scrollToBottom()} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

pollResultsScreen.defaultProps = {
  question: 'Who are your favorites for the World Cup 2020?',
  votes: 54,
  timeLeft: '2 Hours left',
  isPollActive: true,
  voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
  created: 'Created 2 months ago',
  ran: '2 days',
  progressBar: [
    { name: 'India', percentage: '53%' },
    { name: 'Australia', percentage: '12%' },
    { name: 'West Indies', percentage: '6%' },
    { name: 'England', percentage: '29%' }
  ],
  participated: true,
  comments: 154,
  activeProgressBar: 0,
  commentsData: [
    {
      name: 'Jammie Rice',
      commentText:
        'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
      profilePic: images.voterIcon1,
      boosts: 450,
      replies: [
        {
          name: 'Lorraine Kim',
          commentText:
            'After reports emerged suggesting the Obama administration would issue additional sanctions imminently.',
          boosts: 450,
          profilePic: images.voterIcon2
        }
      ]
    },
    {
      name: 'Abraham P.',
      commentText:
        'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
      profilePic: images.voterIcon3,
      boosts: 450,
      replies: [
        {
          name: 'Lorraine Kim',
          commentText:
            'After reports emerged suggesting the Obama administration would issue additional sanctions imminently.',
          boosts: 450,
          profilePic: images.voterIcon2
        },
        {
          name: 'Lorraine Kim',
          commentText:
            'After reports emerged suggesting the Obama administration would issue additional sanctions imminently.',
          boosts: 450,
          profilePic: images.voterIcon2
        },
        {
          name: 'Lorraine Kim',
          commentText:
            'After reports emerged suggesting the Obama administration would issue additional sanctions imminently.',
          boosts: 450,
          profilePic: images.voterIcon2
        }
      ]
    },
    {
      name: 'Abraham P.',
      commentText:
        'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
      profilePic: images.voterIcon3,
      boosts: 450,
      replies: []
    },
    {
      name: 'Jammie Rice',
      commentText:
        'When Robert Mueller broke his silence in May, his main point was that his long-awaited report spoke for itself.',
      profilePic: images.voterIcon1,
      boosts: 450,
      replies: []
    }
  ],
  relatedEntitiesData: [
    { title: 'India', profileIcons: [images.EntitiesImage0] },
    { title: 'USA', profileIcons: [images.EntitiesImage1] },
    { title: 'India', profileIcons: [images.EntitiesImage0] },
    { title: 'USA', profileIcons: [images.EntitiesImage1] },
    { title: 'India', profileIcons: [images.EntitiesImage0] },
    { title: 'USA', profileIcons: [images.EntitiesImage1] },
    { title: 'India', profileIcons: [images.EntitiesImage0] },
    { title: 'USA', profileIcons: [images.EntitiesImage1] }
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

export default pollResultsScreen
