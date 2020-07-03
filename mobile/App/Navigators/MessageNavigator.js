import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import MessageScreen from '../Containers/ChatScreens/MessageScreen'
import styles from './Styles/NavigationStyles'
import NewConversation from '../Containers/ChatScreens/NewConversation'
import InviteFriends from '../Containers/ChatScreens/InviteFriends'

const Stack = createStackNavigator()

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="MessageScreen"
      headerMode="screen"
      screenOptions={{
        headerStyle: styles.header,
        headerShown: false
      }}>
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="NewConversation" component={NewConversation} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} />
    </Stack.Navigator>
  )
}
export default AppStack
