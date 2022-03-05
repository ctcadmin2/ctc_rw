import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { DataTable } from 'primereact/datatable'

import { QUERY } from 'src/components/Vehicle/VehiclesCell'
import { Column } from 'primereact/column'

const DELETE_VEHICLE_MUTATION = gql`
  mutation DeleteVehicleMutation($id: Int!) {
    deleteVehicle(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const VehiclesList = ({ vehicles }) => {
  // const [deleteVehicle] = useMutation(DELETE_VEHICLE_MUTATION, {
  //   onCompleted: () => {
  //     toast.success('Vehicle deleted')
  //   },
  //   onError: (error) => {
  //     toast.error(error.message)
  //   },
  //   // This refetches the query on the list page. Read more about other ways to
  //   // update the cache over here:
  //   // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
  //   refetchQueries: [{ query: QUERY }],
  //   awaitRefetchQueries: true,
  // })

  // const onDeleteClick = (id) => {
  //   if (confirm('Are you sure you want to delete vehicle ' + id + '?')) {
  //     deleteVehicle({ variables: { id } })
  //   }
  // }

  return (
    <DataTable value={vehicles}>
      <Column
        field="registration"
        header="Registration"
        sortable
        filter
      ></Column>
      <Column field="vin" header="VIN"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="active" header="Active" sortable></Column>
    </DataTable>
    // <div className="rw-segment rw-table-wrapper-responsive">
    //   <table className="rw-table">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Registration</th>
    //         <th>Vin</th>
    //         <th>Category</th>
    //         <th>Active</th>
    //         <th>&nbsp;</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {vehicles.map((vehicle) => (
    //         <tr key={vehicle.id}>
    //           <td>{truncate(vehicle.id)}</td>
    //           <td>{truncate(vehicle.registration)}</td>
    //           <td>{truncate(vehicle.vin)}</td>
    //           <td>{truncate(vehicle.category)}</td>
    //           <td>{checkboxInputTag(vehicle.active)}</td>
    //           <td>
    //             <nav className="rw-table-actions">
    //               <Link
    //                 to={routes.vehicle({ id: vehicle.id })}
    //                 title={'Show vehicle ' + vehicle.id + ' detail'}
    //                 className="rw-button rw-button-small"
    //               >
    //                 Show
    //               </Link>
    //               <Link
    //                 to={routes.editVehicle({ id: vehicle.id })}
    //                 title={'Edit vehicle ' + vehicle.id}
    //                 className="rw-button rw-button-small rw-button-blue"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 title={'Delete vehicle ' + vehicle.id}
    //                 className="rw-button rw-button-small rw-button-red"
    //                 onClick={() => onDeleteClick(vehicle.id)}
    //               >
    //                 Delete
    //               </button>
    //             </nav>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  )
}

export default VehiclesList
