// @flow

import React from 'react'
import { Text, View, TouchableOpacity, Platform, ScrollView } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import { Images } from '../Themes'
import styles from '../Components/Notifications/Styles/NotificationsStyles'

import LiveStoryline from '../Components/Notifications/LiveStoryline'
import BreakingNews from '../Components/Notifications/BreakingNews'
import NewEvent from '../Components/Notifications/NewEvent'
import Recommend from '../Components/Notifications/Recommend'
import Shared from '../Components/Notifications/Shared'
import Posted from '../Components/Notifications/Posted'
import TagInComment from '../Components/Notifications/TagInComment'
import TagInPost from '../Components/Notifications/TagInPost'
import AcceptFriendRequest from '../Components/Notifications/AcceptFriendRequest'
import SentFriendRequest from '../Components/Notifications/SentFriendRequest'
import NewEventPerson from '../Components/Notifications/NewEventPerson'
import ReplyComment from '../Components/Notifications/ReplyComment'
import BoostPost from '../Components/Notifications/BoostPost'
import SentRaven from '../Components/Notifications/SentRaven'
import OpenedRaven from '../Components/Notifications/OpenedRaven'
import BackSVG from '../Images/Icons/Arrow.svg'

type Props = NavigationContainerProps & {}

const Notifications = (props: Props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View style={Platform.OS === 'ios' ? styles.topbarios : styles.topbar}>
        <TouchableOpacity
          style={styles.arrowComponent}
          onPress={() => navigation.navigate('NewsFeed')}>
          <BackSVG />
        </TouchableOpacity>
        <Text style={styles.topbarText}>Notifications</Text>
      </View>
      <ScrollView>
        <BreakingNews
          story="This is the name of the storyline which can be 2 lines long"
          people="23K"
          time="2 days"
        />
        <LiveStoryline
          story="This is the name of the storyline which can be 2 lines long"
          people="23K"
          time="2 days"
        />
        <NewEvent
          story="This is the name of the storyline which can be 2 lines long"
          people="23K"
          time="2 days"
        />
        <ReplyComment
          seen
          time="6 hr"
          name="Cathlyn Linn"
          story="Name of the Storyline"
          img={Images.sean}
        />
        <BoostPost
          seen
          time="6 hr"
          name="Cathlyn Linn"
          story="Name of the Storyline"
          img={Images.sean}
        />
        <NewEventPerson seen time="5 hr" name="Donald Trump" people="50K" img={Images.trump} />
        <Recommend
          time="20 min"
          name="This is the name of the storyline can be 2 lines long"
          people="1K"
        />
        <SentRaven seen time="2 days" name="Mia lewis" img={Images.amanda} />
        <OpenedRaven time="2 days" name="Mia lewis" img={Images.amanda} />
        <SentFriendRequest />
        <AcceptFriendRequest />
        <TagInPost
          seen
          name="Sean Coresdd"
          post="Name of the post"
          time="43 min"
          img={Images.sean}
        />
        <TagInComment
          seen
          name="Sean Coresdd"
          story="Name of the storyline"
          time="43 min"
          img={Images.sean}
        />
        <Posted
          seen
          name="Sean Coresddrr"
          post="Name of the post"
          time="43 min"
          img={Images.sean}
        />
        <Shared
          name="Sean Williams"
          story="Name of the StoryLine"
          time="43 min"
          people={62}
          img={Images.sean}
        />
      </ScrollView>
    </View>
  )
}

export default Notifications
