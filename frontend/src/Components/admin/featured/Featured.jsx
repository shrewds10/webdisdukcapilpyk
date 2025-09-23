import "./featured.css"
import { MdMoreVert } from "react-icons/md";
import Perkawinan from "../../public/aggregate/Perkawinan/Perkawinan";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Featured extends Component {
  constructor(props) {
    super(props)
    const pria = 72517
    const wanita = 65180
    
    this.state = {
      pieChartOptions: {
        series: [pria, wanita],
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Pira', 'Wanita'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                width: 200
                },
                legend: {
                position: 'bottom'
                }
            }
        }]
        }
    };
  }

  render() {
    return (
      <div className="featured">
        <div className="top">
          <h1 className="title">Jumlah Penduduk</h1>
          <MdMoreVert/>
        </div>
        <div className='donutChart'>
          <Chart
            options={this.state.pieChartOptions}
            series={this.state.pieChartOptions.series}
            type="pie"
            height={340}
            width={340}
          />
        </div>       
      </div>
    );
  }
}

export default Featured;
