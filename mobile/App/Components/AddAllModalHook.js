import { useState } from 'react'

export default function useHooks() {
  const [isModalVisible, toggleModal] = useState(false)

  const toggleListHandler = () => {
    toggleModal(!isModalVisible)
  }

  return {
    isModalVisible,
    toggleListHandler
  }
}
