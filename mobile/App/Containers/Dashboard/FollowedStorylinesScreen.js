// @flow
import React, { useState } from 'react'
import { FlatList, View, Text, TouchableOpacity, Platform, ScrollView } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
import Proptypes from 'prop-types'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/Dashboard/FollowedStorylinesScreenStyle'
import SearchBarDefault from '../../Components/Searchbars/SearchBarDefault'
import StoryLineShortesCard from '../../Components/StoryLineShortesCard'
import BackSVG from '../../Images/Icons/Arrow.svg'
import FilterSVG from '../../Images/Icons/Icon-filter.svg'

import TimeFilter from '../../Components/TimeFilter/TimeFilter'
// import useHooks from '../Components/TimeFilter/TimeFilterHooks'

type Props = NavigationContainerProps & {
  onSearchHandler: Proptypes.func
}

const Data = [
  {
    id: '1'
  },

  {
    id: '2'
  },

  {
    id: '3'
  },

  {
    id: '4'
  },

  {
    id: '5'
  },

  {
    id: '6'
  },
  {
    id: '7'
  },
  {
    id: '8'
  },
  {
    id: '9'
  }
]

const FollowedStorylinesScreen = (props: Props) => {
  const { navigation, onSearchHandler } = props

  const [isVisible, setVisible] = useState(false)

  const openFilter = () => {
    setVisible(true)
  }

  const closeFilter = () => {
    setVisible(false)
  }

  const renderpolls = () => {
    return (
      <View style={styles.newsComponent}>
        <StoryLineShortesCard />
      </View>
    )
  }

  // const { isModalVisible, toggleListHandler } = useHooks()
  return (
    <View style={styles.container}>
      <View style={Platform.OS === 'ios' ? styles.topbarios : styles.topbar}>
        <TouchableOpacity
          style={styles.arrowComponent}
          onPress={() => navigation.navigate('NewsFeed')}>
          <BackSVG />
        </TouchableOpacity>
        <Text style={styles.topbarText}>Followed Storylines</Text>
      </View>
      <View style={styles.searchBar}>
        <SearchBarDefault onSearchHandler={onSearchHandler} />
      </View>
      <View style={styles.divider} />
      <View style={styles.filter}>
        <View style={styles.filterIcon}>
          <TouchableOpacity onPress={openFilter}>
            <FilterSVG />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={openFilter}>
          <Text style={styles.filterText}>Filter by</Text>
        </TouchableOpacity>
      </View>
      <TimeFilter
        isModalVisible={isVisible}
        headerTitle="Filter By"
        getSelectedMonths={() => {}}
        getSelectedYears={() => {}}
        onClose={closeFilter}
        onBtnPress={closeFilter}
      />
      <View style={styles.divider} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.newsComponentContainer}>
        <FlatList data={Data} renderItem={renderpolls} />
      </ScrollView>
    </View>
  )
}

FollowedStorylinesScreen.defaultProps = {
  onSearchHandler: () => {}
}

export default FollowedStorylinesScreen
