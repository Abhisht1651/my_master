import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Containers/StoryLine/Home'
import FullPost from '../Containers/StoryLine/FullPost'
import RelatedStoryLines from '../Containers/StoryLine/RelatedStoryLines'
import RelatedPolls from '../Containers/StoryLine/RelatedPolls'
import RelatedEntities from '../Containers/StoryLine/RelatedEntities'
import GalleryView from '../Containers/StoryLine/GalleryView'
import Boost from '../Containers/StoryLine/BoostScreen'

const Stack = createStackNavigator()

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="FullPost" component={FullPost} />
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
      <Stack.Screen options={{ headerShown: false }} name="Gallery View" component={GalleryView} />
      <Stack.Screen options={{ headerShown: false }} name="Boost Screen" component={Boost} />
    </Stack.Navigator>
  )
}

export default App
