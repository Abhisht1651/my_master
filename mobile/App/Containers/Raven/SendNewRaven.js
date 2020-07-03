// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, Platform } from 'react-native'
import { Images } from '../../Themes'
import styles from '../Styles/RavenStyles/SendNewRavenStyles'
import StoryLine from '../../Components/StoryLineShortesCard'

type Props = {
  item: {
    seen: Number,
    total: Number,
    id: String
  }
} & NavigationContainerProps

const Width = Dimensions.get('window').width
const Data = [
  {
    id: '1',
    seen: 50,
    total: 500,
    category: 'World',
    storyTitle: 'UK exit from the European Union',
    date: 'Sept 21, 2019',
    description: 'Ray Contreras talks about the different accents',
    source: 'Forbes',
    trending: true,
    storyImage: Images.storyImage
  },
  {
    id: '2',
    seen: 95,
    total: 500,
    category: 'World',
    storyTitle: 'UK exit from the European Union',
    date: 'Sept 21, 2019',
    description: 'Ray Contreras talks about the different accents',
    source: 'Forbes',
    trending: true,
    storyImage: Images.storyImage
  },
  {
    id: '3',
    seen: 155,
    total: 500,
    category: 'World',
    storyTitle: 'UK exit from the European Union',
    date: 'Sept 21, 2019',
    description: 'Ray Contreras talks about the different accents',
    source: 'Forbes',
    trending: true,
    storyImage: Images.storyImage
  },
  {
    id: '4',
    seen: 500,
    total: 500,
    category: 'World',
    storyTitle: 'UK exit from the European Union',
    date: 'Sept 21, 2019',
    description: 'Ray Contreras talks about the different accents',
    source: 'Forbes',
    trending: true,
    storyImage: Images.storyImage
  },
  {
    id: '5',
    seen: 350,
    total: 500,
    category: 'World',
    storyTitle: 'UK exit from the European Union',
    date: 'Sept 21, 2019',
    description: 'Ray Contreras talks about the different accents',
    source: 'Forbes',
    trending: true,
    storyImage: Images.storyImage
  },
  {
    id: '6',
    seen: 45,
    total: 500,
    category: 'World',
    storyTitle: 'UK exit from the European Union',
    date: 'Sept 21, 2019',
    description: 'Ray Contreras talks about the different accents',
    source: 'Forbes',
    trending: true,
    storyImage: Images.storyImage
  },
  {
    id: '7',
    seen: 415,
    total: 500,
    category: 'World',
    storyTitle: 'UK exit from the European Union',
    date: 'Sept 21, 2019',
    description: 'Ray Contreras talks about the different accents',
    source: 'Forbes',
    trending: true,
    storyImage: Images.storyImage
  },
  {
    id: '8',
    seen: 450,
    total: 500,
    category: 'World',
    storyTitle: 'UK exit from the European Union',
    date: 'Sept 21, 2019',
    description: 'Ray Contreras talks about the different accents',
    source: 'Forbes',
    trending: true,
    storyImage: Images.storyImage
  }
]
const SendNewRaven = (props: Props) => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <View style={styles.topcover} />}
      <View style={styles.container1}>
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image source={Images.arrowleft} style={styles.arrowleft} />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.sendraven}>Send a Raven</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={styles.flatlistcont}>
              <View style={styles.card}>
                <TouchableOpacity onPress={() => props.navigation.navigate('SendRaven', { item })}>
                  <StoryLine
                    type={1}
                    storyTitle={item.storyTitle}
                    date={item.date}
                    description={item.description}
                    source={item.source}
                    storyImage={item.storyImage}
                    category={item.category}
                    trending={item.trending}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.border} />
              <View style={styles.status}>
                <View style={styles.readstoryfriend}>
                  <View style={styles.outerbar} />
                  <View
                    style={[
                      styles.innerbar,
                      { width: (item.seen / item.total) * (296 / 375) * Width }
                    ]}
                  />
                </View>
                <View style={styles.readstoryfriendcont}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('FriendReadStory')}>
                    <View>
                      <View>
                        <Text style={styles.readfriendtext}>
                          {item.seen}/{item.total} have read the storyline
                        </Text>
                      </View>
                      <View style={styles.chevron}>
                        <Image source={Images.right} style={styles.right} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={styles.flatlist}
        />
      </View>
    </View>
  )
}

export default SendNewRaven
