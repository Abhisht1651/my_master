import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectedUI: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  checkboxTickImg: {
    width: '85%',
    height: '85%',
    tintColor: '#ffffff',
    resizeMode: 'contain'
  },

  uncheckedCheckbox: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  checkboxLabel: {
    fontSize: 18
  }
})
