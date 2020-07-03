import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  topBox: {
    height: (61 / 812) * Height,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    shadowColor: '#E6ECED',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: (27 / 375) * Width,
    paddingRight: (98 / 375) * Width
  },
  textFont: {
    fontSize: (20 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    color: '#1F1F60'
  },
  contentBox: {
    backgroundColor: '#E6ECED',
    alignItems: 'center'
  },
  post: {
    width: (300 / 375) * Width,
    height: (322 / 812) * Height
  },
  topgap: {
    height: (38 / 812) * Height
  },
  gap: {
    height: (51 / 812) * Height
  }
})
