import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const CommonButton = ({
  children,
  secondary,
  size, 
  ...props
}) => {

  return (
    <Button
      variant={secondary ? "outlined" : "contained"}
      color={secondary ? "secondary" : "primary"}
      {...props}
      size={size}
    >
      { children }
    </Button>
  )
}

CommonButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
}

CommonButton.defaultProps = {
  children: undefined,
  secondary: false,
  size: undefined,
  className: undefined,
}

export { CommonButton }