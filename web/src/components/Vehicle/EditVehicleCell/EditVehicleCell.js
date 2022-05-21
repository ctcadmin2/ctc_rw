import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import VehicleForm from 'src/components/Vehicle/VehicleForm'

export const QUERY = gql`
  query EditVehicleById($id: Int!) {
    vehicle: vehicle(id: $id) {
      id
      registration
      vin
      category
      active
    }
  }
`
const UPDATE_VEHICLE_MUTATION = gql`
  mutation UpdateVehicleMutation($id: Int!, $input: UpdateVehicleInput!) {
    updateVehicle(id: $id, input: $input) {
      id
      registration
      vin
      category
      active
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vehicle }) => {
  const [updateVehicle, { loading, error }] = useMutation(
    UPDATE_VEHICLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Vehicle updated')
        navigate(routes.vehicles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    updateVehicle({ variables: { id: vehicle.id, input } })
  }

  return (
    <VehicleForm
      vehicle={vehicle}
      onSave={onSave}
      error={error}
      loading={loading}
    />
  )
}
