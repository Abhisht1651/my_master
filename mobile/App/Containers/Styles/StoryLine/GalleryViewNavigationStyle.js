import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../../Themes/ScreenMetrics'

export default StyleSheet.create({
  tabContainer: {
    backgroundColor: '#FFFFFF',
    opacity: 1,
    borderBottomColor: '#E6ECED'
  },
  tab: {
    width: 100
  },
  indicator: {
    backgroundColor: '#7B46E4'
  },
  label: {
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: 12,
    letterSpacing: -0.11,
    textAlign: 'left'
  },
  tabDisplay: {
    width: wp('86.67%')
  },
  contentContainer: {
    width: wp('100%'),
    alignItems: 'center'
  },
  previewContainerGallery: {
    width: wp('80%'),
    marginTop: 17,
    height: wp('40%'),
    marginRight: 15,
    marginBottom: 50
  },
  galleryImageContainer: {
    width: wp('80%'),
    height: wp('40%'),
    borderRadius: wp('4%'),
    overflow: 'hidden'
  },
  galleryImage: {
    width: wp('80%'),
    height: wp('40%'),
    overflow: 'hidden'
  },
  galleryText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.253%'),
    opacity: 1,
    marginTop: 17
  },
  player: {
    borderRadius: 25,
    width: 50,
    height: 50,
    position: 'absolute',
    top: wp('26'),
    left: 10,
    alignItems: 'stretch',
    bottom: 0,
    right: 0
  }
})
