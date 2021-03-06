// @flow
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from '../../Themes/ScreenMetrics'

export default StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 300,
    minHeight: 300,
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
    minWidth: 300,
    minHeight: 300,
    backgroundColor: '#FFFFFF',
    opacity: 1,
    alignItems: 'center'
  },
  questionContainer: {
    width: '88%',
    marginTop: wp('6.93%')
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 29
  },
  optionContainer: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center'
  },
  option: {
    height: wp('6.67%'),
    width: wp('6.67%'),
    borderRadius: wp('3.2%'),
    borderColor: '#8F8FAF',
    borderStyle: 'solid',
    borderWidth: 1,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionFill: {
    height: wp('4.2%'),
    width: wp('4.2%'),
    borderRadius: wp('2.1%'),
    backgroundColor: '#00ff46',
    opacity: 1
  },
  optionTextContainer: {
    paddingLeft: 10
  },
  optionText: {
    textAlign: 'left',
    marginTop: 2,
    letterSpacing: 0,
    color: '#1F1F60',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Light',
    fontSize: wp('3.7%')
  },
  buttonContainer: {
    marginVertical: wp('5.3%')
  },
  buttonText: {
    textAlign: 'center',
    letterSpacing: -0.09,
    color: '#7B46E4',
    opacity: 1,
    fontFamily: 'BananaGrotesk-Bold',
    fontSize: wp('4.2%')
  }
})
