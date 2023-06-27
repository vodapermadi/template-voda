import { Chart } from '@/components/chart'
import BarTemprature from '@/components/chart/BarTemprature'
import DonutTemprature from '@/components/chart/DonutTemprature'
import Layout from '@/components/layouts/Layout'
import { Box, Card, CardContent, Container, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Index = () => {
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
              <Grid item xs={12} lg={6}>
                <BarTemprature/>
              </Grid>
              <Grid item xs={12} lg={6}>
                <DonutTemprature/>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  )
}

export default Index