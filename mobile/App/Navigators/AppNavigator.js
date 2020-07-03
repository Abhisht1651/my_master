import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import TestScreenIcons from '../Containers/DisplayScreens/IconsScreen'
import TimeFilterDisplay from '../Components/TimeFilter/DisplayScreen'
// import DisplayScreen from '../Components/Buttons/DisplayScreen'

import LaunchScreen from '../Containers/Onboarding/LaunchScreen'
import GetStartedScreen from '../Containers/Onboarding/GetStartedScreen'
import SignUp from '../Containers/Onboarding/SignUp'
import ModalScreen from '../Containers/Onboarding/ModalScreen'
import SignUpDetails from '../Containers/Onboarding/SignUpDetails'
import LocationFinder from '../Containers/Onboarding/LocationFinder'
import LoginScreen from '../Containers/Onboarding/LoginScreen'
import ForgotPasswordScreen from '../Containers/Onboarding/ForgotPasswordScreen'
import ForgotPasswordOTP from '../Containers/Onboarding/ForgotPasswordOTP'
import ResetPasswordScreen from '../Containers/Onboarding/ResetPasswordScreen'
import EmailSent from '../Containers/Onboarding/EmailSent'
import WelcomeLogin from '../Containers/Onboarding/WelcomeLogin'
import WelcomeSignUp from '../Containers/Onboarding/WelcomeSignUp'
import WelcomeBack from '../Containers/Onboarding/WelcomeBack'
import StoryLine from '../Containers/StoryLine/Home'
import FullPost from '../Containers/StoryLine/FullPost'
import RelatedStoryLines from '../Containers/StoryLine/RelatedStoryLines'
import RelatedPolls from '../Containers/StoryLine/RelatedPolls'
import GalleryView from '../Containers/StoryLine/GalleryView'
import Boost from '../Containers/StoryLine/BoostScreen'
import SourceScreen from '../Containers/StoryLine/SourceScreen'
import PollScreen from './PollNavigator'

import DisplayScreen from '../Containers/DisplayScreen'

import DisplayComponentScreen from '../Components/ProfilePicture/DisplayScreen'

import FollowContentScreen from '../Containers/Onboarding/FollowContentScreen'
import ImportContacts from '../Containers/Onboarding/ImportContacts'
import ContactsScreen from '../Containers/Onboarding/contactsScreen'
import FriendSuggestion from '../Containers/Onboarding/FriendSuggestion'

import FeedNavigator from './FeedNavigator'
import styles from './Styles/NavigationStyles'

import HomeScreen from '../Containers/EntitiesScreens/HomeScreen'
import Entities1 from '../Containers/EntitiesScreens/Entities1'
import Entities2 from '../Containers/EntitiesScreens/Entities2'
import RelatedEntities from '../Containers/StoryLine/RelatedEntities'
import TrendingStoryline from '../Containers/EntitiesScreens/TrendingStoryline'

const Stack = createStackNavigator()

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="LaunchScreen"
      headerMode="screen"
      screenOptions={{
        headerStyle: styles.header,
        headerShown: false
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Entities1" component={Entities1} />
      <Stack.Screen name="Entities2" component={Entities2} />
      <Stack.Screen name="RelatedEntities" component={RelatedEntities} />
      <Stack.Screen name="TrendingStoryline" component={TrendingStoryline} />

      <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
      <Stack.Screen name="TestScreenIcons" component={TestScreenIcons} />
      <Stack.Screen name="TimeFilterDisplay" component={TimeFilterDisplay} />
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} />
      <Stack.Screen name="EmailSent" component={EmailSent} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="WelcomeLogin" component={WelcomeLogin} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="SignUpDetails" component={SignUpDetails} />
      <Stack.Screen name="LocationFinder" component={LocationFinder} />
      <Stack.Screen name="FollowContentScreen" component={FollowContentScreen} />
      <Stack.Screen name="ImportContacts" component={ImportContacts} />
      <Stack.Screen name="FriendSuggestion" component={FriendSuggestion} />
      <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
      <Stack.Screen name="WelcomeSignUp" component={WelcomeSignUp} />
      <Stack.Screen name="WelcomeBack" component={WelcomeBack} />
      <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
      <Stack.Screen name="DisplayComponentScreen" component={DisplayComponentScreen} />
      <Stack.Screen name="NewsFeed" component={FeedNavigator} />
      <Stack.Screen name="StoryLineScreen" component={StoryLine} />
      <Stack.Screen name="FullPost" component={FullPost} />
      <Stack.Screen name="RelatedStoryLines" component={RelatedStoryLines} />
      <Stack.Screen name="RelatedPolls" component={RelatedPolls} />
      <Stack.Screen name="GalleryView" component={GalleryView} />
      <Stack.Screen name="BoostScreen" component={Boost} />
      <Stack.Screen name="Poll Screen" component={PollScreen} />
      <Stack.Screen name="SourceScreen" component={SourceScreen} />
    </Stack.Navigator>
  )
}
export default AppStack
