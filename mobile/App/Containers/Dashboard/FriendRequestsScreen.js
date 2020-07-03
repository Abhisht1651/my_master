// @flow
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Platform, ScrollView } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/Dashboard/FriendRequestsScreenStyle'
import FriendRequestList from '../../Components/FriendRequestList'
import BackSVG from '../../Images/Icons/Arrow.svg'

type Props = NavigationContainerProps & {
  item: {
    id: string,
    online: boolean
  }
}

const Data = [
  {
    id: '1',
    online: true,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  },

  {
    id: '2',
    online: false,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  },

  {
    id: '3',
    online: false,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  },

  {
    id: '4',
    online: false,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  },

  {
    id: '5',
    online: false,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  },

  {
    id: '6',
    online: false,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  },
  {
    id: '7',
    online: false,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  },
  {
    id: '8',
    online: false,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  },
  {
    id: '9',
    online: false,
    name: 'Armando Santanera',
    optionalText: '48 Friends in Common',
    daysText: '1 day ago'
  }
]

const FriendRequestsScreen = (props: Props) => {
  const { navigation } = props

  // eslint-disable-next-line react/prop-types
  const renderfriends = ({ item }) => {
    return (
      <View style={styles.listComponent}>
        <FriendRequestList item={item} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={Platform.OS === 'ios' ? styles.topbarios : styles.topbar}>
        <TouchableOpacity
          style={styles.arrowComponent}
          onPress={() => navigation.navigate('NewsFeed')}>
          <BackSVG />
        </TouchableOpacity>
        <Text style={styles.topbarText}>Friend Requests</Text>
      </View>
      <View style={styles.divider} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList data={Data} renderItem={renderfriends} />
      </ScrollView>
    </View>
  )
}

export default FriendRequestsScreen
