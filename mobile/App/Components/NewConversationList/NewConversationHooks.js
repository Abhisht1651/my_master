import { useState } from 'react'

export default function useHooks() {
  const [checked, setChecked] = useState(false)

  const onPressHandler = () => {
    setChecked(!checked)
  }

  return {
    checked,
    onPressHandler
  }
}
