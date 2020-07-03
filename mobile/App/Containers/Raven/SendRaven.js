// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Dimensions, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../Styles/RavenStyles/SendRavenStyles'
import { LargeButton } from '../../Components/Buttons/LargeButton'
import { Images } from '../../Themes'
import CheckBoxCircular from '../../Components/RavenComponents/CheckBoxCircular'
import Storyline from '../../Components/StoryLineShortesCard'
import Searchbar from '../../Components/Searchbars/SearchBarDefault'

type Props = {
  item: {
    name: string,
    source: string,
    id: string
  }
} & NavigationContainerProps

const Width = Dimensions.get('window').width
const Data = [
  {
    id: '1',
    name: 'Joey',
    source: Images.profile2
  },
  {
    id: '2',
    name: 'Phoebe Buffay',
    group: true,
    source1: Images.profile2,
    source2: Images.profile2
  },
  {
    id: '3',
    name: 'Ross',
    source: Images.profile2
  },
  {
    id: '4',
    name: 'Monica',
    source: Images.profile2
  },
  {
    id: '5',
    name: 'Chandler',
    source: Images.profile2
  },
  {
    id: '6',
    name: 'Rachel',
    source: Images.profile2
  },
  {
    id: '7',
    name: 'Gunther',
    source: Images.profile2
  },
  {
    id: '8',
    name: 'Susanne',
    source: Images.profile2
  }
]

const SendRaven = (props: Props) => {
  const { route } = props
  const [count, setcount] = useState(0)
  const [selected, setselected] = useState([])
  const [search, setsearch] = useState('')
  const story = route.params.item
  const handleChange = (value, name) => {
    let joined = []
    const x = count
    if (value === false) {
      setcount(x + 1)
      joined = selected
      joined = joined.concat(name)
      setselected(joined)
    } else {
      setcount(x - 1)
      joined = selected
      joined = joined.filter((person) => person !== name)
      setselected(joined)
    }
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
  const renderfriends = ({ item }) => {
    if (onSearchFilter(item.name) === true || search === '') {
      return (
        <View>
          <CheckBoxCircular
            item={item}
            handleChange={handleChange}
            lastid={Data[Data.length - 1].id}
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
        <View style={styles.text}>
          <Text style={styles.sendraven}>Send a Raven</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.card}>
          <View style={styles.storyline}>
            <Storyline
              type={1}
              storyTitle={story.storyTitle}
              date={story.date}
              description={story.description}
              source={story.source}
              storyImage={story.storyImage}
              category={story.category}
              trending={story.trending}
            />
          </View>
        </View>
        <View style={styles.border1} />
        <View style={styles.status}>
          <View style={styles.readstoryfriend}>
            <View style={styles.outerbar} />
            <View
              style={[styles.innerbar, { width: (story.seen / story.total) * (296 / 375) * Width }]}
            />
          </View>
          <View style={styles.readstoryfriendcont}>
            <TouchableOpacity onPress={() => props.navigation.navigate('FriendReadStory')}>
              <View>
                <View>
                  <Text style={styles.readfriendtext}>
                    {story.seen.toString()}/{story.total.toString()} have read the storyline
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
      <View style={styles.container3}>
        <View style={styles.header}>
          {count <= 0 ? (
            <Text style={styles.friendcount}>Raven to other friends</Text>
          ) : (
            <Text style={styles.friendcount}>{count} friends selected</Text>
          )}
          {count <= 0 && (
            <View style={styles.sendtoall}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('RavenSent', {
                    selected
                  })
                }>
                <Text style={styles.sendtoalltext}>Send to all</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.search}>
            <View style={styles.bar}>
              <Searchbar onSearchHandler={onSearch} />
            </View>
            <View style={styles.flatlist}>
              <FlatList
                data={Data}
                renderItem={renderfriends}
                keyExtractor={(item) => item.id}
                style={styles.flatlistmargin}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
        <View style={styles.gradient}>
          <LinearGradient
            colors={['#FFFFFF00', '#FFFFFF']}
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}>
            <View style={styles.button}>
              <LargeButton
                title="Send"
                disabled={count <= 0}
                style={count <= 0 && styles.buttonstyle}
                onPress={() =>
                  props.navigation.navigate('RavenSent', {
                    selected
                  })
                }
              />
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

export default SendRaven
