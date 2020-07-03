import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const baseWidth = 375
const baseHeight = 812

const scaleWidth = width / baseWidth
const scaleHeight = height / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size) => Math.ceil(size * scale)

export default StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    paddingLeft: (27 / 375) * width
  },
  leftArrow: {
    height: (13.5 / 812) * height,
    width: (18 / 375) * width
  },
  line: {
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  heading: {
    fontSize: (20 / 812) * height,
    lineHeight: (27 / 812) * height,
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Bold'
  },
  container: {
    aspectRatio: 1.625,
    height: 200 * scaleHeight,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 15 * scaleHeight,
    borderColor: '#DCDCE9',
    backgroundColor: 'white'
  },
  upperBlock: {
    alignItems: 'center',
    height: 60 * scaleHeight,
    aspectRatio: 1,
    marginBottom: 8 * scaleHeight,
    marginTop: 30 * scaleHeight
  },
  middleBlock: {
    width: '61.53%',
    height: 44 * scaleHeight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3 * scaleHeight
  },
  lastBlock: {
    width: '61.53%',
    height: 17 * scaleHeight
  },
  middleBlockText: {
    letterSpacing: -0.12,
    fontSize: scaledSize(18),
    textAlign: 'center',
    color: '#1F1F60',
    fontFamily: 'BananaGrotesk-Medium',
    lineHeight: 22 * scaleHeight
  },
  lastBlockText: {
    fontSize: scaledSize(14),
    textAlign: 'center',
    color: '#8F8FAF',
    fontFamily: 'BananaGrotesk-Light'
  },
  connect: {
    fontSize: (20 / 812) * height,
    lineHeight: (27 / 812) * height,
    fontFamily: 'BananaGrotesk-Bold',
    color: '#1F1F60'
  },
  inviteHead: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inviteText: {
    fontSize: (18 / 812) * height,
    lineHeight: (27 / 812) * height,
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60'
  },
  inviteAll: {
    fontSize: (14 / 812) * height,
    lineHeight: (16 / 812) * height,
    fontFamily: 'BananaGrotesk-Bold',
    color: '#7B46E4'
  },
  inviteAllPos: {
    justifyContent: 'flex-end',
    paddingBottom: (4 / 812) * height
  },
  flexRowInvite: {
    flexDirection: 'row'
  },
  imagePerson: {
    height: 60 * scaleWidth,
    width: 60 * scaleWidth,
    borderRadius: 30 * scaleHeight,
    justifyContent: 'center'
  },
  namePerson: {
    fontSize: (14 / 812) * height,
    lineHeight: (15 / 812) * height,
    fontFamily: 'BananaGrotesk-Light',
    color: '#1F1F60',
    textAlign: 'center'
  },
  inviteButton: {
    width: 75 * scaleWidth,
    borderWidth: 1 * scaleWidth,
    borderRadius: 16 * scaleHeight,
    borderColor: '#7B46E4',
    height: 30 * scaleHeight
  },
  invitePersonText: {
    fontSize: (14 / 812) * height,
    lineHeight: (16 / 812) * height,
    fontFamily: 'BananaGrotesk-Bold',
    color: '#7B46E4',
    textAlign: 'center'
  },
  verticleLine: {
    height: '100%',
    width: 1 * scaleWidth,
    borderColor: '#E6ECED',
    borderWidth: 1
  }
})
