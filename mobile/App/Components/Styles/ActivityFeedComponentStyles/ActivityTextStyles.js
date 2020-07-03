import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  text: {
    marginLeft: (40 / 375) * Width,
    marginRight: (30 / 375) * Width
  },
  textfont: {
    fontSize: (14 / 375) * Width,
    letterSpacing: (-0.1 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  text1: {
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Semibold'
  },
  text2: {
    color: '#8989A7',
    fontFamily: 'BananaGrotesk-Light'
  },
  text3: {
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular'
  },
  text4: {
    color: '#8989A7',
    fontFamily: 'BananaGrotesk-Regular'
  },
  text5: {
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Light'
  }
})

export default styles
