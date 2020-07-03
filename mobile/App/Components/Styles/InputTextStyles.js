import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
  container: {},
  textArea: {
    height: responsiveScreenHeight(4.3),
    width: responsiveScreenWidth(74),
    marginHorizontal: responsiveScreenWidth(13.33),
    fontSize: RFValue(18, 768),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    textAlign: 'left',
    paddingBottom: responsiveScreenHeight(1.3),
    borderBottomColor: '#DCDCE9',
    borderBottomWidth: 1,
    padding: 0
  },
  dirRow: {
    flexDirection: 'row'
  },
  hintFixed: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '2%',
    fontSize: RFValue(18, 768),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#8F8FAF',
    right: 0,
    marginRight: '9.5%',
    textAlign: 'center'
  },
  emailvalidation: {
    fontFamily: 'BananaGrotesk-Regular',
    color: '#FF1742',
    textAlign: 'center'
  },
  validation: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#FF1742',
    textAlign: 'center',
    fontSize: RFValue(16, 768)
  },
  weak: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#FF1742',
    marginLeft: '13.33%',
    textAlign: 'center',
    fontSize: RFValue(16, 768)
  },
  good: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#FFC300',
    marginLeft: '13.33%',
    textAlign: 'center',
    fontSize: RFValue(16, 768)
  },
  strong: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#08C981',
    marginLeft: '13.33%',
    textAlign: 'center',
    fontSize: RFValue(16, 768)
  },
  checkMark: { position: 'absolute', right: '14%', tintColor: '#08C981' }
})
