// @flow

import React, { useState, useRef } from 'react'
import { View, Image, ScrollView, Text, TouchableOpacity, ImageProps, Platform } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Carousel from 'react-native-snap-carousel'

// Styles
import styles from '../Styles/Poll/PollScreenStyle'
import images from '../../Themes/Images'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

// Components
import { LargeThinButton } from '../../Components/Buttons/LargeThinButton'
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
  created: string,
  ran: string,
  votes: number,
  timeLeft: string,
  isPollActive: boolean,
  voterIcons: Array<string>,
  option: Array<string>,
  readStoryLine: boolean,
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

const pollScreen = (props: Props) => {
  const {
    backIcon,
    pollActiveIcon,
    pollInactiveIcon,
    voterIcon2,
    commentIcon,
    iconStoryLineBig
  } = images
  const {
    question,
    votes,
    created,
    ran,
    timeLeft,
    isPollActive,
    voterIcons,
    option,
    navigation,
    readStoryLine,
    commentsData,
    relatedEntitiesData,
    relatedPollData,
    relatedStoryLineData
  } = props
  const pollIcon = isPollActive ? pollActiveIcon : pollInactiveIcon

  const voterIconsElement = voterIcons.map((voterIcon, index) => (
    <Image source={voterIcon} key={index} style={styles.voterIcon} />
  ))

  const [optionSelected, setOptionSelected] = useState(-1)
  const [, setComment] = useState('')
  const [showReplies, setShowReplies] = useState(Array(commentsData.length).fill(0))
  const [result, setResult] = useState(Array(relatedPollData.length).fill(false))

  const optionSelectFunction = (currentOption) => {
    setOptionSelected(currentOption)
  }

  const inputHandler = (text) => {
    setComment(text)
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

  const setPollResult = (index) => {
    const updatedRelatedPollData = [...result]
    updatedRelatedPollData[index] = true
    setResult(updatedRelatedPollData)
  }

  const pollResultNavigation = () => {
    navigation.navigate('PollResultsScreen')
  }

  const optionContainerElement = option.map((currentOption, index) => (
    <View key={index}>
      <View style={styles.optionContainer}>
        {optionSelected === index ? (
          <TouchableOpacity style={styles.option} onPress={() => optionSelectFunction(-1)}>
            <View style={styles.optionFill} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.option} onPress={() => optionSelectFunction(index)} />
        )}
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{currentOption}</Text>
        </View>
      </View>
      <View style={styles.optionDivider} />
    </View>
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
          <Image source={voterIcon2} style={styles.commentsIcon} />
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
                      <Text style={styles.timeText}>{timeLeft} Hours left</Text>
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
                {readStoryLine ? (
                  <View style={styles.readStoryLinesContainer}>
                    <Image source={iconStoryLineBig} style={styles.menuIcon} />
                    <Text style={styles.readStoryLinesText}>Read more in storyline</Text>
                  </View>
                ) : null}
                <View style={styles.voterContainer}>
                  <View style={styles.voterIconContainer}>{voterIconsElement}</View>
                  <View style={styles.votesContainer}>
                    <Text style={styles.votes}>{votes}K votes</Text>
                  </View>
                </View>
                <View style={styles.optionsContainer}>{optionContainerElement}</View>
                <View style={styles.buttonContainer}>
                  <LargeThinButton
                    title="Vote"
                    outline
                    onPress={
                      optionSelected !== -1
                        ? () => navigation.navigate('PollResultsScreen')
                        : () => {}
                    }
                  />
                </View>
                <View style={styles.divider} />
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

pollScreen.defaultProps = {
  question: 'Who are your favorites for the World Cup 2020?',
  created: '2 months ago',
  ran: '2 days',
  votes: 54,
  timeLeft: '2 Hours left',
  isPollActive: true,
  voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3],
  option: ['India', 'West Indies', 'Australia', 'England'],
  readStoryLine: true,
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
      friendsFollowing: '45 Followers',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: images.storyImage
    },
    {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 Followers',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: images.storyImage
    },
    {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 Followers',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: images.storyImage
    }
  ]
}

export default pollScreen
