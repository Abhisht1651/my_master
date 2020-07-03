import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  image: {
    height: (44 / 375) * Width,
    width: (44 / 375) * Width,
    borderRadius: (22 / 375) * Width,
    marginTop: (16 / 768) * Height,
    marginBottom: (13 / 768) * Height
  },
  grpimg1: {
    height: (32 / 375) * Width,
    width: (32 / 375) * Width,
    borderRadius: (16 / 375) * Width,
    marginTop: (16 / 768) * Height,
    marginBottom: (27 / 768) * Height
  },
  lastgrpimg1: {
    height: (32 / 375) * Width,
    width: (32 / 375) * Width,
    borderRadius: (16 / 375) * Width,
    marginTop: (17 / 768) * Height,
    marginBottom: (64 / 768) * Height
  },
  grpimg2: {
    height: (32 / 375) * Width,
    width: (32 / 375) * Width,
    borderRadius: (16 / 375) * Width,
    marginLeft: (12 / 375) * Width,
    marginTop: (31 / 768) * Height,
    marginBottom: (28 / 768) * Height,
    position: 'absolute'
  },
  border: {
    height: (1 / 768) * Height,
    width: '100%',
    backgroundColor: '#E6ECED'
  },
  lastimage: {
    height: (44 / 375) * Width,
    width: (44 / 375) * Width,
    borderRadius: (22 / 375) * Width,
    marginTop: (17 / 768) * Height,
    marginBottom: (50 / 768) * Height
  },
  nametext: {
    left: (44 / 375) * Width + (13 / 375) * Width,
    marginTop: (30 / 768) * Height,
    marginBottom: (30 / 768) * Height,
    position: 'absolute'
  },
  name: {
    fontSize: (18 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: (-0.12 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    color: '#1F1F60'
  },
  checkbox: {
    height: (30 / 375) * Width,
    width: (30 / 375) * Width,
    borderRadius: (15 / 375) * Width,
    borderWidth: 1,
    borderColor: '#8F8FAF',
    alignItems: 'center',
    justifyContent: 'center',
    top: (25 / 768) * Height,
    right: (0 / 375) * Width,
    position: 'absolute'
  },
  checkedBox: {
    width: (14 / 375) * Width,
    height: (14 / 375) * Width,
    borderRadius: (7 / 375) * Width,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
