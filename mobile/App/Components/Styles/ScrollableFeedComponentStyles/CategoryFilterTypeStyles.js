import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight

const scale = (size) => (width / baseWidth) * size
const moderateScale = (size, factor = 0.3) => size + (scale(size) - size) * factor

export default StyleSheet.create({
  popUpCard: {
    height: 490 * scaleHeight,
    width: 375 * scaleWidth,
    paddingLeft: 0,
    paddingRight: 0,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    borderRadius: moderateScale(15),
    borderColor: '#E6ECED'
  },
  flatList: {
    alignItems: 'center'
  },
  categoryFilter: {
    paddingTop: 15 * scaleHeight,
    borderBottomWidth: 1,
    borderColor: '#E6ECED',
    height: 61.25 * scaleHeight,
    width: '100%',
    alignItems: 'center'
  },
  categoryFilterText: {
    fontSize: moderateScale(18),
    fontFamily: 'helvetica',
    color: '#2C2A81',
    letterSpacing: -0.12
  },
  text: {
    fontSize: moderateScale(18),
    color: '#2C2A81',
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: -0.12
  },
  itemText: {
    justifyContent: 'flex-start',
    width: '75%',
    paddingLeft: 15 * scaleWidth
  },
  cardItems: {
    borderBottomWidth: 1,
    borderColor: '#DCDCE9',
    marginTop: 1,
    width: '86.66%',
    height: 59 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  iconContainer: {
    width: '10%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  iconStyles: {
    height: '60%',
    aspectRatio: 1
  },
  footer: {
    alignItems: 'center',
    height: 29.25 * scaleHeight,
    justifyContent: 'center'
  },
  bottomLine: {
    height: 4 * scaleHeight,
    width: 45 * scaleWidth,
    backgroundColor: '#E6ECED',
    borderRadius: 3
  },
  options: {
    flexDirection: 'row',
    height: 30 * scaleHeight,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // borderTopWidth: 1,
    borderColor: '#E6ECED'
  },
  clearSelectionText: {
    paddingRight: 24 * scaleWidth,
    color: '#7B46E4',
    letterSpacing: -0.09,
    fontSize: moderateScale(18),
    fontFamily: 'BananaGrotesk-Bold'
  },
  selectedText: {
    paddingLeft: 28 * scaleWidth,
    color: '#7B46E4',
    letterSpacing: -0.09,
    fontSize: moderateScale(16),
    fontFamily: 'BananaGrotesk-Bold'
  },
  checkboxContainer: {
    width: '15%',
    alignItems: 'flex-end'
  },
  checkedBox: {
    aspectRatio: 1,
    height: moderateScale(14),
    borderRadius: moderateScale(7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkBox: {
    height: moderateScale(20),
    aspectRatio: 1,
    borderRadius: moderateScale(4),
    borderWidth: 1,
    borderColor: '#8F8FAF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkmark: {
    height: moderateScale(10),
    resizeMode: 'contain'
  }
})
