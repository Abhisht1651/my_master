import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)
export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35 * scaleHeight,
    width: 251 * scaleWidth,
    borderRadius: 18 * scaleHeight,
    backgroundColor: '#F5F8F8',
    alignItems: 'center'
  },
  searchIcon: {
    height: 16 * scaleHeight,
    width: 32 * scaleWidth,
    marginTop: 2 * scaleHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textinput: {
    width: '70%',
    paddingTop: 8 * scaleHeight,
    paddingBottom: 7 * scaleHeight,
    fontSize: scaledSize(16),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Light'
  },
  clear: {
    alignItems: 'flex-end',
    paddingRight: 12.67 * scaleWidth,
    justifyContent: 'center',
    height: 16 * scaleHeight,
    flex: 1
  }
})
