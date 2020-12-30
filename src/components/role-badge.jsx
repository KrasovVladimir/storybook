import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  button: {
    position: 'relative',
    margin: theme.spacing(0.5),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    transition: '.5s',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: 'fit-content',
  },
}))

const RoleBadge = ({
  role,
}) => {
  const classes = useStyles()

  return (
    <div
      className={classes.button}
      style={{
        color: role.color,
        borderColor: role.color,
      }}
    >
      {role.name}
    </div>
  )
}

RoleBadge.propTypes = {
  role: PropTypes.object.isRequired,
}

export { RoleBadge }
