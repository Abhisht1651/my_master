import { useState } from 'react'

export default function useHooks() {
  const [check1, setcheck1] = useState(false)
  const [check2, setcheck2] = useState(false)

  const clickHandler1 = (arg) => {
    switch (arg) {
      case 'Delete for me':
        setcheck1(!check1)
        setcheck2(false)
        break
      case 'Delete for both':
        setcheck1(false)
        setcheck2(!check2)
        break
      default:
        break
    }
  }
  return {
    check1,
    check2,
    clickHandler1
  }
}
