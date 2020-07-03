// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Platform
} from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import styles from './Styles/ActivityFeedStyles'
import { BottomNav } from '../Components/BottomNav'
import { Images } from '../Themes'
import Activities from '../Components/ActivityFeedComponents/Activities'
import ActivityFilter from '../Components/ActivityFeedComponents/ActivityFilter'
import IconPollcopy from '../Images/Icons/icon-pollcopy.svg'
import IconTrending from '../Images/Icons/icon-trending.svg'

type Props = {
  item: {
    name: string,
    user: string,
    user2: string,
    number_of_people: number,
    type: string,
    time: String,
    source: Image,
    icontop: Image,
    comment: String,
    follow: Boolean,
    followimages: Array<{ src: String, id: number, name: string }>,
    id: String,
    poll: boolean,
    storyline: boolean,
    icon: boolean,
    activitytype: string,
    svg: Image,
    storyline_description: string,
    reactiontype: string,
    poll_name: string
  }
} & NavigationContainerProps

const DATA = [
  {
    id: '1',
    title: 'header1'
  },
  {
    id: '2',
    title: 'header2'
  },
  {
    id: '3',
    title: 'feed'
  }
]

const FEED = [
  {
    id: '190',
    user: 'Carolyn Jeong',
    user2: 'Amanda Will',
    source: Images.profile2,
    type: 'Friends',
    time: '35 min',
    activitytype: 'Add Friend',
    storyline: false,
    poll: false,
    ind: 8
  },
  {
    id: '6',
    user: 'Carolyn Jeong',
    reactiontype: 'Storyline',
    source: Images.profile2,
    icontop: Images.iconreact,
    type: 'Friends',
    time: '35 min',
    activitytype: 'Reaction',
    storyline: false,
    poll: false,
    ind: 3
  },
  {
    id: '8',
    user: 'Global Storyline',
    storyline_description: 'Corbin wins Labour conference Brexit vote in the latest polls',
    icon: true,
    svg: <IconTrending height={28} width={28} />,
    type: 'Global',
    time: '2 min',
    activitytype: 'Wall Post',
    storyline: false,
    poll: false,
    ind: 5
  },
  {
    id: '9',
    user: 'Sean Cors',
    user2: 'Steph Jeong',
    comment: 'Sean Cores: "When Robert Mueller broke..',
    icontop: Images.iconcomment,
    type: 'Friends',
    time: '2 min',
    source: Images.profile1,
    activitytype: 'Comment',
    storyline: false,
    poll: false,
    ind: 6
  },
  {
    id: '10',
    user: 'Amanda Will',
    source: Images.profile2,
    follow: true,
    followimages: [
      {
        id: '45',
        name: 'Donald Trump',
        src: Images.follow1
      },
      {
        id: '46',
        name: 'India',
        src: Images.follow1
      },
      {
        id: '47',
        name: 'ONU',
        src: Images.follow1
      },
      {
        id: '48',
        name: 'Putin',
        src: Images.follow1
      }
    ],
    type: 'Friends',
    time: '35 min',
    activitytype: 'Follow',
    storyline: false,
    poll: false,
    ind: 7
  },
  {
    id: '4',
    user: 'Sean Cors',
    type: 'Friends',
    time: '2 min',
    source: Images.profile1,
    storyline: true,
    storylineprops: {
      category: 'World',
      type: 1,
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    },
    activitytype: 'Wall Post',
    ind: 1
  },
  {
    id: '5',
    icon: true,
    svg: <IconPollcopy height={28} width={28} />,
    user: 'Global Poll',
    number_of_people: 500,
    type: 'Global',
    time: '35 min',
    poll: true,
    pollprops: {
      question: 'Who are your favorites for the World Cup 2020?',
      votes: 54,
      timeLeft: 2,
      isPollActive: true,
      voterIcons: [Images.voterIcon1, Images.voterIcon2, Images.voterIcon3]
    },
    activitytype: 'Poll Participation',
    ind: 2
  },
  {
    id: '189',
    user: 'Carolyn Jeong',
    user2: 'Amanda Will',
    source: Images.profile2,
    type: 'Friends',
    time: '35 min',
    activitytype: 'Add Friend',
    storyline: false,
    poll: false,
    ind: 8
  }
]
const ActivityFeed = (props: Props) => {
  // visible: for new updates button
  const [visible, setvisible] = useState(false)
  // modal: for activity filter
  const [modal, setmodal] = useState(false)
  // for getting scroll position
  const [scrolly, setscrolly] = useState(0)
  const flatlist = useRef<FlatList>()
  // refreshing of flatlist
  const [refresh, setrefresh] = useState(false)
  // state for activity feed data
  const [feed, setfeed] = useState(FEED)
  // for selected type of activity
  const [selected, setselected] = useState([])
  // helping state for selected state
  const [tempselected, settempselected] = useState([])
  // for dropdown
  const [hidden, sethidden] = useState('')
  const flatlist2 = useRef()
  // delete activity function
  const delactivity = (id) => {
    sethidden('')
    let x = feed
    x = x.filter((post) => post.id !== id)
    setfeed(x)
  }
  // hide activity function
  const hideactivity = (name) => {
    sethidden('')
    let x = feed
    x = x.filter((post) => post.user !== name)
    setfeed(x)
  }
  // to open activity filter
  const handleChange = () => {
    setmodal(true)
  }
  // to close activity filter
  const closemodal = () => {
    setmodal(false)
  }
  // for modifying activity feed according to selection from Activity Filter
  const activityChange = (value, name) => {
    if (value === false) {
      settempselected(tempselected.concat(name))
    } else {
      settempselected(tempselected.filter((person) => person !== name))
    }
  }
  const applyChange = () => {
    setselected(tempselected)
    setmodal(false)
  }
  const applytoggle = (id) => {
    if (hidden === '') {
      sethidden(id)
    } else if (id !== hidden) {
      sethidden(id)
    } else {
      sethidden('')
    }
  }
  // refresh function, not provide functionality for now as it depends on fetching data from server
  const refreshfunc = () => {
    setvisible(false)
    setrefresh(true)
    flatlist.current.scrollToOffset({
      y: 0,
      animated: true
    })
  }
  const shadowStyle = {
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '#1F1F6016',
    shadowOffSet: { width: 0, height: 0 }
  }
  const renderfeed = ({ item }: Props) => {
    if (selected.length === 0) {
      return (
        <TouchableWithoutFeedback onPress={() => sethidden('')}>
          <View>
            <Activities
              type={item.type}
              time={item.time}
              source={item.source}
              user={item.user}
              user2={item.user2}
              number_of_people={item.number_of_people}
              icontop={item.icontop}
              comment={item.comment}
              follow={item.follow}
              followimages={item.followimages}
              id1={item.id}
              delactivity={delactivity}
              hideactivity={hideactivity}
              icon={item.icon}
              svg={item.svg}
              hidden={hidden}
              applytoggle={applytoggle}
              storyline={item.storyline}
              poll={item.poll}
              storylineprops={item.storylineprops}
              pollprops={item.pollprops}
              activitytype={item.activitytype}
              storyline_description={item.storyline_description}
              reactiontype={item.reactiontype}
              poll_name={item.poll_name}
            />
          </View>
        </TouchableWithoutFeedback>
      )
    }
    for (let i = 0; i < selected.length; i += 1) {
      if (item.activitytype === selected[i]) {
        return (
          <TouchableWithoutFeedback onPress={() => sethidden('')}>
            <View>
              <Activities
                type={item.type}
                time={item.time}
                source={item.source}
                user={item.user}
                user2={item.user2}
                number_of_people={item.number_of_people}
                icontop={item.icontop}
                comment={item.comment}
                follow={item.follow}
                followimages={item.followimages}
                id1={item.id}
                delactivity={delactivity}
                hideactivity={hideactivity}
                icon={item.icon}
                svg={item.svg}
                hidden={hidden}
                applytoggle={applytoggle}
                storyline={item.storyline}
                poll={item.poll}
                storylineprops={item.storylineprops}
                pollprops={item.pollprops}
                activitytype={item.activitytype}
                storyline_description={item.storyline_description}
                reactiontype={item.reactiontype}
                poll_name={item.poll_name}
              />
            </View>
          </TouchableWithoutFeedback>
        )
      }
    }
    return <View />
  }

  const renderitem = ({ item }: Props) => {
    if (item.id === '1') {
      return (
        <View>
          {Platform.OS === 'ios' && <View style={styles.topcover} />}
          <View style={styles.headertext}>
            <Text style={styles.activityfeedtext}>Activity Feed</Text>
          </View>
          <View style={styles.border} />
        </View>
      )
    }
    if (item.id === '2') {
      return (
        <View>
          <View style={styles.header2}>
            <View style={selected.length > 0 ? styles.iconsvgselected : styles.iconsvg}>
              <TouchableOpacity onPress={handleChange}>
                <View>
                  <Image source={Images.filtericon} style={styles.filtericon} />
                  {modal ? (
                    <Text style={styles.timefiltertext} numberOfLines={1} key={1}>
                      Activity History
                    </Text>
                  ) : (
                    [
                      selected.length === 0 ? (
                        <Text style={styles.timefiltertext} numberOfLines={1} key={2}>
                          Activity Type
                        </Text>
                      ) : (
                        [
                          selected.length === 1 ? (
                            <Text style={styles.timefiltertext} numberOfLines={1} key={3}>
                              {selected[0]}
                            </Text>
                          ) : (
                            [
                              selected.length === 2 ? (
                                <Text style={styles.timefiltertext} numberOfLines={1} key={4}>
                                  {selected[0]} and {selected.length - 1} other
                                </Text>
                              ) : (
                                <Text style={styles.timefiltertext} numberOfLines={1} key={4}>
                                  {selected[0]} and {selected.length - 1} others
                                </Text>
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )}
                </View>
              </TouchableOpacity>
            </View>
            {visible && (
              <View style={styles.button}>
                <TouchableNativeFeedback
                  onPress={refreshfunc}
                  style={[styles.floatx2sbutton, shadowStyle]}>
                  <View style={styles.btntext}>
                    <Text style={styles.floatx2stext}>New updates</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            )}
          </View>
          <View style={styles.border} />
        </View>
      )
    }
    if (item.id === '3') {
      return (
        <View style={styles.margin}>
          <FlatList
            ref={flatlist2}
            data={feed}
            renderItem={renderfeed}
            keyExtractor={(post) => post.id}
            showsVerticalScrollIndicator={false}
            extraData={feed}
            refresh={refresh}
            inverted
          />
        </View>
      )
    }
    return <View />
  }

  return (
    <View style={styles.container}>
      <Modal
        isVisible={modal}
        onBackdropPress={() => setmodal(false)}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.modal}>
          <ActivityFilter
            closemodal={closemodal}
            activityChange={activityChange}
            applyChange={applyChange}
            selected={selected}
          />
        </View>
      </Modal>
      <View style={styles.container1}>
        <View>
          <FlatList
            ref={flatlist}
            stickyHeaderIndices={[1]}
            data={DATA}
            renderItem={renderitem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            onScroll={(e) => {
              if (visible && e.nativeEvent.contentOffset.y < scrolly) {
                refreshfunc()
              }
              setscrolly(e.nativeEvent.contentOffset.y)
            }}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <BottomNav
          activity
          newsfeedonPress={() => props.navigation.navigate('NewsFeed')}
          chatsonPress={() => props.navigation.navigate('RavenAll')}
          searchonPress={() => props.navigation.navigate('Discover')}
        />
      </View>
    </View>
  )
}

export default ActivityFeed
