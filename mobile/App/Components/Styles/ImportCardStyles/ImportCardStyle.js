import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../Themes/Colors'

const { width, height } = Dimensions.get('window')
const baseWidth = 375
const baseHeight = 812
const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale) + 1

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 15 * scaleHeight,
    borderColor: Colors.importCardBorder,
    backgroundColor: Colors.whiteBackground
  },
  upperBlock: {
    alignItems: 'center',
    height: '30%',
    aspectRatio: 1,
    marginBottom: 8 * scaleHeight,
    marginTop: 30 * scaleHeight
  },
  middleBlock: {
    width: '61.53%',
    height: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4 * scaleHeight
  },
  lastBlock: {
    width: '61.53%',
    height: '8.5%'
  },
  middleBlockText: {
    letterSpacing: -0.12,
    fontSize: scaledSize(18),
    textAlign: 'center',
    color: Colors.importCardText1,
    fontFamily: 'BananaGrotesk-Medium',
    lineHeight: 22 * scaleHeight
  },
  lastBlockText: {
    fontSize: scaledSize(14),
    textAlign: 'center',
    color: Colors.importCardText2,
    fontFamily: 'BananaGrotesk-Light'
  }
})
