import PropTypes from 'prop-types'
import React, { useState, useCallback, useEffect } from 'react'

import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(() => ({
  visibilityIconButton: {
    padding: 0,
  },
}))

const PasswordInput = ({ onChange, value, onValidate,  ...props }) => {
  const classes = useStyles()

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)

  const validate = useCallback(() => {
    const errorMessage = onValidate(value)
    if (errorMessage) {
      setError(errorMessage)
    } else {
      setError(null)
    }
  }, [value, onValidate])

  useEffect(() => {
    if (value !== undefined) {
      validate()
    }
  }, [])

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextField
      error={!!error}
      helperText={error}
      variant="outlined"
      fullWidth
      required
      type={showPassword ? 'text' : 'password'}
      label={'Password'}
      placeholder={'Password'}
      onChange={onChange}
      onBlur={validate}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={toggleShowPassword}
              className={classes.visibilityIconButton}
              size="small"
            >
              {showPassword
                ? <Visibility />
                : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  )
}

PasswordInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onValidate: PropTypes.func,
}

PasswordInput.defaultProps = {
  onChange: () => {},
  value: undefined,
}

export { PasswordInput }
