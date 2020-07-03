// @flow

import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Platform, ScrollView } from 'react-native'
import Proptypes from 'prop-types'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import { NavigationContainerProps } from '@react-navigation/native'
import styles from '../Styles/Dashboard/FriendsScreenStyle'
import SearchBarDefault from '../../Components/Searchbars/SearchBarDefault'
import ListOfUsers from '../../Components/ListOfUsers/ListOfUsers'
import Images from '../../Themes/Images'
import BackSVG from '../../Images/Icons/Arrow.svg'

type Props = NavigationContainerProps & {
  onPress: Proptypes.func,
  onSearchHandler: Proptypes.func,
  item: {
    name: string,
    source: string,
    sent: string,
    btnText: string
  }
}

const Data = [
  {
    id: '1',
    name: 'Amelia Jones',
    source: Images.picture,
    sent: '',
    btnText: 'Message'
  },

  {
    id: '2',
    name: 'Amelia Jones',
    source: Images.picture,
    sent: '',
    btnText: 'Message'
  },

  {
    id: '3',
    name: 'Amelia Jones',
    source: Images.picture,
    sent: '',
    btnText: 'Message'
  },

  {
    id: '4',
    name: 'Amelia Jones',
    source: Images.picture,
    sent: '',
    btnText: 'Message'
  },

  {
    id: '5',
    name: 'Amelia Jones',
    source: Images.picture,
    sent: '',
    btnText: 'Message'
  },

  {
    id: '6',
    name: 'Amelia Jones',
    source: Images.picture,
    sent: '',
    btnText: 'Message'
  }
]

const FriendsScreen = (props: Props) => {
  const { onPress, navigation, onSearchHandler } = props

  const renderfriends = ({ item }: Props) => {
    return (
      <View style={styles.friendListComponent}>
        <ListOfUsers
          name={item.name}
          optionalText={item.sent}
          image={item.source}
          buttonText={item.btnText}
          onPress={onPress}
        />
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
        <Text style={styles.topbarText}>Friends</Text>
      </View>
      <View style={styles.searchBar}>
        <SearchBarDefault onSearchHandler={onSearchHandler} />
      </View>
      <View style={styles.divider} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.friendListContainer}>
        <FlatList data={Data} renderItem={renderfriends} />
      </ScrollView>
    </View>
  )
}

FriendsScreen.defaultProps = {
  onPress: () => {},
  onSearchHandler: () => {}
}

export default FriendsScreen
