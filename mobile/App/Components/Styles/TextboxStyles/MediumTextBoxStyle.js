import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../Themes/Colors'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const scale = (size) => (width / guidelineBaseWidth) * size
const verticalScale = (size) => (height / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
  innerContainer: {
    width: '100%',
    flex: 1,
    marginTop: moderateScale(25),
    backgroundColor: Colors.textBoxBackground,
    borderRadius: 10
  },
  header: {
    width: '100%',
    height: verticalScale(18)
  },
  headerText: {
    padding: 0,
    textAlignVertical: 'top',
    color: Colors.textBoxHeader,
    fontSize: moderateScale(18),
    fontFamily: 'Helvetica',
    letterSpacing: -0.12
  },
  innerContainerText: {
    padding: 0,
    marginTop: verticalScale(21),
    marginLeft: '6.17%',
    textAlignVertical: 'top',
    height: '92.90%',
    width: '73.76%',
    fontFamily: 'Helvetica',
    letterSpacing: -0.11,
    fontSize: moderateScale(16)
  }
})
