// /@flow
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from '../Styles/ChatScreenComponentStyles/StorylineTabStyles'
import { Images } from '../../Themes'
import Storyline from '../StoryLineShortesCard'

type Props = {
  item: {
    category: string,
    storyTitle: string,
    date: string,
    description: string,
    source: string,
    trending: boolean,
    storyImage: Image,
    date: string,
    storyline: {
      category: string,
      storyTitle: string,
      date: string,
      description: string,
      source: string,
      trending: boolean,
      storyImage: Image
    },
    id: string
  }
}

const Data = [
  {
    id: '111',
    date: 'Today',
    storyline: [
      {
        id: '1',
        seen: 50,
        total: 500,
        storyTitle: 'UK exit from the European Union',
        date: 'Sept 21, 2019',
        description: 'Ray Contreras talks about the different accents',
        source: 'Forbes',
        trending: true,
        category: 'World',
        storyImage: Images.storyImage
      },
      {
        id: '2',
        seen: 95,
        total: 500,
        storyTitle: 'UK exit from the European Union',
        date: 'Sept 21, 2019',
        description: 'Ray Contreras talks about the different accents',
        source: 'Forbes',
        trending: true,
        category: 'World',
        storyImage: Images.storyImage
      },
      {
        id: '3',
        seen: 155,
        total: 500,
        storyTitle: 'UK exit from the European Union',
        date: 'Sept 21, 2019',
        description: 'Ray Contreras talks about the different accents',
        source: 'Forbes',
        trending: true,
        category: 'World',
        storyImage: Images.storyImage
      }
    ]
  },
  {
    id: '1111',
    date: 'Jan 15th 2020',
    storyline: [
      {
        id: '11',
        seen: 50,
        total: 500,
        storyTitle: 'UK exit from the European Union',
        date: 'Sept 21, 2019',
        description: 'Ray Contreras talks about the different accents',
        source: 'Forbes',
        trending: true,
        category: 'World',
        storyImage: Images.storyImage
      },
      {
        id: '12',
        seen: 95,
        total: 500,
        storyTitle: 'UK exit from the European Union',
        date: 'Sept 21, 2019',
        description: 'Ray Contreras talks about the different accents',
        source: 'Forbes',
        trending: true,
        category: 'World',
        storyImage: Images.storyImage
      }
    ]
  }
]

const StorylineTab = () => {
  const renderstoryline = ({ item }: Props) => {
    return (
      <View style={styles.storylinemargin}>
        <Storyline
          storyTitle={item.storyTitle}
          date={item.date}
          description={item.description}
          source={item.source}
          storyImage={item.storyImage}
          trending={item.trending}
          category={item.category}
        />
      </View>
    )
  }
  const renderitem = ({ item }: Props) => {
    return (
      <View>
        <View style={styles.flatlist1cont}>
          <Text style={styles.date}>{item.date}</Text>
          <FlatList
            data={item.storyline}
            keyExtractor={(post) => post.id}
            renderItem={renderstoryline}
            listKey={(post) => `${post.id}D`}
          />
        </View>
        <View style={styles.border} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.margincontainer}>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderitem}
          listKey={(item) => `${item.id}D`}
        />
      </View>
    </View>
  )
}

export default StorylineTab
