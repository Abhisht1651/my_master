import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveHeight
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
  heading: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(8)
  },
  statusBar: { width: '100%', height: 33.5 * scaleHeight, backgroundColor: 'white' },
  headingText: {
    marginTop: responsiveScreenHeight(5.9),
    marginHorizontal: responsiveScreenWidth(8.4),
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: scaledSize(20),
    color: '#1F1F60'
  },
  loginButton: {
    height: responsiveScreenHeight(7.8),
    width: responsiveScreenWidth(87),
    borderRadius: 39,
    backgroundColor: '#7B46E4',
    marginTop: 196 * scaleHeight
  },

  buttonText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: RFValue(16, 768)
  },
  importContact: {
    height: 200 * scaleHeight,
    width: 325 * scaleWidth,
    // borderColor: '#DCDCE9',
    // borderRadius: 15,
    // borderWidth: 1,
    marginHorizontal: responsiveScreenWidth(6.7),
    marginTop: 115 * scaleHeight,
    alignItems: 'center'
  },
  importContactIcon: {
    height: responsiveScreenHeight(7.8),
    width: responsiveScreenHeight(7.8),
    borderRadius: responsiveScreenWidth(8),
    backgroundColor: '#47C3F4',
    marginTop: '7%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  importContactText: {
    textAlign: 'center',
    marginHorizontal: responsiveScreenWidth(16.8),
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: RFValue(18, 768),
    marginTop: responsiveHeight(0.7),
    color: '#1F1F60'
  },
  gradient: {
    height: responsiveScreenHeight(17.8),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactImage: {
    height: responsiveScreenHeight(3.9),
    resizeMode: 'contain'
  },
  card: { flex: 1, backgroundColor: 'white' },
  buttonAlign: { alignItems: 'center', marginTop: responsiveHeight(20) },
  getAccess: {
    marginHorizontal: responsiveScreenWidth(16.8),
    fontFamily: 'BananaGrotesk-Light',
    fontSize: RFValue(16, 768),
    marginTop: responsiveHeight(0.4),
    color: '#8F8FAF'
  }
})
