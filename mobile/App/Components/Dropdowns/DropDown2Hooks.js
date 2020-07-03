import { useState } from 'react'

export default function useHooks() {
  const [hidden, setHidden] = useState(true)
  const [selected, setSelected] = useState(-1)

  const toggleHandler = () => {
    const val = hidden
    setHidden(!val)
  }

  const clickHandler = (arg) => {
    setSelected(arg + 1)
    setHidden(true)
  }

  return {
    hidden,
    selected,
    toggleHandler,
    clickHandler
  }
}
