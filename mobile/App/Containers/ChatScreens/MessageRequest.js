// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './ScreenStyles/MessageRequestStyles'
import images from '../../Themes/Images'
import MuteNotifications from './MuteNotifications'
import ReportUser from './ReportUser'
import DropDown3 from '../../Components/Dropdowns/DropDown3'
import { MediumThinnerButton } from '../../Components/Buttons/MediumThinnerButton'
import { X4SButton } from '../../Components/Buttons/X4SButton'

const Width = Dimensions.get('window').width

const timeswipewidth = 0.2 * Width

type Props = {
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
        texts: [
          {
            msg_id: '1007',
            msg: 'I’m not so good with the advice… Can I interest you in a sarcastic comment?',
            userid: '1'
          },
          {
            msg_id: '1008',
            msg: 'Unless your name is Google stop acting like you know everything.',
            userid: '1'
          }
        ]
      }
    ]
  }
]

const user = '2'

const MessageRequest = (props: Props) => {
  const { title } = props.route.params
  const { navigation } = props

  const [MutePopUpVisible, setMutePopUpVisible] = useState(false)
  const [ReportPopUpVisible, setReportPopUpVisible] = useState(false)
  // State for person typing
  const [sending] = useState(false)
  // state for delete chat
  const [delchat, setdelchat] = useState(false)
  // array to store msgid of messages to be deleted
  const [msgsel, setmsgsel] = useState(false)

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
  const openReportPopUp = () => {
    setReportPopUpVisible(true)
    console.log('Report User PopUp running')
  }
  const closeReportPopUp = () => {
    setReportPopUpVisible(false)
    console.log('Report User PopUp Close')
  }
  const btnPressHandler2 = () => {
    setReportPopUpVisible(false)
  }
  const captureOption = (arr: Array<String>) => {
    console.log(arr)
  }
  const selectionHandler = (text) => {
    console.log(text)
    if (text === 1) {
      openMutePopUp()
    } else if (text === 3) {
      openReportPopUp()
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
            <TouchableOpacity style={styles.checkBox} activeOpacity={1}>
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

  const rendertxt = ({ item }: Props) => {
    return (
      <View>
        <FlatList data={item.texts} keyExtractor={(post) => post.msg_id} renderItem={renderchat} />
        {item.userid !== user && (
          <View style={delchat ? styles.usericon2 : styles.usericon}>
            <Image source={images.profilePicture1} style={styles.photoicon} />
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
        <FlatList data={item.messages} keyExtractor={(post) => post.id} renderItem={rendertxt} />
        {sending === true && item.id === Data[Data.length - 1].id && (
          <View style={styles.writing}>
            <Text style={styles.writingtxt}>{title} is writing...</Text>
            <Image source={images.iconelipsis} style={styles.writingelipsis} />
          </View>
        )}
      </View>
    )
  }

  const printReport = () => {
    console.log('Reported')
  }

  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <MediumThinnerButton title="Allow" />
        <View style={styles.verticalGap} />
        <MediumThinnerButton outline title="Deny" />
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
          <Image source={images.profilePicture3} style={styles.photo1} />
        </View>
        <View style={styles.text}>
          <Text numberOfLines={1} style={styles.name}>
            {title}
          </Text>
          <Text style={styles.active}>45 friends in common</Text>
        </View>
        <View style={styles.elipsis}>
          <TouchableOpacity>
            <View>
              <DropDown3
                getOption={selectionHandler}
                headerTitle="Options"
                content={['Mute notifications', 'Block user', 'Report profile']}
              />
            </View>
          </TouchableOpacity>
          <MuteNotifications
            getOption={captureOption}
            isModalVisible={MutePopUpVisible}
            onBtnPress={btnPressHandler}
            onClose={closeMutePopUp}
          />
          <ReportUser
            action={printReport}
            isModalVisible={ReportPopUpVisible}
            onBtnPress={btnPressHandler2}
            onClose={closeReportPopUp}
          />
        </View>
      </View>
    </View>
  )
}

MessageRequest.defaultProps = {}

export default MessageRequest
