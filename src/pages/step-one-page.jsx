import React from 'react'
import DocumentTitle from 'react-document-title'

import Paper from '@material-ui/core/Paper/index'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography/index'
import { ProgressSteps } from '../components/steps/progress-steps'
import FormControl from '@material-ui/core/FormControl/index'
import TextField from '@material-ui/core/TextField'
import { CommonButton } from '../components/buttons/common-button'


const useStyles = makeStyles(theme => ({
  main: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: theme.palette.background.special,
    textAlign: 'center',
    color: 'white',
    paddingTop: '4rem',
  },
  paper: {
    width: '100%',
    maxWidth: `${theme.spacing(90)}px`,
    marginTop: theme.spacing(8),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(14)}px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
  },
  headline: {
    marginTop: `${theme.spacing(3)}px`,
  },
  organizationName: {
    width: '100%',
    textAlign: 'left',
    marginTop: '3rem',
    marginBottom: '10rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    width: '12rem',
  }
}))

const StepOnePage = () => {
  const classes = useStyles()

  return (
    <DocumentTitle title={'Signup'}>
      <div className={classes.main}>
        <Paper className={classes.paper}>
            <Typography variant="h3" align="center" className={classes.headline}>
                {'1. Step:'}
            </Typography>
            <Typography variant="h4" align="center" >
                {'Create your organization'}
            </Typography>
            <p>In your organization you can manager your team and projects.</p>
            <div className={classes.organizationName}>
                Name of your organization:
                <FormControl margin="normal" fullWidth>
                    <TextField label="Add title" variant="outlined" />
                </FormControl>
                
            </div>
            <ProgressSteps
                maxSteep={4}
                value={1}
            />
            <div className={classes.buttons}>
                <CommonButton
                    secondary={true}
                >
                    Skip
                </CommonButton>
                <CommonButton>
                    Next
                </CommonButton>

            </div>
        </Paper>
      </div>
    </DocumentTitle>
  )
}


export { StepOnePage }