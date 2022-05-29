import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CreditNoteForm from 'src/components/CreditNote/CreditNoteForm'

export const QUERY = gql`
  query EditCreditNoteById($id: Int!) {
    creditNote: creditNote(id: $id) {
      id
      number
      amount
      currency
      paid
      start
      end
      week
      notes
      vehicleId
    }
    vehicles: registrationList {
      id
      registration
    }
  }
`
const UPDATE_CREDIT_NOTE_MUTATION = gql`
  mutation UpdateCreditNoteMutation($id: Int!, $input: UpdateCreditNoteInput!) {
    updateCreditNote(id: $id, input: $input) {
      id
      number
      amount
      currency
      paid
      start
      end
      week
      notes
      vehicleId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ creditNote, vehicles }) => {
  const [updateCreditNote, { loading, error }] = useMutation(
    UPDATE_CREDIT_NOTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CreditNote updated')
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
    updateCreditNote({ variables: { id: creditNote.id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CreditNote {creditNote.number}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CreditNoteForm
          creditNote={creditNote}
          vehicles={vehicles}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
