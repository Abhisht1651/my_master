import { StyleSheet, Dimensions } from 'react-native'

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width

export default StyleSheet.create({
  cardBox: {
    backgroundColor: 'transparent',
    width: (100 / 375) * Width,
    height: (100 / 768) * Height,
    alignItems: 'center',
    borderRadius: (15 / 375) * Width
  },
  profileIconBox: {
    width: (100 / 375) * Width,
    height: (100 / 375) * Width
  },
  profileIcon: {
    width: (100 / 375) * Width,
    height: (100 / 375) * Width,
    borderRadius: (15 / 375) * Width
  }
})
