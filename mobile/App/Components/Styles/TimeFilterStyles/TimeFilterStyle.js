import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const scale = (size) => (width / guidelineBaseWidth) * size
const verticalScale = (size) => (height / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

export default StyleSheet.create({
  modalStyle: {
    backgroundColor: '#2222234D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: verticalScale(490),
    width: scale(375),
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#E6ECED',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  view1: {
    flexDirection: 'row',
    height: verticalScale(62),
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E6ECED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  view3: {
    alignItems: 'center',
    height: verticalScale(139),
    width: '100%'
  },
  headerText: {
    width: scale(130),
    textAlign: 'center',
    marginLeft: 'auto',
    fontSize: moderateScale(18),
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: -0.12
  },
  closeIcon: {
    height: 17.28,
    aspectRatio: 1
  },
  closeIconContainer: {
    marginLeft: scale(83.75),
    marginRight: scale(25.97)
  },
  year: {
    height: verticalScale(258),
    width: scale(69),
    marginLeft: scale(25),
    marginRight: scale(56),
    marginTop: verticalScale(30),
    justifyContent: 'space-between'
  },
  month: {
    height: verticalScale(238),
    width: scale(164),
    marginRight: scale(61),
    marginTop: verticalScale(30),
    justifyContent: 'space-between'
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: verticalScale(200)
  },
  view2HeaderText: {
    marginBottom: verticalScale(14),
    color: '#1F1F60',
    fontSize: moderateScale(18),
    fontFamily: 'BananaGrotesk-Medium',
    letterSpacing: -0.12
  },
  button: {
    width: verticalScale(325),
    height: verticalScale(50),
    backgroundColor: '#7B46E4',
    borderRadius: 38.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(57.5)
  },
  btnText: {
    fontSize: moderateScale(16),
    fontFamily: 'BananaGrotesk-Bold',
    color: '#FFFFFF',
    letterSpacing: -0.09
  },
  circle: {
    height: verticalScale(25),
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#8F8FAF',
    borderRadius: 100
  },
  listItem: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  listText: {
    marginLeft: scale(10),
    fontFamily: 'BananaGrotesk-Light',
    fontSize: moderateScale(14),
    color: '#8F8FAF'
  },
  checkedCircle: {
    height: '100%',
    borderRadius: 100,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatList: {
    flex: 1,
    justifyContent: 'space-around'
  }
})
