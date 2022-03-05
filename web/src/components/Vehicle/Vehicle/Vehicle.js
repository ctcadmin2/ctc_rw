import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_VEHICLE_MUTATION = gql`
  mutation DeleteVehicleMutation($id: Int!) {
    deleteVehicle(id: $id) {
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

const Vehicle = ({ vehicle }) => {
  const [deleteVehicle] = useMutation(DELETE_VEHICLE_MUTATION, {
    onCompleted: () => {
      toast.success('Vehicle deleted')
      navigate(routes.vehicles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vehicle ' + id + '?')) {
      deleteVehicle({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Vehicle {vehicle.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{vehicle.id}</td>
            </tr>
            <tr>
              <th>Registration</th>
              <td>{vehicle.registration}</td>
            </tr>
            <tr>
              <th>Vin</th>
              <td>{vehicle.vin}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{vehicle.category}</td>
            </tr>
            <tr>
              <th>Active</th>
              <td>{checkboxInputTag(vehicle.active)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVehicle({ id: vehicle.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vehicle.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Vehicle
