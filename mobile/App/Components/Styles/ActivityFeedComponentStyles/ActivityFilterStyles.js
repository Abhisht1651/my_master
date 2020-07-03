import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    height: (515 / 375) * Width,
    width: (325 / 375) * Width,
    backgroundColor: '#FFFFFF',
    borderRadius: (15 / 768) * Height
  },
  closecont: {
    height: (18 / 375) * Width,
    width: (18 / 375) * Width,
    paddingTop: (22 / 375) * Width,
    right: (23 / 375) * Width,
    position: 'absolute'
  },
  closeimage: {
    height: (18 / 375) * Width,
    width: (18 / 375) * Width
  },
  activitytypetext: {
    marginTop: (56 / 375) * Width,
    textAlign: 'center',
    fontSize: (18 / 375) * Width,
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1E1E60',
    letterSpacing: (-0.32 / 375) * Width,
    lineHeight: (20 / 375) * Width
  },
  selecttypecont: {
    marginTop: (16 / 375) * Width,
    width: (250 / 375) * Width,
    alignSelf: 'center'
  },
  selecttypetext: {
    textAlign: 'center',
    fontSize: (16 / 375) * Width,
    fontFamily: 'BananaGrotesk-light',
    color: '#252576',
    letterSpacing: (-0.11 / 375) * Width,
    lineHeight: (27 / 375) * Width
  },
  flatlist: {
    marginLeft: (48 / 375) * Width,
    marginRight: (52 / 375) * Width,
    top: (5 / 768) * Height
  },
  button: {
    alignSelf: 'center',
    marginTop: (40 / 375) * Width
  }
})

export default styles
