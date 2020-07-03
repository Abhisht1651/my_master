// @flow
import { NavigationContainerProps } from '@react-navigation/native'
import React from 'react'
import { View, Image, Platform } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/Onboarding/WelcomeLoginStyles'
import GradientScreen from '../../Components/GradientScreen'

type Props = NavigationContainerProps & {}
const WelcomeLogin = (props: Props) => {
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
      <GradientScreen middle={<Image source={Images.newzeraPurpleLogo} style={styles.logo} />} />
    </View>
  )
}
export default WelcomeLogin
