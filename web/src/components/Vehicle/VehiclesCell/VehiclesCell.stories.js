import { Loading, Empty, Failure, Success } from './VehiclesCell'
import { standard } from './VehiclesCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  mockGraphQLMutation('DeleteVehicle', () => {
    return {
      deleteVehicle: {
        id: 1
      }
    }
  })

  return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/VehiclesCell' }
