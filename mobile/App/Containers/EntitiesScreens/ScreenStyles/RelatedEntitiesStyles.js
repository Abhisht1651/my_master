import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  screen: {
    flex: 1,
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
    paddingRight: (115 / 375) * Width
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
  box1: {
    paddingTop: (36 / 812) * Height,
    paddingBottom: (5 / 812) * Height
  },
  box0: {
    paddingVertical: (5 / 812) * Height
  }
})
