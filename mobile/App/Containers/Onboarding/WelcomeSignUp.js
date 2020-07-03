// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { Text, View, Image, Platform } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/WelcomeSignUpStyles'
import GradientScreen from '../../Components/GradientScreen'
import Header from '../../Components/Header'

type Props = NavigationContainerProps & {}
const WelcomeSignUp = (props: Props) => {
  const [hideSplash, setHideSplash] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplash(true)
    }, 5000) // amount of time the splash is shown from the time component is rendered
  }, [])
  React.useEffect(() => {
    if (hideSplash) props.navigation.navigate('NewsFeed')
  }, [hideSplash])
  return (
    <View style={styles.section}>
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <View style={styles.section}>
        <GradientScreen middle={<Image source={Images.newzeraPurpleLogo} style={styles.logo} />} />
        <View style={styles.header}>
          <Header count={3} />
          <Text style={styles.text}>Welcome to Newzera!</Text>
        </View>
      </View>
    </View>
  )
}

export default WelcomeSignUp
