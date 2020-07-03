import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const baseWidth = 375
const baseHeight = 812

const scaleWidth = Width / baseWidth
const scaleHeight = Height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale) + 1

const common = StyleSheet.create({
  all: {
    zIndex: 1
  },
  bColor: {
    backgroundColor: '#F7F7F7'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowBet: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  line: {
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  color1: {
    color: '#1F1F60'
  },
  centreText: {
    alignItems: 'center',
    paddingTop: (7 / 812) * Height
  },
  borderButton: {
    borderColor: '#7B46E4',
    paddingLeft: (5 / 375) * Width
  },

  container: {
    alignItems: 'flex-end',
    paddingTop: (21 / 812) * Height,
    paddingRight: (14 / 375) * Width
  },
  dropDownHeader: {
    flexDirection: 'row',
    width: 160 * scaleWidth,
    borderColor: '#DCDCE9',
    borderRadius: 8,
    backgroundColor: '#FFFFFF'
  },

  dropDownIcon: {
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 29 * scaleWidth,
    paddingTop: 15 * scaleHeight
  },
  dropDownBody: {
    zIndex: 1,
    position: 'absolute',
    top: 6 * scaleHeight,
    right: 7 * scaleWidth,
    alignItems: 'center',
    letterSpacing: 0.08,

    borderColor: '#DCDCE9',
    borderRadius: 8,
    backgroundColor: '#FFFFFF'
  },
  listItem: {
    padding: 15 * scaleHeight,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCE9'
  },

  itemText: {
    color: '#1F1F60',
    fontSize: scaledSize(14),
    lineHeight: scaledSize(22),
    fontFamily: 'BananaGrotesk-Light'
  },

  dropDownWidth: {
    width: 160 * scaleHeight
  }
})

export default common
