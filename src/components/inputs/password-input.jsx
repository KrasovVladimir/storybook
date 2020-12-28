import PropTypes from 'prop-types'
import React, { useState } from 'react'

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

const PasswordInput = ({ onChange, value }) => {
  const classes = useStyles()

  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextField
      variant="outlined"
      fullWidth
      required
      type={showPassword ? 'text' : 'password'}
      label={'Password'}
      placeholder={'Password'}
      onChange={onChange}
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
    />
  )
}

PasswordInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

PasswordInput.defaultProps = {
  onChange: () => {},
  value: undefined,
}

export { PasswordInput }
