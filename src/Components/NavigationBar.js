import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function NavigationBar() {
  const history = useHistory();
  function logout(){
    localStorage.clear()
    history.push("/register")
  }
  return (
    <div>
      <Navbar bg="primary" variant='dark' expand="lg" fixed="top">
        <Container>
          <Link to={""} className="navbar-brand">KPI-Dashboard</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                localStorage.getItem('user-info') ?
                  <>
                    <Link to={""} className="nav-link active">Dashboard</Link>
                    <Link to={"/addRecord"} className="nav-link active">Add Record</Link>
                    <Link to={"/RecordsList"} className="nav-link active">Records List</Link>
                    <Link to={"/addDataset"} className="nav-link active">Add Dataset</Link>
                    <Link to={"/Approvals"} className="nav-link active">Approvals</Link>
                    <Link onClick={logout} className="nav-link active">Logout</Link>
                  </>
                  :
                  <>
                    <Link to={"/login"} className="nav-link">Login</Link>
                    <Link to={"/register"} className="nav-link">Register</Link>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><br/><br/><br/>
    </div>
  )
}
