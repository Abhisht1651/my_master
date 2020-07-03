import { shallow } from 'enzyme'
import React from 'react'
import XLargeProfilePicture from '../../../../App/Components/ProfilePicture/XLargeProfilePicture/XLargeProfilePicture'

describe('XLargeProfilePicture', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<XLargeProfilePicture />)
      expect(component).toMatchSnapshot()
    })
  })
})
