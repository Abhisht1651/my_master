import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const scale = (size) => (width / guidelineBaseWidth) * size
const verticalScale = (size) => (height / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

export default StyleSheet.create({
  card: {
    height: verticalScale(553),
    width: '87.69%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15
  },
  closeIconContainer: {
    marginTop: verticalScale(20),
    height: 19,
    width: '84%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  modalStyle: {
    backgroundColor: '#2222234D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    width: '82.71%',
    height: verticalScale(110),
    marginTop: verticalScale(11.5),
    alignItems: 'center'
  },
  text1: {
    fontSize: moderateScale(20),
    color: '#1F1F60',
    letterSpacing: -0.14,
    fontFamily: 'BananaGrotesk-Bold'
  },
  text2: {
    width: 260,
    height: 45,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22.5,
    color: '#262676',
    letterSpacing: -0.11,
    marginTop: verticalScale(2),
    fontFamily: 'BananaGrotesk-Light'
  },
  optionsContainer: {
    width: '84.61%',
    height: verticalScale(140),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  options: {
    height: verticalScale(46),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  optionText: {
    width: '88%',
    fontSize: moderateScale(14),
    color: '#262676',
    fontFamily: 'BananaGrotesk-Light'
  },
  textBoxContainer: {
    height: verticalScale(113),
    width: '84.61%',
    marginTop: verticalScale(28)
  },
  textBox: {
    flex: 1,
    backgroundColor: '#F5F8F8',
    borderRadius: 15,
    textAlignVertical: 'top',
    paddingLeft: '5%',
    paddingTop: verticalScale(17),
    color: '#000080'
  },
  submitButtonContainer: {
    height: 50,
    width: '84%',
    marginTop: verticalScale(26),
    backgroundColor: '#7B46E4',
    borderRadius: 39,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: -0.09,
    fontFamily: 'BananaGrotesk-Bold'
  },
  imageStyle: {
    height: 19,
    width: 19,
    tintColor: '#1E1E60'
  },
  checkBox: {
    height: verticalScale(25),
    aspectRatio: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#8F8FAF',
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '3%'
  }
})
