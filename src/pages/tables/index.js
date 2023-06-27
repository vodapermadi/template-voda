import Layout from '@/components/layouts/Layout'
import { Avatar, Box, Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '@/table/DataTable'
import BasicTable from '@/table/BasicTable'

const Index = () => {
    const [dataDataTable, setDataDataTable] = useState([])
    const [dataBasicTable,setBasicTable] = useState([])

    useEffect(() => {
        getDataApi()
    }, [])
    
    useEffect(() => {
        getDataApi2()
    },[])

    const getDataApi = async () => {
        await axios.get('/users').then((res) => {
            setDataDataTable(res.data)
        })
    }

    const getDataApi2 = async() => {
        await axios.get('/products').then((res) => {
            setBasicTable(res.data)
        })
    }

    const col = [
        {
            headerName: "Profile",
            field: "avatar",
            align: "center",
            headerAlign: "center",
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Avatar src={params.row.profileUser} sx={{
                            height: "40px",
                            width: "40px"
                        }} />
                    </>
                )
            }
        },
        {
            headerName: "First Name",
            field: "firstname",
            width: 100,
        },
        {
            headerName: "Last Name",
            field: "lastname",
            width: 100
        },
        {
            headerName: "Email",
            field: "email",
            width: 240,
            headerAlign: "center",
        },
        {
            headerName: "Job Title",
            field: "titleJob",
            width: 250
        }
    ]

    return (
        <>
            <Layout>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 3,
                    }}
                >
                    <Container maxWidth="xl">
                        <Grid container spacing={3} justifyContent="center">
                            <BasicTable Data={dataBasicTable}/>
                            <DataTable data={dataDataTable} col={col}/>
                        </Grid>
                    </Container>
                </Box>
            </Layout>
        </>
    )
}

export default Index