import { Link, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'
import { useMutation } from '@redwoodjs/web'

import Vehicles from 'src/components/Vehicle/Vehicles'

export const QUERY = gql`
  query VehiclesPage($page: Int!) {
    vehiclesPage(page: $page) {
      vehicles {
        id
        registration
        vin
        category
        active
      }
      count
    }
  }
`

const DELETE_VEHICLE_MUTATION = gql`
  mutation DeleteVehicle($id: Int!) {
    deleteVehicle(id: $id) {
      id
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

export const Success = ({ vehiclesPage, page }) => {
  const [deleteVehicle] = useMutation(DELETE_VEHICLE_MUTATION, {
    onCompleted: () => {
      toast.success('Vehicle deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id, registration) => {
    if (
      confirm('Are you sure you want to delete vehicle ' + registration + '?')
    ) {
      deleteVehicle({ variables: { id } })
    }
  }

  return (
    <Vehicles
      vehicles={vehiclesPage.vehicles}
      handleDelete={onDeleteClick}
      count={vehiclesPage.count}
      currentPage={page}
    />
  )
}
