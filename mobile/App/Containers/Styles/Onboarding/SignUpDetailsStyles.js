import { StyleSheet, Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 768

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)
export default StyleSheet.create({
  headerPosition: { flex: 1 },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 2
  },
  statusBar: { width: '100%', height: 33.5 * scaleHeight, backgroundColor: 'white' },
  shadow: { backgroundColor: '#E6ECED', height: 0.5 },
  text: {
    fontSize: RFValue(20, 722),
    fontFamily: 'BananaGrotesk-Bold',
    color: '#1F1F60',
    marginTop: '4.6%',
    marginLeft: '13.3%'
  },
  marginProfile: {
    marginTop: 45 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextInputMargin: {
    marginTop: 35 * scaleHeight
  },
  TextInputWidth: {
    width: 275 * scaleWidth
  },
  textbox: {
    height: 133 * scaleHeight,
    width: 276 * scaleWidth
  },
  hintStyle: {
    fontSize: RFValue(14, 722),
    fontFamily: 'BananaGrotesk-Light',
    color: '#8F8FAF',
    position: 'absolute',
    right: 0,
    bottom: 9 * scaleHeight
  },
  profileCamera: {
    height: responsiveScreenHeight(3.46),
    width: responsiveScreenHeight(4.15),
    resizeMode: 'contain'
  },
  profileCameraContainer: {
    height: responsiveScreenHeight(6.65),
    width: responsiveScreenHeight(6.65),
    borderRadius: responsiveScreenHeight(3.33),
    borderColor: '#E6ECED',
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileCameraView: {
    position: 'absolute',
    bottom: 0,
    right: responsiveScreenWidth(33.36)
  },
  profileImage: {
    height: responsiveScreenHeight(13.15),
    width: responsiveScreenHeight(13.15),
    borderRadius: responsiveScreenHeight(6.58)
  },
  profileImageContainer: {
    height: responsiveScreenHeight(13.15),
    width: responsiveScreenHeight(13.15),
    borderRadius: responsiveScreenHeight(6.58),
    backgroundColor: '#1F1F6016',
    alignItems: 'center',
    aspectRatio: 1,
    justifyContent: 'center'
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveScreenHeight(5.95)
  },
  writeBioText: {
    marginTop: responsiveScreenHeight(5),
    marginLeft: responsiveScreenWidth(13.6),
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: RFValue(16, 722)
  },
  bioDescription: {
    marginLeft: responsiveScreenWidth(13.6),
    height: 103,
    width: responsiveScreenWidth(74),
    backgroundColor: '#F5F8F8',
    marginTop: '1.7%',
    fontSize: RFValue(14, 722),
    fontFamily: 'BananaGrotesk-Light',
    borderRadius: 10,
    paddingTop: '5%',
    paddingLeft: '5%'
  },
  gradient: {
    height: responsiveScreenHeight(17.8),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    height: responsiveScreenHeight(7.8),
    width: responsiveScreenWidth(87),

    borderRadius: 39,
    backgroundColor: '#7B46E4',
    marginTop: '0%',
    marginBottom: '0%'
  },
  buttonText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: RFValue(16, 722),
    fontWeight: 'normal'
  },
  locationImage: { height: 7.91, width: 7.22 },
  locationText: {
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: scaledSize(12),
    textAlign: 'center',
    marginLeft: 4.52 * scaleWidth
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 9 * scaleHeight,
    marginBottom: responsiveScreenHeight(20),
    marginLeft: responsiveScreenWidth(13.6),
    alignItems: 'center'
  },
  button: {
    position: 'absolute',
    bottom: responsiveScreenHeight(6)
  }
})
