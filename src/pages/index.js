import CardProducts from "@/components/card/CardProducts";
import CardUsers from "@/components/card/CardUsers";
import Layout from "@/components/layouts/Layout";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const isBrowser = () => typeof window !== 'undefined';

const Home = () => {
  const [dataApi, setDataApi] = useState([])
  const [dataApi2, setDataApi2] = useState([])

  useEffect(() => {
      getApi();
      getApi2()
  }, [])

  const getApi = async () => {
    await axios.get('/users').then((res) => {
      setDataApi(res.data)
    })
  }
  const getApi2 = async () => {
    await axios.get('/products').then((res) => {
      setDataApi2(res.data)
    })
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 6,
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={3}>
                <CardUsers countUsers={dataApi.length} />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <CardUsers countUsers={dataApi.length} />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <CardUsers countUsers={dataApi.length} />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <CardProducts countProduct={dataApi2.length} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  )

}

export default Home