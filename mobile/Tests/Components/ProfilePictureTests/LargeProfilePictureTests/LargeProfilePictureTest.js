import { shallow } from 'enzyme'
import React from 'react'
import LargeProfilePicture from '../../../../App/Components/ProfilePicture/LargeProfilePictures/LargeProfilePicture'

describe('LargeProfilePicture', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<LargeProfilePicture />)
      expect(component).toMatchSnapshot()
    })
  })
})
