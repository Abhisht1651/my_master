import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)
export default StyleSheet.create({
  leftArrow: {
    resizeMode: 'contain',
    width: 18 * scaleWidth,
    height: 18 * scaleHeight,
    alignSelf: 'center',
    tintColor: '#1F1F60'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '6%',
    alignItems: 'center',
    height: responsiveScreenHeight(7.6)
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 42,
    height: 5,
    marginLeft: responsiveScreenWidth(4)
  },
  progressStyle: {
    height: 3,
    width: 12,
    backgroundColor: '#DDE4E6',
    borderRadius: 5
  },
  rightText: {
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: RFValue(18, 768)
  }
})
