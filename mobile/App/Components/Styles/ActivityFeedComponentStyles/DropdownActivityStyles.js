import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale) + 1
export default StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: (160 / 375) * width
  },
  dropDownHeader: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: (160 / 375) * width,
    height: 47.5 * scaleHeight,
    borderColor: '#DCDCE9',
    borderRadius: 8,
    backgroundColor: '#FFFFFF'
  },
  headerItem: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  headerText: {
    paddingLeft: 15 * scaleHeight,
    paddingTop: 19 * scaleHeight,
    fontSize: 14,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Light'
  },
  dropDownIcon: {
    paddingTop: 19 * scaleHeight,
    alignItems: 'center',
    width: '25%',
    justifyContent: 'center',
    height: '100%'
  },
  dropDownBody: {
    position: 'absolute',
    letterSpacing: 0.08,
    width: (160 / 375) * width,
    height: (160 / 768) * height,
    borderColor: '#DCDCE9',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    elevation: 3
  },
  listItem: {
    paddingTop: 15 * scaleHeight,
    paddingBottom: 15 * scaleHeight,
    marginLeft: (15 / 375) * width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCE9'
  },
  listLastItem: {
    paddingTop: 15 * scaleHeight,
    paddingBottom: 15 * scaleHeight,
    marginLeft: (15 / 375) * width,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#1F1F60',
    fontSize: scaledSize(14),
    fontFamily: 'BananaGrotesk-Light'
  },
  lastItemText: {
    color: '#1F1F60',
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
    width: 160 * scaleHeight
  }
})
