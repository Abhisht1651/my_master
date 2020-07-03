import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Themes/ScreenMetrics'
import ShortPoll from '../../Components/ShortPoll'
import ShortPollJoin from '../../Components/ShortPollJoin'
import PollActive from '../../Components/PollActive'
import PollStory from '../../Components/PollStory'
import RelatedPoll from '../../Components/RelatedPoll'
import PollResult from '../../Components/PollResult'
import PopularPoll from '../../Components/PopularPoll'

const displayScreen = () => {
  const styles = StyleSheet.create({
    container: {
      width: wp('100%'),
      paddingLeft: wp('10%'),
      paddingTop: hp('8%'),
      backgroundColor: '#FFFFFF'
    },
    component: {
      marginTop: 40,
      width: wp('80%')
    }
  })
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.component}>
          <ShortPoll />
        </View>
        <View style={styles.component}>
          <ShortPollJoin />
        </View>
        <View style={styles.component}>
          <PollResult />
        </View>
        <View style={styles.component}>
          <PollActive />
        </View>
        <View style={styles.component}>
          <PollStory />
        </View>
        <View style={styles.component}>
          <PopularPoll />
        </View>
        <View style={styles.component}>
          <RelatedPoll />
        </View>
      </ScrollView>
    </View>
  )
}

export default displayScreen
