import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import React from 'react'

const CardProducts = ({countProduct}) => {
    return (
        <>
            <Card sx={{
                p: 2,
                height: "100%"
            }}>
                <CardContent>
                    <Stack
                        alignItems="center"
                        justifyContent="space-between"
                        direction="row"
                    >
                        <Avatar sx={{
                            width: 50,
                            height: 50,
                            backgroundColor: "black"
                        }}>
                            <SvgIcon>
                                <ProductionQuantityLimitsIcon />
                            </SvgIcon>
                        </Avatar>
                        <Stack
                            component="span"
                            alignItems="end"
                            justifyContent="right"
                            sx={{
                                textAlign: "right",
                            }}
                        >
                            <Typography variant='h6' sx={{
                                fontWeight: "500"
                            }}>
                                Products
                            </Typography>
                            <Typography sx={{
                                fontWeight: "300"
                            }}>
                                {countProduct}
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}

export default CardProducts