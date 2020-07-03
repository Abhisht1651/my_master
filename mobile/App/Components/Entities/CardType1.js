// @flow
// import React, { useState } from 'react'
import React, { useState, useEffect, useRef } from 'react'

import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {withApollo} from 'react-apollo';

// Styles
import styles from '../Styles/EntitesStyles/CardType1Styles'
import images from '../../Themes/Images'
import { DefaultButton } from '../Buttons/DefaultButton'
import { X4SButton } from '../Buttons/X4SButton'
import {getEntityDetails,getRelatedEntities,getMultimediaDetails} from '../../Containers/StoryLine/my_queries';


// type Props = {
//   title: string,
//   count: number,
//   image1: Image,
//   onPressFollow: PropTypes.func
// }

const CardType1 = (props) => {
  const client=props.client;

  if (!client){
    console.log("CLient not working")
  }
  const { title, count,profileIcons,onPressFollow,is_following } = props


  // const onPressFollow= () => {}
  const [pressStatus, setStatus] = useState(is_following)
  const changeStatus = () => {
    onPressFollow(!pressStatus)
    setStatus(!pressStatus)
  }
 

  const profileIconElement = profileIcons.map((profileIcon, index) => (
    <Image source={{uri:profileIcon.toString()}} key={index} style={styles.profileIcon} />
  ))

  return (
    <View style={styles.cardBox}>
      <View style={styles.profileIconBox}>{profileIconElement}</View>
      <View style={styles.textOutline}>
        <View>
          <Text style={styles.textNameFont}>{title}</Text>
        </View>
        <View>
          <Text style={styles.textDetailsFont}>{`${count}K Following`}</Text>
        </View>
      </View>

      <View style={styles.followbuttonBox}>
        <TouchableOpacity onPress={changeStatus}>
          {!pressStatus ? (
            <DefaultButton outline title="Follow" onPress={onPressFollow} />
          ) : (
            <X4SButton disabled title="Following" onPress={onPressFollow} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

// CardType1.defaultProps = {
//   title: 'Default',
//   count: 0,
//   image1: images.EntitiesImage0,
//   onPressFollow: () => {}
// }

export default withApollo(CardType1)

