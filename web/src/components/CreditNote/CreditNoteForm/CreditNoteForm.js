import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'
import { Button, Divider, Form, Input, Select, Switch } from 'antd'
import SettingCell from 'src/components/SettingCell'

const CreditNoteForm = ({ creditNote, vehicles, onSave }) => {
  const [form] = Form.useForm()

  const onFinish = (data) => {
    console.log(data)
    onSave(data)
  }

  const onFinishFailed = (_errorInfo) => {
    toast.error('Vehicle could not be saved. Please check form errors.')
  }

  return (
    <Form
      form={form}
      name="newCreditNote"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ ...creditNote }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      scrollToFirstError
    >
      <Form.Item
        label="Number"
        name="number"
        rules={[
          { required: true, message: 'Please input an identification number!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Vehicle" name="vehicleId">
        <Select showSearch showArrow allowClear optionFilterProp="children">
          {vehicles.map(({ id, registration }) => (
            <Select.Option key={id} value={id}>
              {registration}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Please the value of the trip!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Start location" name="start">
        <Input />
      </Form.Item>
      <Form.Item label="End location" name="end">
        <Input />
      </Form.Item>
      <Form.Item label="Week" name="week">
        <Input />
      </Form.Item>
      <Form.Item label="Notes" name="notes">
        <Input.TextArea allowClear />
      </Form.Item>

      <Form.Item label="Currency" name="currency" valuePropName="value">
        <SettingCell
          name="currencies"
          select={{ allowClear: true, showSearch: true }}
        />
      </Form.Item>

      <Form.Item label="Paid" name="paid" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit" shape="round">
          Submit
        </Button>
        <Divider type="vertical" />
        <Button
          type="default"
          htmlType="button"
          shape="round"
          onClick={() => navigate(routes.creditNotes())}
        >
          Back
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreditNoteForm
