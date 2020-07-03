import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width

export default StyleSheet.create({
  name: {
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-light',
    letterSpacing: (0 / 375) * Width,
    lineHeight: (16 / 375) * Width,
    color: '#8E8EAE'
  },
  nametext: {
    left: (50 / 375) * Width,
    position: 'absolute',
    marginTop: (15 / 375) * Width
  },
  checkbox: {
    marginTop: (10 / 375) * Width,
    height: (25 / 375) * Width,
    width: (25 / 375) * Width,
    borderRadius: (15 / 375) * Width,
    borderWidth: 1,
    borderColor: '#8F8FAF',
    alignItems: 'center',
    justifyContent: 'center',
    left: (0 / 375) * Width
  },
  checkedBox: {
    width: (14 / 375) * Width,
    height: (14 / 375) * Width,
    borderRadius: (7 / 375) * Width,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
