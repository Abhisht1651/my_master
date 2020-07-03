import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const styles = StyleSheet.create({
  outlinemediumthinnerbutton: {
    width: (275 / 375) * Width,
    height: (40 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    borderWidth: (1 / 375) * Width,
    borderColor: '#7B46E4',
    backgroundColor: '#FFFFFF'
  },
  outlinemediumthinnertext: {
    fontSize: (16 / 375) * Width,
    color: '#7B46E4',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  mediumthinnerbutton: {
    width: (275 / 375) * Width,
    height: (40 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    backgroundColor: '#7B46E4'
  },
  mediumthinnertext: {
    fontSize: (16 / 375) * Width,
    color: '#FFFFFF',
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width,
    lineHeight: (18 / 375) * Width
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
