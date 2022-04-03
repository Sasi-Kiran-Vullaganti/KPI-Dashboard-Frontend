import React, { Component } from 'react'
import { Card,Form,Button,Row,Col,Container} from 'react-bootstrap'
import NavigationBar from './NavigationBar'

import axios from 'axios';


export default class AddRecord extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.recordChange = this.recordChange.bind(this);
        this.submitRecord = this.submitRecord.bind(this);
        this.state.show = false;
    }

    initialState = {projectCode:"",y21ProjectName:"",teamName:"",groupName:"",partName:"",plmkpi1:"",noOfDefects:"",timeTaken:"",sqa:""};

    submitRecord(event){
        event.preventDefault();

        const record = {
            projectCode : this.state.projectCode,
            y21ProjectName : this.state.y21ProjectName,
            teamName : this.state.teamName,
            groupName : this.state.groupName,
            partName : this.state.partName,
            plmkpi1 : this.state.plmkpi1,
            noOfDefects : this.state.noOfDefects,
            timeTaken : this.state.timeTaken,
            sqa : this.state.sqa
        };

        axios.post("http://localhost:8080/api/Records/addRecords",this.state
        
        )
        .then(response => {
            if (response.data!=null){
                console.log(record);
                this.setState(this.initialState);
                alert("Record Added Successfully");
                window.location.reload(false);
            }
        })
        

    }

    

    resetRecord= ()=>{
        this.setState(()=>this.initialState);
    }

    recordChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

  render(){
      const {projectCode,y21ProjectName,teamName,groupName,partName,plmkpi1,noOfDefects,timeTaken,sqa} =this.state;
      
    return (
        <div>
          <NavigationBar/><br/>
          <Container>
          <Card className="shadow-lg p-4 mb-5 bg-white rounded">
            <Card.Header> <center><h3>Add New Record</h3></center> </Card.Header>
            <Form onReset={this.resetRecord} onSubmit={this.submitRecord} id="recordid">
            <Card.Body>
              <Row>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f1">
                  <Form.Label>Project Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Project Code" 
                  name="projectCode" defaultValue={projectCode} onChange={this.recordChange} required autoComplete='off'
                   />
                </Form.Group>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f2">
                  <Form.Label>Y21 Project Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Y21 Project Name" 
                  name="y21ProjectName" defaultValue={y21ProjectName} onChange={this.recordChange} required autoComplete='off'
                  />
                </Form.Group>
                </Row>
                <Row>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f3">
                  <Form.Label>Team Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Team Name" 
                  name="teamName" defaultValue={teamName} onChange={this.recordChange} required autoComplete='off'
                  />
                </Form.Group>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f4">
                  <Form.Label>Group Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Group Name" 
                  name="groupName" defaultValue={groupName} onChange={this.recordChange} required autoComplete='off'
                  />
                </Form.Group>
                </Row>
                <Row>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f5">
                  <Form.Label>Part Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Part Name" 
                  name="partName" defaultValue={partName} onChange={this.recordChange} required autoComplete='off'
                  />
                </Form.Group>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f6">
                  <Form.Label>PLM KPI1</Form.Label>
                  <Form.Control type="number" placeholder="Enter PLM KPI1" 
                  name="plmkpi1" defaultValue={plmkpi1} onChange={this.recordChange} required autoComplete='off'
                  />
                </Form.Group>
                </Row>
                <Row>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f7">
                  <Form.Label>No of defects</Form.Label>
                  <Form.Control type="number" placeholder="Enter No of defects" 
                  name="noOfDefects" defaultValue={noOfDefects} onChange={this.recordChange} required autoComplete='off'
                  />
                </Form.Group>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f8">
                  <Form.Label>Time Taken</Form.Label>
                  <Form.Control type="number" placeholder="Enter Time Taken" 
                  name="timeTaken" defaultValue={timeTaken} onChange={this.recordChange} required autoComplete='off'
                  />
                </Form.Group>
                </Row>
                <Form.Group className="mb-3 Col-md-6" as={Col} controlId="f9">
                  <Form.Label>SQA</Form.Label>
                  <Form.Control type="text" placeholder="Enter SQA" 
                  name="sqa" defaultValue={sqa}  onChange={this.recordChange} required autoComplete='off'
                  />
                </Form.Group>
            </Card.Body>
            <Card.Footer style={{"textAlign":"right"}}>
                <Button variant="success" type="submit"  >
                    Add Record
                </Button>&nbsp;&nbsp;
                <Button variant="info" type="reset"  >
                    Reset
                </Button>
            </Card.Footer>
            </Form>
          </Card>
          </Container>
      </div>
        
      )
  }
}
