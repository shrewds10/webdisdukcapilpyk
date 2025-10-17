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
          <div className="title">
            <h1>Jumlah Penduduk</h1>
          </div>
        </div>
        <div className="bottom">
          <div className="featureChart">
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
          <div className="featuredItem">
            <div className="item">
              <div className="itemTitle">Pria</div>
              <div className="itemAmount">72.517</div>
            </div>
            <div className="item">
              <div className="itemTitle">Wanita</div>
              <div className="itemAmount">72.517</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
