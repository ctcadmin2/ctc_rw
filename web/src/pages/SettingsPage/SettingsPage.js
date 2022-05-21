import SettingsCell from 'src/components/SettingsCell/'
import { Tabs } from 'antd'

const { TabPane } = Tabs

function callback(key) {}

const SettingsPage = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="General" key="1">
        <SettingsCell type="main" />
      </TabPane>
      <TabPane tab="Company" key="2">
        <SettingsCell type="company" />
      </TabPane>
    </Tabs>
  )
}

export default SettingsPage
