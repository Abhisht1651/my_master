import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1
  },
  container1: {
    flex: 62,
    borderBottomWidth: (1 / 768) * Height,
    borderColor: '#E6ECED',
    backgroundColor: 'white'
  },
  topcover: {
    backgroundColor: 'white',
    height: (33.75 / 768) * Height
  },
  backbutton: {
    height: (20 / 375) * Width,
    width: (22 / 375) * Width,
    left: (27 / 375) * Width,
    top: (14.5 / 768) * Height,
    position: 'absolute'
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
    flex: 706,
    backgroundColor: '#F7F7F7'
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
  card: {
    marginTop: (21 / 768) * Height,
    marginBottom: (19 / 768) * Height,
    marginLeft: (25 / 375) * Width,
    marginRight: (25 / 375) * Width
  },
  border: {
    borderBottomWidth: (1 / 768) * Height,
    borderColor: '#E6ECED'
  },
  status: {
    height: (75 / 768) * Height
  },
  readstoryfriend: {
    top: (20 / 786) * Height,
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
    top: (30 / 768) * Height,
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
  },
  flatlistcont: {
    borderBottomWidth: (2 / 768) * Height,
    borderBottomColor: 'white'
  }
})

export default styles
