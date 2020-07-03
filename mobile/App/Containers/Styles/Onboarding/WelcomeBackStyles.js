import { StyleSheet, Dimensions } from 'react-native'
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
    marginTop: 136 * scaleHeight,
    height: 125 * scaleHeight,
    width: 217 * scaleHeight,
    resizeMode: 'contain'
  },
  profilepic: {
    height: 95 * scaleHeight,
    width: 95 * scaleHeight,
    borderRadius: 48 * scaleHeight,
    resizeMode: 'cover',
    marginTop: 39 * scaleHeight
  },
  section: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  heading: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: scaledSize(22),
    color: '#1F1F60',
    marginTop: 21 * scaleHeight
  },
  or: {
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: scaledSize(16),
    color: '#1F1F60',
    marginTop: 36 * scaleHeight
  },
  button: {
    alignItems: 'center',
    marginTop: 52 * scaleHeight
  }
})
