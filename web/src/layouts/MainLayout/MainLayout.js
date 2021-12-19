import {
  Accordion,
  Card,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Navbar bg="light">
          <Container fluid>
            <Navbar.Brand as={Link} to={routes.home()}>
              CTC Admin2
            </Navbar.Brand>
            <Nav>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
              <NavLink>LogOut</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </Row>
      <Row style={{ paddingTop: '2rem' }}>
        <Col md="auto" className="d-sm-none d-md-block">
          <Card body>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link>Vehicles</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Credit Notes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Credit Invoices</Nav.Link>
              </Nav.Item>
              <Accordion flush>
                <Accordion.Item eventKey={0}>
                  <Accordion.Header>Expenses</Accordion.Header>
                  <Accordion.Body>
                    <Nav.Item>
                      <Nav.Link>National Expenses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>Interational Expenses</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>Trip Expenses</Nav.Link>
                    </Nav.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Nav.Item>
                <Nav.Link>Companies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Employees</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={routes.settings()}>
                  Settings
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card>
        </Col>
        <Col>
          <Card body>{children}</Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MainLayout

// xs sm, md, lg, xl, xxl
