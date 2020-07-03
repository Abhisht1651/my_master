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
  resetPasswordText: {
    fontSize: RFValue(22, 768),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    marginTop: responsiveHeight(2.9)
  },
  sectionRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '23%'
  },
  TextInputWidth: {
    width: 275 * scaleWidth
  },
  checkmark: { position: 'absolute', right: 0, tintColor: '#08C981' },
  topsectionMargin: {
    marginTop: 82 * scaleHeight
  },
  warningContainer: {
    marginTop: 5 * scaleHeight,
    height: 14 * scaleHeight,
    justifyContent: 'center'
  },
  dirRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  warningText: {
    fontSize: scaledSize(14),
    fontFamily: 'BananaGrotesk-Regular',
    color: '#FF1742'
  },
  textMarginWarning: {
    marginTop: 15 * scaleHeight
  },
  weak: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#FF1742',
    textAlign: 'center',
    fontSize: RFValue(16, 768)
  },
  good: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#FFC300',
    textAlign: 'center',
    fontSize: RFValue(16, 768)
  },
  strong: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#08C981',
    textAlign: 'center',
    fontSize: RFValue(16, 768)
  },
  buttonWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50 * scaleHeight
  },
  loginButton: {
    height: responsiveScreenHeight(7.9),
    width: responsiveScreenWidth(73),
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
  }
})
