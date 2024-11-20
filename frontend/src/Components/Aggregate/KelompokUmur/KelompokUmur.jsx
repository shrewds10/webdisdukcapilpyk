import React, { Component } from "react";
import Chart from "react-apexcharts";


class KelompokUmur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartOptions: {
        series: [{
            name: 'Laki-laki',
            data: [5176, 6643, 6889, 6955, 6573, 6077, 5169, 4867, 5468, 5105, 4404, 3449, 2914, 2347, 1412, 1079]
        }, {
            name: 'Perempuan',
            data: [4851, 6035, 6418, 6503, 6304, 5897, 5005, 4985, 5353, 4914, 4235, 3749, 3133, 2586, 1596, 1875]
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
            categories: ['00-04', '05-09', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44','45-49','50-54','55-59','60-64','65-69','70-74','>75'],
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
        <h3>Kelompok Umur</h3>
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

export default KelompokUmur;
