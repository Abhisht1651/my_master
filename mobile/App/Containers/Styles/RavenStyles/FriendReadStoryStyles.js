import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topcover: {
    backgroundColor: 'white',
    height: (33.75 / 768) * Height
  },
  container1: {
    height: (103 / 768) * Height,
    borderBottomWidth: (1 / 768) * Height,
    borderColor: '#8F8FAF51'
  },
  margin: {
    marginLeft: (26 / 375) * Width,
    marginRight: (23 / 375) * Width
  },
  container2: {
    flex: 1
  },
  arrowleft: {
    width: (22 / 375) * Width,
    height: (17 / 375) * Width
  },
  backbutton: {
    height: (20 / 375) * Width,
    width: (22 / 375) * Width,
    left: (27 / 375) * Width,
    top: (14.5 / 768) * Height,
    position: 'absolute'
  },
  heeadline: {
    width: (120 / 375) * Width
  },
  headlinetext: {
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: (20 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    color: '#1F1F60',
    textAlign: 'center',
    top: (8 / 768) * Height,
    left: (85 / 375) * Width,
    position: 'absolute'
  },
  search: {
    marginTop: (53 / 768) * Height,
    left: (25 / 375) * Width,
    marginBottom: (15 / 768) * Height
  },
  image: {
    height: (44 / 375) * Width,
    width: (44 / 375) * Width,
    borderRadius: (22 / 375) * Width,
    marginTop: (20 / 768) * Height,
    marginBottom: (17 / 768) * Height
  },
  border: {
    width: '100%',
    height: (1 / 768) * Height,
    backgroundColor: '#E6ECED'
  },
  nametext: {
    left: (44 / 375) * Width + (9 / 375) * Width,
    marginTop: (17 / 375) * Width,
    position: 'absolute'
  },
  name: {
    fontSize: (18 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: (-0.12 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    color: '#1F1F60'
  },
  sent: {
    fontSize: (12 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    color: '#8F8FAF'
  },
  button: {
    left: (230 / 375) * Width,
    width: '100%',
    top: (24 / 375) * Width,
    position: 'absolute'
  },
  flatlist: {
    marginBottom: (20 / 375) * Width
  },
  flatlist2: {
    marginBottom: (20 / 375) * Width + (33.5 / 768) * Height
  }
})

export default styles
