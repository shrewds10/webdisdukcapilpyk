import React, { Component } from "react";
import Chart from "react-apexcharts";

class Perkawinan extends Component {
  constructor(props) {
    super(props)
    const belumKawin = 72517
    const kawin = 65180
    const ceraiHidup = 3551
    const ceraiMati = 6715
    const total = belumKawin + kawin + ceraiHidup + ceraiMati

    this.state = {
      pieChartOptions: {
        series: [44, 55, 13, 43],
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Belum Kawin', 'Kawin', 'Cerai Hidup', 'Cerai Mati'],
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
      <div className="pieChart">
        <div className="secTitle">
          <h3>Status Perkawinan</h3>
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

export default Perkawinan;
