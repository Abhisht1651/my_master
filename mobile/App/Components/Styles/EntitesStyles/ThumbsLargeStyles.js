import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  cardBox: {
    backgroundColor: 'transparent',
    width: (66 / 375) * Width,
    height: 102,
    alignItems: 'center'
  },
  profileIconBox: {
    width: (60 / 375) * Width,
    height: (60 / 375) * Width,
    borderRadius: (15 / 375) * Width,
    backgroundColor: 'transparent'
  },
  profileIcon: {
    width: (60 / 375) * Width,
    height: (60 / 375) * Width,
    borderRadius: (15 / 375) * Width
  },
  textOutline: {
    width: (66 / 375) * Width,
    height: (30 / 768) * Height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNameFont: {
    textAlign: 'left',
    letterSpacing: 0,
    color: '#1F1F60',
    opacity: 1,
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Light'
  }
})
