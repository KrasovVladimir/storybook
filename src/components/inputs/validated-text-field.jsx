import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'

import FormControl from '@material-ui/core/FormControl/index'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon/index'
import InputAdornment from '@material-ui/core/InputAdornment/index'
import CheckCircle from '@material-ui/icons/CheckCircleOutline'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  emailCheckCircle: {
    zIndex: 1,
    color: theme.palette.colors.green,
  },
}))


const ValidatedTextField = ({ onChange, value, onValidate }) => {
  const classes = useStyles()

  const [error, setError] = useState(null)
  const [succes, setSucces] = useState(false)

  const validateEmail = useCallback(() => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const v = re.test(String(value).toLowerCase());
    if (!v) {
      setError('Incorrect email.')
      setSucces(false)
      return
    } else {
      setError(null)
      setSucces(true)
    }
    const errorMessage = onValidate(value)
    if (errorMessage) {
      setError(errorMessage)
      setSucces(false)
    } 
  }, [value, setError, onValidate])

  return (
    <FormControl margin="normal" fullWidth>
      <TextField
        error={!!error}
        helperText={error}
        variant="outlined"
        label={'Email address'}
        onChange={onChange}
        onBlur={validateEmail}
        value={value}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={succes && {
          endAdornment: (
            <InputAdornment position="end">
              <Icon
                aria-label="Email address valid"
                className={classes.emailCheckCircle}
              >
                <CheckCircle />
              </Icon>
            </InputAdornment>
          ),
        }}
      />
  </FormControl>
  )
}

ValidatedTextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onValidate: PropTypes.func,
}

ValidatedTextField.defaultProps = {
  onChange: () => {},
  value: undefined,
}

export { ValidatedTextField }
