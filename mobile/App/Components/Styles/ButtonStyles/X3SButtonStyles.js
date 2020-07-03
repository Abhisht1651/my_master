import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  outlinex3sbutton: {
    width: (100 / 375) * Width,
    height: (30 / 375) * Width,
    borderRadius: (16 / 375) * Width,
    borderWidth: 1,
    borderColor: '#7B46E4',
    backgroundColor: '#FFFFFF'
  },
  outlinex3stext: {
    fontSize: (14 / 375) * Width,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width
  },
  x3sbutton: {
    width: (100 / 375) * Width,
    height: (30 / 375) * Width,
    borderRadius: (16 / 375) * Width,
    backgroundColor: '#7B46E4'
  },
  x3stext: {
    fontSize: (14 / 375) * Width,
    color: '#FFFFFF',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
