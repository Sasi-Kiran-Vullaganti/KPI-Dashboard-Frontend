import React, {  Component } from "react";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { saveAs } from 'file-saver'; 
import { Nav } from 'react-bootstrap'
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, CategoryScale);

class BarChartDefect extends Component{
  saveCanvas(){
    const canvasSave = document.getElementById('barchart');
    canvasSave.toBlob(function (blob){
      saveAs(blob, "No Of Defects - Bar Chart.png")
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
      render() {
        const { groups, isLoading } = this.state;
        console.log(groups);
        if (isLoading) {
          return <p>Loading... Please RUN API Server</p>;
        }
        var data = {
          labels: groups?.map((groups) => groups.projectCode),
          datasets: [
            {
              data: groups?.map((groups) => groups.noOfDefects),
    
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
              <h1>No Of Defects - Bar Chart</h1>
            </div>
            <div>
            <Bar id="barchart" data={data} height={290} options={options} />

            </div>
            <div>
            
            <Nav.Link className="justify-content-center"><a onClick={this.saveCanvas}>Download as PNG </a></Nav.Link>
          </div>
                      </div>
                      
        );
      }
}

export default BarChartDefect;
