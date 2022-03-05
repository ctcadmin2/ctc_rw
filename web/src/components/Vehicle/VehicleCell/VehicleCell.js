import Vehicle from 'src/components/Vehicle/Vehicle'

export const QUERY = gql`
  query FindVehicleById($id: Int!) {
    vehicle: vehicle(id: $id) {
      id
      registration
      vin
      category
      active
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Vehicle not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vehicle }) => {
  return <Vehicle vehicle={vehicle} />
}
