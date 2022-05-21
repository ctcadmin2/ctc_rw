import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import VehicleForm from 'src/components/Vehicle/VehicleForm'

const CREATE_VEHICLE_MUTATION = gql`
  mutation CreateVehicleMutation($input: CreateVehicleInput!) {
    createVehicle(input: $input) {
      id
    }
  }
`

const NewVehicle = () => {
  const [createVehicle, { loading, error }] = useMutation(
    CREATE_VEHICLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Vehicle created!')
        navigate(routes.vehicles())
      },
      onError: (_error) => {
        toast.error("Vehicle could not be saved!")
      },
    }
  )

  const onSave = (input) => {
    createVehicle({ variables: { input } })
  }

  return <VehicleForm onSave={onSave} loading={loading} error={error} />
}

export default NewVehicle
