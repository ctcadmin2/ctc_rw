import { Link, routes } from '@redwoodjs/router'

import Vehicles from 'src/components/Vehicle/Vehicles'

export const QUERY = gql`
  query FindVehicles {
    vehicles {
      id
      registration
      vin
      category
      active
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No vehicles yet. '}
      <Link to={routes.newVehicle()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vehicles }) => {
  return <Vehicles vehicles={vehicles} />
}
