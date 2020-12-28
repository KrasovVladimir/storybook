import PropTypes from 'prop-types'
import React from 'react'

import FormControl from '@material-ui/core/FormControl/index'
import TextField from '@material-ui/core/TextField'

const NameTextField = ({ onChange, value, label }) => {


  return (
    <FormControl margin="normal" fullWidth>
      <TextField
        variant="outlined"
        label={label}
        value={value}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
  </FormControl>
  )
}

NameTextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}

NameTextField.defaultProps = {
  onChange: () => {},
  value: undefined,
}

export { NameTextField }
