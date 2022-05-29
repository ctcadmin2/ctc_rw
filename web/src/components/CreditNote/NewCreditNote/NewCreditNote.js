import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import CreditNoteForm from 'src/components/CreditNote/CreditNoteForm'

const CREATE_CREDIT_NOTE_MUTATION = gql`
  mutation CreateCreditNoteMutation($input: CreateCreditNoteInput!) {
    createCreditNote(input: $input) {
      id
    }
  }
`

const NewCreditNote = () => {
  const [createCreditNote, { loading, error }] = useMutation(
    CREATE_CREDIT_NOTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CreditNote created')
        navigate(routes.creditNotes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      vehicleId: parseInt(input.vehicleId),
    })
    createCreditNote({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CreditNote</h2>
      </header>
      <div className="rw-segment-main">
        <CreditNoteForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCreditNote
