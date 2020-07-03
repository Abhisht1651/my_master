// @flow
import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    height: (62 / 768) * Height,
    borderBottomWidth: (1 / 768) * Height,
    borderColor: '#E6ECED',
    backgroundColor: 'white'
  },
  backbutton: {
    height: (20 / 375) * Width,
    width: (22 / 375) * Width,
    left: (27 / 375) * Width,
    top: (14.5 / 768) * Height,
    position: 'absolute'
  },
  topcover: {
    backgroundColor: 'white',
    height: (33.75 / 768) * Height
  },
  right: {
    top: (3 / 375) * Width,
    width: (5 / 375) * Width,
    height: (10 / 375) * Width
  },
  arrowleft: {
    width: (22 / 375) * Width,
    height: (17 / 375) * Width
  },
  container2: {
    height: (183 / 768) * Height,
    backgroundColor: '#F7F7F7'
  },
  card: {
    height: (113 / 768) * Height,
    marginLeft: (25 / 375) * Width,
    marginRight: (25 / 375) * Width
  },
  storyline: {
    marginTop: (20 / 768) * Height,
    marginBottom: (14 / 768) * Height
  },
  border1: {
    borderBottomWidth: (1 / 768) * Height,
    borderColor: '#E6ECED'
  },
  status: {
    height: (70 / 768) * Height
  },
  container3: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    width: (200 / 375) * Width
  },
  sendraven: {
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: (20 / 375) * Width,
    letterSpacing: (-0.11 / 375) * Width,
    lineHeight: (27 / 375) * Width,
    color: '#1F1F60',
    textAlign: 'center',
    top: (8 / 375) * Width,
    left: (125.5 / 375) * Width,
    position: 'absolute'
  },
  gradient: {
    height: (140 / 375) * Width,
    alignSelf: 'flex-end',
    width: '100%'
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    bottom: (30 / 768) * Height
  },
  header: {
    top: (20.5 / 768) * Height
  },
  friendcount: {
    left: (24 / 375) * Width,
    fontSize: (18 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: (-0.12 / 375) * Width,
    lineHeight: (22 / 375) * Width,
    color: '#1F1F60'
  },
  sendtoall: {
    top: (2 / 375) * Width,
    right: (25 / 375) * Width,
    position: 'absolute'
  },
  sendtoalltext: {
    fontSize: (16 / 375) * Width,
    fontFamily: 'BananaGrotesk-Bold',
    letterSpacing: (-0.09 / 375) * Width,
    lineHeight: (18 / 375) * Width,
    color: '#8650E7'
  },
  search: {
    top: (22 / 768) * Height
  },
  bar: {
    width: (325 / 375) * Width,
    height: (35 / 768) * Height,
    borderRadius: (18 / 768) * Height,
    backgroundColor: '#F5F8F8',
    left: (25 / 375) * Width,
    marginBottom: (20 / 768) * Height
  },
  flatlist: {
    height: (310 / 768) * Height,
    marginLeft: (25 / 375) * Width,
    marginRight: (25 / 375) * Width
  },
  image: {
    height: (44 / 375) * Width,
    width: (44 / 375) * Width,
    borderRadius: (22 / 375) * Width,
    marginTop: (20 / 768) * Height,
    marginBottom: (17 / 768) * Height
  },
  lastimage: {
    height: (44 / 375) * Width,
    width: (44 / 375) * Width,
    borderRadius: (22 / 375) * Width,
    marginTop: (20 / 768) * Height,
    marginBottom: (50 / 768) * Height
  },
  buttonstyle: {
    backgroundColor: '#CAB5F4'
  },
  nametext: {
    left: (44 / 375) * Width + (13 / 375) * Width,
    marginTop: (35 / 768) * Height,
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
    height: (30 / 768) * Height,
    width: (30 / 768) * Height,
    borderRadius: (15 / 768) * Height,
    borderWidth: 1,
    borderColor: '#8F8FAF',
    alignItems: 'center',
    justifyContent: 'center',
    top: (29 / 768) * Height,
    right: (0 / 375) * Width,
    position: 'absolute'
  },
  checkedBox: {
    width: (14 / 768) * Height,
    height: (14 / 768) * Height,
    borderRadius: (7 / 768) * Height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    height: (1 / 768) * Height,
    width: (325 / 375) * Width,
    backgroundColor: '#E6ECED',
    left: (25 / 375) * Width
  },
  readstoryfriend: {
    top: (15 / 786) * Height,
    left: (25 / 375) * Width
  },
  outerbar: {
    height: (10 / 768) * Height,
    width: (300 / 375) * Width,
    borderWidth: (1 / 768) * Height,
    borderRadius: (5 / 786) * Height,
    borderColor: '#DCDCE9',
    backgroundColor: 'white'
  },
  innerbar: {
    height: (7.5 / 768) * Height,
    left: (1 / 375) * Width,
    top: (1 / 768) * Height,
    borderRadius: (3 / 768) * Height,
    backgroundColor: '#47C3F4',
    position: 'absolute'
  },
  readstoryfriendcont: {
    top: (25 / 768) * Height,
    height: (18 / 768) * Height,
    width: (260 / 375) * Width,
    left: (28 / 375) * Width
  },
  readfriendtext: {
    fontSize: (14 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width,
    color: '#1F1F60'
  },
  chevron: {
    right: (5 / 375) * Width,
    position: 'absolute'
  }
})

export default styles
