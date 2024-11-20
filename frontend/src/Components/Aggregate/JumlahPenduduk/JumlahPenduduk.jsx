import Chart from "react-apexcharts"
import React, { useEffect, useState } from 'react'
import './jumlahpenduduk.css'

const JumlahPenduduk = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pieChartOptions, setPieChartOptions] = useState({
    series: [0, 0], 
    chart: {
      width: 380,
      type: 'pie',
    },
    colors: ['#008FFB', '#FF4560'],
    labels: ['Laki - laki', 'Perempuan'],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex]
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        },
      },
    }],
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.76.25/dkb/api/agregat/penduduk.php/?kode=13.76')
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      const data = await response.json()

      if (data && data.length > 0) {
        const lakiLaki = data[0].L ? parseInt(data[0].L, 10) : 0 
        const perempuan = data[0].P ? parseInt(data[0].P, 10) : 0 

        console.log('Jumlah Laki-Laki:', lakiLaki)
        console.log('Jumlah Perempuan:', perempuan)

        setPieChartOptions((prevState) => ({
          ...prevState,
          series: [lakiLaki, perempuan], 
        }))
      }

      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="pieChart">
      <div className="secTitle">
        <h3>Jumlah Penduduk WNI</h3>
      </div>
      <div className='donutChart'>
        <Chart
          options={pieChartOptions}
          series={pieChartOptions.series}
          type="pie"
          height={340}
          width={340}
        />
      </div>       
    </div>
  )
}

export default JumlahPenduduk
