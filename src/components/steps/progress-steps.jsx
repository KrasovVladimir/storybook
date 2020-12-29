import PropTypes from 'prop-types'
import React from 'react'

import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles((theme) => ({
  main: {
   display: 'flex'
  },
  curentCircle: {
    width: '1.2rem',
    height: '1.2rem',
    margin: '0.2em',
    borderRadius: '50%',
    textAlign: 'center',
    backgroundColor: theme.palette.colors.blue,
    color: theme.palette.colors.white,
  },
  circle: {
    width: '1.2rem',
    height: '1.2rem',
    margin: '0.2em',
    borderRadius: '50%',
    textAlign: 'center',
    backgroundColor: theme.palette.colors.lightGrey,
    color: theme.palette.colors.white,
  },
  curentLine: {
    marginTop: '0.85em',
    height: 1,
    width: '1em', 
    backgroundColor: theme.palette.colors.blue,
  },
  line: {
    marginTop: '0.85em',
    height: 1,
    width: '1em', 
    backgroundColor: theme.palette.colors.lightGrey,
  }
}))

const ProgressSteps = ({ maxSteep, value }) => {
  const classes = useStyles()

  const steps = new Array(maxSteep).fill(0).map((_, i) => {
    return (
      <>
        {i < value ? (
          <>
            <div className={classes.curentCircle}>
              {i+1}
            </div>
            { i < maxSteep-1 ? <div className={classes.curentLine} /> : null}
          </>
        ) : (
          <>
            <div className={classes.circle}>
              {i+1}
            </div>
            { i < maxSteep-1 ? <div className={classes.line} /> : null}
          </>
        ) 
        }
      </>
    )

  })

  return (
    <div className={classes.main}>
      {steps}
    </div>
  )
}

ProgressSteps.propTypes = {
  maxSteep: PropTypes.number,
  value: PropTypes.number,
}

ProgressSteps.defaultProps = {
  maxSteep: 0,
  value: undefined,
}

export { ProgressSteps }
