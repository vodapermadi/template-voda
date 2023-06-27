import React, { useCallback, useEffect, useState } from 'react'
import TopNav from '../header/topNav'
import SideNav from '../header/sideNav'
import { Box, styled } from '@mui/material';
import { usePathname } from 'next/navigation';

const SIDE_NAV_WIDTH = 300

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

const Layout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false)
  const pathname = usePathname()
  const handlePathNameChange = useCallback(
    () => {
      if(openNav){
        setOpenNav(false)
      }
    },
    [openNav]
  )

  useEffect(() => {
    handlePathNameChange()
  },[pathname])

  return (
    <>
      <TopNav openNav={() => setOpenNav(true)} />
      <SideNav closeNav={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
    </>
  )
}

export default Layout