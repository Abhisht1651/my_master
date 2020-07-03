import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions'

const { width } = Dimensions.get('window')

const baseWidth = 375

const scaleWidth = width / baseWidth

export default StyleSheet.create({
  topHeader: {
    flexDirection: 'row'
  },
  container: {
    marginTop: responsiveScreenHeight(6),
    justifyContent: 'space-between',
    marginHorizontal: responsiveScreenWidth(6.7),
    alignItems: 'center'
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    borderColor: '#1F1F60',
    borderWidth: 2,
    marginTop: '10%',
    marginLeft: '1%'
  },
  settingsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  darkmode: { marginRight: '6.7%' },
  greetingText: {
    fontSize: RFValue(18, 768),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    marginLeft: responsiveScreenWidth(3.2)
  },
  notificationContainer: {
    height: responsiveScreenHeight(3.5),
    width: responsiveScreenWidth(11),
    alignItems: 'center',
    justifyContent: 'center'
  },
  notificationIcon: {
    height: responsiveScreenHeight(3.4),
    resizeMode: 'contain'
  },
  notificationcountContainer: {
    position: 'absolute',
    backgroundColor: '#00C5F9',
    borderRadius: 8,
    width: responsiveScreenWidth(5),
    height: responsiveScreenHeight(2.2),
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0
  },
  notificationcountText: {
    fontFamily: 'BananaGrotesk-Regular',
    color: '#FFFFFF',
    fontSize: RFValue(12, 768),
    letterSpacing: -0.07
  },
  profileIconContainer: { alignItems: 'center', marginTop: responsiveScreenHeight(5) },
  profileIcon: {
    resizeMode: 'contain',
    height: responsiveScreenHeight(7),
    marginLeft: responsiveScreenWidth(6)
  },
  superscriptText: {
    fontSize: RFValue(14, 768),
    fontFamily: 'BananaGrotesk-Bold',
    color: '#1F1F60',
    marginLeft: responsiveScreenWidth(1),
    textAlign: 'center',
    marginTop: '7%'
  },
  textStyle: {
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: RFValue(36, 812),
    color: '#1F1F60',
    letterSpacing: -0.18
  },
  labelFont: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: RFValue(18, 768),
    marginLeft: responsiveScreenWidth(2),
    marginTop: responsiveScreenHeight(2)
  },
  drawerSection: {
    // flex: 1,
    marginTop: responsiveScreenHeight(2),
    // borderBottomColor: 'white',
    // borderBottomWidth: 0,
    marginLeft: responsiveScreenWidth(2)
  },
  item: {
    marginTop: 0
  },
  optionContainer: {
    flexDirection: 'row',
    marginBottom: responsiveScreenHeight(3)
  },
  iconfollow: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: RFValue(18, 768),
    marginLeft: 17 * scaleWidth,
    marginTop: responsiveScreenHeight(2)
  },
  iconpoll: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: RFValue(18, 768),
    marginLeft: 18 * scaleWidth,
    marginTop: responsiveScreenHeight(2)
  },
  iconfriend: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: RFValue(18, 768),
    marginLeft: 13 * scaleWidth,
    marginTop: responsiveScreenHeight(2)
  },
  iconrequest: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: RFValue(18, 768),
    marginLeft: 16 * scaleWidth,
    marginTop: responsiveScreenHeight(2)
  },
  iconinvite: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: RFValue(18, 768),
    marginLeft: 18 * scaleWidth,
    marginTop: responsiveScreenHeight(2)
  },
  iconsetting: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: RFValue(18, 768),
    marginLeft: 13 * scaleWidth,
    marginTop: responsiveScreenHeight(1)
  },
  settingsimage: {
    marginLeft: responsiveScreenWidth(6)
  },
  bottomDrawerSection: {
    marginBottom: responsiveScreenHeight(4),
    paddingTop: responsiveScreenHeight(4),
    borderTopColor: '#8F8FAF19',
    borderTopWidth: 1,
    marginLeft: responsiveScreenWidth(2)
  },
  fullFlex: { flex: 1 },
  shadow: {
    height: 1,
    backgroundColor: '#8F8FAF19',
    marginTop: responsiveScreenHeight(4.2)
  }
})
