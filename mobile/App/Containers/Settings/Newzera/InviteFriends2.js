// @flow

import React from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'

import { Images } from '../../../Themes'

import styles from './Styles/InviteFriendsStyle'
// import common from './Styles/CommonStyle'

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

type Props = NavigationContainerProps & {
  connections: number,
  emailName: Array<string>,
  emailPhotos: Array<string>,
  contactName: Array<string>,
  contactPhotos: Array<string>
}

export default function InviteFriends2(props: Props) {
  const { navigation } = props
  const { emailName, emailPhotos, connections } = props
  const { contactName, contactPhotos } = props

  const allListEmail = emailName.map((name, index) => (
    <View key={index} style={styles.flexRowInvite}>
      <View style={{ width: (105 / 375) * Width }}>
        <View style={{ paddingTop: (10 / 812) * Height }} />
        <View style={{ paddingLeft: (23 / 375) * Width }}>
          <Image source={emailPhotos[index]} key={index} style={styles.imagePerson} />
        </View>
        <View style={{ paddingTop: (11 / 812) * Height }} />
        <View style={{ paddingLeft: (20 / 375) * Width }}>
          <View style={{ width: (66 / 375) * Width }}>
            <Text style={styles.namePerson}>{name}</Text>
          </View>
        </View>
        <View style={{ paddingTop: (9 / 812) * Height }} />
        <View style={{ paddingLeft: (15 / 375) * Width }}>
          <View style={styles.inviteButton}>
            <View style={{ paddingTop: (5 / 812) * Height }}>
              <Text style={styles.invitePersonText}>Invite</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: (10 / 812) * Height }} />
      </View>
      <View style={{ paddingLeft: (5 / 375) * Width }}>
        <View style={styles.verticleLine} />
      </View>
    </View>
  ))

  const allListContact = contactName.map((name, index) => (
    <View key={index} style={styles.flexRowInvite}>
      <View style={{ width: (105 / 375) * Width }}>
        <View style={{ paddingTop: (10 / 812) * Height }} />
        <View style={{ paddingLeft: (23 / 375) * Width }}>
          <Image source={contactPhotos[index]} key={index} style={styles.imagePerson} />
        </View>
        <View style={{ paddingTop: (11 / 812) * Height }} />
        <View style={{ paddingLeft: (20 / 375) * Width }}>
          <View style={{ width: (66 / 375) * Width }}>
            <Text style={styles.namePerson}>{name}</Text>
          </View>
        </View>
        <View style={{ paddingTop: (9 / 812) * Height }} />
        <View style={{ paddingLeft: (15 / 375) * Width }}>
          <View style={styles.inviteButton}>
            <View style={{ paddingTop: (5 / 812) * Height }}>
              <Text style={styles.invitePersonText}>Invite</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: (10 / 812) * Height }} />
      </View>
      <View style={{ paddingLeft: (5 / 375) * Width }}>
        <View style={styles.verticleLine} />
      </View>
    </View>
  ))

  return (
    <View>
      <View style={{ paddingTop: (56 / 812) * Height }}>
        <View style={styles.flexRow}>
          <View style={{ paddingTop: (6 / 812) * Height }}>
            <TouchableOpacity onPress={() => navigation.navigate('NewzeraSettings')}>
              <Image source={Images.leftArrowback} style={styles.leftArrow} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: (83 / 375) * Width }}>
            <Text style={styles.heading}>Invite Friends</Text>
          </View>
        </View>
        <View style={{ paddingTop: (31 / 812) * Height }}>
          <View>
            <View style={styles.line} />
          </View>
        </View>
        <View style={{ paddingTop: (33 / 812) * Height }} />
        <View style={{ paddingLeft: (25 / 375) * Width }}>
          <View style={{ width: (325 / 375) * Width }}>
            <Text style={styles.connect}>We’ve found {connections} connections</Text>
          </View>
        </View>
        <View style={{ paddingTop: (31 / 812) * Height }} />
        <View style={{ paddingLeft: (25 / 375) * Width }}>
          <View style={{ width: (325 / 375) * Width }}>
            <View style={styles.inviteHead}>
              <View>
                <Text style={styles.inviteText}>Invite friends via email</Text>
              </View>
              <View style={styles.inviteAllPos}>
                <Text style={styles.inviteAll}>Invite All</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: (31 / 812) * Height }} />
          <View style={styles.flexRowInvite}>{allListEmail}</View>
        </View>
        <View style={{ paddingTop: (51 / 812) * Height }} />
        <View style={{ paddingLeft: (25 / 375) * Width }}>
          <View style={{ width: (325 / 375) * Width }}>
            <View style={styles.inviteHead}>
              <View>
                <Text style={styles.inviteText}>Invite friends via contact</Text>
              </View>
              <View style={styles.inviteAllPos}>
                <TouchableOpacity onPress={() => navigation.navigate('InviteFriends1')}>
                  <Text style={styles.inviteAll}>Invite All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: (31 / 812) * Height }} />
          <View style={styles.flexRowInvite}>{allListContact}</View>
        </View>
      </View>
    </View>
  )
}

InviteFriends2.defaultProps = {
  connections: 118,
  emailName: ['Amelia Jones', 'Amelia Jones', 'Amelia Jones'],
  emailPhotos: [Images.sean, Images.amanda, Images.trump],
  contactName: ['Name 1 ', 'Name 2', 'Name 3'],
  contactPhotos: [Images.sean, Images.amanda, Images.trump]
}
