import { shallow } from 'enzyme'
import React from 'react'
import MediumProfilePicture from '../../../../App/Components/ProfilePicture/MediumProfilePictures/MediumProfilePicture'

describe('MediumProfilePicture', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<MediumProfilePicture />)
      expect(component).toMatchSnapshot()
    })
  })
})
