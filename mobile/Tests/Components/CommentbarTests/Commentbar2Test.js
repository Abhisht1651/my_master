import { shallow } from 'enzyme'
import React from 'react'
import Attach from '../../../App/Images/Icons/icon-attach.svg'
import Commentbar2 from '../../../App/Components/Commentbars/Commentbar2'

describe('Commentbar2', () => {
  it('should match to snapshot', () => {
    const component = shallow(<Commentbar2 />)
    expect(component).toMatchSnapshot()
  })
  it('should have Attach Icon', () => {
    const component = shallow(<Commentbar2 />)
    expect(component.find(Attach)).toBeTruthy()
  })
})
