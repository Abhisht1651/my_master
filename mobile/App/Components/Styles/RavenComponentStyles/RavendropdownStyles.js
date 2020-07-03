import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale) + 1
export default StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: 200 * scaleHeight
  },
  containerX: {
    alignItems: 'flex-end',
    height: 180 * scaleHeight,
    width: 200 * scaleHeight
  },
  touchcont: {
    width: 60
  },
  dropDownHeader: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 200 * scaleHeight,
    height: 37.5 * scaleHeight,
    borderColor: '#DCDCE9',
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  headerItem: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  headerText: {
    paddingLeft: 15 * scaleHeight,
    fontSize: 14,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Light'
  },
  dropDownIcon: {
    alignItems: 'center',
    width: '25%',
    justifyContent: 'center',
    height: '100%'
  },
  dropDownBody: {
    left: (13 / 375) * width,
    top: (-11 / 768) * height,
    position: 'absolute',
    alignItems: 'center',
    letterSpacing: 0.08,
    width: 200 * scaleHeight,
    height: 180 * scaleHeight,
    borderColor: '#DCDCE9',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    zIndex: 5,
    elevation: 5
  },
  listItem: {
    padding: 15 * scaleHeight,
    flexDirection: 'row',
    height: 47.5 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCE9'
  },
  listLastItem: {
    padding: 15 * scaleHeight,
    height: 47.5 * scaleHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#22226B',
    fontSize: scaledSize(14),
    fontFamily: 'BananaGrotesk-Light'
  },
  lastItemText: {
    color: '#22226B',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: scaledSize(14)
  },
  checkBox: {
    height: 15 * scaleHeight,
    aspectRatio: 1,
    borderRadius: 4,
    borderColor: '#8F8FAF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedBox: {
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconOnly: {
    width: '25%',
    height: 47.5 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 19 * scaleHeight
  },
  dropDownWidth: {
    width: 200 * scaleHeight
  },
  zindex: {
    zIndex: 5
  },
  filtericon: {
    height: (10 / 375) * width,
    width: (21 / 375) * width,
    left: (42 / 375) * width
  },
  filtericonsize: {
    height: (10 / 375) * width,
    width: (21 / 375) * width
  },
  filtercont: {
    right: (6 / 375) * width,
    width: (60 / 375) * width
  },
  timefiltertext: {
    fontSize: (12 / 375) * width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1.5 / 375) * width,
    letterSpacing: (-0.07 / 375) * width,
    lineHeight: (14 / 375) * width,
    position: 'absolute'
  },
  all: {
    fontSize: (12 / 375) * width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1.5 / 375) * width,
    letterSpacing: (-0.07 / 375) * width,
    lineHeight: (14 / 375) * width,
    position: 'absolute',
    left: (28 / 375) * width
  },
  sent: {
    fontSize: (12 / 375) * width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1.5 / 375) * width,
    letterSpacing: (-0.07 / 375) * width,
    lineHeight: (14 / 375) * width,
    position: 'absolute',
    left: (18 / 375) * width
  },
  received: {
    fontSize: (12 / 375) * width,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    top: (-1.5 / 375) * width,
    letterSpacing: (-0.07 / 375) * width,
    lineHeight: (14 / 375) * width,
    position: 'absolute',
    left: (-10 / 375) * width
  }
})
