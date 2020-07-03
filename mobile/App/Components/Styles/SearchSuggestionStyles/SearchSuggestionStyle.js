import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  container: {
    width: '100%',
    height: scaleHeight * 30
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scaleHeight * 30,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#7B46E4'
  },
  inputField: {
    width: '70.72%',
    padding: 0,
    margin: 0,
    fontSize: scaledSize(18),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: -0.12,
    paddingBottom: scaledSize(5),
    textAlignVertical: 'center'
  },
  optionalText: {
    fontSize: scaledSize(14),
    textAlignVertical: 'center',
    paddingBottom: scaledSize(10),
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Light'
  },
  dropDownBody: {
    // zIndex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: scaledSize(5),
    letterSpacing: 0.08,
    width: '100%',
    height: scaleHeight * 138,
    borderColor: '#DCDCE9',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  listItem: {
    padding: scaledSize(8),
    flexDirection: 'row'
  },
  listItemText: {
    color: '#1F1F60',
    fontSize: scaledSize(18),
    letterSpacing: 0.08,
    fontFamily: 'BananaGrotesk-Medium'
  },
  randomText: {
    fontSize: scaledSize(18),
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: 0.08,
    color: '#8F8FAF'
  }
})
