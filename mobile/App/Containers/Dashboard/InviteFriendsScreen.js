// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainerProps } from '@react-navigation/native'
// import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/Dashboard/InviteFriendsScreenStyle'
import { LargeButton } from '../../Components/Buttons/LargeButton'
import ImportCard from '../../Components/ImportCard/ImportCard'
import BackSVG from '../../Images/Icons/Arrow.svg'

type Props = NavigationContainerProps & {}

const InviteFriendsScreen = (props: Props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.arrowComponent}
          onPress={() => navigation.navigate('NewsFeed')}>
          <BackSVG />
        </TouchableOpacity>
        <Text style={styles.topbarText}>Invite Friends</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.importText}>Import your contacts to suggest connections</Text>
      <View style={styles.importCard}>
        <View style={styles.box}>
          <ImportCard onPress={() => navigation.navigate('ConnectionsScreen')} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ConnectionsScreen')}>
          <Text style={styles.inviteText}>Invite Firends</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStyle}>
        <LargeButton title="Maybe Later" onPress={() => navigation.navigate('NewsFeed')} />
      </View>
    </View>
  )
}

export default InviteFriendsScreen
