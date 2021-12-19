import { render } from '@redwoodjs/testing/web'

import SettingsPage from './SettingsPage'

describe('SettingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsPage />)
    }).not.toThrow()
  })
})
