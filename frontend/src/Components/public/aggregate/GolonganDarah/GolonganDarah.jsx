import Chart from "react-apexcharts"
import React, { useEffect, useState } from 'react'
import './golongandarah.css'

const GolonganDarah = () => {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
  const [barChartOptions, setPieChartOptions] = useState({
    series: [{
        data: [13015, 8554, 8707, 10583, 26118, 158, 1497, 5426, 453, 13]
      }],
      chart: {
        height: 350,
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
        categories: ['A', 'B', 'AB', 'O', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Tidak Tahu'],
      },
      labels: {
        style: {              
          fontSize: '12px'
        }
      }
  })

//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://192.168.76.25/dkb/api/agregat/penduduk.php/?kode=13.76')
//       if (!response.ok) {
//         throw new Error('Network response was not ok.')
//       }
//       const data = await response.json()

//       if (data && data.length > 0) {
//         const lakiLaki = data[0].L ? parseInt(data[0].L, 10) : 0 
//         const perempuan = data[0].P ? parseInt(data[0].P, 10) : 0 

//         console.log('Jumlah Laki-Laki:', lakiLaki)
//         console.log('Jumlah Perempuan:', perempuan)

//         setPieChartOptions((prevState) => ({
//           ...prevState,
//           series: [lakiLaki, perempuan], 
//         }))
//       }

//       setLoading(false)
//     } catch (error) {
//       setError(error.message)
//       setLoading(false)
//     }
//   }

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }

  return (
    <div className="apexBarChart">
      <div className="secTitle">
        <h3>GolonganDarah</h3>
      </div>
      <div className='barChart'>
        <Chart
          options={barChartOptions}
          series={barChartOptions.series}
          type="bar"
          height={340}
          width={340}
        />
      </div>       
    </div>
  )
}

export default GolonganDarah
