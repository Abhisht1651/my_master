import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Metrics, ApplicationStyles } from '../../Themes'

const dim = [296, 412, 553, 700, 807.5]
for (let i = 0; i < 5; i += 1) {
  dim[i] /= 812
  dim[i] *= 100
}
const offset = 1.2
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    height: responsiveHeight(17),
    width: responsiveWidth(58),
    resizeMode: 'contain',
    // position: "absolute",
    marginBottom: '12.3%',
    alignItems: 'center'
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    position: 'absolute',
    top: 0
  },
  barColor: { backgroundColor: '#7B46E4' },

  text: {
    fontSize: RFValue(22, 812),
    fontFamily: 'BananaGrotesk-Medium',
    color: '#1F1F60'
  },
  circle1_Outside: {
    width: responsiveHeight(dim[4]),
    height: responsiveHeight(dim[4]),
    borderRadius: responsiveHeight(dim[4] / 2)
  },
  circle1_Inside: {
    width: responsiveHeight(dim[4] - offset),
    height: responsiveHeight(dim[4] - offset),
    borderRadius: responsiveHeight((dim[4] - offset) / 2)
  },
  position: {
    position: 'absolute'
  },
  circle2_Outside: {
    width: responsiveHeight(dim[3]),
    height: responsiveHeight(dim[3]),
    borderRadius: responsiveHeight(dim[3] / 2)
  },
  circle2_Inside: {
    width: responsiveHeight(dim[3] - offset),
    height: responsiveHeight(dim[3] - offset),
    borderRadius: responsiveHeight((dim[3] - offset) / 2)
  },
  circle3_Outside: {
    width: responsiveHeight(dim[2]),
    height: responsiveHeight(dim[2]),
    borderRadius: responsiveHeight(dim[2] / 2)
  },
  circle3_Inside: {
    width: responsiveHeight(dim[2] - offset),
    height: responsiveHeight(dim[2] - offset),
    borderRadius: responsiveHeight((dim[2] - offset) / 2)
  },
  circle4_Outside: {
    width: responsiveHeight(dim[1]),
    height: responsiveHeight(dim[1]),
    borderRadius: responsiveHeight(dim[1] / 2)
  },
  circle4_Inside: {
    width: responsiveHeight(dim[1] - offset),
    height: responsiveHeight(dim[1] - offset),
    borderRadius: responsiveHeight((dim[1] - offset) / 2)
  },
  circle5_Outside: {
    width: responsiveHeight(dim[0]),
    height: responsiveHeight(dim[0]),
    borderRadius: responsiveHeight(dim[0] / 2)
  },
  circle5_Inside: {
    width: responsiveHeight(dim[0] - offset),
    height: responsiveHeight(dim[0] - offset),
    borderRadius: responsiveHeight((dim[0] - offset) / 2)
  }
})
