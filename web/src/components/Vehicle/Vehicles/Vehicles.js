import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  DeleteTwoTone,
  EditTwoTone,
} from '@ant-design/icons'
import { navigate, routes } from '@redwoodjs/router'
import { Dropdown, Menu } from 'antd'
import DataTable from 'src/components/DataTable/DataTable'

const VehiclesList = ({ vehicles, handleDelete, count, currentPage }) => {
  const menu = ({ id, registration }) => {
    return (
      <Menu
        items={[
          {
            label: 'Edit',
            key: 'edit',
            icon: <EditTwoTone />,
            onClick: () => navigate(routes.editVehicle({ id })),
          },
          {
            label: 'Delete',
            key: 'delete',
            icon: <DeleteTwoTone twoToneColor="#eb2f96" fontSize="20px" />,
            danger: true,
            onClick: () => handleDelete(id, registration),
          },
        ]}
      />
    )
  }

  const columns = [
    {
      title: 'Registration',
      dataIndex: 'registration',
    },
    {
      title: 'VIN',
      dataIndex: 'vin',
      align: 'center',
    },
    { title: 'Category', dataIndex: 'category', align: 'center' },
    {
      title: 'Active',
      dataIndex: 'active',
      align: 'center',
      render: (cell) => {
        return cell ? (
          <CheckCircleTwoTone
            twoToneColor="#04C357"
            style={{ fontSize: '20px' }}
          />
        ) : (
          <CloseCircleTwoTone
            twoToneColor="#eb2f96"
            style={{ fontSize: '20px' }}
          />
        )
      },
    },
    {
      title: 'Actions',
      align: 'center',
      render: (row) => {
        return (
          <Dropdown.Button
            placement="bottom"
            type="primary"
            onClick={() => console.log('show the stuff')}
            overlay={menu(row)}
          >
            Show
          </Dropdown.Button>
        )
      },
    },
  ]

  return (
    <DataTable
      data={vehicles}
      columns={columns}
      count={count}
      currentPage={currentPage}
    />
  )
}
export default VehiclesList
