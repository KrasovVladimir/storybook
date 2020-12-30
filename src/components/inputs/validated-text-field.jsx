import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'

import FormControl from '@material-ui/core/FormControl/index'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon/index'
import InputAdornment from '@material-ui/core/InputAdornment/index'
import CheckCircle from '@material-ui/icons/CheckCircleOutline'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  checkCircle: {
    zIndex: 1,
    color: theme.palette.colors.green,
  },
}))


const ValidatedTextField = ({ label, onChange, value, onValidate }) => {
  const classes = useStyles()

  const [error, setError] = useState(null)
  const [succes, setSucces] = useState(false)

  const validate = useCallback(() => {
    const errorMessage = onValidate(value)
    if (errorMessage) {
      setError(errorMessage)
      setSucces(false)
    } else {
      setError(null)
      setSucces(true)
    }
  }, [value, onValidate, succes, setSucces])

  return (
    <FormControl margin="normal" fullWidth>
      <TextField
        error={!!error}
        helperText={error}
        variant="outlined"
        label={label}
        onChange={onChange}
        onBlur={validate}
        value={value}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={succes && {
          endAdornment: (
            <InputAdornment position="end">
              <Icon
                aria-label="valid"
                className={classes.checkCircle}
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
