import { render } from '@redwoodjs/testing/web'

import TagsGroup from './TagsGroup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TagsGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TagsGroup />)
    }).not.toThrow()
  })
})
