import { navigate, routes, useLocation } from '@redwoodjs/router'
import { Button, Col, Pagination, Row, Table } from 'antd'
import pluralize from 'pluralize'

const DataTable = ({ data, columns, total, currentPage }) => {
  const { pathname } = useLocation()

  const handleNewPage = () => {
    let path = pathname.split('/')[1].split('-')
    if (path.length === 1) {
      return navigate(
        routes[
          `new${pluralize.singular(
            path[0].charAt(0).toUpperCase() + path[0].slice(1)
          )}`
        ]()
      )
    }
    path = path
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1)
        } else {
          return pluralize.singular(
            word.charAt(0).toUpperCase() + word.slice(1)
          )
        }
      })
      .join('')

    navigate(routes[`new${path}`]())
  }

  return (
    <>
      <Table
        // title={() => 'Vehicles List'}
        columns={columns}
        dataSource={data}
        rowKey="id"
        onChange={(pagination, filters, sorter) => {
          navigate(
            routes[`${pathname.split('/')[1]}`]({
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
                onClick={handleNewPage}
                children="Add new ..."
              />
            </Col>
            <Col span={12}>
              <Pagination
                style={{ float: 'right' }}
                total={total}
                pageSize={parseInt(process.env.POSTS_PER_PAGE)}
                showQuickJumper
                hideOnSinglePage
                showSizeChanger={false}
                current={parseInt(currentPage)}
                onChange={(page) => {
                  navigate(routes[`${pathname.split('/')[1]}`]({ page }))
                }}
              />
            </Col>
          </Row>
        )}
      />
    </>
  )
}

export default DataTable
