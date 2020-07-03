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
  statusBar: { width: '100%', height: 33.5 * scaleHeight, backgroundColor: 'white' },
  heading: {
    backgroundColor: 'white',
    height: responsiveScreenHeight(8)
  },
  headingText: {
    marginTop: responsiveScreenHeight(2.34),
    marginLeft: responsiveScreenWidth(6.7),
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: scaledSize(20),
    color: '#1F1F60'
  },
  headingStoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25 * scaleWidth,
    marginTop: 26 * scaleHeight
  },
  storyHeading: {
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: scaledSize(18),
    color: '#1F1F60'
  },
  followText: {
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: scaledSize(16),
    color: '#7B46E4'
  },
  storyCard: { flex: 1, backgroundColor: '#F7F7F7' },
  marginStory: { marginTop: 20 * scaleHeight },
  item: {
    width: responsiveScreenWidth(80),
    height: 322 * scaleWidth
  },
  entityContainer: { flex: 1, marginTop: 15 * scaleHeight, marginHorizontal: 25 * scaleHeight },
  headingEntities: {
    marginTop: responsiveScreenHeight(5.42),
    marginLeft: 25 * scaleHeight,
    fontSize: scaledSize(18),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60'
  },
  entities: {
    marginTop: 11 * scaleHeight
  },
  buttonText: {
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    fontSize: RFValue(16, 768),
    fontWeight: 'normal'
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
  viewEntities: {
    marginTop: responsiveScreenHeight(3.8),
    marginBottom: responsiveScreenHeight(20),
    textAlign: 'center',
    color: '#7B46E4',
    fontSize: scaledSize(16),
    fontFamily: 'BananaGrotesk-Bold'
  },
  seperator: {
    width: 10 * scaleWidth,
    height: responsiveScreenHeight(40),
    backgroundColor: '#F7F7F7'
  },
  flatlistheader: {
    width: 25 * scaleWidth,
    height: responsiveScreenHeight(40),
    backgroundColor: '#F7F7F7'
  },
  flatlistfooter: {
    width: 25 * scaleWidth,
    height: responsiveScreenHeight(40),
    backgroundColor: '#F7F7F7'
  }
})
