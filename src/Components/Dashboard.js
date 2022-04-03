import React, { Component } from 'react'
import DoughnutChart from './Charts/DoughnutChart'
import DoughnutTimetaken from './Charts/DoughnutTimetaken'
import { Container, Row, Col } from 'react-bootstrap'
import LineChart from './Charts/LineChart'
import BarChartDefect from './Charts/BarChartDefects'
import { saveAs } from 'file-saver';
import PieChart from './Charts/PieChart'
import LineChartTT from './Charts/LineChartTT'
import NavigationBar from './NavigationBar'

export default class Dashboard extends Component {
  saveCanvas(){
    const canvasSave = document.getElementById();
    canvasSave.toBlob(function (blob){
      saveAs(blob, "testing.png")
    })
  }
  render() {
    return (
      <div>
        <NavigationBar/>
        <Container>
        <div>
          <div>
            
            <LineChart/>
            <BarChartDefect/>
          </div>
          <Container>
            <Row>
              <Col md={6}>
              <DoughnutChart/>
              </Col>
              <Col md={6}>
              
              <LineChartTT/>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <PieChart/>
              </Col>
              <Col md={6}>
              <DoughnutTimetaken/>
              </Col>
            </Row>
          </Container>
          
          
          
        </div>
        </Container>
      </div>
      
    )
  }
}
