import React from 'react'
import { PrimaryButton, SecondariButton } from '../buttons'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  main: {
    width: '800px',
    height: '728px',
    margin: '143px 450px 89px 450px',
    textAlign: 'center',
    padding: '28px 110px 28px 110px',
  },
  text: {

  },
  skipButton: {

  },
  startedButton: {
    marginLeft: '2rem',
  },
}))

const WelcomePage = () => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <Typography variant="h3">
        Welcome to Allex
      </Typography>

      <div className={classes.text}>
        Hrlp us to create a suitable environment for you. To make sure you can start planning quickly.

        You can skip the process, if you would like to start without an organization and sample data. Please consider that you will then start in an empthy account.

        Set up your Allex in the following 4 steps
      </div>

      <SecondariButton>
        Skip
      </SecondariButton>
      <PrimaryButton className={classes.startedButton}>
        Let`s get started
      </PrimaryButton>
    </div>
  )
}


export { WelcomePage }