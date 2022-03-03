import { useState } from 'react'
import { Chips } from 'primereact/chips'
import { Inplace, InplaceContent, InplaceDisplay } from 'primereact/inplace'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { InputText } from 'primereact/inputtext'
import { useMutation } from '@redwoodjs/web'

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
  // const [active, setActive] = useState(false)
  const [value, setValue] = useState([])
  const [updateSettings] = useMutation(UPDATE_SETTINGS)

  const updateValue = (item, input = null) => {
    const { __typename, id, ...data } = item

    updateSettings({
      variables: { id, input: { ...data, value: input || value } },
    })
  }

  return (
    <Accordion>
      {settings.map((item) => {
        return (
          <AccordionTab key={item.id} header={item.name}>
            {item.multi ? (
              <Chips
                value={item.value}
                separator={','}
                onChange={(e) => updateValue(item, e.value)}
              ></Chips>
            ) : (
              <Inplace
                closable
                onClose={() => {
                  updateValue(item)
                }}
              >
                <InplaceDisplay>{item.value || 'Click to Edit'}</InplaceDisplay>
                <InplaceContent>
                  <InputText
                    defaultValue={item.value}
                    onChange={(e) => {
                      setValue(e.target.value)
                    }}
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus
                  />
                </InplaceContent>
              </Inplace>
            )}
          </AccordionTab>
        )
      })}
    </Accordion>
  )
}
