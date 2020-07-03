// @flow
import React from 'react'
import { View, FlatList, Image } from 'react-native'
import styles from '../Styles/ChatScreenComponentStyles/MediaTabStyles'
import { Images } from '../../Themes'

const ImgData = [
  {
    id: '1',
    image: Images.ss1
  },
  {
    id: '2',
    image: Images.ss2
  },
  {
    id: '3',
    image: Images.ss3
  },
  {
    id: '4',
    image: Images.ss5
  },
  {
    id: '6',
    image: Images.ss6
  },
  {
    id: '7',
    image: Images.ss1
  },
  {
    id: '8',
    image: Images.ss2
  },
  {
    id: '9',
    image: Images.ss3
  },
  {
    id: '10',
    image: Images.ss4
  },
  {
    id: '11',
    image: Images.ss5
  }
]

const MediaTab = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={ImgData}
        keyExtractor={(item) => item.id}
        listKey={(post) => `${post.id}D`}
        renderItem={({ item }) => <Image source={item.image} style={styles.image} />}
      />
    </View>
  )
}

export default MediaTab
