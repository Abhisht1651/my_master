import { StyleSheet, Dimensions } from 'react-native'

import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)
export default StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  statusBar: { width: '100%', height: 33.5 * scaleHeight, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25 * scaleWidth,
    height: 58 * scaleHeight
  },
  modalContainer: {
    position: 'absolute',
    backgroundColor: '#2222234D',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: scaledSize(20),
    width: responsiveScreenWidth(87),
    height: responsiveScreenHeight(44),

    alignItems: 'center'
  },
  rowView: {
    flexDirection: 'row'
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: scaledSize(16)
  },
  modalHeading: {
    textAlign: 'center',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: scaledSize(20) + 2,
    letterSpacing: -0.14,

    color: '#1F1F60'
  },
  modalTextK: {
    marginTop: 50 * scaleHeight,
    textAlign: 'center',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: scaledSize(16) + 2,
    marginHorizontal: 57 * scaleWidth,
    marginBottom: 25.5 * scaleHeight,
    color: '#1F1F60',
    letterSpacing: -0.11
  },
  modalText: {
    marginTop: 80 * scaleHeight,
    textAlign: 'center',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: scaledSize(18),
    marginHorizontal: 90 * scaleWidth,
    marginBottom: 147 * scaleHeight,
    color: '#1F1F60',
    letterSpacing: -0.11
  },
  backArrow: {
    resizeMode: 'contain',
    width: 18 * scaleWidth,
    height: 18 * scaleHeight
  },
  modalButtonNK: { marginTop: 300 * scaleHeight },
  modalButtonK: { marginTop: 40 * scaleHeight },
  loginButton: {
    height: responsiveScreenHeight(6.5),
    width: responsiveScreenWidth(73),
    borderRadius: scaledSize(39),
    backgroundColor: '#7B46E4',
    marginTop: responsiveScreenHeight(2.8)
  },
  otpTimer: { color: '#1F1F60', marginTop: 5 * scaleHeight },
  offTint: { borderBottomWidth: 1, borderColor: '#DCDCE9' },
  inputText: {
    height: responsiveScreenHeight(7),
    width: 34 * scaleWidth,
    marginLeft: 10 * scaleWidth,
    textAlign: 'center',
    fontSize: scaledSize(35),
    fontFamily: 'BananaGrotesk-Bold',
    color: '#1F1F60',
    padding: 0,
    margin: 0
  },
  cross: {
    width: responsiveScreenWidth(4.61),
    height: responsiveScreenHeight(4.61),
    tintColor: '#7B46E4',
    resizeMode: 'contain'
  },
  crossContainer: {
    position: 'absolute',
    right: responsiveScreenWidth(7),
    top: responsiveScreenHeight(2.9)
  },
  coden: {
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: scaledSize(16),
    color: '#1F1F60'
  },
  otpresend: {
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: scaledSize(16),
    color: '#7B46E4'
  },
  resendContainer: {
    height: 45 * scaleHeight,
    width: 224 * scaleWidth,
    alignItems: 'center',
    marginTop: 24 * scaleHeight
  }
})
