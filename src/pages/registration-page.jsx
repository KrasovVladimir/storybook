import React, { useState, useCallback } from 'react'
import DocumentTitle from 'react-document-title'

import FormControl from '@material-ui/core/FormControl/index'
import FormHelperText from '@material-ui/core/FormHelperText/index'
import Grid from '@material-ui/core/Grid/index'
import Paper from '@material-ui/core/Paper/index'
import Typography from '@material-ui/core/Typography/index'
import { makeStyles } from '@material-ui/styles'

import { LogoPageHeadline } from '../components/logo-page/logo-page-headline'
import { CommonButton } from '../components/buttons/common-button'
import { NameTextField } from '../components/inputs/name-text-field'
import { PasswordInput } from '../components/inputs/password-input'
import { ValidatedTextField } from '../components/inputs/validated-text-field'


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
    maxWidth: `${theme.spacing(80)}px`,
    marginTop: theme.spacing(8),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  passwordHelperText: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: `${theme.spacing(50)}px`,
  },
}))

const RegistrationPage = () => {
  const classes = useStyles()

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, updatePassword] = useState()
  const [email, setEmail] = useState()
  const [strongPassword, setStrongPassword] = useState(false)

  const emailValidate = useCallback((email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const v = re.test(String(email).toLowerCase());
    if (!v) {
      return 'Incorrect email.'
    }
    if (email === '123@mail.com') {
      return 'Email address is already registered'
    } 
    return null
  }, [email])

  const passwordValidate = useCallback((password) => {
    if (!password || password.length < 8) {
      return 'Password must contain at least 8 characters.'
    }
    if (password !== '12345678') {
      return 'Invalid password'
    } 
    return null
  }, [password])
  
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
  
          <Grid item className={classes.formItem}>
            <ValidatedTextField
              label={'Email addres'}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              value={email}
              onValidate={emailValidate}
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
                onValidate={passwordValidate}
              />
              <FormHelperText
                className={classes.passwordHelperText}
              >
                {'The password must be at least 8 characters long and contain a number.'}
              </FormHelperText>
            </FormControl>
          </Grid>
          <CommonButton
            className={classes.submit}
            type="submit"
            disabled={!strongPassword}
          >
            {'Create account'}
          </CommonButton>
        </Grid>
      </form>
        </div>
      </Paper>
      </div>
  </DocumentTitle>
  )
}


export { RegistrationPage }