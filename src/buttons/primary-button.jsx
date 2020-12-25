import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#527BFE',
    color: 'white',
    textAlign: 'center',
    borderRadius: '2px',
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    padding: '10px 20px',  
    fontWeight: 600,
    lineHeight: '24px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#7B9AFE',
    },
  },
}))

const PrimaryButton = ({
  children, 
  size, 
  className, 
  ...props
}) => {
  const classes = useStyles()

  return (
    <Button
      {...props}
      size={size}
      className={classnames(classes.main, className)}
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