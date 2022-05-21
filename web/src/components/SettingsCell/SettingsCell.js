import { useMutation } from '@redwoodjs/web'
import TagsGroup from '../TagsGroup/TagsGroup'
import { Collapse } from 'antd'
import EditableInput from '../EditableInput/EditableInput'

const { Panel } = Collapse

export const QUERY = gql`
  query SettingsQuery($type: String!) {
    settings(type: $type) {
      id
      name
      value
      multi
    }
  }
`
const UPDATE_SETTINGS = gql`
  mutation updateSettings($id: Int!, $input: UpdateSettingInput!) {
    updateSettings(id: $id, input: $input) {
      id
      name
      value
      multi
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ settings }) => {
  const [updateSettings] = useMutation(UPDATE_SETTINGS)

  const updateValue = (itemId, value) => {
    updateSettings({
      variables: { id: itemId, input: { value } },
    })
  }

  return (
    <Collapse accordion>
      {settings.map((item) => (
        <Panel header={item.name} key={item.id}>
          {item.multi ? (
            <TagsGroup
              tags={item.value}
              id={item.id}
              updateValue={updateValue}
            />
          ) : (
            <EditableInput
              id={item.id}
              value={item.value}
              updateValue={updateValue}
            />
          )}
        </Panel>
      ))}
    </Collapse>
  )
}
