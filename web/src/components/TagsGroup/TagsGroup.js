import { Tag, Input, Tooltip, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import { toast } from '@redwoodjs/web/toast'

const TagsGroup = ({ tags, id, updateValue }) => {
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [editInputIndex, setEditInputIndex] = useState(-1)
  const [editInputValue, setEditInputValue] = useState('')

  const inputRef = useRef(null)
  const editInputRef = useRef(null)

  useEffect(() => {
    if (inputVisible) {
      inputRef.current.focus()
    }
  })

  useEffect(() => {
    if (editInputIndex !== -1) {
      editInputRef.current.focus()
    }
  })

  const handleRemove = (removedTag) => {
    const data = tags.filter((tag) => tag !== removedTag)
    updateValue(id, data)
  }

  const showInput = () => {
    setInputVisible(true)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputConfirm = (e) => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      const data = [...tags, inputValue]
      updateValue(id, data)
    } else {
      toast.error('Tag already exists.')
    }

    setInputVisible(false)
    setInputValue('')
  }

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value)
  }

  const handleEditInputConfirm = () => {
    const newTags = [...tags]
    if (!newTags.find((tag) => tag === editInputValue)) {
      newTags[editInputIndex] = editInputValue
      updateValue(id, newTags)
    } else {
      toast.error('Tag already exists.')
    }

    setEditInputIndex(-1)
    setEditInputValue('')
  }

  return (
    <>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              key={tag}
              ref={editInputRef}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          )
        }

        const isLongTag = tag.length > 20

        const tagElem = (
          <Tag
            style={{ userSelect: 'none' }}
            color="blue"
            key={tag}
            closable
            onClose={() => handleRemove(tag)}
          >
            <span
              onDoubleClick={(e) => {
                setEditInputIndex(index)
                setEditInputValue(tag)
                e.preventDefault()
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        )
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        )
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          allowClear
          type="text"
          size="small"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Button type="dashed" onClick={() => showInput()} size="small">
          <PlusOutlined /> New Option
        </Button>
      )}
    </>
  )
}

export default TagsGroup
