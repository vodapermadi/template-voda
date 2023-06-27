import { Box, ButtonBase, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const SideNavItem = (props) => {
    const { active = false, icon, path, title } = props
    return (
        <li>
            <ButtonBase component={Link} href={path} sx={{
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "5px",
                width: "100%",
                display: "flex",
                justifyContent: "left",
                py: 1,
                color: "white",
                transitionDuration: "0.2s",
                "&:hover": {
                    transitionDuration: "0.2s",
                    backgroundColor: "rgba(0,0,0,0.2)"
                },
                ...(active && {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)'
                }),
            }}>
                <Box component="span" sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    paddingX: "10px",
                    gap: "10px",
                }}>
                    <Box
                    component="span"
                    sx={{
                        color:"rgba(255,255,255,0.9)"
                    }}>
                    {icon}
                    </Box>
                    <Typography sx={{
                        fontSize:"15px",
                        color:"rgba(255,255,255,0.8)"
                    }}>
                        {title}
                    </Typography>
                </Box>
            </ButtonBase>
        </li>
    )
}

export default SideNavItem