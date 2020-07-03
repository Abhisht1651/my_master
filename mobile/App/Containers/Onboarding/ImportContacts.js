// @flow

import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { Text, View, Platform } from 'react-native'

// Styles
import { responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import styles from '../Styles/Onboarding/ImportContactStyles'
import Header from '../../Components/Header'
import { LargeButton } from '../../Components/Buttons/LargeButton'
import ImportContactCard from '../../Components/ImportCard/ImportCard'

type Props = NavigationContainerProps & {}

const ImportContact = (props: Props) => {
  return (
    <View style={styles.headerPosition}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <Header
        container={{
          backgroundColor: 'white',
          height: responsiveScreenHeight(7.6)
        }}
        count={3}
        onPressBack={() => props.navigation.goBack()}
        rightText="Invite Friends"
        onPressRight={() => props.navigation.navigate('FriendSuggestion')}
        progressContainer={{ marginLeft: responsiveScreenWidth(15) }}
      />
      <View style={styles.card}>
        <Text style={styles.headingText}>Import your contacts to suggest connections</Text>
        <View style={styles.importContact}>
          <ImportContactCard onPress={() => props.navigation.navigate('ContactsScreen')} />
        </View>
        <View style={styles.buttonAlign}>
          <LargeButton
            title="Maybe Later"
            onPress={() => props.navigation.navigate('WelcomeSignUp')}
          />
        </View>
      </View>
    </View>
  )
}
export default ImportContact
