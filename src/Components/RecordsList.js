import React, { Component } from 'react'
import { Card,Table ,Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { Row,Col } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import NavigationBar from './NavigationBar';


export default class RecordsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            records : []
        };

        this.csvLinkEl = React.createRef();

        
    }

    componentDidMount(){
        this.findAllRecords();
    }

    deleteRecord = (rid) =>{
      axios.delete("http://localhost:8080/api/Records/DeleteRecords/"+rid)
      .then(response =>{
          if(response.data!=null){
              alert("Book deleted successfully")
              // window.location.reload(false);
              this.setState({
                records: this.state.records.filter(record => record.id !== rid)
              })
          }
      })
  }

    findAllRecords(){
        axios.get("http://localhost:8080/api/Records/AllRecords")
        .then(response => response.data)
        .then((data)=>{
            this.setState({records:data});
        });
    }

    // downloadReport= async ()=>{
    //   // const data = await this.getAllRecords();
    //   // console.log(data)
    //   console.log(this.state.records)
    // }
    
    

  render() {
    return (
      <>
      <NavigationBar/><br/>
      <Container>
      <Card className="shadow-lg p-4 mb-5 bg-white rounded">
        <Card.Header>
          <Row>
            <Col>
            <h4>Records List</h4>
            </Col>
            <Col align="right">
           <Button className="ms-auto" variant="info"  >
             <CSVLink 
              headers={this.CSVLink}
              data = {this.state.records}
              filename = "Report.csv"
             />Download as CSV ▼
             </Button>
           </Col>
          </Row>
           
          
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project Code</th>
              <th>Y21 Project Name</th>
              <th>Team Name</th>
              <th>Group Name</th>
              <th>Part Name</th>
              <th>SQA</th>
              <th>PLM KPI1</th>
              <th>No of defects</th>
              <th>Time Taken</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.length === 0 ?
            <tr align="center">
              <td colSpan="12">No Members Avaliable.</td>
            </tr> :
            this.state.records.map((record)=>(
                <tr key={record.id}>
                    <td>{record.projectCode}</td>
                    <td>{record.y21ProjectName}</td>
                    <td>{record.teamName}</td>
                    <td>{record.groupName}</td>
                    <td>{record.partName}</td>
                    <td>{record.sqa}</td>
                    <td>{record.plmkpi1}</td>
                    <td>{record.noOfDefects}</td>
                    <td>{record.timeTaken}</td>
                    <td>
                        <Button onClick={this.deleteRecord.bind(this,record.id)} variant="danger">Delete</Button>{' '}
                    </td>
                </tr>
            ))
            }
          </tbody>
        </Table>
        </Card.Body>
      </Card>
      </Container>
      </>
    )
  }
}
