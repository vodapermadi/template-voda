import { Box, Button, IconButton, Stack, SvgIcon, Tooltip, useMediaQuery } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const SIDE_NAV_WIDTH = 300
const TOP_NAV_HEIGHT = 64

const TopNav = ({ openNav }) => {
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'))
    return (
        <Box
            component="header"
            sx={{
                backdropFilter: 'blur(6px)',
                position: "sticky",
                top: 0,
                left: {
                    lg: `${SIDE_NAV_WIDTH}px`,
                },
                width: {
                    lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
                },
                zIndex: (theme) => theme.zIndex.appBar
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                px={2}
                sx={{
                    minHeight: `${TOP_NAV_HEIGHT}px`,
                    px: 1
                }}
            >
                <Stack
                    direction="row"
                >
                    {!lgUp && (
                        <Button onClick={openNav} sx={{
                            color: "primary.dark"
                        }}>
                            <SvgIcon>
                                <MenuIcon />
                            </SvgIcon>
                        </Button>
                    )}
                    <Tooltip title="search">
                        <IconButton sx={{
                            color:"rgba(0,0,0,0.6)",
                        }}>
                            <SearchIcon/>
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
        </Box>
    )
}

export default TopNav