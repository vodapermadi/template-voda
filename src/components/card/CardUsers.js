import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import React from 'react'

const CardUsers = ({ countUsers }) => {
  return (
    <>
      <Card sx={{
        p: 2,
        height:"100%"
      }}>
        <CardContent>
          <Stack 
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          >
            <Avatar sx={{ 
              width: 50,
              height:50,
              backgroundColor:"#e28222"
            }}>
              <SvgIcon>
                <PeopleAltIcon />
              </SvgIcon>
            </Avatar>
            <Stack
              component="span"
              alignItems="end"
              justifyContent="right"
              sx={{
                textAlign:"right",
              }}
            >
              <Typography variant='h6' sx={{
                fontWeight:"500"
              }}>
                Users
              </Typography>
              <Typography sx={{
                fontWeight:"300"
              }}>
                {countUsers}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default CardUsers