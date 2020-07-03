// @flow
import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles/ActivityFeedComponentStyles/ActivityTextStyles'

type Props = {
  user: string,
  user2: string,
  number_of_people: number,
  type: string,
  followimages: Array<{ src: String, id: number, name: string }>,
  activitytype: string,
  storyline_description: string,
  reactiontype: string,
  poll_name: string
}

const ActivityText = (props: Props) => {
  const {
    user,
    user2,
    number_of_people,
    type,
    followimages,
    activitytype,
    storyline_description,
    reactiontype,
    poll_name
  } = props
  if (activitytype === 'Wall Post') {
    if (type === 'Friends') {
      return (
        <View style={styles.text}>
          <Text style={styles.textfont}>
            <Text style={styles.text1}>{user} </Text>
            <Text style={styles.text2}>posted a storyline in his profile</Text>
          </Text>
        </View>
      )
    }
    return (
      <View style={styles.text}>
        <Text style={styles.textfont}>
          <Text style={styles.text1}>"</Text>
          <Text style={styles.text1}>{storyline_description}</Text>
          <Text style={styles.text1}>" </Text>
          <Text style={styles.text4}>it's a </Text>
          <Text style={styles.text3}>trending storyline </Text>
          <Text style={styles.text4}>right now</Text>
        </Text>
      </View>
    )
  }
  if (activitytype === 'Reaction') {
    return (
      <View style={styles.text}>
        <Text style={styles.textfont}>
          <Text style={styles.text1}>{user} </Text>
          <Text style={styles.text4}>posted a reaction of {reactiontype}</Text>
        </Text>
      </View>
    )
  }
  if (activitytype === 'Poll Participation') {
    if (type === 'Global') {
      return (
        <View style={styles.text}>
          <Text style={styles.textfont}>
            <Text style={styles.text1}>{number_of_people} people </Text>
            <Text style={styles.text4}>are participating in a </Text>
            <Text style={styles.text3}>poll</Text>
          </Text>
        </View>
      )
    }
    return (
      <View style={styles.text}>
        <Text style={styles.textfont}>
          <Text style={styles.text1}>{user} </Text>
          <Text style={styles.text4}>participated on the poll </Text>
          <Text style={styles.text3}>{poll_name}</Text>
        </Text>
      </View>
    )
  }
  if (activitytype === 'Follow') {
    return (
      <View style={styles.text}>
        <Text style={styles.textfont}>
          <Text style={styles.text1}>{user} </Text>
          <Text style={styles.text4}>started following </Text>
          {followimages.length === 1 ? (
            <Text style={styles.text3}>{followimages[0].name}</Text>
          ) : (
            [
              followimages.length === 2 ? (
                <Text style={styles.text3}>
                  {followimages[0].name} and {followimages[1].name}
                </Text>
              ) : (
                [
                  followimages.length === 3 ? (
                    <Text style={styles.text3}>
                      {followimages[0].name}, {followimages[1].name} and {followimages[2].name}
                    </Text>
                  ) : (
                    [
                      followimages.length === 4 ? (
                        <Text style={styles.text3}>
                          {followimages[0].name}, {followimages[1].name}, {followimages[2].name} and
                          1 other
                        </Text>
                      ) : (
                        <Text style={styles.text3}>
                          {followimages[0].name}, {followimages[1].name}, {followimages[2].name} and{' '}
                          {followimages.length - 3} others
                        </Text>
                      )
                    ]
                  )
                ]
              )
            ]
          )}
        </Text>
      </View>
    )
  }
  if (activitytype === 'Add Friend') {
    return (
      <View style={styles.text}>
        <Text style={styles.textfont}>
          <Text style={styles.text1}>
            {user} and {user2}
          </Text>
          <Text style={styles.text4}> now are friends</Text>
        </Text>
      </View>
    )
  }
  if (activitytype === 'Comment') {
    return (
      <View style={styles.text}>
        <Text style={styles.textfont}>
          <Text style={styles.text1}>{user} </Text>
          <Text style={styles.text4}>commented on </Text>
          <Text style={styles.text5}>{user2}'s post</Text>
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.text}>
      <Text style={styles.textfont}>
        <Text style={styles.text1}>{user} </Text>
        <Text style={styles.text4}>boosted a comment on </Text>
        <Text style={styles.text5}>{user2}'s post</Text>
      </Text>
    </View>
  )
}

export default ActivityText
