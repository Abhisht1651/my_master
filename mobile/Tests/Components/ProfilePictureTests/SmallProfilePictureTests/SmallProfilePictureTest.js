import { shallow } from 'enzyme'
import React from 'react'
import SmallProfilePicture from '../../../../App/Components/ProfilePicture/SmallProfilePictures/SmallProfilePicture'

describe('SmallProfilePicture1', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<SmallProfilePicture />)
      expect(component).toMatchSnapshot()
    })
  })
})
