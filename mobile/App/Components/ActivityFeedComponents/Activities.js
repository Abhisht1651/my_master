// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, FlatList, ImageProps } from 'react-native'
import styles from '../Styles/ActivityFeedComponentStyles/ActivitiesStyles'
import IconTop from './IconTop'
import Dropdown from './Dropdown'
import ShortestStoryline from '../StoryLineShortesCard'
import ShortPoll from '../ShortPoll'
import ActivityText from './ActivityText'

type Props = {
  source: Image,
  icontop: Image,
  user: string,
  user2: string,
  number_of_people: number,
  type: string,
  time: String,
  comment: String,
  follow: Boolean,
  followimages: Array<{ src: String, id: number, name: string }>,
  delactivity: PropTypes.func,
  id1: string,
  hideactivity: PropTypes.func,
  activitytype: string,
  icon: boolean,
  svg: Image,
  hidden: string,
  applytoggle: PropTypes.func,
  storyline: boolean,
  poll: boolean,
  storyline_description: string,
  reactiontype: string,
  poll_name: string,
  storylineprops: {
    category: string,
    type: number,
    storyTitle: string,
    date: string,
    description: string,
    source: string,
    trending: boolean,
    storyImage: ImageProps
  },
  pollprops: {
    question: string,
    votes: number,
    timeLeft: number,
    isPollActive: boolean,
    voterIcons: Array<string>
  }
}
// Note:  for icons as a profile picture, uses SVG file as PNG is not rendering well because of different sizes of icons
const Activities = (props: Props) => {
  const {
    source,
    icontop,
    user,
    user2,
    number_of_people,
    type,
    time,
    comment,
    follow,
    followimages,
    delactivity,
    id1,
    hideactivity,
    icon,
    svg,
    hidden,
    applytoggle,
    storyline,
    poll,
    storylineprops,
    pollprops,
    activitytype,
    storyline_description,
    reactiontype,
    poll_name
  } = props

  return (
    <View>
      <View>
        <View style={styles.activityid}>
          <View style={styles.profileimage}>
            {icon ? svg : <Image source={source} style={styles.profile} />}
          </View>
          {icontop && <IconTop top={icontop} />}
          <ActivityText
            user={user}
            user2={user2}
            number_of_people={number_of_people}
            type={type}
            activitytype={activitytype}
            storyline_description={storyline_description}
            reactiontype={reactiontype}
            poll_name={poll_name}
            followimages={followimages}
          />
          <View style={styles.others}>
            <View>
              <View>
                <Text style={styles.type}>{type}</Text>
              </View>
              <View style={type === 'Friends' ? styles.dot1 : styles.dot2} />
              <View style={type === 'Friends' ? styles.timealign1 : styles.timealign2}>
                <Text style={styles.time}> {time}</Text>
              </View>
            </View>
            {comment ? <Text style={styles.comment}>{comment}</Text> : <View />}
            {follow ? (
              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={followimages}
                  renderItem={({ item }) => (
                    <View>
                      <Image source={item.src} style={styles.follow} />
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            ) : (
              <View />
            )}
          </View>
          {storyline ? (
            <View style={styles.events}>
              <ShortestStoryline
                category={storylineprops.category}
                type={storylineprops.type}
                storyTitle={storylineprops.storyTitle}
                storyImage={storylineprops.storyImage}
                date={storylineprops.date}
                description={storylineprops.description}
                source={storylineprops.source}
                trending={storylineprops.trending}
              />
            </View>
          ) : (
            [
              poll ? (
                <View style={styles.events}>
                  <ShortPoll
                    question={pollprops.question}
                    voterIcons={pollprops.voterIcons}
                    votes={pollprops.votes}
                    timeLeft={pollprops.timeLeft}
                    isPollActive={pollprops.isPollActive}
                  />
                </View>
              ) : (
                <View />
              )
            ]
          )}
        </View>
      </View>
      <View style={styles.border} />
      <View style={styles.ellipse}>
        <Dropdown
          applytoggle={applytoggle}
          hidden={hidden}
          delactivity={delactivity}
          id1={id1}
          hideactivity={hideactivity}
          name1={user}
        />
      </View>
    </View>
  )
}

export default Activities
