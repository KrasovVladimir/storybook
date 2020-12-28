import React, { useState, useEffect } from 'react'
import DocumentTitle from 'react-document-title'

import FormControl from '@material-ui/core/FormControl/index'
import FormHelperText from '@material-ui/core/FormHelperText/index'
import Grid from '@material-ui/core/Grid/index'
import Paper from '@material-ui/core/Paper/index'
import Typography from '@material-ui/core/Typography/index'
import { makeStyles } from '@material-ui/styles'

import { LogoPageHeadline } from '../components/logo-page/logo-page-headline'
import { PrimaryButton } from '../components/buttons/primary-button'
import { NameTextField } from '../components/inputs/name-text-field'
import { PasswordInput } from '../components/inputs/password-input'
import { EmailTextField } from '../components/inputs/email-text-field'


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
    maxWidth: `${theme.spacing(80)}px`,
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
    marginTop: `${theme.spacing(4)}px`,
  },
  verificationForm: {
    marginTop: `${theme.spacing(6)}px`,
  },
  spacer: {
    marginTop: `${theme.spacing(2)}px`,
  },
  submit: {
    width: '100%',
    maxWidth: `${theme.spacing(36)}px`,
    margin: `${theme.spacing(4)}px auto`,
  },
  formItem: {
    width: '100%',
  },
  nameItem: {
    flexGrow: 1,
  },
  passwordHelperText: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: `${theme.spacing(50)}px`,
  },
}))

const RegistrationPage = () => {
  const classes = useStyles()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, updatePassword] = useState('')
  const [email, setEmail] = useState('')
  const [strongPassword, setStrongPassword] = useState(false)

  useEffect(() => {
      setEmail('meltem.tester@gmx-topmail.de')
  }, [])

  return (
    <DocumentTitle title={'Signup'}>
      <div className={classes.main}>
      <LogoPageHeadline>
        {'Welcome to Allex'}
      </LogoPageHeadline>
      <Paper className={classes.paper}>
        <div>
          <Typography
            variant="h3"
            align="center"
            className={classes.headline}
          >
            {'Create your account'}
          </Typography>

          <form
            className={classes.verificationForm}
            onSubmit={() => {}}
          >
        <Grid
          container
          spacing={1}
          direction="column"
          className={classes.spacer}
        >
          <Grid item className={classes.formItem}>
            <Grid
              container
              spacing={1}
            >
              <Grid item className={classes.nameItem}>
                <NameTextField
                  label={'First name'}
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value)
                  }}
                />
              </Grid>

              <Grid item className={classes.nameItem}>
                <NameTextField
                    label={'Last name'}
                    value={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value)
                    }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.formItem}>
            <EmailTextField
              value={email}
            />
          </Grid>

          <Grid item className={classes.formItem}>
            <FormControl margin="normal" fullWidth>
              <PasswordInput
                onChange={(event) => {
                  updatePassword(event.target.value)
                  setStrongPassword(event.target.value ? true : false)
                }}
                value={password}
              />
              <FormHelperText
                className={classes.passwordHelperText}
              >
                {'The password must be at least 8 characters long and contain a number.'}
              </FormHelperText>
            </FormControl>
          </Grid>
          <PrimaryButton
            className={classes.submit}
            type="submit"
            disabled={!strongPassword}
          >
            {'Create account'}
          </PrimaryButton>
        </Grid>
      </form>
        </div>
      </Paper>
      </div>
  </DocumentTitle>
  )
}


export { RegistrationPage }