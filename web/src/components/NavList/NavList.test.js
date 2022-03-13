import { render } from '@redwoodjs/testing/web'

import NavList from './NavList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavList />)
    }).not.toThrow()
  })
})
