// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
// import PropTypes from 'prop-types'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { BottomNav } from '../Components/BottomNav'
import Images from '../Themes/Images'
import styles from './Styles/DashboardStyle'

type Props = NavigationContainerProps & {}
// type State = {
//   DATA: PropTypes.array,
//   DATA1: PropTypes.array
// }

const Dashboard = (props: Props) => {
  const { navigation } = props
  // constructor() {
  //   super()
  //   this.state = {
  //     DATA1: [
  //       {
  //         id: '1',
  //         title: 'First Item'
  //       },
  //       {
  //         id: '2',
  //         title: 'Second Item'
  //       },
  //       {
  //         id: '3',
  //         title: 'Third Item'
  //       },
  //       {
  //         id: '4',
  //         title: 'Fourth Item'
  //       },
  //       {
  //         id: '5',
  //         title: 'Fifth Item'
  //       }
  //     ]
  //   }
  // }

  // const FlatListItemSeparator = () => <View style={styles.seperator} />

  // const FlatListHeader = () => <View style={styles.flatlistheader} />

  // const FlatListFooter = () => <View style={styles.flatlistfooter} />

  // const renderItem1 = (data: PropTypes.object) =>
  //   data.item.title != null ? (
  //     <View style={styles.item1} />
  //   ) : (
  //     <View style={{ height: responsiveScreenHeight(17) }} />
  //   )

  // const renderItem = (data: PropTypes.object) =>
  //   data.item.title != null ? (
  //     <View style={styles.item} />
  //   ) : (
  //     <View style={{ height: responsiveScreenHeight(17) }} />
  //   )

  return (
    <View style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={Images.newzeraPurpleLogoH} style={styles.logo} />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={Images.menuIconNotification} />
          </TouchableOpacity>
        </View>
        <View>
          {/* <FlatList
            renderItem={(item) => renderItem(item, 'Add', 'Requested')}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={FlatListItemSeparator}
            ListHeaderComponent={FlatListHeader}
            ListFooterComponent={FlatListFooter}
          /> */}
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.filterIconContainer}>
            <View style={styles.bar1} />
            <View style={styles.bar2} />
            <View style={styles.bar3} />
          </View>
          <Text style={styles.categoryFilterText}>Category Filter</Text>
        </View>
        <View style={styles.restBackground}>
          <View
            style={{
              marginTop: responsiveScreenHeight(2)
            }}>
            {/* <FlatList
              renderItem={(item) => renderItem1(item, 'Add', 'Requested')}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={FlatListItemSeparator}
              ListHeaderComponent={FlatListHeader}
              ListFooterComponent={FlatListFooter}
            /> */}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          height: responsiveScreenHeight(9.89)
        }}>
        <BottomNav newsfeed />
      </View>
    </View>
  )
}

export default Dashboard
