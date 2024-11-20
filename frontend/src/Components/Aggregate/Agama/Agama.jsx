import React, { Component } from "react";
import Chart from "react-apexcharts";


class Agama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartOptions: {
        series: [{
            name: 'Laki-laki',
            data: [73692,443,338,3,48,0,0]
        }, {
            name: 'Perempuan',
            data: [72663,398,324,3,51,0,0]
        }],
        colors: ['#008FFB', '#FF4560'],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Islam', 'Kristen', 'Khatolik', 'Hindu', 'Budha', 'Konghucu', 'Kepercayaan'],
        },
        yaxis: {
            title: {
            text: ''
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        }
      }
    };
  }

  render() {
    return (
    <div className="barChart">
      <div className="secTitle">
        <h3>Agama</h3>
      </div>
      <div className='barChart'>
        <Chart
          options={this.state.barChartOptions}
          series={this.state.barChartOptions.series}
          type="bar"
          height={340}
          width={340}
          />
      </div>       
    </div>
    );
  }
}

export default Agama;
