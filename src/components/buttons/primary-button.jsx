import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const PrimaryButton = ({
  children, 
  size, 
  ...props
}) => {

  return (
    <Button
      variant="contained"
      color="primary"
      {...props}
      size={size}
    >
      { children }
    </Button>
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
}

PrimaryButton.defaultProps = {
  children: undefined,
  size: undefined,
  className: undefined,
}

export { PrimaryButton }