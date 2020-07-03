// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Platform } from 'react-native'
import styles from '../Styles/RavenStyles/FriendReadStoryStyles'
import ListOfUsers from '../../Components/ListOfUsers/ListOfUsers'
import { Images } from '../../Themes'
import Searchbar from '../../Components/Searchbars/SearchBarDefault'

type Props = {
  item: {
    name: String,
    source: String,
    sent: String
  }
} & NavigationContainerProps

const Data = [
  {
    id: '1',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read story 2 days ago'
  },
  {
    id: '2',
    name: 'Heisenberg',
    source: Images.follow1,
    sent: 'Read story 2 days ago'
  },
  {
    id: '3',
    name: 'Black Widow',
    source: Images.profile2,
    sent: 'Read story 2 days ago'
  },
  {
    id: '4',
    name: 'Jonas Nick',
    source: Images.follow1,
    sent: 'Read story 2 days ago'
  },
  {
    id: '5',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read story 2 days ago'
  },
  {
    id: '6',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read story 2 days ago'
  },
  {
    id: '7',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read story 2 days ago'
  },
  {
    id: '8',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read story 2 days ago'
  },
  {
    id: '9',
    name: 'Amelia Jones',
    source: Images.profile1,
    sent: 'Read story 2 days ago'
  }
]

const FriendReadStory = (props: Props) => {
  const [search, setsearch] = useState('')
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
  const renderfriends = ({ item }) => {
    if (onSearchFilter(item.name) === true || search === '') {
      return (
        <View style={styles.margin}>
          <ListOfUsers
            name={item.name}
            buttonText="Message"
            optionalText={item.sent}
            image={item.source}
            type={2}
            needoptiontext
          />
        </View>
      )
    }
    return <View />
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
          <Text style={styles.headlinetext}>Friends Who Read Story</Text>
        </View>
        <View style={styles.search}>
          <Searchbar onSearchHandler={onSearch} />
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

export default FriendReadStory
