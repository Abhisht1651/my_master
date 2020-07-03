// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Animated,
  PanResponder
} from 'react-native'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import styles from './ScreenStyles/Chat_2Styles'
import images from '../../Themes/Images'
import MuteNotifications from './MuteNotifications'
import LeaveGroup from './LeaveGroup'
import DropDown3 from '../../Components/Dropdowns/DropDown3'
import { X4SButton } from '../../Components/Buttons/X4SButton'
import CommentBarChat from './CommentBarChat'
import DeleteBarChat from './DeleteBarChat'

const Width = Dimensions.get('window').width

const timeswipewidth = 0.2 * Width

type Props = {
  item: {
    id: string,
    time: string,
    userid: string,
    username: string,
    image: Image,
    msg_id: string,
    msg: string,
    userid: string,
    texts: Array<{ msg_id: string, msg: string, userid: string }>,
    messages: PropTypes.Array,
    date: string
  },
  route: {
    params: {
      title: string
    }
  }
} & NavigationContainerProps

const Data = [
  {
    id: '1',
    date: 'Yesterday',
    messages: [
      {
        id: '1123',
        time: '11:29 am',
        userid: '1',
        username: 'Joey',
        image: images.profilePicture,
        texts: [
          {
            msg_id: '1007',
            msg: 'Hi Jesse, What is the status of meth production',
            userid: '1'
          },
          {
            msg_id: '1008',
            msg: 'I think, this time we will achieve 99.9% purity',
            userid: '1'
          }
        ]
      },
      {
        id: '1124',
        time: '11:30 am',
        userid: '2',
        username: 'Ross',
        image: images.profilePicture1,
        texts: [
          {
            msg_id: '1009',
            msg: 'Yeah!!, I think so too..',
            userid: '2'
          },
          {
            msg_id: '1010',
            msg: 'But why are you doing this thing',
            userid: '2'
          }
        ]
      },
      {
        id: '1125',
        time: '11:32 am',
        userid: '1',
        username: 'Joey',
        image: images.profilePicture,
        texts: [
          {
            msg_id: '1011',
            msg: 'For the Family',
            userid: '1'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    date: 'Today',
    messages: [
      {
        id: '1123',
        time: '11:29 am',
        userid: '1',
        username: 'Joey',
        image: images.profilePicture,
        texts: [
          {
            msg_id: '1007',
            msg: 'Hi Jesse, What is the status of meth production',
            userid: '1'
          },
          {
            msg_id: '1008',
            msg: 'I think, this time we will achieve 99.9% purity',
            userid: '1'
          }
        ]
      },
      {
        id: '1124',
        time: '11:30 am',
        userid: '2',
        username: 'Ross',
        image: images.profilePicture1,
        texts: [
          {
            msg_id: '1009',
            msg: 'Yeah!!, I think so too..',
            userid: '2'
          },
          {
            msg_id: '1010',
            msg: 'But why are you doing this thing',
            userid: '2'
          }
        ]
      },
      {
        id: '1125',
        time: '11:32 am',
        userid: '1',
        username: 'Joey',
        image: images.profilePicture,
        texts: [
          {
            msg_id: '1011',
            msg: 'For the Family',
            userid: '1'
          }
        ]
      },
      {
        id: '1125',
        time: '11:32 am',
        userid: '3',
        username: 'Chandler',
        image: images.profilePicture2,
        texts: [
          {
            msg_id: '1011',
            msg: 'For the Family??',
            userid: '3'
          }
        ]
      }
    ]
  }
]

const user = '1'

const Chat2 = (props: Props) => {
  const { title } = props.route.params
  const { navigation } = props

  const [MutePopUpVisible, setMutePopUpVisible] = useState(false)
  const [LeavePopUpVisible, setLeavePopUpVisible] = useState(false)
  // State for person typing
  const [sending] = useState('Amelia')
  // state for delete chat
  const [delchat, setdelchat] = useState(false)
  // array to store msgid of messages to be deleted
  const [msgsel, setmsgsel] = useState(false)
  // Haven't provided functionality for deletion.

  // panResponder is used for TimeSwipe
  const pan = useRef(new Animated.ValueXY()).current
  const flatlist = useRef<FlatList>()
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          // eslint-disable-next-line no-underscore-dangle
          x: pan.x._value
        })
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x }]),
      onPanResponderRelease: () => {
        pan.setValue({ x: 0 })
        pan.flattenOffset()
      }
    })
  ).current
  const openMutePopUp = () => {
    setMutePopUpVisible(true)
    console.log('Mute Notifs PopUp running')
  }
  const closeMutePopUp = () => {
    setMutePopUpVisible(false)
    console.log('Mute Notifs PopUp Close')
  }
  const btnPressHandler = () => {
    setMutePopUpVisible(false)
  }
  const openLeavePopUp = () => {
    setLeavePopUpVisible(true)
    console.log('Leave Group PopUp running')
  }
  const closeLeavePopUp = () => {
    setLeavePopUpVisible(false)
    console.log('Leave Group PopUp Close')
  }
  const btnPressHandler2 = () => {
    setLeavePopUpVisible(false)
  }
  const captureOption = (arr: Array<String>) => {
    console.log(arr)
  }
  const selectionHandler = (text) => {
    console.log(text)
    if (text === 1) {
      openMutePopUp()
    } else if (text === 2) {
      openLeavePopUp()
    }
  }

  // function for rendering chat bubbles and checkboxes if delete option is opt
  const renderchat = ({ item }: Props) => {
    if (item.userid === user) {
      return (
        <View style={styles.checkcont}>
          {delchat === true && (
            <View style={styles.checkboxalign}>
              <TouchableOpacity
                style={styles.checkBox}
                activeOpacity={1}
                onPress={() => setmsgsel(!msgsel)}>
                {msgsel && (
                  <View style={styles.checkedBox}>
                    <Image source={images.checkmark} style={styles.checkmark} />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.item1}>
            <TouchableWithoutFeedback>
              <View style={styles.bubble1margin}>
                <TouchableOpacity onLongPress={() => setdelchat(!delchat)}>
                  <Text style={styles.texttime}>{item.msg}</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.item}>
        {delchat === true && (
          <View style={styles.checkboxalign2}>
            <TouchableOpacity
              style={styles.checkBox}
              activeOpacity={1}
              onPress={() => setmsgsel(!msgsel)}>
              {msgsel && (
                <View style={styles.checkedBox}>
                  <Image source={images.checkmark} style={styles.checkmark} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}
        <TouchableWithoutFeedback>
          <View style={styles.bubbles2}>
            <Text style={styles.texttime}>{item.msg}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  // function for time rendering in the time swipe, other users photograph and their name after their consecutives last message
  const rendertxt = ({ item }: Props) => {
    return (
      <View>
        <FlatList
          data={item.texts}
          keyExtractor={(post) => post.msg_id}
          renderItem={renderchat}
          listKey={(post) => `${post.msg_id}D`}
        />
        {item.userid !== user && (
          <View>
            <View style={delchat ? styles.usericon2 : styles.usericon}>
              <Image source={item.image} style={styles.photoicon} />
            </View>
            <Text style={delchat ? styles.username2 : styles.username}>{item.username}</Text>
          </View>
        )}
        <View style={item.userid === user ? styles.time : styles.time1}>
          <Text style={styles.timetxt}>{item.time}</Text>
        </View>
      </View>
    )
  }

  const rendermsg = ({ item }: Props) => {
    return (
      <View>
        <View style={styles.button}>
          <X4SButton disabled title={item.date} />
        </View>
        <FlatList
          data={item.messages}
          keyExtractor={(post) => post.id}
          renderItem={rendertxt}
          listKey={(post) => `${post.id}D`}
        />
        {sending !== '' && item.id === Data[Data.length - 1].id && (
          <View style={styles.writing}>
            <Text style={styles.writingtxt}>{sending} is writing...</Text>
            <Image source={images.iconelipsis} style={styles.writingelipsis} />
          </View>
        )}
      </View>
    )
  }
  // CommentBar
  const inputHandler = (text) => {
    console.log(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        {msgsel ? <DeleteBarChat /> : <CommentBarChat captureText={inputHandler} />}
      </View>
      <View style={styles.container2}>
        <Animated.View
          style={[
            styles.containertime,
            {
              transform: [
                {
                  translateX: pan.x.interpolate({
                    inputRange: [-1 * timeswipewidth, 0],
                    outputRange: [-1 * timeswipewidth, 0],
                    extrapolate: 'clamp'
                  })
                }
              ]
            }
          ]}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...panResponder.panHandlers}>
          <LinearGradient
            colors={['#F7F7F7', '#FFFFFF']}
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0.83, 0.17]}>
            <View style={styles.containertime1}>
              <FlatList
                ref={flatlist}
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={rendermsg}
                onContentSizeChange={() => flatlist.current.scrollToEnd()}
                listKey={(post) => `${post.id}D`}
              />
            </View>
          </LinearGradient>
        </Animated.View>
      </View>
      <View style={styles.container1}>
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.arrowleft} style={styles.arrowleft} />
          </TouchableOpacity>
        </View>
        <View style={styles.memberphotos}>
          <Image source={images.profilePicture1} style={styles.photo1} />
          <Image source={images.profilePicture2} style={styles.photo2} />
        </View>
        <View style={styles.text}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatOptionsGroup', { title })}>
            <Text numberOfLines={1} style={styles.name}>
              {title}
            </Text>
            <Text style={styles.active}>Active now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.elipsis}>
          <TouchableOpacity>
            <View>
              <DropDown3
                getOption={selectionHandler}
                headerTitle="Options"
                content={['Mute notifications', 'Leave group']}
              />
            </View>
          </TouchableOpacity>
          <MuteNotifications
            getOption={captureOption}
            isModalVisible={MutePopUpVisible}
            onBtnPress={btnPressHandler}
            onClose={closeMutePopUp}
          />
          <LeaveGroup
            getOption={captureOption}
            isModalVisible={LeavePopUpVisible}
            onBtnPress={btnPressHandler2}
            onClose={closeLeavePopUp}
          />
        </View>
      </View>
    </View>
  )
}
Chat2.propTypes = {
  profileIcons: PropTypes.array
}

Chat2.defaultProps = {
  profileIcons: [images.EntitiesImage0]
}

export default Chat2