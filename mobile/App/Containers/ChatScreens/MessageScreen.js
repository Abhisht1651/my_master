// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { Images } from '../../Themes'
import styles from './ScreenStyles/MessageScreenStyles'
import { BottomNav } from '../../Components/BottomNav'
import Searchbar from '../../Components/Searchbars/SearchBarDefault'
import ProfilePicture from '../../Components/ProfilePicture/MediumProfilePictures/MediumProfilePicture'
import ListOfUser from '../../Components/ListOfUsers/ListOfUsers'

type Props = {
  item: {
    id: string,
    source: Image,
    name: string,
    message: string,
    time: string,
    reaction: boolean,
    active: boolean,
    newmessage: number,
    isGroup: boolean
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

const MESSAGES = [
  {
    id: '6',
    src: Images.bitmap2x,
    name: 'Karim Tadja',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32',
    reaction: true,
    active: true,
    newmessage: 7,
    isGroup: false
  },
  {
    id: '7',
    src: Images.profilePictureSmall,
    name: 'The Coolz Gangzz',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32',
    reaction: false,
    active: true,
    newmessage: 5,
    isGroup: true
  },
  {
    id: '8',
    src: Images.bitmap2x,
    name: 'John Snow',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32',
    reaction: true,
    active: false,
    newmessage: 0,
    isGroup: false
  },
  {
    id: '9',
    src: Images.profileCamera,
    name: 'PhoToMaNiax',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32',
    reaction: false,
    active: false,
    newmessage: 15,
    isGroup: true
  },
  {
    id: '10',
    src: Images.bitmap2x,
    name: 'Hank Schrader',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32',
    reaction: true,
    active: true,
    newmessage: 0,
    isGroup: false
  },
  {
    id: '11',
    src: Images.bitmap2x,
    name: 'Jesse Pinkman',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32',
    reaction: true,
    active: true,
    newmessage: 0,
    isGroup: false
  },
  {
    id: '12',
    src: Images.bitmap2x,
    name: 'Gustavo Fring',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32',
    reaction: false,
    active: true,
    newmessage: 0,
    isGroup: false
  },
  {
    id: '13',
    src: Images.bitmap2x,
    name: 'Skyler White',
    message: "Hey did you hear about Ross's fifth divorce",
    time: '11:32',
    reaction: true,
    active: false,
    newmessage: 0,
    isGroup: false
  }
]

const ContactData = [
  {
    id: '1005',
    name: 'Voldemort'
  },
  {
    id: '1006',
    name: 'Severus Snape'
  },
  {
    id: '1007',
    name: 'Ron Weisley'
  }
]

const emptytxt = ''

const MessageScreen = (props: Props) => {
  const { navigation } = props
  const [newraven] = useState(13)
  const [newmessage] = useState(45)
  const [request] = useState(1)
  const [bottomnav, setbottomnav] = useState(true)
  const [search, setsearch] = useState('')

  // bottomnav hiding on keyboard pop up and emerges on closing
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    // cleanUp function
    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow)
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide)
    }
  }, [])

  const keyboardDidShow = () => {
    setbottomnav(false)
  }

  const keyboardDidHide = () => {
    setbottomnav(true)
  }

  const onSearch = (value) => {
    setsearch(value)
  }

  const onSearchFilter = (name) => {
    const name_arr = name.split(' ')
    const searched = search.toUpperCase()
    const search_len = searched.length
    for (let i = 0; i < name_arr.length; i += 1) {
      if (search_len <= name_arr[i].length) {
        const sub_str = name_arr[i].substring(0, search_len)
        if (sub_str.toUpperCase() === searched) {
          return true
        }
      }
    }
    if (name.length >= search_len) {
      const sub_str = name.substring(0, search_len)
      if (sub_str.toUpperCase() === searched) {
        return true
      }
    }
    return false
  }

  const renderfeed = ({ item }: Props) => {
    let picturetype
    if (item.reaction === false && item.active === false) {
      picturetype = 1
    } else if (item.reaction === true && item.active === false) {
      picturetype = 2
    } else if (item.reaction === false && item.active === true) {
      picturetype = 3
    } else {
      picturetype = 4
    }
    if (onSearchFilter(item.name) === true || search === '') {
      return (
        <View style={styles.chatcont}>
          <TouchableWithoutFeedback
            onPress={() =>
              item.isGroup === false
                ? navigation.navigate('IndividualChat', { title: item.name })
                : navigation.navigate('Chat2', { title: item.name })
            }>
            <View>
              <View style={styles.personimage}>
                <ProfilePicture type={picturetype} image={item.src} />
              </View>
              <View style={styles.chattext}>
                <Text style={styles.personname}>{item.name}</Text>
                <Text style={styles.chatmsg} numberOfLines={1}>
                  {item.message}
                </Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
              {item.newmessage > 0 && (
                <View style={styles.newmessagechat}>
                  <Text style={styles.newmessagecount}>{item.newmessage}</Text>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }
    return <View />
  }
  const rendercontacts = ({ item }: Props) => {
    if (onSearchFilter(item.name) === true || search === '') {
      return (
        <View style={styles.chatcont1}>
          <ListOfUser name={item.name} optionalText="Based on your contacts" buttonText="Invite" />
        </View>
      )
    }
    return <View />
  }
  const renderitem = ({ item }: Props) => {
    if (item.id === '1') {
      return (
        <View style={styles.container1}>
          <View style={styles.ravencontext}>
            <TouchableOpacity onPress={() => navigation.navigate('RavenAll')}>
              <View>
                <View style={styles.ravencont}>
                  <Text style={styles.raventext}>Ravens</Text>
                </View>
                {newraven > 0 && (
                  <View style={styles.newraven}>
                    <Text style={styles.newravencount}>{newraven}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.messagecontext}>
            <TouchableOpacity>
              <View style={styles.messagecont}>
                <Text style={styles.messagetext}>Messages</Text>
              </View>
              {newmessage > 0 && (
                <View style={styles.newmessage}>
                  <Text style={styles.newmessagecount}>{newmessage}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.writecont}>
            <TouchableOpacity onPress={() => navigation.navigate('NewConversation')}>
              <Image source={Images.write} style={styles.writeimage} />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    if (item.id === '2') {
      return (
        <View style={styles.container2}>
          <View style={styles.searchbarstyle}>
            <Searchbar onSearchHandler={onSearch} />
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container3}>
        {request > 0 && (
          <TouchableOpacity
            style={styles.request}
            onPress={() => navigation.navigate('MessageRequestConversation')}>
            <View>
              {request === 1 ? (
                <Text style={styles.requesttext}>{request} Request</Text>
              ) : (
                <Text style={styles.requesttext}>{request} Requests</Text>
              )}
              <Image source={Images.right_purple} style={styles.right} />
            </View>
          </TouchableOpacity>
        )}
        <FlatList
          data={MESSAGES}
          keyExtractor={(post) => post.id}
          renderItem={renderfeed}
          listKey={(post) => `${post.id}D`}
        />
        {search !== emptytxt && (
          <View>
            <Text style={styles.basedcontacttext}>Based on your contacts</Text>
            <FlatList
              data={ContactData}
              keyExtractor={(post) => post.id}
              renderItem={rendercontacts}
              listKey={(post) => `${post.id}D`}
            />
          </View>
        )}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.supercontainer}>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderitem}
          stickyHeaderIndices={[1]}
        />
      </View>
      {bottomnav && (
        <View style={styles.footer}>
          <BottomNav
            chats
            activityonPress={() => props.navigation.navigate('ActivityFeed')}
            newsfeedonPress={() => props.navigation.navigate('NewsFeed')}
            searchonPress={() => props.navigation.navigate('Discover')}
          />
        </View>
      )}
    </View>
  )
}

export default MessageScreen
