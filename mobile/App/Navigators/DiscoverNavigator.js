// @flow
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Containers/Discover/Home'
import Search from '../Containers/Search/Search'
import RelatedStoryLine from '../Containers/Discover/RelatedStoryLine'
import RelatedPolls from '../Containers/Discover/RelatedPolls'
import TrendingEvents from '../Containers/Discover/TrendingEvents'
import RelatedEntities from '../Containers/Discover/RelatedEntities'
import SuggestedFriends from '../Containers/Discover/SuggestedFriends'

const Stack = createStackNavigator()

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Trending Events"
        component={TrendingEvents}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Related Entities"
        component={RelatedEntities}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Related StoryLines"
        component={RelatedStoryLine}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Related Polls"
        component={RelatedPolls}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Suggested Friends"
        component={SuggestedFriends}
      />
      <Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
    </Stack.Navigator>
  )
}

export default App
