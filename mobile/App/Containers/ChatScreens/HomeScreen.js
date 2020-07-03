import React from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'
// Styles
import styles from './ScreenStyles/HomeScreenStyles'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Button title="Go to Chats" onPress={() => navigation.navigate('Chat2')} />
      <Button title="Individual Chats" onPress={() => navigation.navigate('IndividualChat')} />
      <Button title="Message Request" onPress={() => navigation.navigate('MessageRequest')} />
      <Button title="Chat Options Group" onPress={() => navigation.navigate('ChatOptionsGroup')} />
      <Button
        title="Chat Options Individual"
        onPress={() => navigation.navigate('ChatOptionsIndividual')}
      />
      <Button
        title="Message Request Conversation"
        onPress={() => navigation.navigate('MessageRequestConversation')}
      />
    </View>
  )
}
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}
export default HomeScreen
