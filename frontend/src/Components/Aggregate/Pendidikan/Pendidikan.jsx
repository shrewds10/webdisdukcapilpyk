import Chart from "react-apexcharts"
import React, { useEffect, useState } from 'react'
import './pendidikan.css'

const Pendidikan = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [barChartOptions, setBarChartOptions] = useState({
    series: [{
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
        enabled: true,
        formatter: function (val, opts) {
          return 
        },
      },
      xaxis: {
        categories: [
            'Tidak/Blm Sekolah', 'Belum Tamat SD/sederajat', 'Tamat SD/sederajat', 'SLTP/sederajat', 
            'SLTA/sederajat', 'Diploma I dan II', 'Akademi/Diploma III/Sarjana Muda','Diploma IV/Strata I',
            'StrataII','Strata III'
        ],
      }
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.76.25/dkb/api/agregat/pendidikan.php/?kode=13.76')
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      const data = await response.json()

      if (data && data.length > 0) {
        const tidakBelumSekolah = data[0][`TIDAK_BELUM_SEKOLAH`] ? parseInt(data[0][`TIDAK_BELUM_SEKOLAH`], 10) : 0 
        const belumTamatSD = data[0][`BELUM_TAMAT_SD_SEDERAJAT`] ? parseInt(data[0][`BELUM_TAMAT_SD_SEDERAJAT`], 10) : 0 
        const tamatSD = data[0][`TAMAT_SD_SEDERAJAT`] ? parseInt(data[0][`TAMAT_SD_SEDERAJAT`], 10) : 0 
        const sltp = data[0][`SLTP_SEDERAJAT`] ? parseInt(data[0][`SLTP_SEDERAJAT`], 10) : 0 
        const slta = data[0][`SLTA_SEDERAJAT`] ? parseInt(data[0][`SLTA_SEDERAJAT`], 10) : 0 
        const diploma = data[0][`DIMPLOMA_I_II`] ? parseInt(data[0][`DIMPLOMA_I_II`], 10) : 0 
        const akademi = data[0][`AKADEMI_DIPLOMA_III_S_MUDA`] ? parseInt(data[0][`AKADEMI_DIPLOMA_III_S_MUDA`], 10) : 0 
        const diplomaIV = data[0][`DIPLOMA_IV_STRATA_I`] ? parseInt(data[0][`DIPLOMA_IV_STRATA_I`], 10) : 0 
        const strataII = data[0][`STRATA_II`] ? parseInt(data[0][`STRATA_II`], 10) : 0 
        const strataIII = data[0][`STRATA_III`] ? parseInt(data[0][`STRATA_III`], 10) : 0 

        setBarChartOptions((prevState) => ({
          ...prevState,
          series: [{
            data: [tidakBelumSekolah, belumTamatSD, tamatSD, sltp, slta, diploma, akademi, diplomaIV, strataII, strataIII], 
          }]
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
    <div className="apexBarChart">
      <div className="secTitle">
        <h3>Pendidikan</h3>
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

export default Pendidikan
