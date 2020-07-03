import { AppRegistry } from 'react-native'
import Amplify from 'aws-amplify'
import App from './App/Containers/App'
import config from './config'

// eslint-disable-next-line no-console
console.disableYellowBox = true

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: 'newzera',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
})

AppRegistry.registerComponent('newzera', () => App)
