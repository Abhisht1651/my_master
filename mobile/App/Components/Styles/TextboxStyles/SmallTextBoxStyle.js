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
    borderRadius: 10
  },
  innerContainer: {
    width: '100%',
    flex: 1,
    marginTop: verticalScale(12),
    backgroundColor: Colors.textBoxBackground,
    borderRadius: 10
  },
  header: {
    width: '100%',
    height: verticalScale(18)
  },
  headerText: {
    padding: 0,
    margin: 0,
    color: Colors.textBoxHeader,
    fontSize: moderateScale(16),
    letterSpacing: -0.11,
    fontFamily: 'BananaGrotesk-Regular'
  },
  innerContainerText: {
    paddingTop: 0,
    marginLeft: '5.43%',
    marginTop: verticalScale(20),
    height: verticalScale(82),
    width: '94.20%',
    fontSize: moderateScale(14),
    fontFamily: 'BananaGrotesk-Light',
    textAlignVertical: 'top'
  }
})
