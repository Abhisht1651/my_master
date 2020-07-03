import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
  body: { flex: 1, backgroundColor: '#FFFFFF' },
  seperator: {
    height: 1,
    backgroundColor: '#FFFFFF',
    width: responsiveScreenWidth(2.1)
  },
  flatlistheader: {
    width: responsiveScreenWidth(6),
    backgroundColor: 'white'
  },
  flatlistfooter: {
    width: responsiveScreenWidth(6),
    backgroundColor: 'white'
  },
  categoryFilterText: {
    marginLeft: responsiveScreenWidth(2.3),
    fontFamily: 'BananaGrotesk-Regular',
    color: '#8F8FAF',
    fontSize: RFValue(14, 722)
  },
  item1: {
    height: responsiveScreenHeight(80.73),
    width: responsiveScreenWidth(87),
    backgroundColor: 'tomato',
    borderRadius: 22
  },
  item: {
    height: responsiveScreenHeight(16.8),
    width: responsiveScreenWidth(20.3),
    backgroundColor: 'tomato'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveScreenWidth(6.13),
    alignItems: 'center',
    marginTop: responsiveScreenHeight(1)
  },
  logo: { width: responsiveScreenWidth(44), resizeMode: 'contain' },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveScreenHeight(5.2),
    marginTop: responsiveScreenHeight(2),
    borderTopColor: '#E6ECED',
    borderTopWidth: 1,
    borderBottomColor: '#E6ECED',
    borderBottomWidth: 1
  },
  filterIconContainer: {
    alignItems: 'center',
    marginLeft: responsiveScreenWidth(6.7)
  },
  bar1: {
    width: responsiveScreenWidth(5.1),
    height: responsiveScreenHeight(0.3),
    backgroundColor: '#7B46E4',
    borderRadius: 2
  },
  bar2: {
    width: responsiveScreenWidth(3.5),
    height: responsiveScreenHeight(0.3),
    backgroundColor: '#7B46E4',
    borderRadius: 2,
    marginTop: 3.75
  },
  bar3: {
    width: responsiveScreenWidth(1.9),
    height: responsiveScreenHeight(0.3),
    backgroundColor: '#7B46E4',
    borderRadius: 2,
    marginTop: 3.75
  },
  restBackground: { flex: 1, backgroundColor: '#F7F7F7' }
})
