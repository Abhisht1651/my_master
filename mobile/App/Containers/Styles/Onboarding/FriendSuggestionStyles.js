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
    height: responsiveScreenHeight(11)
  },
  headingText: {
    marginTop: responsiveScreenHeight(4),
    marginLeft: responsiveScreenWidth(6.7),
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: RFValue(20, 768),
    color: '#1F1F60'
  },
  item: {
    backgroundColor: 'tomato',
    height: responsiveScreenHeight(40),
    width: responsiveScreenWidth(80),
    marginTop: 11,
    marginLeft: 10,
    borderRadius: 15
  },
  headingEntities: {
    marginTop: responsiveScreenHeight(5.42),
    marginLeft: 25,
    fontSize: RFValue(18, 768),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60'
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

  viewEntities: {
    marginTop: responsiveScreenHeight(3.8),
    marginBottom: responsiveScreenHeight(20),
    textAlign: 'center',
    color: '#7B46E4',
    fontSize: RFValue(16, 768),
    fontFamily: 'BananaGrotesk-Bold'
  },
  seperator: {
    height: 19 * scaleHeight
  },
  flatlistheader: {
    height: responsiveScreenHeight(3.8),
    backgroundColor: 'white'
  },
  flatlistfooter: {
    height: responsiveScreenHeight(3.8),
    backgroundColor: 'white'
  },
  unselectedButton: {
    height: responsiveScreenHeight(3.9),
    width: '20%',
    borderRadius: 39,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#7B46E4',
    position: 'absolute',
    right: 5,
    top: 8,
    marginHorizontal: 0,
    marginVertical: 0
  },
  selectedButton: {
    height: responsiveScreenHeight(3.9),
    width: '20%',
    borderRadius: 39,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DCDCE9',
    position: 'absolute',
    right: 5,
    top: 8,
    marginHorizontal: 0,
    marginVertical: 0
  },
  unselectedText: { color: '#7B46E4', fontSize: RFValue(14, 812) },
  selectedText: { color: '#8F8FAF', fontSize: RFValue(14, 812) },
  friendCardContainer: {
    height: responsiveScreenHeight(7.8),
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  profilepic: {
    height: responsiveScreenHeight(5.73),
    width: responsiveScreenHeight(5.73),
    borderRadius: responsiveScreenWidth(5.9),
    resizeMode: 'contain'
  },
  profiletitle: {
    fontSize: RFValue(18, 768),
    textAlign: 'left',
    color: '#1E1E60',
    fontFamily: 'BananaGrotesk-Medium',
    marginLeft: responsiveScreenWidth(2.7),
    marginTop: responsiveScreenHeight(1)
  },
  profilefollower: {
    fontSize: RFValue(12, 768),
    textAlign: 'left',
    color: '#8E8EAE',
    fontFamily: 'BananaGrotesk-Regular',
    marginLeft: responsiveScreenWidth(2.7),
    marginTop: responsiveScreenHeight(0.8)
  },
  shadow: { height: 1, backgroundColor: '#E6ECED' },
  page: { flex: 1, backgroundColor: 'white' },
  listContainer: {
    flex: 1,
    marginHorizontal: responsiveScreenWidth(5.6)
  }
})
