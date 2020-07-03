import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import styles from '../Styles/EntitesStyles/CardType2Styles'
import images from '../../Themes/Images'

const CardType2 = ({ type, title, count, profileIcons }) => {
  const profileIconElement = profileIcons.map((profileIcon, index) => (
    <Image
      source={profileIcon}
      key={index}
      style={type === 1 ? styles.profileIcon : styles.profileIconRound}
    />
  ))
  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>{profileIconElement}</View>

      <View style={styles.textOutline}>
        <View style={styles.textcenter}>
          <Text style={styles.textNameFont}>{title}</Text>
        </View>
        <View>
          <Text style={styles.textDetailsFont}>{`${count} friends`}</Text>
        </View>
        <View>
          {type === 1 ? (
            <Text style={styles.textDetailsFont}>follow</Text>
          ) : (
            <Text style={styles.textDetailsFont}>in common</Text>
          )}
        </View>
      </View>
    </View>
  )
}

CardType2.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string,
  count: PropTypes.number,
  profileIcons: PropTypes.array
}

CardType2.defaultProps = {
  type: 1,
  title: 'Default',
  count: 0,
  profileIcons: [images.EntitiesImage0]
}

export default CardType2
