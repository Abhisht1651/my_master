import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsTop from './SearchResultsTop'
import SearchResultsStoryLine from './SearchResultsStoryLine'
import SearchResultsEntities from './SearchResultsEntities'
import SearchResultsPeople from './SearchResultsPeople'
import SearchResultsPolls from './SearchResultsPolls'

// Styles
import styles from '../Styles/Search/SearchResultsNavigationStyle'

const Tab = createMaterialTopTabNavigator()

function SearchResultsNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: styles.tab,
        style: styles.tabContainer,
        indicatorStyle: styles.indicator,
        labelStyle: styles.label,
        activeTintColor: '#1F1F60',
        inactiveTintColor: '#8F8FAF',
        upperCaseLabel: false
      }}>
      <Tab.Screen name="Top" component={SearchResultsTop} />
      <Tab.Screen name="StoryLines" component={SearchResultsStoryLine} />
      <Tab.Screen name="Entities" component={SearchResultsEntities} />
      <Tab.Screen name="People" component={SearchResultsPeople} />
      <Tab.Screen name="Polls" component={SearchResultsPolls} />
    </Tab.Navigator>
  )
}

export default SearchResultsNavigation
