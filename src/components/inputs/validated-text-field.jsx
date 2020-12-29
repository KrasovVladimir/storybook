import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

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


const ValidatedTextField = ({ value, validated }) => {
  const classes = useStyles()

  return (
    <FormControl margin="normal" fullWidth>
      <TextField
        variant="outlined"
        label={'Email address'}
        value={value}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={validated && {
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
}

ValidatedTextField.defaultProps = {
  onChange: () => {},
  value: undefined,
}

export { ValidatedTextField }
