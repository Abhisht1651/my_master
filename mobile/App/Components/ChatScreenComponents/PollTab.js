// @flow
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from '../Styles/ChatScreenComponentStyles/PollTabStyles'
import images from '../../Themes/Images'
import ShortPoll from '../ShortPoll'

type Props = {
  item: {
    question: string,
    votes: number,
    timeLeft: number,
    isPollActive: boolean,
    voterIcons: Array<string>,
    id: string,
    date: string,
    poll: {
      question: string,
      votes: number,
      timeLeft: number,
      isPollActive: boolean,
      voterIcons: Array<string>,
      id: string,
      date: string
    }
  }
}

const Data = [
  {
    id: '111',
    date: 'Today',
    poll: [
      {
        id: '1',
        question: 'Who are your favorites for the World Cup 2020?',
        votes: 54,
        timeLeft: 2,
        isPollActive: true,
        voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3]
      },
      {
        id: '2',
        question: 'Who are your favorites for the World Cup 2020?',
        votes: 54,
        timeLeft: 2,
        isPollActive: true,
        voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3]
      },
      {
        id: '3',
        question: 'Who are your favorites for the World Cup 2020?',
        votes: 54,
        timeLeft: 2,
        isPollActive: true,
        voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3]
      }
    ]
  },
  {
    id: '1111',
    date: 'Jan 15th 2020',
    poll: [
      {
        id: '11',
        question: 'Who are your favorites for the World Cup 2020?',
        votes: 54,
        timeLeft: 2,
        isPollActive: true,
        voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3]
      },
      {
        id: '12',
        question: 'Who are your favorites for the World Cup 2020?',
        votes: 54,
        timeLeft: 2,
        isPollActive: true,
        voterIcons: [images.voterIcon1, images.voterIcon2, images.voterIcon3]
      }
    ]
  }
]

const PollTab = () => {
  const renderpoll = ({ item }: Props) => {
    return (
      <View style={styles.storylinemargin}>
        <ShortPoll
          question={item.question}
          votes={item.votes}
          timeLeft={item.timeLeft}
          isPollActive={item.isPollActive}
          voterIcons={item.voterIcons}
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
            data={item.poll}
            keyExtractor={(post) => post.id}
            renderItem={renderpoll}
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

export default PollTab
