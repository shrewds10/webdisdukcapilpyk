import Chart from "react-apexcharts"
import React, { useEffect, useState } from 'react'
import './pekerjaan.css'

const Pekerjaan = () => {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
  const [barChartOptions, setPieChartOptions] = useState({
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'Germany'
        ],
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
        <h3>Jumlah Penduduk WNI</h3>
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

export default Pekerjaan
