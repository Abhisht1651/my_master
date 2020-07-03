// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 250,
    minHeight: 206,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    borderRadius: wp('4%'),
    opacity: 1,
    alignItems: 'center'
  },
  containerWithoutBorder: {
    width: '100%',
    minWidth: 250,
    minHeight: 206,
    backgroundColor: '#FFFFFF',
    opacity: 1,
    alignItems: 'center'
  },
  joinTextContainer: {
    width: '83.6%',
    paddingVertical: 17
  },
  divider: {
    width: '100%',
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  joinText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('4.267%'),
    lineHeight: wp('5.867%')
  },
  timeContainer: {
    flexDirection: 'row',
    width: '83.6%',
    paddingTop: wp('4.67%')
  },
  timeIconContainer: {
    opacity: 1
  },
  pollIcon: {
    height: wp('4.53%'),
    width: wp('4.53%')
  },
  timeTextContainer: {
    paddingHorizontal: 5
  },
  timeText: {
    textAlign: 'left',
    letterSpacing: -0.07,
    color: '#002468',
    opacity: 0.5,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%')
  },
  questionContainer: {
    width: '83.6%',
    marginTop: 13.5
  },
  questionText: {
    textAlign: 'left',
    letterSpacing: -0.12,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.8%'),
    lineHeight: wp('5.867%')
  },
  voterContainer: {
    flexDirection: 'row',
    width: '83.6%',
    marginTop: 9,
    marginBottom: 28,
    alignItems: 'center'
  },
  voterIconContainer: {
    flexDirection: 'row',
    marginLeft: wp('2.1%')
  },
  voterIcon: {
    width: wp('7.467%'),
    height: wp('7.467%'),
    opacity: 1,
    borderRadius: wp('3.73%'),
    marginLeft: -wp('2.1%')
  },
  votesContainer: {
    marginLeft: wp('1.3%')
  },
  votes: {
    textAlign: 'left',
    letterSpacing: -0.1,
    color: '#082366',
    opacity: 0.5,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%')
  }
})
