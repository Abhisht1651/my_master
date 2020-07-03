import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveHeight
} from 'react-native-responsive-dimensions'
import { Metrics, ApplicationStyles } from '../../../Themes'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  statusBar: { width: '100%', height: 33.5 * scaleHeight, backgroundColor: 'white' },
  logo: {
    marginTop: responsiveHeight(10),
    height: responsiveScreenHeight(16.27),
    width: responsiveScreenWidth(58),
    resizeMode: 'contain'
  },
  backArrowContainer: {
    position: 'absolute',
    top: 1.5 * scaleHeight,
    left: 27 * scaleWidth
  },
  backArrow: {
    resizeMode: 'contain',
    width: 18 * scaleWidth,
    height: 18 * scaleHeight
  },
  centered: {
    alignItems: 'center'
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeight(20)
  },

  buttonWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(6.64)
  },
  loginButton: {
    height: responsiveScreenHeight(7.8),
    width: '73%',
    borderRadius: 39,
    backgroundColor: '#7B46E4',
    marginTop: '0%'
  },
  inputText: { marginTop: 68 * scaleHeight, width: 275 * scaleWidth },
  buttonText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: RFValue(16, 768)
  },
  signUpTextMain: {
    fontSize: RFValue(18, 768),
    fontFamily: 'BananaGrotesk-Regular',
    color: '#1F1F60'
  },
  signUpTextSignUp: {
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold'
  },
  forgotText: {
    fontSize: RFValue(22, 768),
    fontFamily: 'BananaGrotesk-Medium',
    marginTop: '3%'
  },
  emailText: {
    textAlign: 'center',
    marginHorizontal: '20%',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: RFValue(16, 768),
    marginTop: '2%'
  }
})
