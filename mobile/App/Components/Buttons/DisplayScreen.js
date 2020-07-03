import React from 'react'
import { View, StyleSheet } from 'react-native'

import { DefaultButton } from './DefaultButton'
import { LargeButton } from './LargeButton'
import { LargeThinButton } from './LargeThinButton'
import { MediumButton } from './MediumButton'

// import { MediumThinButton } from './MediumThinButton'
// import { MediumThinnerButton } from './MediumThinnerButton'
// import { SmallButton } from './SmallButton'

// import { X2SButton } from './X2SButton'
// import { X3SButton } from './X3SButton'
// import { X4SButton } from './X4SButton'
// import { XSButton } from './XSButton'

// import styles from '../Styles/DisplayScreenStyle'

const DisplayScreen = () => {
  return (
    <View style={styles.container}>
      {/* Default buttons */}
      <View style={styles.default}>
        <DefaultButton title="Accept" />
        <DefaultButton title="Add" outline />
        <DefaultButton title="Added" outline disabled />
      </View>

      {/* Large buttons */}
      <View style={styles.large}>
        <LargeButton title="Continue" />
        <LargeButton title="Continue" disabled />
      </View>

      {/* Large thin buttons */}
      <View style={styles.large}>
        <LargeThinButton title="Post" />
        <LargeThinButton title="Post" disabled />
        <LargeThinButton title="Vote" outline />
        <LargeThinButton title="Share" other />
      </View>

      {/* Medium buttons */}
      <View style={styles.large}>
        <MediumButton title="Get Started" />
        <MediumButton title="Log In" outline />
      </View>

      {/* Medium thin buttons */}
      {/* <View style={styles.large}>
        <MediumThinButton title="Save" onPress={() => alert("Medium Thin Pressed!")}/>
        <MediumThinButton title="Save" disabled/>
      </View> */}

      {/* Medium thinner buttons */}
      {/* <View style={styles.large}>
        <MediumThinnerButton title="Media" outline onPress={() => alert("Medium Thinner Pressed!")}/>
      </View> */}

      {/* Small buttons */}
      {/* <View style={styles.large}>
        <SmallButton title="View Post" onPress={() => alert("Small Pressed!")}/>
      </View> */}

      {/* XS buttons */}
      {/* <View style={styles.large}>
        <XSButton title="Storyline" outline onPress={() => alert("XS Pressed!")}/>
        <XSButton title="Storyline" disabled />
      </View> */}

      {/* X2S buttons */}
      {/* <View style={styles.default}>
        <X2SButton title="New Updates" float onPress={() => alert("X2S Pressed!")}/>
        <X2SButton title="Following" disabled />
      </View> */}

      {/* X3S buttons */}
      {/* <View style={styles.default}>
        <X3SButton title="Edit Profile" outline onPress={() => alert("X3S Pressed!")}/>
      </View> */}

      {/* X4S buttons */}
      {/* <View style={styles.default}>
        <X4SButton title="Follow" outline onPress={() => alert("X4S Pressed!")}/>
        <X4SButton title="Following" disabled />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#FFF'
  },
  default: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20
  },
  large: {
    padding: 20,
    alignItems: 'center'
  }
})

export default DisplayScreen
