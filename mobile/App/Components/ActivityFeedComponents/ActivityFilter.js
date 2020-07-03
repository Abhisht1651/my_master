// @flow
import React from 'react'
import { View, Text, TouchableWithoutFeedback, Image, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { Images } from '../../Themes'
import styles from '../Styles/ActivityFeedComponentStyles/ActivityFilterStyles'
import { SmallButton } from '../Buttons/SmallButton'
import ActivityFilterType from './ActivityFilterType'

type Props = {
  closemodal: PropTypes.func,
  activityChange: PropTypes.func,
  applyChange: PropTypes.func,
  selected: Array<string>
}

const Data = [
  {
    id: '1',
    name: 'Wall Post'
  },
  {
    id: '2',
    name: 'Reaction'
  },
  {
    id: '3',
    name: 'Poll Participation'
  },
  {
    id: '4',
    name: 'Follow'
  },
  {
    id: '5',
    name: 'Add Friend'
  },
  {
    id: '6',
    name: 'Comment'
  },
  {
    id: '7',
    name: 'Boost'
  }
]

const ActivityFilter = (props: Props) => {
  const { closemodal, activityChange, applyChange, selected } = props
  return (
    <View style={styles.container}>
      <View style={styles.closecont}>
        <TouchableWithoutFeedback onPress={closemodal}>
          <Image source={Images.iconcloseblue} style={styles.closeimage} />
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.activitytypetext}>Activity Type</Text>
      <View style={styles.selecttypecont}>
        <Text style={styles.selecttypetext}>
          Select the type for filtering your friends' activity
        </Text>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ActivityFilterType item={item} activityChange={activityChange} selected={selected} />
          )}
        />
      </View>
      <View style={styles.button}>
        <SmallButton title="Apply" onPress={applyChange} />
      </View>
    </View>
  )
}

export default ActivityFilter
