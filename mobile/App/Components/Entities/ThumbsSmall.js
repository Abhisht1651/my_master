import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import styles from '../Styles/EntitesStyles/ThumbsSmallStyles'
import images from '../../Themes/Images'

const ThumbsSmall = ({ profileIcons }) => {
  const profileIconElement = profileIcons.map((profileIcon, index) => (
    <Image source={profileIcon} key={index} style={styles.profileIcon} />
  ))
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>{profileIconElement}</View>
    </View>
  )
}

ThumbsSmall.propTypes = {
  profileIcons: PropTypes.array
}

ThumbsSmall.defaultProps = {
  profileIcons: [images.EntitiesImage0]
}

export default ThumbsSmall
