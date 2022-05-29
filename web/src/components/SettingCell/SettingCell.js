import {
  CloseCircleTwoTone,
  InfoCircleTwoTone,
  LoadingOutlined,
} from '@ant-design/icons'
import { Input, Select } from 'antd'

const { Option } = Select

export const QUERY = gql`
  query Setting($name: String!) {
    setting: setting(name: $name) {
      value
    }
  }
`

export const Loading = () => <Input readOnly suffix={<LoadingOutlined />} />

export const Empty = () => (
  <Input
    readOnly
    defaultValue="No options available."
    status="warning"
    prefix={
      <InfoCircleTwoTone
        twoToneColor="#eb2f96"
        style={{ fontSize: 20, paddingRight: 8 }}
      />
    }
  />
)

export const Failure = ({ error }) => (
  <Input
    readOnly
    defaultValue={error}
    status="error"
    prefix={
      <CloseCircleTwoTone
        twoToneColor="#eb2f96"
        style={{ fontSize: 20, paddingRight: 8 }}
      />
    }
  />
)

export const Success = ({ setting, select, value, onChange }) => {
  const options = setting.value.map((value) => (
    <Option key={value} value={value} />
  ))
  return (
    <Select value={value} onChange={onChange} {...select}>
      {options}
    </Select>
  )
}
