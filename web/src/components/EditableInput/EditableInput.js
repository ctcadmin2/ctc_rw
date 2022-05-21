import { StepForwardOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { useRef, useState } from 'react'

const EditableInput = ({ id, value, updateValue }) => {
  const [inputValue, setInputValue] = useState(value)
  const [editInput, setEditInput] = useState(false)
  const inputRef = useRef(null)

  const handleOnClick = () => {
    if (!editInput) {
      setEditInput(true)
      inputRef.current.focus({ cursor: 'all' })
    } else {
      updateValue(id, inputValue)
      setEditInput(false)
    }
  }

  return (
    <Input
      ref={inputRef}
      value={inputValue}
      disabled={!editInput}
      onChange={(e) => setInputValue(e.target.value)}
      suffix={
        <Button type="primary" onClick={handleOnClick}>
          {editInput ? 'Submit' : 'Edit'}
        </Button>
      }
    />
  )
}

export default EditableInput
