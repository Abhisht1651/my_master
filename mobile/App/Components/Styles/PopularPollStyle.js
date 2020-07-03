import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 300,
    minHeight: 345,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6ECED',
    borderRadius: wp('4%'),
    opacity: 1
  },
  containerWithoutBorder: {
    width: '100%',
    minWidth: 300,
    minHeight: 345,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 1
  },
  questionContainer: {
    width: '88%',
    marginTop: 26
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
    marginTop: 24,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECED'
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
    marginLeft: wp('2.1%')
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
  },
  progressBarContainer: {
    width: '86.67%',
    marginTop: 20,
    marginBottom: 15
  },
  progressBar: {
    position: 'relative',
    minWidth: '100%',
    height: wp('7.467%'),
    marginBottom: 15,
    backgroundColor: '#E6ECED',
    borderRadius: wp('0.53%'),
    opacity: 1
  },
  progressFill: {
    position: 'absolute',
    left: -4,
    height: wp('7.467%'),
    backgroundColor: '#47C3F4',
    borderRadius: wp('0.53%'),
    opacity: 1,
    top: 0
  },
  progressBarTextContainer: {
    flexDirection: 'row'
  },
  progressBarText: {
    textAlign: 'left',
    letterSpacing: -0.7,
    color: '#1F1F60',
    opacity: 1,
    paddingVertical: wp('1.6%'),
    paddingLeft: 6,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('3.467%')
  },
  progressBarPercentageText: {
    textAlign: 'left',
    letterSpacing: -0.7,
    color: '#1F1F60',
    opacity: 1,
    paddingVertical: wp('1.6%'),
    paddingLeft: 10,
    fontFamily: 'BananaGrotesk-Regular',
    fontSize: wp('3.2%')
  },
  progressBarVoterIconContainer: {
    height: wp('6.4%'),
    width: wp('6.4%'),
    borderRadius: wp('3.2%'),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: wp('1.067%'),
    opacity: 1,
    marginTop: wp('0.487%'),
    backgroundColor: '#FFFFFF'
  },
  progressBarVoterIcon: {
    height: wp('5.3%'),
    width: wp('5.3%'),
    borderRadius: wp('2.67%')
  }
})
