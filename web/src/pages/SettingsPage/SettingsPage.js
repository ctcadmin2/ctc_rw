import { TabView, TabPanel } from 'primereact/tabview'

import SettingsCell from 'src/components/SettingsCell/'

const SettingsPage = () => {
  return (
    <TabView>
      <TabPanel header="Main">
        <SettingsCell type="main" />
      </TabPanel>
      <TabPanel header="Company">
        <SettingsCell type="company" />
      </TabPanel>
    </TabView>
  )
}

export default SettingsPage
