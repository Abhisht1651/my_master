import { StyleSheet, Dimensions } from 'react-native'

const Width = Dimensions.get('window').width
const styles = StyleSheet.create({
  bottomNav: {
    flex: 1
  },
  box: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#E6ECED'
  },
  container: {
    flex: 375,
    flexDirection: 'row'
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#E6ECED'
  },
  margin: {
    flex: 25
  },
  icons: {
    flex: 325,
    flexDirection: 'row'
  },
  iconspacing: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newsfeed: {
    width: (32 / 375) * Width,
    height: (26 / 375) * Width
  },
  searchsel: {
    width: (28 / 375) * Width,
    height: (24 / 375) * Width
  },
  search: {
    width: (26 / 375) * Width,
    height: (22 / 375) * Width
  },
  friendsactivity: {
    width: (33 / 375) * Width,
    height: (24 / 375) * Width
  },
  chat: {
    width: (27 / 375) * Width,
    height: (24 / 375) * Width
  },
  profile: {
    width: (25 / 375) * Width,
    height: (26 / 375) * Width
  }
})

export default styles
