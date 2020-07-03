import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Themes/ScreenMetrics'
import StoryLineShortestCard from '../../Components/StoryLineShortesCard'
import StoryLineShortCardDefault from '../../Components/StoryLineShortCardDefualt'
import StoryLineLongFormSingleEvent from '../../Components/StoryLineLongFormSingleEvent'
import StorySharedCard from '../../Components/StoryLineShortCardSharedChat'
import TimelineMajorEvent from '../../Components/StoryLineMajorEventCard'

const displayScreen = () => {
  const styles = StyleSheet.create({
    container: {
      width: wp('100%'),
      height: hp('100%'),
      paddingLeft: wp('10%'),
      paddingTop: hp('8%'),
      backgroundColor: '#FFFFFF'
    },
    component: {
      marginTop: 40,
      width: wp('80%')
    },
    defualtCard: {
      width: wp('80%'),
      height: wp('85.867%'),
      marginTop: 20
    }
  })
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.component}>
          <TimelineMajorEvent />
        </View>
        <View style={styles.component}>
          <StoryLineShortestCard />
        </View>
        <View style={styles.defualtCard}>
          <StoryLineShortCardDefault />
        </View>
        <View style={styles.component}>
          <StoryLineLongFormSingleEvent />
        </View>
        <View style={styles.component}>
          <StorySharedCard />
        </View>
      </ScrollView>
    </View>
  )
}

export default displayScreen
