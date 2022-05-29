import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CREDIT_NOTE_MUTATION = gql`
  mutation DeleteCreditNoteMutation($id: Int!) {
    deleteCreditNote(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const CreditNote = ({ creditNote }) => {
  const [deleteCreditNote] = useMutation(DELETE_CREDIT_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('CreditNote deleted')
      navigate(routes.creditNotes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete creditNote ' + id + '?')) {
      deleteCreditNote({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CreditNote {creditNote.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{creditNote.id}</td>
            </tr>
            <tr>
              <th>Number</th>
              <td>{creditNote.number}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{creditNote.amount}</td>
            </tr>
            <tr>
              <th>Currency</th>
              <td>{creditNote.currency}</td>
            </tr>
            <tr>
              <th>Paid</th>
              <td>{checkboxInputTag(creditNote.paid)}</td>
            </tr>
            <tr>
              <th>Start</th>
              <td>{creditNote.start}</td>
            </tr>
            <tr>
              <th>End</th>
              <td>{creditNote.end}</td>
            </tr>
            <tr>
              <th>Week</th>
              <td>{creditNote.week}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{creditNote.notes}</td>
            </tr>
            <tr>
              <th>Vehicle id</th>
              <td>{creditNote.vehicleId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCreditNote({ id: creditNote.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(creditNote.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CreditNote
