// @flow

import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import Images from '../../Themes/Images'
import styles from '../Styles/PopUpStyles/CategoryFilterCardStyle'

import useHooks from './CategoryFilterHooks'

type Props = {
  getSelectedOptions: (arr: Array<string>) => void
}

const CategoryFilterCard = (props: Props) => {
  const { getSelectedOptions } = props
  const {
    numberOfItemsSelected,
    checkedWorld,
    checkedNational,
    checkedScience,
    checkedSports,
    checkedTechnology,
    checkedEntertainment,
    checkedOthers,
    optionProps,
    clickHandler1,
    clickHandler2,
    clickHandler3,
    clickHandler4,
    clickHandler5,
    clickHandler6,
    clickHandler7,
    addPropertyHandler,
    removePropertyHandler,
    clearAll
  } = useHooks()

  const selectedOptions = []

  useEffect(() => {
    if (checkedWorld) {
      selectedOptions.push('World')
    }
    if (checkedNational) {
      selectedOptions.push('National')
    }
    if (checkedSports) {
      selectedOptions.push('Sports')
    }
    if (checkedScience) {
      selectedOptions.push('Science')
    }
    if (checkedEntertainment) {
      selectedOptions.push('Entertainment')
    }
    if (checkedTechnology) {
      selectedOptions.push('Technology')
    }
    if (checkedOthers) {
      selectedOptions.push('Others')
    }
    getSelectedOptions(selectedOptions)
  }, [
    checkedWorld,
    checkedNational,
    checkedSports,
    checkedScience,
    checkedEntertainment,
    checkedTechnology,
    checkedOthers
  ])

  const data = [
    {
      id: 1,
      title: 'World',
      image: Images.world,
      stateProp: checkedWorld,
      functionCall: clickHandler1
    },
    {
      id: 2,
      title: 'National',
      image: Images.national,
      stateProp: checkedNational,
      functionCall: clickHandler2
    },
    {
      id: 3,
      title: 'Sports',
      image: Images.sports,
      stateProp: checkedSports,
      functionCall: clickHandler3
    },
    {
      id: 4,
      title: 'Science',
      image: Images.science,
      stateProp: checkedScience,
      functionCall: clickHandler4
    },
    {
      id: 5,
      title: 'Entertainment',
      image: Images.entertainment,
      stateProp: checkedEntertainment,
      functionCall: clickHandler5
    },
    {
      id: 6,
      title: 'Technology',
      image: Images.technology,
      stateProp: checkedTechnology,
      functionCall: clickHandler6
    },
    {
      id: 7,
      title: 'Others',
      image: Images.others,
      stateProp: checkedOthers,
      functionCall: clickHandler7
    }
  ]

  return (
    <SafeAreaView style={styles.popUpCard}>
      <View style={styles.categoryFilter}>
        <Text style={styles.categoryFilterText}>Category Filter</Text>
      </View>
      <FlatList
        nestedScrollEnabled
        onScroll={addPropertyHandler}
        onMomentumScrollEnd={removePropertyHandler}
        contentContainerStyle={styles.flatList}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.cardItems}>
            <View style={styles.iconContainer}>
              <Image source={item.image} style={styles.iconStyles} />
            </View>
            <View style={styles.itemText}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity style={styles.checkBox} onPress={item.functionCall}>
                {item.stateProp && (
                  <View style={styles.checkedBox}>
                    <Image source={Images.checkmark} style={styles.checkmark} />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={[styles.options, optionProps]}>
        <View>
          {numberOfItemsSelected > 0 && (
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.selectedText}>{numberOfItemsSelected} Selected</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity activeOpacity={0.6} onPress={clearAll}>
          <Text style={styles.clearSelectionText}>Clear Selection</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.bottomLine} />
      </View>
    </SafeAreaView>
  )
}

export default CategoryFilterCard
