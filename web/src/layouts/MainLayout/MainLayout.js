import { Link, navigate, routes, useLocation } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'
import { Button, Card, Layout, Menu, PageHeader, Space, Typography } from 'antd'

const { Sider, Content } = Layout
const { Title, Text } = Typography

const parsePath = (path) => {
  const pathName = path
    .split('/')
    .filter((word) => word.length > 0 && !parseInt(word))
    .map((word, index) => {
      if (index === 0) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
  return pathName
}

const navLinks = [
  { label: 'Vehicles', key: 'vehicles' },
  { label: 'Credit Notes', key: 'creditNotes' },
  {
    label: 'Expenses',
    key: 'expenses',
    children: [
      { label: 'National Expenses', key: 'nationalExpenses' },
      { label: 'International Expenses', key: 'internationalExpenses' },
      { label: 'Trip Expenses', key: 'tripExpenses' },
    ],
  },
  { label: 'Settings', key: 'settings' },
]

const MainLayout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <Layout>
      <Toaster position="lower-right" />
      <PageHeader
        style={{
          height: '64px',
          boxShadow: '4px 0px 8px 4px rgba(0, 0, 0, 0.3)',
        }}
        ghost={false}
        backIcon={false}
        title={<Title level={4}>CTCAdmin2</Title>}
        extra={[
          <Space size="large">
            <Text key={1}>Logged in as user</Text>
            <Text key={2}>Select</Text>
          </Space>,
          <Button key={3} type="text">
            Logout
          </Button>,
        ]}
      />
      <Layout style={{ padding: '24px 0px', height: 'calc(100vh - 64px)' }}>
        <Sider
          width={208}
          style={{ boxShadow: '4px 4px 8px 4px rgba(0, 0, 0, 0.3)' }}
          className="site-layout-background"
          breakpoint="md"
          collapsedWidth={0}
          collapsible
          trigger={null}
        >
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0, paddingTop: '24px' }}
            items={navLinks}
            defaultSelectedKeys={[pathname.split('/')[1]]}
            onSelect={(e) => navigate(routes[e.key]())}
          />
        </Sider>
        <Layout style={{ margin: '0px 40px' }}>
          <Content
            style={{
              margin: 0,
              overflow: 'auto',
              boxShadow: '4px 4px 8px 4px rgba(0, 0, 0, 0.30)',
            }}
          >
            <Card
              title={
                <Title level={4} style={{ textAlign: 'center' }}>
                  {parsePath(pathname)}
                </Title>
              }
              style={{
                height: 'calc(100vh - 64px - 48px)',
              }}
            >
              {children}
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout
