import { render } from '@redwoodjs/testing/web'

import EditableInput from './EditableInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditableInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditableInput />)
    }).not.toThrow()
  })
})
