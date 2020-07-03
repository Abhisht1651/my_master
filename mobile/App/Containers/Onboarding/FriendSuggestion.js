// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Platform } from 'react-native'

// Styles
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import styles from '../Styles/Onboarding/FriendSuggestionStyles'
import Header from '../../Components/Header'
import ListUser from '../../Components/ListOfUsers/ListOfUsers'
import { LargeButton } from '../../Components/Buttons/LargeButton'
import { Images } from '../../Themes'

type Props = NavigationContainerProps & {}
// type State = {
//   DATA: PropTypes.array
// }
const FriendSuggestion = (props: Props) => {
  const [DATA, setDATA] = useState([])
  useEffect(() => {
    setDATA([
      {
        id: '1',
        title: 'Indrajit Sinha',
        follower: 'Following 54 Storylines',
        selected: false
      },
      {
        id: '2',
        title: 'Purnima Garg',
        follower: 'Following 54 Storylines',
        selected: false
      },
      {
        id: '3',
        title: 'Ayushi Saxena',
        follower: 'Following 54 Storylines',
        selected: false
      },
      {
        id: '4',
        title: 'Shrey Agarwal',
        follower: 'Following 54 Storylines',
        selected: false
      },
      {
        id: '5',
        title: 'Nikita Govil',
        follower: 'Following 54 Storylines',
        selected: false
      },
      {
        id: '6',
        title: 'Nikita Govil',
        follower: 'Following 54 Storylines',
        selected: false
      },
      {
        id: '7',
        title: 'Nikita Govil',
        follower: 'Following 54 Storylines',
        selected: false
      },
      {
        id: '8',
        title: null
      }
    ])
  }, [])

  const FlatListItemSeparator = () => <View style={styles.seperator} />

  const FlatListHeader = () => <View style={styles.flatlistheader} />

  const FlatListFooter = () => <View style={styles.flatlistfooter} />
  const selectItem = (dataa: PropTypes.object) => {
    const data = dataa
    data.item.selected = !data.item.selected
    const items = [...DATA]
    const index = items.findIndex((item) => data.item.id === item.id)

    items[index] = data.item
    setDATA(items)
  }
  const renderItem = (data: PropTypes.object, unselectedText: string, selectedText: string) =>
    data.item.title != null ? (
      <View>
        <ListUser
          btnText1={unselectedText}
          btnText2={selectedText}
          image={Images.picture}
          name={data.item.title}
          optionalText={data.item.follower}
          onPress={() => selectItem(data)}
          onCancelPress={() => selectItem(data)}
        />
      </View>
    ) : (
      <View style={{ height: responsiveScreenHeight(17) }} />
    )

  return (
    <View style={styles.headerPosition}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <Header
        container={{ backgroundColor: 'white' }}
        count={3}
        onPressBack={() => props.navigation.goBack()}
        rightText="Skip"
      />
      <View style={styles.heading}>
        <Text style={styles.headingText}>Suggested friends</Text>
      </View>
      <View style={styles.shadow} />
      <View style={styles.page}>
        <View style={styles.listContainer}>
          <FlatList
            data={DATA}
            renderItem={(item) => renderItem(item, 'Add', 'Requested')}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={FlatListItemSeparator}
            extraData={DATA}
            ListHeaderComponent={FlatListHeader}
            ListFooterComponent={FlatListFooter}
          />
        </View>
      </View>
      <LinearGradient colors={['#FFFFFF00', '#F7F7F7']} style={styles.gradient}>
        <LargeButton title="Done" onPress={() => props.navigation.navigate('WelcomeSignUp')} />
      </LinearGradient>
    </View>
  )
}
export default FriendSuggestion
