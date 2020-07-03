// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 120,
    width: '100%',
    minWidth: 300,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    borderRadius: wp('4%'),
    opacity: 1
  },
  containerWithoutBorder: {
    alignItems: 'center',
    minHeight: 120,
    width: '100%',
    minWidth: 300,
    opacity: 1
  },
  questionContainer: {
    width: '88%',
    marginTop: wp('4.25%')
  },
  questionText: {
    textAlign: 'left',
    letterSpacing: -0.11,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Medium',
    fontSize: wp('4.8%'),
    lineHeight: wp('5.867%')
  },
  voterAndVotesContainer: {
    flexDirection: 'row',
    width: '88%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    paddingBottom: 18
  },
  voterContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  voterIconContainer: {
    flexDirection: 'row',
    marginLeft: 8
  },
  voterIcon: {
    width: wp('7.467%'),
    height: wp('7.467%'),
    opacity: 1,
    borderRadius: wp('3.73%'),
    marginLeft: -wp('2.1%')
  },
  votesContainer: {
    marginLeft: wp('1.3%%')
  },
  votes: {
    textAlign: 'left',
    letterSpacing: -0.1,
    color: '#082366',
    opacity: 0.5,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.73%')
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeIconContainer: {
    opacity: 1
  },
  pollIcon: {
    height: wp('4.53%'),
    width: wp('4.53%')
  },
  timeTextContainer: {
    marginLeft: 6
  },
  timeText: {
    textAlign: 'right',
    letterSpacing: -0.07,
    color: '#002468',
    opacity: 0.5,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%')
  }
})
