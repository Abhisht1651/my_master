import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
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
    height: responsiveHeight(17),
    width: responsiveWidth(58),
    resizeMode: 'contain',
    position: 'absolute',
    top: '10%',
    alignItems: 'center'
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    fontSize: RFValue(22, 812),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60'
  },
  position: {
    position: 'absolute'
  }
})
