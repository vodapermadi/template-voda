import { Card, CardContent } from '@mui/material'
import { Chart } from '../chart'
import { useEffect, useState } from 'react'
import axios from 'axios'

const BarTemprature = () => {
    const [data, setData] = useState([])
    const [newData, setNewData] = useState([])
    useEffect(() => {
      getApi()
    }, [])
  
    useEffect(() => {
      let emptyArray = []
      for (let i = 0; i < data.length; i++) {
        emptyArray.push(data[i].temprature)
      }
      setNewData(emptyArray)
    }, [data])
  
    const getApi = async () => {
      await axios.get('/tempratures').then((res) => {
        setData(res.data)
      })
    }
  
    const series = [
      {
        name: "Temperature in celcius", 
        data: newData
      },
      {
        name: "Temperature in celcius",
        data: [21,45,34,29,43,28,36]
      },
    ];
    const options = {
      chart: {
        id: "chart-tempratures",
      },
      xaxis: {
        categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
      }
    };
    return (
        <>
            <Card sx={{
                width: "100%"
            }}>
                <CardContent>
                    <Chart
                        series={series}
                        options={options}
                        type="bar"
                        width="100%"
                        height={300}
                    />
                </CardContent>
            </Card>
        </>
    )
}

export default BarTemprature