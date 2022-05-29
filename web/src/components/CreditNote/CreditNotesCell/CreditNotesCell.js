import { Link, navigate, routes } from '@redwoodjs/router'

import CreditNotes from 'src/components/CreditNote/CreditNotes'

export const QUERY = gql`
  query FindCreditNotes($page: Int) {
    creditNotesPage(page: $page) {
      creditNotes {
        id
        number
        amount
        currency
        paid
        start
        end
        week
        notes
        vehicle {
          registration
        }
      }
      total
    }
  }
`
export const beforeQuery = ({ page, filter, sort }) => {
  page = page ? parseInt(page, 10) : 1
  filter = filter ? filter : null
  sort = sort ? sort : null
  return { variables: { page } }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No creditNotes yet. '}
      <Link to={routes.newCreditNote()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  creditNotesPage: { creditNotes },
  creditNotesPage: { total },
  page,
}) => {
  return (
    <CreditNotes
      creditNotes={creditNotes}
      // handleDelete={onDeleteClick}
      total={total}
      currentPage={page}
    />
  )
}
