import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    flex: 1,
    flexDirection: 'column-reverse'
  },
  container1: {
    height: (69 / 768) * Height,
    borderBottomWidth: (1 / 768) * Height,
    borderColor: '#E6ECED'
  },
  backbutton: {
    left: (25 / 375) * Width,
    position: 'absolute',
    top: (20 / 768) * Height
  },
  memberphotos: {
    top: (10 / 768) * Height,
    left: (59 / 375) * Width
  },
  photo1: {
    position: 'absolute',
    height: (44 / 768) * Height,
    width: (44 / 768) * Height,
    borderRadius: (22 / 768) * Height
  },
  container2: {
    flex: 768 - 75,
    backgroundColor: '#F7F7F7'
  },
  container3: {
    height: (165 / 768) * Height,
    borderTopWidth: (1 / 768) * Height,
    borderColor: '#E6ECED',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    top: (15 / 768) * Height,
    position: 'absolute',
    width: (200 / 375) * Width,
    left: (118 / 375) * Width
  },
  name: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (18 / 768) * Height,
    color: '#1F1F60'
  },
  active: {
    top: (3 / 768) * Height,
    fontSize: (12 / 768) * Height,
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF'
  },
  elipsis: {
    flexDirection: 'row-reverse',
    top: (20 / 768) * Height,
    right: (27 / 375) * Width,
    position: 'absolute'
  },
  verticalGap: {
    height: (15 / 768) * Height
  },
  containertime: {
    width: Width * 1.2,
    flex: 1
  },
  containertime1: {
    height: '100%',
    marginRight: (15 / 375) * Width
  },
  item: {
    flexDirection: 'row'
  },
  item1: {
    flexDirection: 'row-reverse'
  },
  bubbles1: {
    flexWrap: 'wrap',
    maxWidth: (250 / 375) * Width,
    borderRadius: (32 / 375) * Width,
    backgroundColor: 'white',
    marginBottom: (4 / 768) * Height,
    marginRight: (24.5 / 375) * Width
  },
  bubble1margin: {
    flexWrap: 'wrap',
    maxWidth: (250 / 375) * Width,
    borderRadius: (32 / 375) * Width,
    backgroundColor: 'white',
    marginBottom: (4 / 768) * Height,
    marginRight: (77 / 375) * Width
  },
  bubbles2: {
    flexWrap: 'wrap',
    maxWidth: (250 / 375) * Width,
    borderRadius: (32 / 375) * Width,
    backgroundColor: '#E6ECED80',
    marginBottom: (4 / 768) * Height,
    marginLeft: (16 / 375) * Width
  },
  texttime: {
    marginLeft: (22 / 375) * Width,
    maxWidth: (206 / 375) * Width,
    marginRight: (22 / 375) * Width,
    marginTop: (16 / 375) * Width,
    marginBottom: (13 / 375) * Width,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: (16 / 375) * Width,
    letterSpacing: (-0.11 / 375) * Width,
    lineHeight: (22 / 375) * Width,
    color: '#1F1F60'
  },
  margin: {
    marginBottom: (16 / 768) * Height
  },
  button: {
    left: (142 / 375) * Width,
    marginTop: (10 / 768) * Height,
    marginBottom: (20 / 768) * Height
  },
  time: {
    paddingRight: (7.5 / 375) * Width,
    alignSelf: 'flex-end',
    bottom: (20 / 375) * Width
  },
  time1: {
    paddingRight: (7.5 / 375) * Width,
    alignSelf: 'flex-end',
    bottom: (30 / 375) * Width
  },
  timetxt: {
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: (12 / 375) * Width,
    letterSpacing: (-0.07 / 375) * Width,
    lineHeight: (14 / 375) * Width,
    color: '#8F8FAF'
  },
  linearGradient: {
    flex: 1
  },
  usericon: {
    top: (-20 / 768) * Height,
    left: (16 / 375) * Width,
    marginBottom: (-20 / 768) * Height
  },
  photoicon: {
    height: (19.5 / 375) * Width,
    width: (19.5 / 375) * Width,
    borderRadius: (9.75 / 375) * Width
  },
  usericon2: {
    top: (-20 / 768) * Height,
    left: (46 / 375) * Width,
    marginBottom: (-20 / 768) * Height
  },
  writing: {
    marginLeft: (20 / 375) * Width,
    marginBottom: (20 / 768) * Height,
    bottom: 0
  },
  writingelipsis: {
    tintColor: '#7B46E4',
    marginLeft: (2 / 375) * Width,
    marginTop: (4 / 768) * Height,
    width: (20 / 375) * Width,
    height: (4 / 375) * Width
  },
  writingtxt: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: (14 / 375) * Width,
    letterSpacing: (-0.08 / 375) * Width,
    lineHeight: (16 / 375) * Width,
    color: '#8F8FAF'
  },
  checkboxalign: {
    left: (10 / 375) * Width,
    position: 'absolute'
  },
  checkboxalign2: {
    left: (10 / 375) * Width,
    marginRight: (20 / 375) * Width,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  checkcont: {
    justifyContent: 'center'
  },
  checkBox: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#8F8FAF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedBox: {
    width: 10,
    height: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkmark: {
    height: 10,
    width: 10,
    resizeMode: 'contain'
  },
  arrowleft: {
    width: (22 / 375) * Width,
    height: (17 / 375) * Width
  }
})
