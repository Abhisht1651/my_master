import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import styles from '../Styles/EntitesStyles/ProfileStyles'
import images from '../../Themes/Images'

const Profile = ({ profileIcons }) => {
  const profileIconElement = profileIcons.map((profileIcon, index) => (
    <Image source={profileIcon} key={index} style={styles.profileIcon} />
  ))
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>{profileIconElement}</View>
    </View>
  )
}

Profile.propTypes = {
  profileIcons: PropTypes.array
}

Profile.defaultProps = {
  profileIcons: [images.EntitiesImage0]
}

export default Profile
