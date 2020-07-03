import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%'
  },
  commentBoxContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: wp('4.8%')
  },
  commentBoxHeaderContainer: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 100
  },
  nameText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    lineHeight: wp('4.267%'),
    color: '#1B2062',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('3.73%'),
    marginLeft: wp('4.5%')
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dropDown: {
    paddingLeft: 10,
    paddingRight: 20
  },
  daysText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    lineHeight: wp('3.73%'),
    color: '#002468',
    opacity: 0.5,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%')
  },
  commentTextContainer: {
    marginTop: 15,
    width: '89%'
  },
  commentText: {
    textAlign: 'left',
    letterSpacing: -0.08,
    lineHeight: wp('4.267%'),
    color: '#112265',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%')
  },
  actionContainer: {
    marginTop: 17,
    width: '89%',
    flexDirection: 'row',
    marginBottom: 20
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50
  },
  replyIcon: {
    marginRight: 3
  },
  boostContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    lineHeight: wp('4%'),
    color: '#8F8FAF',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.467%')
  }
})
