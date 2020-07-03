import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const guidelineBaseWidth = 375
// const guidelineBaseHeight = 812

const scale = (size) => (width / guidelineBaseWidth) * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

export default StyleSheet.create({
  card: {
    height: 329,
    width: '86.66%',
    maxWidth: '86.66%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15
  },
  closeIconContainer: {
    marginTop: 23.25,
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
    marginTop: 3.97,
    alignItems: 'center'
  },
  text1: {
    fontSize: moderateScale(20),
    color: '#1F1F60',
    letterSpacing: -0.14,
    fontFamily: 'BananaGrotesk-Bold'
  },
  text2: {
    width: 170,
    height: 45,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22.5,
    color: '#262676',
    letterSpacing: -0.11,
    marginTop: 6,
    fontFamily: 'BananaGrotesk-Light'
  },
  infoText: {
    width: '100%',
    height: 70,
    fontSize: 14,
    lineHeight: 23,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Light',
    marginTop: 23,
    textAlign: 'center'
  },
  blockButtonContainer: {
    height: 50,
    width: '84%',
    marginTop: 38,
    backgroundColor: '#7B46E4',
    borderRadius: 39,
    alignItems: 'center',
    justifyContent: 'center'
  },
  blockButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: -0.09,
    fontFamily: 'BananaGrotesk-Bold'
  },
  imageStyle: {
    height: 19,
    width: 19,
    tintColor: '#1E1E60'
  }
})
