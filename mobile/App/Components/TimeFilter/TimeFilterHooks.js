import { useState } from 'react'

export default function useHooks() {
  const [checked2020, setchecked2020] = useState(false)
  const [checked2019, setchecked2019] = useState(false)
  const [checked2018, setchecked2018] = useState(false)
  const [checked2017, setchecked2017] = useState(false)
  const [checked2016, setchecked2016] = useState(false)
  const [checked2015, setchecked2015] = useState(false)
  const [checkedJan, setcheckedJan] = useState(false)
  const [checkedFeb, setcheckedFeb] = useState(false)
  const [checkedMar, setcheckedMar] = useState(false)
  const [checkedApr, setcheckedApr] = useState(false)
  const [checkedMay, setcheckedMay] = useState(false)
  const [checkedJun, setcheckedJun] = useState(false)
  const [checkedJul, setcheckedJul] = useState(false)
  const [checkedAug, setcheckedAug] = useState(false)
  const [checkedSept, setcheckedSept] = useState(false)
  const [checkedOct, setcheckedOct] = useState(false)
  const [checkedNov, setcheckedNov] = useState(false)
  const [checkedDec, setcheckedDec] = useState(false)

  const clickHandler1 = (arg) => {
    switch (arg) {
      case 2020:
        setchecked2020(!checked2020)
        break
      case 2019:
        setchecked2019(!checked2019)
        break
      case 2018:
        setchecked2018(!checked2018)
        break
      case 2017:
        setchecked2017(!checked2017)
        break
      case 2016:
        setchecked2016(!checked2016)
        break
      case 2015:
        setchecked2015(!checked2015)
        break
      default:
        break
    }
  }

  const clickHandler2 = (arg) => {
    switch (arg) {
      case 'Jan':
        setcheckedJan(!checkedJan)
        break
      case 'Feb':
        setcheckedFeb(!checkedFeb)
        break
      case 'Mar':
        setcheckedMar(!checkedMar)
        break
      case 'Apr':
        setcheckedApr(!checkedApr)
        break
      case 'May':
        setcheckedMay(!checkedMay)
        break
      case 'Jun':
        setcheckedJun(!checkedJun)
        break
      case 'Jul':
        setcheckedJul(!checkedJul)
        break
      case 'Aug':
        setcheckedAug(!checkedAug)
        break
      case 'Sept':
        setcheckedSept(!checkedSept)
        break
      case 'Oct':
        setcheckedOct(!checkedOct)
        break
      case 'Nov':
        setcheckedNov(!checkedNov)
        break
      case 'Dec':
        setcheckedDec(!checkedDec)
        break

      default:
        break
    }
  }
  return {
    checked2020,
    checked2019,
    checked2018,
    checked2017,
    checked2016,
    checked2015,
    checkedJan,
    checkedFeb,
    checkedMar,
    checkedApr,
    checkedMay,
    checkedJun,
    checkedJul,
    checkedAug,
    checkedSept,
    checkedOct,
    checkedNov,
    checkedDec,
    clickHandler1,
    clickHandler2
  }
}
