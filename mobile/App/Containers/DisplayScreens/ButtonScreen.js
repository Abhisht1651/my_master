import React from 'react'
import { View, ScrollView } from 'react-native'
import { LargeButton } from '../../Components/Buttons/LargeButton'
import { LargeThinButton } from '../../Components/Buttons/LargeThinButton'
import { MediumButton } from '../../Components/Buttons/MediumButton'
import { MediumThinButton } from '../../Components/Buttons/MediumThinButton'
import { MediumThinnerButton } from '../../Components/Buttons/MediumThinnerButton'
import { SmallButton } from '../../Components/Buttons/SmallButton'
import { XSButton } from '../../Components/Buttons/XSButton'
import { X2SButton } from '../../Components/Buttons/X2SButton'
import { X3SButton } from '../../Components/Buttons/X3SButton'
import { X4SButton } from '../../Components/Buttons/X4SButton'
import { DefaultButton } from '../../Components/Buttons/DefaultButton'
import styles from '../Styles/ButtonContainerStyles'

const ButtonContainer = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.margin} />
          <LargeButton />
          <View style={styles.margin} />
          <LargeButton disabled title="Button" />
          <View style={styles.margin} />
          <LargeThinButton title="Button" />
          <View style={styles.margin} />
          <LargeThinButton title="Button" other />
          <View style={styles.margin} />
          <LargeThinButton title="Button" disabled />
          <View style={styles.margin} />
          <LargeThinButton title="Button" outline />
          <View style={styles.margin} />
          <MediumButton title="Button" />
          <View style={styles.margin} />
          <MediumButton title="Button" disabled />
          <View style={styles.margin} />
          <MediumButton outline title="Button" />
          <View style={styles.margin} />
          <MediumThinButton title="Button" />
          <View style={styles.margin} />
          <MediumThinButton disabled title="Button" />
          <View style={styles.margin} />
          <MediumThinnerButton title="Button" />
          <View style={styles.margin} />
          <MediumThinnerButton outline title="Button" />
          <View style={styles.margin} />
          <SmallButton title="Button" />
          <View style={styles.margin} />
          <XSButton title="Button" />
          <View style={styles.margin} />
          <XSButton disabled title="Button" />
          <View style={styles.margin} />
          <XSButton outline title="Button" />
          <View style={styles.margin} />
          <X2SButton title="Button" />
          <View style={styles.margin} />
          <X2SButton disabled title="Button" />
          <View style={styles.margin} />
          <X2SButton outline title="Button" />
          <View style={styles.margin} />
          <X2SButton float title="Button" />
          <View style={styles.margin} />
          <X3SButton title="Button" />
          <View style={styles.margin} />
          <X3SButton outline title="Button" />
          <View style={styles.margin} />
          <X4SButton title="Button" />
          <View style={styles.margin} />
          <X4SButton disabled title="Button" />
          <View style={styles.margin} />
          <X4SButton outline title="Button" />
          <View style={styles.margin} />
          <DefaultButton title="Button" />
          <View style={styles.margin} />
          <DefaultButton disabled title="Button" />
          <View style={styles.margin} />
          <DefaultButton outline title="Button" />
          <View style={styles.margin} />
        </View>
      </ScrollView>
    </View>
  )
}

export default ButtonContainer
