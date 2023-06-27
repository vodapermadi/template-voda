import Layout from '@/components/layouts/Layout'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <>
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
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  )
}

export default Index