import { Card, CardContent } from '@mui/material'
import { Chart } from '../chart'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DonutTemprature = () => {
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

    const options = {
      labels:["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
      plotOptions: {
        pie: {
          expandOnClick: true
        }
      }
    };
    return (
        <>
            <Card sx={{
                width: "100%"
            }}>
                <CardContent>
                    <Chart
                        series={newData}
                        options={options}
                        type="donut"
                        width="100%"
                        height={300}
                    />
                </CardContent>
            </Card>
        </>
    )
}

export default DonutTemprature