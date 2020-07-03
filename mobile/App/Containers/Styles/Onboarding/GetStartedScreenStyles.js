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
  statusBar: { width: '100%', height: 33.5 * scaleHeight, backgroundColor: 'white' },
  logo: {
    marginTop: responsiveScreenHeight(17.8),

    height: responsiveScreenHeight(17),
    width: responsiveScreenWidth(58),
    resizeMode: 'contain'
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
  sloganText: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: RFValue(22, 768),
    color: '#1F1F60'
  },
  buttonWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveScreenHeight(22.14)
  },
  getStartedButton: {
    height: responsiveScreenHeight(7.9),
    width: responsiveScreenWidth(73.1),
    borderRadius: 39,
    backgroundColor: '#7B46E4'
  },
  loginButton: {
    marginTop: responsiveScreenHeight(1.3),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: RFValue(18, 768),
    fontWeight: 'normal'
  },
  loginText: {
    color: '#7B46E4'
  }
})
