import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../Themes/ScreenMetrics'
import StoryLineShortCardSharedChat from '../Components/StoryLineShortCardDefualt'

const displayScreen = () => {
  const styles = StyleSheet.create({
    container: {
      width: wp('100%'),
      height: '100%',
      paddingLeft: wp('10%'),
      paddingTop: hp('8%'),
      backgroundColor: '#FFFFFF'
    },
    component: {
      marginTop: 5,
      width: wp('80%'),

      backgroundColor: 'tomato'
    }
  })
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.component}>
          <StoryLineShortCardSharedChat />
        </View>
      </ScrollView>
    </View>
  )
}

export default displayScreen
