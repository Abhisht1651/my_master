import { shallow } from 'enzyme'
import React from 'react'
import Sticker from '../../../App/Images/Icons/icon-sticker-colored.svg'
import Attach from '../../../App/Images/Icons/icon-attach.svg'
import Camera from '../../../App/Images/Icons/icon-camera-outline.svg'
import Commentbar1 from '../../../App/Components/Commentbars/Commentbar1'

describe('Commentbar1', () => {
  it('should match to snapshot', () => {
    const component = shallow(<Commentbar1 />)
    expect(component).toMatchSnapshot()
  })
  it('should have Attach Icon', () => {
    const component = shallow(<Commentbar1 />)
    expect(component.find(Attach)).toBeTruthy()
  })
  it('should have Sticker Icon', () => {
    const component = shallow(<Commentbar1 />)
    expect(component.find(Sticker)).toBeTruthy()
  })
  it('should have Camera Icon', () => {
    const component = shallow(<Commentbar1 />)
    expect(component.find(Camera)).toBeTruthy()
  })
})
