import { navigate, routes } from '@redwoodjs/router'
import { Button, Col, Divider, Pagination, Row, Table } from 'antd'

const DataTable = ({ data, columns, count, currentPage }) => {
  return (
    <>
      <Table
        // title={() => 'Vehicles List'}
        columns={columns}
        dataSource={data}
        rowKey="id"
        onChange={(pagination, filters, sorter) => {
          navigate(
            routes.vehicles({
              page: pagination.current,
              filter: filters,
              sort: sorter,
            })
          )
        }}
        pagination={false}
        footer={() => (
          <Row>
            <Col span={12}>
              <Button
                type="primary"
                onClick={() => navigate(routes.newVehicle())}
                children="Add new ..."
              />
            </Col>
            <Col span={12}>
              <Pagination
                style={{ float: 'right' }}
                total={count}
                pageSize={5}
                showQuickJumper
                hideOnSinglePage
                showSizeChanger={false}
                current={parseInt(currentPage)}
                onChange={(page) => {
                  navigate(routes.vehicles({ page }))
                }}
              />
            </Col>
          </Row>
        )}
      />
      <Divider />
    </>
  )
}

export default DataTable
