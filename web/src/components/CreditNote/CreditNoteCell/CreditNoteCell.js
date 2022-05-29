import CreditNote from 'src/components/CreditNote/CreditNote'

export const QUERY = gql`
  query FindCreditNoteById($id: Int!) {
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
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CreditNote not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ creditNote }) => {
  return <CreditNote creditNote={creditNote} />
}
