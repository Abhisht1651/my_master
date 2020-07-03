import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../Themes/ScreenMetrics'
import CommentBox from '../../Components/CommentBox'

const displayScreen = () => {
  const styles = StyleSheet.create({
    container: {
      width: wp('100%'),
      height: hp('100%'),
      paddingLeft: wp('10%'),
      paddingTop: hp('8%')
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
          <CommentBox />
        </View>
      </ScrollView>
    </View>
  )
}

export default displayScreen
