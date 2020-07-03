import { useState } from 'react'

export default function useHooks() {
  const [hidden, setHidden] = useState(true)
  const [selected, setSelected] = useState(0)

  const toggleHandler = () => {
    const val = hidden
    setHidden(!val)
    setSelected(0)
  }

  const clickHandler = (args) => {
    setSelected(args + 1)
    setHidden(true)
  }

  return {
    hidden,
    selected,
    clickHandler,
    toggleHandler
  }
}
