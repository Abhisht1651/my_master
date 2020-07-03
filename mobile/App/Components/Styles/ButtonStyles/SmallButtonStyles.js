import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  smallbutton: {
    width: (225 / 375) * Width,
    height: (50 / 375) * Width,
    borderRadius: (39 / 375) * Width,
    backgroundColor: '#7B46E4'
  },
  smalltext: {
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
