// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Platform } from 'react-native'
import styles from '../Styles/RavenStyles/ListOfFriendsStyles'
import { Images } from '../../Themes'
import ListOfUsers from '../../Components/ListOfUsers/ListOfUsers'

type Props = {
  item: {
    name: String,
    source: String,
    sent: String,
    read: boolean
  }
} & NavigationContainerProps

const Data = [
  {
    id: '1',
    name: 'Amelia Jones',
    source: Images.profile1,
    read: true,
    sent: 'Read 2 days ago'
  },
  {
    id: '2',
    name: 'Heisenberg',
    source: Images.follow1,
    read: true,
    sent: 'Read 2 days ago'
  },
  {
    id: '3',
    name: 'Black Widow',
    source: Images.profile2,
    read: false,
    sent: ''
  },
  {
    id: '4',
    name: 'Jonas Nick',
    source: Images.follow1,
    read: false,
    sent: ''
  },
  {
    id: '5',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read 2 days ago',
    read: true
  },
  {
    id: '6',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read 2 days ago',
    read: true
  },
  {
    id: '7',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read 2 days ago',
    read: true
  },
  {
    id: '8',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read 2 days ago',
    read: true
  },
  {
    id: '9',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read 2 days ago',
    read: true
  }
]

const ListFriends = (props: Props) => {
  const renderfriends = ({ item }) => {
    return (
      <View style={item.read ? styles.whitebackground : styles.nonwhitebackground}>
        <View style={styles.margin}>
          <ListOfUsers
            name={item.name}
            buttonText="Message"
            optionalText={item.read ? item.sent : 'Unopened'}
            image={item.source}
            type={2}
            needoptiontext
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <View style={styles.topcover} />}
      <View style={styles.container1}>
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image source={Images.arrowleft} style={styles.arrowleft} />
          </TouchableOpacity>
        </View>
        <View style={styles.headline}>
          <Text style={styles.headlinetext} numberOfLines={1}>
            UK exit from European Union Market of Stocks
          </Text>
        </View>
      </View>
      <View style={styles.container2}>
        <FlatList
          data={Data}
          renderItem={renderfriends}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default ListFriends
