import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  cardBox: {
    backgroundColor: '#ffffff',
    borderWidth: (1 / 375) * Width,
    borderRadius: (7 / 375) * Width,
    borderColor: '#e6eced',
    width: (105 / 375) * Width,
    minHeight: (161 / 768) * Height,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  profileIconBox: {
    width: (60 / 375) * Width,
    height: (60 / 375) * Width,
    marginTop: (20 / 768) * Height
  },
  profileIcon: {
    width: (60 / 375) * Width,
    height: (60 / 375) * Width,
    flex: 1,
    borderRadius: (15 / 375) * Width
  },
  profileIconRound: {
    width: (60 / 375) * Width,
    height: (60 / 375) * Width,
    flex: 1,
    borderRadius: (30 / 375) * Width
  },
  textcenter: {
    textAlign: 'center'
  },
  textOutline: {
    marginTop: (12 / 375) * Width,
    width: (77 / 375) * Width,
    height: 'auto',
    borderColor: 'white',
    borderWidth: (1 / 375) * Width,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  textNameFont: {
    letterSpacing: (-0.1 / 375) * Width,
    color: '#1f1f60',
    opacity: 1,
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Light',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textDetailsFont: {
    letterSpacing: (-0.08 / 375) * Width,
    color: '#8F8FAF',
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular'
  }
})
