// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import styles from './ScreenStyles/MessageRequestConversationsStyles'
import { Images } from '../../Themes'
import Elipsis from '../../Images/Icons/icon-elipsis.svg'
import ProfilePicture from '../../Components/ProfilePicture/MediumProfilePictures/MediumProfilePicture'

type Props = {
  item: {
    id: string,
    source: Image,
    name: string,
    message: string,
    time: string,
    reaction: boolean,
    active: boolean,
    newmessage: number
  }
} & NavigationContainerProps

const Data = [
  {
    id: '1'
  },
  {
    id: '2'
  },
  {
    id: '3'
  }
]

const containertext =
  'Messages from people that are not your friends will appear here to protect your lorem ipsum.'

const MESSAGES = [
  {
    id: '6',
    src: Images.bitmap2x,
    name: 'Karim Tadja',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32'
  },
  {
    id: '7',
    src: Images.profilePicture2,
    name: 'Amelia Jones',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32'
  }
]

const MessageRequestConversations = (props: Props) => {
  const { navigation } = props
  const renderfeed = ({ item }: Props) => {
    return (
      <View style={styles.chatcont}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('MessageRequest', { title: item.name })}>
          <View>
            <View style={styles.personimage}>
              <ProfilePicture type={1} image={item.src} />
            </View>
            <View style={styles.chattext}>
              <Text style={styles.personname}>{item.name}</Text>
              <Text style={styles.chatmsg} numberOfLines={1}>
                {item.message}
              </Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
  const renderitem = ({ item }: Props) => {
    if (item.id === '1') {
      return (
        <View style={styles.header}>
          <View style={styles.backbutton}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={Images.arrowleft} style={styles.arrowleft} />
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>Message Request</Text>
          <View style={styles.elipsis}>
            <TouchableOpacity>
              <Elipsis />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (item.id === '2') {
      return (
        <View style={styles.container2}>
          <Text style={styles.container2text}>{containertext}</Text>
        </View>
      )
    }
    return (
      <View>
        <FlatList
          data={MESSAGES}
          keyExtractor={(post) => post.id}
          renderItem={renderfeed}
          listKey={(post) => `${post.id}D`}
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={renderitem}
        stickyHeaderIndices={[0]}
      />
    </View>
  )
}

export default MessageRequestConversations
