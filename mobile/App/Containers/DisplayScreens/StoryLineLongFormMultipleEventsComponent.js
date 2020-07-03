import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Themes/ScreenMetrics'
import StoryLineLongFormMultipleEvents from '../../Components/StoryLineLongFormMultipleEvents'

const displayScreen = () => {
  const styles = StyleSheet.create({
    container: {
      width: wp('100%'),
      height: hp('100%'),
      paddingLeft: wp('7%'),
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
          <StoryLineLongFormMultipleEvents />
        </View>
      </ScrollView>
    </View>
  )
}

export default displayScreen
