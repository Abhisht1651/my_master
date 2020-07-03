import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
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
  logo: {
    marginTop: 92 * scaleHeight,

    height: 125 * scaleHeight,
    width: 217 * scaleHeight,
    resizeMode: 'contain'
  },
  statusBar: { width: '100%', height: 33.5 * scaleHeight, backgroundColor: 'white' },
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
  slogan: {
    alignItems: 'center',
    marginTop: '2.5%'
  },
  TextInputMargin: {
    marginTop: 33 * scaleHeight
  },
  TextInputWidth: {
    width: 275 * scaleWidth
  },
  sloganText: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: RFValue(22, 768),
    color: '#1F1F60'
  },
  topSection: {
    marginTop: 45 * scaleHeight
  },
  bottomSection: { marginTop: 55 * scaleHeight },
  sectionRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50 * scaleHeight
  },
  buttonWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%'
  },
  loginButton: {
    height: responsiveScreenHeight(7.8),
    width: responsiveScreenWidth(73),
    borderRadius: 39,
    backgroundColor: '#7B46E4',
    marginTop: '7.8%',
    marginBottom: '0%'
  },
  loginButtonDisabled: {
    height: responsiveScreenHeight(7.8),
    width: responsiveScreenWidth(73),
    borderRadius: 39,
    backgroundColor: '#7B46E4',
    marginTop: '7.8%',
    marginBottom: '0%',
    opacity: 0.4
  },
  buttonText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: RFValue(16, 768)
  },
  checkBoxSection: {
    marginHorizontal: responsiveScreenWidth(13.6),
    marginTop: 41 * scaleHeight,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  checkBoxStyle: {
    color: '#7B46E4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7B46E4',
    margin: 0
  },
  checkBoxLabelMain: {
    marginLeft: '2.7%',
    fontSize: RFValue(14, 768),
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF'
  },
  checkmark: { position: 'absolute', right: 0, tintColor: '#08C981' },
  checkBoxLabelTerms: {
    color: '#7B46E4'
  },
  warningContainer: {
    marginTop: 5 * scaleHeight,
    height: 14 * scaleHeight,
    justifyContent: 'center'
  },
  textMarginWarning: {
    marginTop: 15 * scaleHeight
  },
  dirRow: {
    flexDirection: 'row',
    alignItems: 'center'
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
  warningText: {
    fontSize: scaledSize(14),
    fontFamily: 'BananaGrotesk-Regular',
    color: '#FF1742'
  },
  signInTextMain: {
    fontSize: RFValue(18, 768),
    fontFamily: 'BananaGrotesk-Regular',
    color: '#1F1F60'
  },
  signInTextLogin: {
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold'
  }
})
