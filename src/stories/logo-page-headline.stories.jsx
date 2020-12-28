
import React from 'react'

import { ThemeProviders }  from  '../theme/theme-providers'
import { LogoPageHeadline } from '../components/logo-page/logo-page-headline'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  main: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(128.69deg, #5352B2 3.56%, #4983BD 122.69%, #4983BD 122.69%)',
    textAlign: 'center',
    color: 'white',
    paddingTop: '4rem',
  },
}))



export default {
  title: 'Example/LogoPageHeadline',
  component: LogoPageHeadline,
}

const Template = () => {
  const classes = useStyles()

  return (
    <ThemeProviders>
      <div className={classes.main}>
      <LogoPageHeadline
        children={'Welcome to Allex'}
      />
      </div>
    </ThemeProviders>
  )
}

export const logoPageHeadline = Template.bind({})