// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Platform } from 'react-native'
import { Images } from '../../Themes'
import styles from '../Styles/RavenStyles/RavenAllStyles'
import { BottomNav } from '../../Components/BottomNav'
import RavenFeed from '../../Components/RavenComponents/RavenFeed'
import Dropdown from '../../Components/RavenComponents/Ravendropdown'

type Props = {
  item: {
    images: Array<Image>,
    friendcount: number,
    sent: Boolean,
    sentimages: Array<Image>,
    sentravenperson: string,
    ravenimage: Image
  }
} & NavigationContainerProps
const Data = [
  {
    id: '1',
    name: 'Amelia Jones',
    images: [Images.profile1, Images.profile2, Images.follow1],
    sent: true,
    sentimages: [Images.profile2, Images.follow1, Images.profile1],
    sentravenperson: 'Paul Reith & 10 others',
    friendcount: 69,
    storylineitem: {
      reach: 47,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  },
  {
    id: '2',
    name: 'Amelia Jones',
    profilesource: Images.profile1,
    images: [Images.profile1, Images.profile2],
    sent: false,
    friendcount: 69,
    storylineitem: {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  },
  {
    id: '3',
    name: 'Amelia Jones',
    profilesource: Images.profile1,
    images: [Images.profile1, Images.profile2, Images.follow1],
    sent: false,
    friendcount: 69,
    storylineitem: {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  },
  {
    id: '4',
    name: 'Amelia Jones',
    profilesource: Images.profile1,
    images: [Images.profile1, Images.profile2, Images.follow1],
    sent: false,
    friendcount: 69,
    storylineitem: {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  },
  {
    id: '5',
    name: 'Amelia Jones',
    profilesource: Images.profile1,
    images: [Images.profile1, Images.profile2, Images.follow1],
    sent: false,
    friendcount: 69,
    storylineitem: {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  },
  {
    id: '6',
    name: 'Amelia Jones',
    profilesource: Images.profile1,
    images: [Images.profile1, Images.profile2, Images.follow1],
    sent: false,
    friendcount: 69,
    storylineitem: {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: 45,
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  },
  {
    id: '7',
    name: 'Amelia Jones',
    ravenimage: Images.lightfill,
    sentimages: [Images.profile2, Images.profile1],
    sentravenperson: 'Amelia Jones',
    sent: true,
    friendcount: 69,
    storylineitem: {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: 45,
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  },
  {
    id: '8',
    name: 'Amelia Jones',
    profilesource: Images.profile1,
    images: [Images.profile1, Images.profile2, Images.follow1],
    sent: false,
    friendcount: 69,
    storylineitem: {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: 45,
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  },
  {
    id: '9',
    name: 'Amelia Jones',
    profilesource: Images.profile1,
    images: [Images.profile1, Images.profile2, Images.follow1],
    sent: false,
    friendcount: 69,
    storylineitem: {
      reach: 45,
      heading: 'World',
      storyTitle: 'UK exit from the European Union',
      friendsFollowing: '45 friends Following',
      updatedTime: '2m',
      following: true,
      trending: true,
      storyImage: Images.storyImage
    },
    item: {
      seen: 50,
      total: 500,
      category: 'World',
      storyTitle: 'UK exit from the European Union',
      date: 'Sept 21, 2019',
      description: 'Ray Contreras talks about the different accents',
      source: 'Forbes',
      trending: true,
      storyImage: Images.storyImage
    }
  }
]

const RavenAll = (props: Props) => {
  const { navigation } = props
  const [modal, setmodal] = useState(false)
  const [newraven] = useState(13)
  const [newmessage] = useState(45)
  const flatlist = useRef<FlatList>()
  const [type, settype] = useState('Filter by')
  const applyModal = () => {
    setmodal(!modal)
  }
  const applyType = (filter) => {
    settype(filter)
    applyModal()
    flatlist.current.scrollToOffset({
      y: 0,
      animated: true
    })
  }
  const renderfeed = ({ item }: Props) => {
    if (
      type === 'All' ||
      type === 'Filter by' ||
      (type === 'Sent' && item.sent === true) ||
      (type === 'Received' && item.sent === false)
    ) {
      return (
        <View>
          <RavenFeed
            images={item.images}
            storylineitem={item.storylineitem}
            friendcount={item.friendcount}
            sent={item.sent}
            sentimages={item.sentimages}
            ravensentperson={item.sentravenperson}
            ravenfriends={() => props.navigation.navigate('ListOfFriends')}
            sendmorefriends={() => props.navigation.navigate('SendRaven', { item: item.item })}
            ravenimage={item.ravenimage}
          />
        </View>
      )
    }
    return <View />
  }
  return (
    <View style={styles.container}>
      <View style={styles.supercontainer}>
        {Platform.OS === 'ios' && <View style={styles.topcover} />}
        <View style={styles.container1}>
          <View style={styles.ravencontext}>
            <TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate('Message')}>
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
            <TouchableOpacity onPress={() => props.navigation.navigate('SendNewRaven')}>
              <Image source={Images.write} style={styles.writeimage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2} />
        <View style={styles.container3}>
          <FlatList
            ref={flatlist}
            data={Data}
            renderItem={renderfeed}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={Platform.OS === 'ios' ? styles.iconsvg2 : styles.iconsvg}>
          <Dropdown applyModal={applyModal} applyType={applyType} type={type} modal={modal} />
        </View>
      </View>
      <View style={styles.footer}>
        <BottomNav
          chats
          activityonPress={() => props.navigation.navigate('ActivityFeed')}
          newsfeedonPress={() => props.navigation.navigate('NewsFeed')}
          searchonPress={() => props.navigation.navigate('Discover')}
        />
      </View>
    </View>
  )
}

export default RavenAll
