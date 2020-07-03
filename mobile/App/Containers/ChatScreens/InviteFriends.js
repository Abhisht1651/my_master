// @flow
import React from 'react'
import { NavigationContainerProps } from '@react-navigation/native'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import ListOfUsers from '../../Components/ListOfUsers/ListOfUsers'
import Images from '../../Themes/Images'

// Styles
import styles from './ScreenStyles/InviteFriendsStyles'

type Props = {} & NavigationContainerProps

const InviteFriends = (props: Props) => {
  const { navigation } = props
  return (
    <View style={styles.screen}>
      <View style={styles.topBox}>
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}>
            <Image source={Images.arrowleft} style={styles.arrowleft} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleFont}>Invite Friends</Text>
        <TouchableOpacity>
          <Text style={styles.importFont}>Import</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.textBox}>
          <Text style={styles.textFont}>Based on your contacts</Text>
        </View>
        <View style={styles.listBox}>
          <ScrollView>
            <ListOfUsers
              name="Laura Leucona"
              optionalText="laura@newzera.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
              image={Images.profile2}
            />
            <ListOfUsers
              name="Sachin Tendulkar"
              optionalText="notout100@gmail.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
              image={Images.profile1}
            />
            <ListOfUsers
              name="Brian Lara"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
              image={Images.profilePicture3}
            />
            <ListOfUsers
              name="Sourav Ganguly"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
              image={Images.profilePicture4}
            />
            <ListOfUsers
              name="Laura Leucona"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
            />
            <ListOfUsers
              name="Laura Leucona"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
            />
            <ListOfUsers
              name="Laura Leucona"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
            />
            <ListOfUsers
              name="Laura Leucona"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
            />
            <ListOfUsers
              name="Laura Leucona"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
            />
            <ListOfUsers
              name="Laura Leucona"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
            />
            <ListOfUsers
              name="Laura Leucona"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
            />
            <ListOfUsers
              name="Laura Leucona"
              optionalText="email@email.com"
              buttonText="Invite"
              buttonTextAfterPress="Invited"
            />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default InviteFriends
