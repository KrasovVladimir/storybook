import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  main: {
  background: '#FFFFFF',
  border: '1px solid #D1D2E3',
  boxSizing: 'border-box',

  textTransform: 'none',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '24px',
  textAlign: 'center',
  color: '#5F6887',
  padding: '10px 20px', 
  margin: '10px 0px',
    '&:hover': {
      backgroundColor: '#D1D2E3',
    },
  },
}))

const SecondariButton = ({
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

SecondariButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
}

SecondariButton.defaultProps = {
  children: undefined,
  size: undefined,
  className: undefined,
}

export { SecondariButton }