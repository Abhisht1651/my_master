/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import SearchBarDefault from '../../Components/Searchbars/SearchBarDefault'
import Images from '../../Themes/Images'
import { LargeThinButton } from '../../Components/Buttons/LargeThinButton'

// Styles
import styles from './ScreenStyles/NewConversationStyles'
import NewConversationList from '../../Components/NewConversationList/NewConversationList'

type Props = NavigationContainerProps & {
  item: {
    name: string,
    source: string
  }
}
const Data = [
  {
    id: '1',
    name: 'Amelia Jones',
    source: Images.profile2
  },

  {
    id: '2',
    name: 'John Doe',
    source: Images.profilePicture3
  },

  {
    id: '3',
    name: 'Jim Moriarty',
    source: Images.profilePicture4
  },

  {
    id: '4',
    name: 'Ash Ketchum',
    source: Images.profilePicture
  },

  {
    id: '5',
    name: 'Richard Hendricks',
    source: Images.profile1
  },

  {
    id: '6',
    name: 'Carry Minati',
    source: Images.profilePicture2
  },

  {
    id: '7',
    name: 'John Snow',
    source: Images.profileCamera
  },

  {
    id: '8',
    name: 'Dwanye Johnson',
    source: Images.profilePicture1
  },

  {
    id: '9',
    name: 'James Anderson',
    source: Images.profilePicture3
  },

  {
    id: '10',
    name: 'Robin Van Persie',
    source: Images.profilePicture4
  }
]

const NewConversation = (props: Props) => {
  const { navigation } = props
  const renderfriends = ({ item }: Props) => {
    if (onSearchFilter(item.name) === true || search === '') {
      return <NewConversationList name={item.name} image={item.source} />
    }
    return null
  }
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
  return (
    <View style={styles.screen}>
      <View style={styles.topBox}>
        <View style={styles.topBox1}>
          <View style={styles.backbutton}>
            <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>
              <Image source={Images.arrowleft} style={styles.arrowleft} />
            </TouchableOpacity>
          </View>
          <Text style={styles.titleFont}>New Conversation</Text>
          <TouchableOpacity onPress={() => navigation.navigate('InviteFriends')}>
            <Text style={styles.importFont}>Invite</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topBox2}>
          <SearchBarDefault onSearchHandler={onSearch} />
        </View>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.listBox}>
          <ScrollView contentContainerStyle={styles.listAlign}>
            <View style={styles.list}>
              <FlatList
                data={Data}
                renderItem={renderfriends}
                showsVerticalScrollIndicator={false}
                style={styles.listElements}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <LargeThinButton title="Start" />
      </View>
    </View>
  )
}

export default NewConversation
