import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import axios from 'axios'

axios.defaults.baseURL = 'https://example-cms-mocha.vercel.app/api'
export default function App({ Component, pageProps }) {
  const theme = createTheme({
    breakpoints:{
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1114,
        xl: 1440
      }
    }
  })
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
  <Component {...pageProps} />
  </ThemeProvider>
}
