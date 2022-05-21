import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'
import { Form, Input, Button, Switch, Divider } from 'antd'
import SettingCell from 'src/components/SettingCell'

const VehicleForm = ({vehicle, onSave, _onError}) => {
  const [form] = Form.useForm()

  const onFinish = (data) => {
    onSave(data)
  }

  const onFinishFailed = (_errorInfo) => {
    toast.custom("Vehicle could not be saved. Please check form errors.")
  }

  return (
    <Form
      form={form}
      name="newVehicle"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ ...vehicle }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      scrollToFirstError
    >
      <Form.Item label="Registration" name="registration">
        <Input />
      </Form.Item>

      <Form.Item
        label="VIN"
        name="vin"
        rules={[{ required: true, message: 'Please input your VIN number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Category" name="category" valuePropName='value'>
        <SettingCell name="vehCat" select={{allowClear: true, showSearch: true}}/>
      </Form.Item>

      <Form.Item label="Active" name="active" valuePropName='checked'>
        <Switch />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit" shape='round'>
          Submit
        </Button>
        <Divider type='vertical'/>
        <Button type="default" htmlType='button' shape='round' onClick={() => navigate(routes.vehicles())}>
          Back
        </Button>
      </Form.Item>

    </Form>
  )
}

export default VehicleForm
