// @flow
import { Dimensions, PixelRatio } from 'react-native'
import { useState, useEffect } from 'react'

const screenWidth = Dimensions.get('window').width

const screenHeight = Dimensions.get('window').height
const widthPercentageToDP = (widthPercent: string) => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent)
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100)
}
const heightPercentageToDP = (heightPercent: string) => {
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent)
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100)
}

function useDeviceOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState(null)

  useEffect(() => {
    function updateState() {
      const { height, width } = Dimensions.get('window')
      if (height >= width) {
        setDeviceOrientation('portrait')
      } else {
        setDeviceOrientation('landscape')
      }
    }

    updateState()
    Dimensions.addEventListener('change', updateState)
    return () => Dimensions.removeEventListener('change', updateState)
  }, [])

  return deviceOrientation
}

export { widthPercentageToDP, heightPercentageToDP, useDeviceOrientation }
