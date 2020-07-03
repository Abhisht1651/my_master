import { useState } from 'react'

export default function useHooks() {
  const [check1, setcheck1] = useState(false)
  const [check2, setcheck2] = useState(false)
  const [check3, setcheck3] = useState(false)

  const clickHandler1 = (arg) => {
    switch (arg) {
      case 'This person is using their account for spam.':
        setcheck1(!check1)
        setcheck2(false)
        setcheck3(false)
        break
      case 'This person is posting inappropiate or vulgar content.':
        setcheck1(false)
        setcheck2(!check2)
        setcheck3(false)
        break
      case 'This person is being abusive towards or threatening other users.':
        setcheck1(false)
        setcheck2(false)
        setcheck3(!check3)
        break
      default:
        break
    }
  }
  return {
    check1,
    check2,
    check3,
    clickHandler1
  }
}
