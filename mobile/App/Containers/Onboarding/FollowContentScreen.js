/* eslint-disable no-unused-vars */
// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, FlatList, Platform } from 'react-native'

// Styles
import LinearGradient from 'react-native-linear-gradient'

import PropTypes from 'prop-types'
import styles from '../Styles/Onboarding/FollowContentScreenStyles'
import Header from '../../Components/Header'
import EntitiesCard from '../../Components/Entities/CardType1'
import StoryLineCard from '../../Components/StoryLineShortCardDefualt'
import ClickableText from '../../Components/ClickableText'
import { LargeButton } from '../../Components/Buttons/LargeButton'

type Props = NavigationContainerProps & {}
// type State = {
//   DATA: PropTypes.array,
//   DATA1: PropTypes.array
// }
const FollowContentScreen = (props: Props) => {
  const [DATA, setDATA] = useState([])
  const [DATA1, setDATA1] = useState([])
  useEffect(() => {
    setDATA([
      {
        id: '1',
        title: 'Indrajit Sinha',
        selected: false
      },
      {
        id: '2',
        title: 'Purnima Garg',
        selected: false
      },
      {
        id: '3',
        title: 'Ayushi Saxena',
        selected: false
      },
      {
        id: '4',
        title: 'Shrey Agarwal',
        selected: false
      },
      {
        id: '5',
        title: 'Nikita Govil',
        selected: false
      }
    ])
    setDATA1([
      {
        id: '1',
        title: 'United States of America',
        followers: 52,
        selected: false
      },
      {
        id: '2',
        title: 'India',
        followers: 52,
        selected: false
      },
      {
        id: '3',
        title: 'United States of America',
        followers: 52,
        selected: false
      },
      {
        id: '4',
        title: 'United States of America',
        followers: 52,
        selected: false
      },
      {
        id: '5',
        title: 'United States of America',
        followers: 52,
        selected: false
      }
    ])
  }, [])
  const renderItem = (data: PropTypes.Object, unselectedText: string, selectedText: string) => (
    <View style={styles.item}>
      <StoryLineCard following={data.item.selected} onPressFollow={() => selectItem(data)} />
      {/* <Image source={Images.bitmap} style={styles.profilePic} />
      <Text style={styles.profileNameText}>{data.item.title}</Text>
      <RoundedButton
        style={data.item.selected === false ? styles.unselectedButton : styles.selectedButton}
        textStyle={data.item.selected === false ? styles.unselectedText : styles.selectedText}
        onPress={() => selectItem(data)}>
        {data.item.selected === false ? unselectedText : selectedText}
      </RoundedButton> */}
    </View>
  )
  const selectItem = (dataa: PropTypes.object) => {
    const data = dataa
    if (!data.item.selected) data.item.selected = !data.item.selected
    const items = [...DATA]
    const index = items.findIndex((item) => data.item.id === item.id)

    items[index] = data.item
    setDATA(items)
  }
  const FlatListHeader = () => <View style={styles.flatlistheader} />

  const FlatListFooter = () => <View style={styles.flatlistfooter} />
  const FlatListItemSeparator = () => <View style={styles.seperator} />

  return (
    <View style={styles.headerPosition}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <Header
        container={{ backgroundColor: 'white' }}
        count={2}
        onPressBack={() => props.navigation.goBack()}
        rightText="Skip"
      />
      <ScrollView>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Start following content</Text>
        </View>

        <View style={styles.storyCard}>
          <View style={styles.headingStoryContainer}>
            <Text style={styles.storyHeading}>Top Storylines</Text>
            <ClickableText textStyle={styles.followText} text="Follow all" />
          </View>

          <View style={styles.marginStory}>
            <FlatList
              data={DATA}
              renderItem={(item) => renderItem(item, 'Add', 'Requested')}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={FlatListItemSeparator}
              extraData={DATA}
              ListHeaderComponent={FlatListHeader}
              ListFooterComponent={FlatListFooter}
            />
            {/* <FlatList
              data={DATA}
              renderItem={() => <View style={styles.item} />}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            /> */}
          </View>
          <Text style={styles.headingEntities}>Top Entities</Text>
          <View style={styles.entityContainer}>
            {DATA1.map((item, key) => (
              <View style={styles.entities} key={key}>
                <EntitiesCard title={item.title} count={item.followers} />
              </View>
              // <View key={key} style={styles.entities} />
            ))}
            <ClickableText textStyle={styles.viewEntities} text="View all entities" />
          </View>
        </View>
      </ScrollView>
      <LinearGradient colors={['#FFFFFF00', '#F7F7F7']} style={styles.gradient}>
        <LargeButton title="Continue" onPress={() => props.navigation.navigate('ImportContacts')} />
      </LinearGradient>
    </View>
  )
}

export default FollowContentScreen
