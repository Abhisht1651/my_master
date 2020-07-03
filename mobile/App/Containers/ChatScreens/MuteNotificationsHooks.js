import { useState } from 'react'

export default function useHooks() {
  const [checkDay, setcheckDay] = useState(false)
  const [checkWeek, setcheckWeek] = useState(false)
  const [checkMonth, setcheckMonth] = useState(false)
  const [checkPermanent, setcheckPermanent] = useState(false)

  const clickHandler1 = (arg) => {
    switch (arg) {
      case '1 day':
        setcheckDay(!checkDay)
        setcheckWeek(false)
        setcheckMonth(false)
        setcheckPermanent(false)
        break
      case '1 week':
        setcheckDay(false)
        setcheckWeek(!checkWeek)
        setcheckMonth(false)
        setcheckPermanent(false)
        break
      case '1 month':
        setcheckDay(false)
        setcheckWeek(false)
        setcheckMonth(!checkMonth)
        setcheckPermanent(false)
        break
      case 'Permanent':
        setcheckDay(false)
        setcheckWeek(false)
        setcheckMonth(false)
        setcheckPermanent(!checkPermanent)
        break
      default:
        break
    }
  }
  return {
    checkDay,
    checkWeek,
    checkMonth,
    checkPermanent,
    clickHandler1
  }
}
