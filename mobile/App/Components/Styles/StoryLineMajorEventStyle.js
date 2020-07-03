// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    marginTop: wp('4.53%'),
    alignItems: 'center',
    width: '100%',
    borderRadius: wp('4%'),
    opacity: 1,
    borderColor: '#E6ECED',
    borderWidth: 0.5,
    backgroundColor: '#FFFFFF'
  },
  dot: {
    backgroundColor: '#1F1F60',
    height: wp('0.53%'),
    width: wp('0.53%'),
    borderRadius: wp('0.267%'),
    marginHorizontal: wp('1.3%')
  },
  image: {
    width: '100%',
    height: wp('42.2%'),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    opacity: 1
  },
  imageBorder: {
    borderTopLeftRadius: wp('4%'),
    borderTopRightRadius: wp('4%')
  },
  sourceImage: {
    width: '20%',
    height: '15%'
  },
  previewText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.8%'),
    opacity: 1,
    marginTop: '8%',
    width: '86.28%'
  },
  relatedEntityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    width: '86.28%',
    marginBottom: '6%'
  },
  EntityRelatedText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('3.2%'),
    opacity: 1
  },
  relatedEntityIconContainer: {
    flexDirection: 'row',
    marginLeft: '5%'
  },
  relatedEntityIcon: {
    height: wp('5%'),
    width: wp('5%'),
    borderRadius: wp('1.067%'),
    marginHorizontal: '3%'
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED'
  },
  commentsContainer: {
    width: '86.28%',
    flexDirection: 'row',
    alignItems: 'center',
    height: wp('18%'),
    marginLeft: wp('1.3%')
  },
  commentsIcon: {
    width: wp('5.3%'),
    height: wp('5.3%'),
    opacity: 1,
    borderRadius: wp('3.73%'),
    marginLeft: -wp('1.3%')
  },
  commentsText: {
    textAlign: 'left',
    letterSpacing: 0,
    color: '#8F8FAF',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%'),
    marginLeft: '2%'
  }
})
