import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
export const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: 'center',
    // height: 30 * scaleHeight,
    width: '100%'
  },
  firstItem: {
    flex: 1
  },
  dropDownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderColor: '#DCDCE9',
    borderBottomWidth: 1
  },
  dropDownBodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 35 * scaleHeight,
    borderColor: '#DCDCE9'
  },
  toggleArrow: {
    width: 30 * scaleHeight,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  dropDown: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    position: 'absolute',
    height: 176 * scaleHeight,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderColor: '#DCDCE9',
    borderRadius: 8
  },
  dropDownBody: {
    height: 140 * scaleHeight,
    width: '87%',
    justifyContent: 'flex-start'
  },
  dropDownList: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 35 * scaleHeight
  },
  genderText: {
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: scaledSize(18),
    letterSpacing: 0.08
  },
  text: {
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: scaledSize(18),
    letterSpacing: 0.08
  }
})
