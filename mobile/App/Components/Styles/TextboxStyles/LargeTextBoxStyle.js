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
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(143, 143, 175,0.24)',
    borderRadius: 10
  },
  innerContainer: {
    flex: 1,
    maxWidth: '73.76%',
    marginLeft: scale(20),
    marginTop: verticalScale(30)
  },
  sticker: {
    backgroundColor: Colors.largetTextBoxSticker,
    height: 45,
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stickerContainer: {
    height: 60,
    alignItems: 'flex-end',
    paddingRight: 15,
    paddingBottom: 15
  },
  textInput: {
    height: '100%',
    fontSize: moderateScale(16),
    fontFamily: 'BananaGrotesk-Light',
    letterSpacing: -0.11,
    paddingTop: 0,
    textAlignVertical: 'top'
  }
})
