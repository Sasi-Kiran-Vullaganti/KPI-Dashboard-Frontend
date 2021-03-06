import React, { useState, useEffect } from 'react'
import { Container, Table, Row, Col, Badge,  Button } from 'react-bootstrap'
import NavigationBar from './NavigationBar'

export default function Approvals() {

  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://localhost:8080/api/Members/AllMembers");
    result = await result.json();
    setData(result)

  },[])
  console.log("result", data);
  return (
    <div>
      <NavigationBar /><br />
      <Container>
        <div>
          <Row>
            
              <Col className='col-md-3 col-6 shadow p-3 mb-5 bg-info rounded' style={{color:"white"}}>
                <center>
                <h3>Total Requests</h3>
                <h2>{data.length}</h2>
                </center>
              </Col>
              <Col className='col-md-3 col-6 shadow p-3 mb-5 bg-success rounded' style={{color:"white"}}>
                <center>
                <h3>Total Accepted</h3>
                <h2>20</h2>
                </center>
              </Col>
              <Col className='col-md-3 col-6 shadow p-3 mb-5 bg-danger rounded' style={{color:"white"}}>
                <center>
                <h3>Total Rejected</h3>
                <h2>20</h2>
                </center>
              </Col>
              <Col className='col-md-3 col-6 shadow p-3 mb-5 bg-secondary rounded' style={{color:"white"}}>
                <center>
                <h3>Total Pending</h3>
                <h2>20</h2>
                </center>
              </Col>
            
          </Row>
          <Row>
            <Col className='shadow p-3 mb-5 bg-white rounded m-2'>
              <h3>Approvals</h3>
              <p>
                <ul>
                  <li><Badge bg="secondary">Pending</Badge> - waiting for super admin approval</li>
                  <li><Badge bg="success">Accepted</Badge> - Had access to the portal</li>
                  <li><Badge bg="danger">Rejected</Badge> - Admin rejected the request for the portal</li>
                </ul>
              </p>
            </Col>
            <Col className='shadow p-3 mb-5 bg-white rounded m-2'>
              <h4>Options</h4>
              <ul>
                <li><Badge bg="success">Accept</Badge> - Make status of user as Accepted</li>
                <li><Badge bg="warning">Reject</Badge> - Remove access of the user</li>
                <li><Badge bg="danger">Delete</Badge> - Permanently remove user from db</li>
              </ul>
            </Col>
          </Row>
          
          <div className='shadow-lg p-3 mb-5 bg-white rounded m-2 p-2'>
          <center><h3 className='m-3'>Complete Requested Members</h3></center>
          <Table responsive="lg" >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Status</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((i) =>
                  <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.status}</td>
                    <td>
                      <Button variant="success">Approve</Button> &nbsp;&nbsp;
                      <Button variant="warning">Reject</Button>
                    </td>
                    <td><Button variant="outline-danger">Delete</Button></td>
                  </tr>
                )
              }
            </tbody>
          </Table>
          </div>
        </div>
      </Container>
    </div>
  )
}
