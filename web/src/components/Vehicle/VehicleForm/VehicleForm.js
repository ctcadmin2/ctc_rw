import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const VehicleForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.vehicle?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="registration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Registration
        </Label>

        <TextField
          name="registration"
          defaultValue={props.vehicle?.registration}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="registration" className="rw-field-error" />

        <Label
          name="vin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vin
        </Label>

        <TextField
          name="vin"
          defaultValue={props.vehicle?.vin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vin" className="rw-field-error" />

        <Label
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>

        <TextField
          name="category"
          defaultValue={props.vehicle?.category}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="category" className="rw-field-error" />

        <Label
          name="active"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Active
        </Label>

        <CheckboxField
          name="active"
          defaultChecked={props.vehicle?.active}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="active" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VehicleForm
