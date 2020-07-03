// @flow
import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainerProps } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { responsiveScreenWidth } from 'react-native-responsive-dimensions'
import NewsFeed from '../Containers/NewsFeed'
import ActivityFeed from '../Containers/ActivityFeed'

import RavenAll from '../Containers/Raven/RavenAll'
import RavenSent from '../Containers/Raven/RavenSent'
import SendRaven from '../Containers/Raven/SendRaven'
import SendNewRaven from '../Containers/Raven/SendNewRaven'
import FriendReadStory from '../Containers/Raven/FriendReadStory'
import ListFriends from '../Containers/Raven/ListOfFriends'
import SideBar from '../Components/SideBar'
/* --------------------Dashboard Flow------------------------------*/
import FriendRequestsScreen from '../Containers/Dashboard/FriendRequestsScreen'
import FriendsScreen from '../Containers/Dashboard/FriendsScreen'
import ConnectionsScreen from '../Containers/Dashboard/ConnectionsScreen'
import InviteFriendsScreen from '../Containers/Dashboard/InviteFriendsScreen'
import MyPollsScreen from '../Containers/Dashboard/MyPollsScreen'
import FollowedStorylinesScreen from '../Containers/Dashboard/FollowedStorylinesScreen'
import FollowedEntitiesScreen from '../Containers/Dashboard/FollowedEntitiesScreen'
import Notifications from '../Containers/Notifications'

import Settings from '../Containers/Settings/Settings'
import AccountSettings from '../Containers/Settings/AccountSettings'
import PrivacySettings from '../Containers/Settings/PrivacySettings'
import NewzeraSettings from '../Containers/Settings/NewzeraSettings'
import HelpSettings from '../Containers/Settings/HelpSettings'
import PrivacyPolicy from '../Containers/Settings/Privacy/PrivacyPolicy'
import Blocked from '../Containers/Settings/Privacy/Blocked'
import AboutUs from '../Containers/Settings/Newzera/AboutUs'
import Terms from '../Containers/Settings/Newzera/Terms'
import SendFeedback from '../Containers/Settings/Newzera/SendFeedback'
import SendFeedbackSubmit from '../Containers/Settings/Newzera/SendFeedbackSubmit'
import InviteFriends1 from '../Containers/Settings/Newzera/InviteFriends1'
import InviteFriends2 from '../Containers/Settings/Newzera/InviteFriends2'
import Error from '../Containers/Error/Error'

/* --------------------------------------------------------------- */

import MessageScreen from '../Containers/ChatScreens/MessageScreen'
import NewConversation from '../Containers/ChatScreens/NewConversation'
import InviteFriends from '../Containers/ChatScreens/InviteFriends'
import Chat2 from '../Containers/ChatScreens/Chat2'
import IndividualChat from '../Containers/ChatScreens/IndividualChat'
import MessageRequest from '../Containers/ChatScreens/MessageRequest'
import ChatOptionsGroup from '../Containers/ChatScreens/ChatOptionsGroup'
import ChatOptionsIndividual from '../Containers/ChatScreens/ChatOptionsIndividual'
import MessageRequestConversation from '../Containers/ChatScreens/MessageRequestConversations'
import Discover from './DiscoverNavigator'

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

type Props = NavigationContainerProps & {}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      hideStatusBar
      drawerStyle={{
        width: responsiveScreenWidth(80)
      }}
      drawerContent={(props: Props) => (
        <SideBar
          pollsPress={() => props.navigation.navigate('MyPollsScreen')}
          friendsPress={() => props.navigation.navigate('FriendsScreen')}
          requestsPress={() => props.navigation.navigate('FriendRequestsScreen')}
          invitePress={() => props.navigation.navigate('InviteFriendsScreen')}
          onStorylinesPress={() => props.navigation.navigate('FollowedStorylinesScreen')}
          entitiesPress={() => props.navigation.navigate('FollowedEntitiesScreen')}
          notificationPress={() => props.navigation.navigate('Notifications')}
          settingPress={() => props.navigation.navigate('Settings')}
        />
      )}>
      <Drawer.Screen name="NewsFeed" component={NewsFeed} />
      <Drawer.Screen name="MyPollsScreen" component={MyPollsScreen} />
      <Drawer.Screen name="InviteFriendsScreen" component={InviteFriendsScreen} />
      <Drawer.Screen name="FriendRequestsScreen" component={FriendRequestsScreen} />
      <Drawer.Screen name="FriendsScreen" component={FriendsScreen} />
      <Drawer.Screen name="ConnectionsScreen" component={ConnectionsScreen} />
      <Drawer.Screen name="FollowedStorylinesScreen" component={FollowedStorylinesScreen} />
      <Drawer.Screen name="FollowedEntitiesScreen" component={FollowedEntitiesScreen} />
      <Drawer.Screen name="Notifications" component={Notifications} />

      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="AccountSettings" component={AccountSettings} />
      <Drawer.Screen name="PrivacySettings" component={PrivacySettings} />
      <Drawer.Screen name="NewzeraSettings" component={NewzeraSettings} />
      <Drawer.Screen name="HelpSettings" component={HelpSettings} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="Blocked" component={Blocked} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="Terms" component={Terms} />
      <Drawer.Screen name="SendFeedback" component={SendFeedback} />
      <Drawer.Screen name="SendFeedbackSubmit" component={SendFeedbackSubmit} />
      <Drawer.Screen name="InviteFriends1" component={InviteFriends1} />
      <Drawer.Screen name="InviteFriends2" component={InviteFriends2} />
      <Drawer.Screen name="Error" component={Error} />
    </Drawer.Navigator>
  )
}

function Raven() {
  return (
    <Stack.Navigator
      initialRouteName="RavenAll"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="RavenAll" component={RavenAll} />
      <Stack.Screen name="SendRaven" component={SendRaven} />
      <Stack.Screen name="RavenSent" component={RavenSent} />
      <Stack.Screen name="FriendReadStory" component={FriendReadStory} />
      <Stack.Screen name="SendNewRaven" component={SendNewRaven} />
      <Stack.Screen name="ListOfFriends" component={ListFriends} />
    </Stack.Navigator>
  )
}

function Message() {
  return (
    <Stack.Navigator
      initialRouteName="MessageScreen"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="NewConversation" component={NewConversation} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} />
      <Stack.Screen name="MessageRequestConversation" component={MessageRequestConversation} />
      <Stack.Screen name="MessageRequest" component={MessageRequest} />
      <Stack.Screen name="IndividualChat" component={IndividualChat} />
      <Stack.Screen name="ChatOptionsIndividual" component={ChatOptionsIndividual} />
      <Stack.Screen name="Chat2" component={Chat2} />
      <Stack.Screen name="ChatOptionsGroup" component={ChatOptionsGroup} />
    </Stack.Navigator>
  )
}

function TempContainer() {
  return (
    <Tab.Navigator initialRouteName="NewsFeed">
      <Tab.Screen
        name="NewsFeed"
        component={MyDrawer}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Tab.Screen
        name="ActivityFeed"
        component={ActivityFeed}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Tab.Screen
        name="RavenAll"
        component={Raven}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false, tabBarVisible: false }}
      />
    </Tab.Navigator>
  )
}

export default TempContainer
