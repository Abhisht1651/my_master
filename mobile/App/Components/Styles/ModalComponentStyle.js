import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'relative',
    width: '87%',
    height: '38%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalHeading: {
    marginTop: '15%',
    textAlign: 'center',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: RFValue(20, 812),
    marginBottom: '1%'
  },
  modalText: {
    textAlign: 'center',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: RFValue(16, 812),
    marginHorizontal: '10%',
    marginBottom: '4.9%'
  },
  loginButton: {
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(85),
    borderRadius: 39,
    backgroundColor: '#7B46E4',
    marginTop: '4.9%'
  },
  inputText: {
    height: '100%',
    width: '14%',
    backgroundColor: '#F5F8F8',
    marginHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: RFValue(36, 812),
    fontFamily: 'BananaGrotesk-Regular',
    padding: 0
  },
  cross: {
    width: '10%',
    height: '10%',
    tintColor: '#1F1F60'
  }
})
