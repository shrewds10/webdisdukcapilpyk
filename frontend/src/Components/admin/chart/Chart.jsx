import "./chart.css"
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
      super(props);
      this.state = {
        barChartOptions: {
          series: [{
            data: [2986, 2377, 1384, 1313, 864]
          }],
            chart: {
            height: 450,
            weight: 800,
            type: 'bar',
            events: {
              click: function(chart, w, e) {
              }
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: [
              ['Payakumbuh', 'Barat'],
              ['Payakumbuh', 'Utara'],
              ['Payakumbuh', 'Timur'],
              ['Payakumbuh', 'Selatan'],
              ['Lamposi', 'Tigo Nagari'],
            ],
            labels: {
              style: {              
                fontSize: '12px'
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
            <h1>Kepadatan Penduduk</h1>
          </div>
          <div className='barChart'>
            <Chart
              options={this.state.barChartOptions}
              series={this.state.barChartOptions.series}
              type="bar"
              height={340}
              width={640}
            />
          </div>
        </div>  
      );
    }
  }

export default Charts