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
    marginTop: responsiveHeight(17.71),
    height: responsiveScreenHeight(16.2),
    width: responsiveScreenWidth(58),
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  InputText: {
    width: responsiveScreenWidth(73.3)
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
  section: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeight(15)
  },
  slogan: {
    alignItems: 'center',
    marginTop: '2.5%'
  },
  sloganText: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: RFValue(22, 768),
    color: '#1F1F60'
  },
  buttonWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(4)
  },
  loginButton: {
    height: responsiveScreenHeight(7.8),
    width: '73%',
    borderRadius: 39,
    backgroundColor: '#7B46E4',
    marginTop: '0%'
  },
  buttonText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: RFValue(16, 768),
    fontWeight: 'normal'
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
  forgotPassText: {
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: RFValue(16, 768)
  },
  forgotPass: {
    marginTop: responsiveHeight(2.6)
  }
})
