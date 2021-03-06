import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'


import { themeConfig } from './theme-config'

const theme = createMuiTheme(themeConfig)

const ThemeProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    { children }
  </ThemeProvider> 
)

export { ThemeProviders }
