import React from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from './ScreenStyles/HomeScreenStyles'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="Entities-1" onPress={() => navigation.navigate('Entities1')} />
      <Button title="Entities-2" onPress={() => navigation.navigate('Entities2')} />
      <Button title="Related Entities" onPress={() => navigation.navigate('RelatedEntities')} />
      <Button title="TrendingStorylines" onPress={() => navigation.navigate('TrendingStoryline')} />
    </View>
  )
}
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default HomeScreen
