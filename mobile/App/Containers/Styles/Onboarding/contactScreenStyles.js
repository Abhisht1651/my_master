import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  headerPosition: { flex: 1 },
  statusBar: { width: '100%', height: 33.5 * scaleHeight, backgroundColor: 'white' },
  heading: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(8),
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED'
  },
  scrollBackground: { backgroundColor: '#F7F7F7' },
  alignViewCenter: { alignItems: 'center', marginTop: 50 * scaleHeight },
  contactsCardContainer1: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: responsiveScreenHeight(3.2)
  },
  emailContainer: {
    backgroundColor: 'white',
    marginTop: responsiveScreenHeight(5.7)
  },
  emailcontainerHeading: {
    marginTop: '4.3%'
  },
  friendsContactContainer: {
    marginHorizontal: responsiveScreenWidth(6.7),
    marginTop: '6.3%'
  },
  headingText: {
    marginTop: responsiveScreenHeight(2.34),
    marginLeft: responsiveScreenWidth(6.7),
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: scaledSize(20),
    color: '#1F1F60'
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 7
  },
  itemborder: {
    borderWidth: scaledSize(1),
    borderColor: '#DCDCE9'
  },
  profilePic: {
    height: responsiveScreenHeight(7.8),
    borderRadius: responsiveScreenWidth(8),
    resizeMode: 'contain',
    marginTop: responsiveScreenHeight(1.23)
  },
  profileNameText: {
    fontSize: RFValue(14, 722),
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Light'
  },
  item: {
    backgroundColor: 'tomato',
    height: responsiveScreenHeight(40),
    width: responsiveScreenWidth(80),
    marginTop: 11,
    marginLeft: 10,
    borderRadius: 15
  },
  seperator: {
    width: 7 * scaleWidth,
    height: 161 * scaleHeight,
    backgroundColor: '#F7F7F7'
  },
  seperatorEmail: {
    width: 5 * scaleWidth,
    height: 161 * scaleHeight,
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 1 * scaleWidth,
    borderLeftColor: '#E6ECED'
  },
  flatlistheader: {
    width: 25 * scaleWidth,
    height: 161 * scaleHeight,
    backgroundColor: '#F7F7F7'
  },
  flatlistfooter: {
    width: 13 * scaleWidth,
    height: 161 * scaleHeight,
    backgroundColor: '#F7F7F7'
  },
  flatlistheaderEmail: {
    width: 25 * scaleWidth,
    height: 161 * scaleHeight
  },
  flatListFooterEmail: {
    width: 25 * scaleWidth,
    height: 161 * scaleHeight
  },
  flatlistEmail: {
    width: 13 * scaleWidth,
    height: responsiveScreenHeight(20)
  },
  headingEntities: {
    marginTop: responsiveScreenHeight(4.3),
    marginLeft: 25 * scaleWidth,
    fontSize: RFValue(18, 768),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60'
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  modal: {
    height: 280 * scaleHeight,
    width: 325 * scaleWidth,
    backgroundColor: 'white',
    borderRadius: scaledSize(15)
  },
  modalCrossContainer: {
    height: responsiveHeight(4),
    width: responsiveHeight(4),
    right: responsiveScreenWidth(6.3),
    top: responsiveHeight(2.73),
    position: 'absolute',
    alignItems: 'center'
  },
  modalCross: {
    tintColor: '#7B46E4',
    resizeMode: 'contain',
    height: 17.28 * scaleHeight
  },
  modalHeadingText: {
    marginHorizontal: responsiveScreenWidth(17.1),
    textAlign: 'center',
    marginTop: 76 * scaleHeight,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: RFValue(20, 722)
  },
  modalDescriptionText: {
    marginHorizontal: responsiveWidth(8.53),
    textAlign: 'center',
    marginTop: responsiveHeight(1),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Light',
    fontSize: RFValue(16, 722)
  },
  flatlistHeadingContainer: {
    flexDirection: 'row',
    marginHorizontal: responsiveScreenWidth(7),
    justifyContent: 'space-between',
    marginTop: '5%'
  },
  flatListHeadingText: {
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60',
    fontSize: scaledSize(18)
  },
  clickableText: {
    fontSize: scaledSize(14),
    fontFamily: 'BananaGrotesk-Bold',
    color: '#7B46E4'
  },
  entities: {
    backgroundColor: 'tomato',
    height: responsiveScreenHeight(10.34),
    width: responsiveScreenWidth(86.7),
    marginTop: 11,
    marginHorizontal: 25,
    borderRadius: 15
  },
  loginButton: {
    height: responsiveScreenHeight(7.8),
    width: responsiveScreenWidth(87),
    borderRadius: 39,
    backgroundColor: '#7B46E4'
  },
  buttonText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: RFValue(16, 768),
    fontWeight: 'normal',
    letterSpacing: -0.11
  },
  gradient: {
    height: responsiveScreenHeight(17.8),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewEntities: {
    marginTop: responsiveScreenHeight(3.8),
    marginBottom: responsiveScreenHeight(20),
    textAlign: 'center',
    color: '#7B46E4',
    fontSize: RFValue(16, 768),
    fontFamily: 'BananaGrotesk-Bold'
  },
  unselectedButton: {
    height: responsiveScreenHeight(4),
    width: responsiveScreenWidth(20),
    borderRadius: 39,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#7B46E4',
    position: 'absolute',
    bottom: responsiveScreenHeight(1.1),
    marginVertical: 0
  },
  selectedButton: {
    height: responsiveScreenHeight(4),
    width: responsiveScreenWidth(20),
    borderRadius: 39,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DCDCE9',
    position: 'absolute',
    bottom: responsiveScreenHeight(1.1),
    marginVertical: 0
  },
  unselectedText: { color: '#7B46E4', fontSize: RFValue(14, 768) },
  selectedText: { color: '#8F8FAF', fontSize: RFValue(14, 768) }
})
