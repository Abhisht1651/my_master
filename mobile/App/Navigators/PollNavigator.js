// @flow
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PollScreen from '../Containers/Poll/PollScreen'
import PollResultsScreen from '../Containers/Poll/PollResultsScreen'
import RelatedStoryLines from '../Containers/Poll/RelatedStoryLines'
import RelatedPolls from '../Containers/Poll/RelatedPolls'
import RelatedEntities from '../Containers/Poll/RelatedEntities'
import BoostScreen from '../Containers/Poll/BoostScreen'

const Stack = createStackNavigator()

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Poll Screen" component={PollScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PollResultsScreen"
        component={PollResultsScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Related StoryLines"
        component={RelatedStoryLines}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Related Polls"
        component={RelatedPolls}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Related Entities"
        component={RelatedEntities}
      />
      <Stack.Screen options={{ headerShown: false }} name="Boost Screen" component={BoostScreen} />
    </Stack.Navigator>
  )
}

export default App
