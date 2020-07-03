// @flow

import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import Images from '../../Themes/Images'
import styles from '../Styles/ScrollableFeedComponentStyles/CategoryFilterStyles'
import CategoryFilterType from './CategoryFilterType' // helper component for category component

type Props = {
  activityChange: PropTypes.func,
  applyChange: PropTypes.func,
  selected: Array<string>
}
const CategoryFilterCard = (props: Props) => {
  const { activityChange, applyChange, selected } = props
  const data = [
    {
      id: 1,
      title: 'World',
      image: Images.world
    },
    {
      id: 2,
      title: 'National',
      image: Images.national
    },
    {
      id: 3,
      title: 'Sports',
      image: Images.sports
    },
    {
      id: 4,
      title: 'Science',
      image: Images.science
    },
    {
      id: 5,
      title: 'Entertainment',
      image: Images.entertainment
    },
    {
      id: 6,
      title: 'Technology',
      image: Images.technology
    },
    {
      id: 7,
      title: 'Others',
      image: Images.others
    }
  ]

  return (
    <SafeAreaView style={styles.popUpCard}>
      <View style={styles.categoryFilter}>
        <Text style={styles.categoryFilterText}>Category Filter</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={data}
        renderItem={({ item }) => (
          <CategoryFilterType
            title={item.title}
            image={item.image}
            id={item.id}
            selected={selected}
            activityChange={activityChange}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.options}>
        <View>
          {selected.length > 0 && (
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.selectedText}>{selected.length} Selected</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity activeOpacity={0.6} onPress={applyChange}>
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
