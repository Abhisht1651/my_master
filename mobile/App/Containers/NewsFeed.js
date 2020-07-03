// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  Animated,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageProps,
  Platform
} from 'react-native'
import Modal from 'react-native-modal'
import styles from './Styles/ScrollableFeedStyles'
import SingleStoryline from '../Components/StoryLineLongFormSingleEvent'
import MultipleStoryline from '../Components/StoryLineLongFormMultipleEvents'
import PollActive from '../Components/PollActive'
import PollResult from '../Components/PollResult'
import { Images } from '../Themes'
import { BottomNav } from '../Components/BottomNav'
import { ReactionBubbles } from '../Components/NewsFeedComponents/ReactionBubbles'
import CategoryFilter from '../Components/NewsFeedComponents/CategoryFilter'
import { X2SButton } from '../Components/Buttons/X2SButton'

// prop types
type Props = {
  item: {
    id: string,
    type: string,
    question: string,
    votes: number,
    timeLeft: number,
    isPollActive: boolean,
    voterIcons: Array<string>,
    progressBar: Array<{ name: string, percentage: string }>,
    participated: boolean,
    comments: number,
    activeProgressBar: number,
    option: Array<string>,
    reach: string,
    friendsFollowing: string,
    category: string,
    endStatus: string,
    storyTitle: string,
    updatedTime: string,
    followDisplay: boolean,
    following: boolean,
    trending: boolean,
    active: boolean,
    date: string,
    totalStoryItems: number,
    carouselItems: Array<{
      previewText: string,
      commentText: string,
      storyImage: ImageProps,
      read: boolean
    }>,
    previewText: string,
    storyImage: ImageProps,
    heading: string,
    isSingle: boolean,
    result: boolean,
    storyline: boolean,
    onPressVote: PropTypes.func,
    onPressShare: PropTypes.func,
    onPressReact: PropTypes.func,
    onPressRaven: PropTypes.func,
    onPressComment: PropTypes.func,
    onPressComments: PropTypes.func
  }
} & NavigationContainerProps

const DATA = [
  {
    id: '10001',
    title: 'scrollablefeed'
  }
]

// Feed Data
const feed = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    storyline: true,
    isSingle: true,
    reach: 45,
    heading: 'World',
    storyTitle: 'UK exit from the European Union',
    previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
    updatedTime: '2m',
    comments: 34,
    storyImage: Images.storyImage,
    type: 'World'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    storyline: true,
    isSingle: false,
    reach: '45K Reached',
    friendsFollowing: '241K Followers',
    category: 'World',
    endStatus: 'Ended',
    storyTitle: 'UK exit from the European Union',
    updatedTime: '2m',
    followDisplay: true,
    following: false,
    trending: true,
    active: false,
    date: 'July 25th,1991',
    totalStoryItems: 8,
    carouselItems: [
      {
        storyImage: Images.storyImage,
        previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
        commentText: '34K comments',
        read: false
      },
      {
        storyImage: Images.storyImage,
        previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
        commentText: '34K comments',
        read: false
      },
      {
        storyImage: Images.storyImage,
        previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
        commentText: '34K comments',
        read: false
      },
      {
        storyImage: null,
        previewText: '',
        commentText: '',
        read: true
      }
    ],
    type: 'National'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    storyline: true,
    isSingle: true,
    reach: 45,
    heading: 'World',
    storyTitle: 'UK exit from the European Union',
    previewText: 'Corbyn wins Labor conference Brexit vote in the latest polls',
    updatedTime: '2m',
    comments: 34,
    storyImage: Images.storyImage,
    type: 'Sports'
  },
  {
    id: '586664a0f-3da1-471f-bd96-145571e29d72',
    result: false,
    question: 'Who are your favorites for the World Cup 2020?',
    votes: 54,
    timeLeft: 2,
    isPollActive: true,
    voterIcons: [Images.voterIcon1, Images.voterIcon2, Images.voterIcon3],
    option: ['India', 'West Indies', 'Australia', 'England'],
    comments: 154,
    type: 'National'
  },
  {
    id: '586564a0f-3da1-471f-bd96-145571e29d72',
    result: true,
    question: 'Who are your favorites for the World Cup 2020?',
    votes: 54,
    timeLeft: 2,
    isPollActive: true,
    voterIcons: [Images.voterIcon1, Images.voterIcon2, Images.voterIcon3],
    progressBar: [
      { name: 'India', percentage: '53%' },
      { name: 'Australia', percentage: '12%' },
      { name: 'West Indies', percentage: '6%' },
      { name: 'England', percentage: '29%' }
    ],
    participated: true,
    comments: 154,
    activeProgressBar: 0,
    type: 'Science'
  }
]

// variables for header animation
const Height = Dimensions.get('window').height
const NAVBAR_HEIGHT = Platform.OS === 'ios' ? (86.5 / 768) * Height : (53 / 768) * Height
const STATUS_BAR_HEIGHT = 0

/* Description of hooks
visible: New updates button
modal: category filter
selected: category selected
filtered: final category applied
scrollnes: for getting scroll value
*/

const NewsFeed = (props: Props) => {
  const { navigation } = props
  const [visible, setvisible] = useState(false)
  const [modal, setmodal] = useState(false)
  const [selected, setselected] = useState([])
  // filtered cateogories array
  const [filtered, setfiltered] = useState([])
  const flatlist = useRef<FlatList>()
  const nestedflatlist = useRef<FlatList>()
  const [scrollnes, setscrollnes] = useState(0)

  // function for category filter
  const applymodal = () => {
    setfiltered(selected)
    setmodal(false)
  }
  // category selected stored in selected array
  const activityChange = (value, name) => {
    if (value === false) {
      setselected(selected.concat(name))
    } else {
      setselected(selected.filter((person) => person !== name))
    }
  }

  // clear selection in category filter function
  const applyChange = () => {
    setselected([])
  }

  // Animation for header starts
  const [scrollAnim] = useState(new Animated.Value(0))
  const [offsetAnim] = useState(new Animated.Value(0))
  const [clampedScroll] = useState(
    Animated.diffClamp(
      Animated.add(
        scrollAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: 'clamp'
        }),
        offsetAnim
      ),
      0,
      NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
    )
  )

  let clampedScrollValue = 0

  let offsetValue = 0

  let scrollValue = 0

  useEffect(() => {
    scrollAnim.addListener(({ value }) => {
      const diff = value - scrollValue
      scrollValue = value
      clampedScrollValue = Math.min(
        Math.max(clampedScrollValue + diff, 0),
        NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
      )
    })
    offsetAnim.addListener(({ value }) => {
      offsetValue = value
    })

    return () => {
      scrollAnim.removeAllListeners()
      offsetAnim.removeAllListeners()
    }
  })

  let scrollEndTimer

  const onScrollEndDrag = () => {
    scrollEndTimer = setTimeout(onMomentumScrollEnd, 250)
  }

  const onMomentumScrollBegin = () => {
    clearTimeout(scrollEndTimer)
  }

  const onMomentumScrollEnd = () => {
    const toValue =
      scrollValue > NAVBAR_HEIGHT && clampedScrollValue > (NAVBAR_HEIGHT - STATUS_BAR_HEIGHT) / 2
        ? offsetValue + NAVBAR_HEIGHT
        : offsetValue - NAVBAR_HEIGHT

    Animated.timing(offsetAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
    outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)],
    extrapolate: 'clamp'
  })

  // Animation for header ends

  // refresh function for feed. Functionality not given right now
  const refreshfunc = () => {
    setvisible(false)
    flatlist.current.scrollToOffset({
      y: 0,
      animated: true
    })
  }

  const pageNavigation = (navigate) => {
    navigation.navigate(navigate)
  }
  const Entities2Navigation = () => {
    navigation.navigate('Entities2')
  }
  const pollScreenNavigation = () => {
    navigation.navigate('Poll Screen')
  }

  // Feed rendering function
  const renderfeed = ({ item }) => {
    if (filtered.length === 0) {
      return (
        <View style={styles.flatlist}>
          {item.storyline
            ? [
                item.isSingle ? (
                  <TouchableOpacity onPress={() => pageNavigation('FullPost')}>
                    <SingleStoryline
                      reach={item.reach}
                      heading={item.heading}
                      storyTitle={item.storyTitle}
                      previewText={item.previewText}
                      updatedTime={item.updatedTime}
                      comments={item.comments}
                      storyImage={item.storyImage}
                      iconRelatedEntity={[
                        {
                          image: Images.iconStoryLineRelatedEntity1,
                          onPressEntity: () => {
                            console.log('Tap')
                            Entities2Navigation()
                          }
                        },
                        {
                          image: Images.iconStoryLineRelatedEntity2,
                          onPressEntity: () => {
                            console.log('Tap2')
                            Entities2Navigation()
                          }
                        },
                        {
                          image: Images.iconStoryLineRelatedEntity3,
                          onPressEntity: () => {
                            console.log('Tap3')
                            Entities2Navigation()
                          }
                        },
                        {
                          image: Images.iconStoryLineRelatedEntity4,
                          onPressEntity: () => {
                            console.log('Tap4')
                            Entities2Navigation()
                          }
                        }
                      ]}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => pageNavigation('StoryLineScreen')}>
                    <MultipleStoryline
                      reach={item.reach}
                      friendsFollowing={item.friendsFollowing}
                      category={item.category}
                      endStatus={item.endStatus}
                      storyTitle={item.storyTitle}
                      updatedTime={item.updatedTime}
                      followDisplay={item.followDisplay}
                      following={item.following}
                      trending={item.trending}
                      active={item.active}
                      date={item.date}
                      totalStoryItems={item.totalStoryItems}
                      carouselItems={[
                        {
                          storyImage: Images.storyImage,
                          previewText:
                            'Corbyn wins Labor conference Brexit vote in the latest polls',
                          commentText: '34K comments',
                          read: false,
                          onPressCard: () => {
                            pageNavigation('FullPost')
                          },
                          entityItems: [
                            {
                              image: Images.iconStoryLineRelatedEntity1,
                              onPressEntity: () => {
                                console.log('Tap')
                                Entities2Navigation()
                              }
                            },
                            {
                              image: Images.iconStoryLineRelatedEntity2,
                              onPressEntity: () => {
                                console.log('Tap2')
                                Entities2Navigation()
                              }
                            },
                            {
                              image: Images.iconStoryLineRelatedEntity3,
                              onPressEntity: () => {
                                console.log('Tap3')
                                Entities2Navigation()
                              }
                            },
                            {
                              image: Images.iconStoryLineRelatedEntity4,
                              onPressEntity: () => {
                                console.log('Tap4')
                                Entities2Navigation()
                              }
                            }
                          ]
                        }
                      ]}
                    />
                  </TouchableOpacity>
                )
              ]
            : [
                !item.result ? (
                  <TouchableOpacity onPress={() => pollScreenNavigation()}>
                    <PollActive
                      question={item.question}
                      votes={item.votes}
                      timeLeft={item.timeLeft}
                      isPollActive={item.isPollActive}
                      voterIcons={item.voterIcons}
                      option={item.option}
                      comments={item.comments}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => pollScreenNavigation()}>
                    <PollResult
                      question={item.question}
                      votes={item.votes}
                      timeLeft={item.timeLeft}
                      isPollActive={item.isPollActive}
                      voterIcons={item.voterIcons}
                      progressBar={item.progressBar}
                      participated={item.participated}
                      comments={item.comments}
                      activeProgressBar={item.activeProgressBar}
                    />
                  </TouchableOpacity>
                )
              ]}
        </View>
      )
    }
    for (let i = 0; i < filtered.length; i += 1) {
      if (filtered[i] === item.type) {
        return (
          <View style={styles.flatlist}>
            {item.storyline
              ? [
                  item.isSingle ? (
                    <SingleStoryline
                      reach={item.reach}
                      heading={item.heading}
                      storyTitle={item.storyTitle}
                      previewText={item.previewText}
                      updatedTime={item.updatedTime}
                      comments={item.comments}
                      storyImage={item.storyImage}
                    />
                  ) : (
                    <MultipleStoryline
                      reach={item.reach}
                      friendsFollowing={item.friendsFollowing}
                      category={item.category}
                      endStatus={item.endStatus}
                      storyTitle={item.storyTitle}
                      updatedTime={item.updatedTime}
                      followDisplay={item.followDisplay}
                      following={item.following}
                      trending={item.trending}
                      active={item.active}
                      date={item.date}
                      totalStoryItems={item.totalStoryItems}
                    />
                  )
                ]
              : [
                  !item.result ? (
                    <TouchableOpacity onPress={() => pollScreenNavigation()}>
                      <PollActive
                        question={item.question}
                        votes={item.votes}
                        timeLeft={item.timeLeft}
                        isPollActive={item.isPollActive}
                        voterIcons={item.voterIcons}
                        option={item.option}
                        comments={item.comments}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => pollScreenNavigation()}>
                      <PollResult
                        question={item.question}
                        votes={item.votes}
                        timeLeft={item.timeLeft}
                        isPollActive={item.isPollActive}
                        voterIcons={item.voterIcons}
                        progressBar={item.progressBar}
                        participated={item.participated}
                        comments={item.comments}
                        activeProgressBar={item.activeProgressBar}
                      />
                    </TouchableOpacity>
                  )
                ]}
          </View>
        )
      }
    }
    return <View />
  }

  const renderitem = () => {
    return (
      <View>
        <ReactionBubbles />
        <View style={styles.header3}>
          <View style={styles.iconsvg}>
            <TouchableOpacity
              style={filtered.length === 0 ? styles.press : styles.press2}
              onPress={() => setmodal(true)}>
              <View>
                <Image source={Images.filtericon} style={styles.filtericon} />
                {filtered.length === 0 ? (
                  <Text style={styles.timefiltertext}>Category Filter</Text>
                ) : (
                  [
                    filtered.length === 1 ? (
                      <Text style={styles.timefiltertext}>{filtered[0]}</Text>
                    ) : (
                      [
                        filtered.length === 2 ? (
                          <Text style={styles.timefiltertext}>{filtered[0]} and 1 other</Text>
                        ) : (
                          <Text style={styles.timefiltertext}>
                            {filtered[0]} and {filtered.length - 1} others
                          </Text>
                        )
                      ]
                    )
                  ]
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.border} />
        <View style={styles.flatlistcont}>
          <FlatList
            ref={nestedflatlist}
            data={feed}
            renderItem={renderfeed}
            keyExtractor={(post) => post.id}
            showsVerticalScrollIndicator={false}
            style={styles.flatlistinside}
            onRefresh={refreshfunc}
            refreshing={!visible}
            onScroll={(e) => {
              if (visible && e.nativeEvent.contentOffset.y < scrollnes) {
                refreshfunc()
              }
              setscrollnes(e.nativeEvent.contentOffset.y)
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.fill}>
      <Modal isVisible={modal} onBackdropPress={applymodal}>
        <View style={styles.modal}>
          <CategoryFilter
            applyChange={applyChange}
            selected={selected}
            activityChange={activityChange}
          />
        </View>
      </Modal>
      <View style={styles.container1}>
        <Animated.FlatList
          ref={flatlist}
          contentContainerStyle={styles.contentContainer}
          scrollEventThrottle={1}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollEndDrag={onScrollEndDrag}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollAnim } } }], {
            useNativeDriver: true
          })}
          data={DATA}
          renderItem={renderitem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        <Animated.View style={[styles.navbar, { transform: [{ translateY: navbarTranslate }] }]}>
          <Image
            source={Images.logopurple}
            style={Platform.OS === 'ios' ? styles.logo : styles.logo1}
          />
          <View style={Platform.OS === 'ios' ? styles.menu : styles.menu1}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Image source={Images.iconmenu} style={styles.iconmenu} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
      {visible && (
        <Animated.View style={[styles.button, { transform: [{ translateY: navbarTranslate }] }]}>
          <X2SButton title="New updates" float onPress={refreshfunc} />
        </Animated.View>
      )}
      <View style={styles.container2}>
        <BottomNav
          newsfeed
          activityonPress={() => props.navigation.navigate('ActivityFeed')}
          chatsonPress={() => props.navigation.navigate('RavenAll')}
          searchonPress={() => props.navigation.navigate('Discover')}
        />
      </View>
    </View>
  )
}

export default NewsFeed
