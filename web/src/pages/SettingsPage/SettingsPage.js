import { Box, Tab, Tabs, Typography } from '@mui/material'
import SettingsCell from 'src/components/SettingsCell/'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const SettingsPage = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Main" />
          <Tab label="Company" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SettingsCell type="main" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SettingsCell type="company" />
      </TabPanel>
    </>
  )
}

export default SettingsPage
