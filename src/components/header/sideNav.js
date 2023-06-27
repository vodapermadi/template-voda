import { Box, Button, Drawer, Stack, SvgIcon, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import SideNavItem from './sideNavItem'
import { usePathname } from 'next/navigation'
import { itemLink } from '@/collectionArray/itemLink';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

const SideNav = ({props,open,closeNav}) => {
    const pathname = usePathname()
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'))
    return lgUp ? (
        <React.Fragment>
            <Drawer sx={{
                width: "300px"
            }}
                variant='permanent'
                anchor='left'
            >
                <Box sx={{
                    width: "300px",
                    height: "100vh",
                    backgroundColor: 'info.dark'
                }}
                    variant='permanent'
                    anchor='left'
                >
                    {/*  */}
                    <Box sx={{
                        padding: "15px"
                    }}>
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <Typography sx={{
                                fontSize: '24px',
                                fontWeight: "500",
                                textAlign: "left",
                                color: "#e2e8f0",
                                fontFamily: 'Bagel Fat One ,cursive',
                                transitionDuration: "0.2s",
                                "&:hover": {
                                    color: "#cbd5e1",
                                    transitionDuration: "0.2s"
                                }
                            }}>
                                Voda Permadi
                            </Typography>
                        </Link>
                    </Box>
                    {/*  */}
                    <Box component="nav" sx={{
                        px: 2,
                        py: 3
                    }}>
                        <Stack component="ul" spacing={0.8} sx={{
                            listStyle: 'none',
                            p: 0,
                            m: 0
                        }}>
                            {itemLink.map((row, index) => {
                                const active = row.path === pathname ? true : false
                                return (
                                    <React.Fragment key={index}>
                                        <SideNavItem
                                            path={row.path}
                                            active={active}
                                            icon={row.icon}
                                            title={row.title}
                                        />
                                    </React.Fragment>
                                )
                            })}
                        </Stack>
                    </Box>
                </Box>
            </Drawer>
        </React.Fragment>
    ) : (
        <>
            <Drawer sx={{
                width: "300px"
            }}
                variant='temporary'
                anchor='left'
                open={open}
            >
                <Box sx={{
                    width: "300px",
                    height: "100vh",
                    backgroundColor: 'info.dark'
                }}
                    variant='permanent'
                    anchor='left'
                >
                    {/*  */}
                    <Box sx={{
                        padding: "15px",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <Typography sx={{
                                fontSize: '24px',
                                fontWeight: "500",
                                textAlign: "left",
                                color: "#e2e8f0",
                                fontFamily: 'Bagel Fat One ,cursive',
                                transitionDuration: "0.2s",
                                "&:hover": {
                                    color: "#cbd5e1",
                                    transitionDuration: "0.2s"
                                }
                            }}>
                                Voda Permadi
                            </Typography>
                        </Link>
                        <Button onClick={closeNav} sx={{
                            color: "#e2e8f0"
                        }}>
                            <SvgIcon>
                                <ArrowBackIosNewSharpIcon />
                            </SvgIcon>
                        </Button>
                    </Box>
                    {/*  */}
                    <Box component="nav" sx={{
                        px: 2,
                        py: 3
                    }}>
                        <Stack component="ul" spacing={0.8} sx={{
                            listStyle: 'none',
                            p: 0,
                            m: 0
                        }}>
                            {itemLink.map((row, index) => {
                                const active = row.path === pathname ? true : false
                                return (
                                    <React.Fragment key={index}>
                                        <SideNavItem
                                            path={row.path}
                                            active={active}
                                            icon={row.icon}
                                            title={row.title}
                                        />
                                    </React.Fragment>
                                )
                            })}
                        </Stack>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default SideNav
