import React, {Component} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

import {Doughnut } from "react-chartjs-2";
import { saveAs } from 'file-saver'; 
import { Nav } from 'react-bootstrap'
ChartJS.register(ArcElement, Tooltip, Legend);

class DoughnutTimetaken extends Component{
  saveCanvas(){
    const canvasSave = document.getElementById('pieeee');
    canvasSave.toBlob(function (blob){
      saveAs(blob, "Noof Defects - Piechart.png")
    })
  }
    state = {
        isLoading: true,
        groups: [],
      };
      async componentDidMount() {
        const response = await fetch("http://localhost:8080/api/Records/AllRecords");
        const body = await response.json();
        this.setState({ groups: body, isLoading: false });
      }
      render(){
        const { groups, isLoading } = this.state;
        console.log(groups);
        if (isLoading) {
          return <p>Loading... Please RUN API Server</p>;
        }
        var data = {
            labels: groups?.map((groups) => groups.projectCode),
            datasets: [
              {
                data: groups?.map((groups) => groups.timeTaken),
      
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                borderWidth: 1,
              },
            ],
          };
          var options = {
            maintainAspectRatio: false,
            scales: {},
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          };
          console.log(data);
          return (
            <div>
                <div>
                    <h3 className="App">Time Taken - <strong>Doughnut Chart</strong></h3>
                </div>
                <div>
                <Doughnut id="pieeee" data={data} height={405} options={options} />
                </div>
                <div>
                <Nav.Link className="justify-content-center"><a onClick={this.saveCanvas}>Download as PNG </a></Nav.Link>
                </div>
            </div>
          );
      }
}
export default DoughnutTimetaken;