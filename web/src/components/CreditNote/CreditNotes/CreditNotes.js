import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/CreditNote/CreditNotesCell'
import DataTable from 'src/components/DataTable/DataTable'
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  DeleteTwoTone,
  EditTwoTone,
} from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'

const DELETE_CREDIT_NOTE_MUTATION = gql`
  mutation DeleteCreditNoteMutation($id: Int!) {
    deleteCreditNote(id: $id) {
      id
    }
  }
`

const CreditNotesList = ({ creditNotes, total, currentPage }) => {
  const [deleteCreditNote] = useMutation(DELETE_CREDIT_NOTE_MUTATION, {
    onCompleted: () => {
      toast.success('CreditNote deleted')
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

  const handleDelete = (id, number) => {
    if (confirm('Are you sure you want to delete creditNote ' + number + '?')) {
      deleteCreditNote({ variables: { id } })
      navigate(routes.creditNotes())
    }
  }

  const menu = ({ id, number }) => {
    return (
      <Menu
        items={[
          {
            label: 'Edit',
            key: 'edit',
            icon: <EditTwoTone />,
            onClick: () => navigate(routes.editCreditNote({ id })),
          },
          {
            label: 'Delete',
            key: 'delete',
            icon: <DeleteTwoTone twoToneColor="#eb2f96" fontSize="20px" />,
            danger: true,
            onClick: () => handleDelete(id, number),
          },
        ]}
      />
    )
  }

  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
    },
    {
      title: 'Start',
      dataIndex: 'start',
      align: 'center',
    },
    {
      title: 'Stop',
      dataIndex: 'stop',
      align: 'center',
    },
    {
      title: 'Week',
      dataIndex: 'week',
      align: 'center',
    },
    {
      title: 'Amount',
      dataIndex: ['amount', 'currency'],
      align: 'center',
      render: (_text, record) => {
        return Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: record.currency,
        }).format(record.amount)
      },
    },
    {
      title: 'Paid',
      dataIndex: 'paid',
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
      title: 'Vehicle',
      dataIndex: ['vehicle', 'registration'],
      align: 'center',
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      align: 'center',
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
      data={creditNotes}
      columns={columns}
      total={total}
      currentPage={currentPage}
    />
  )
}

export default CreditNotesList
