import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import makeStyles from '@material-ui/styles/makeStyles'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton, Menu, MenuItem } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  main: {
    position: 'relative',
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
    transition: '.5s',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: 'fit-content',
    height: '2.5rem',
  },
  active: {
    display: 'flex',
    justifyContent: 'space-beetwen',
  },
  menuIconButton: {
    color: theme.palette.colors.blue,
    margin: 0,
    padding: 0,
  },
}))

const RoleBadge = ({
  isActive,
  role,
  onEditRole,
  onDeleteRole,
}) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClickOpenMenu= (event) => {
    setAnchorEl(event.currentTarget)
  };

  const handleMenuItemClick = (event, index) => {
    switch(index) {
      case 0:
        onEditRole(role)
        break
      case 1: 
        onDeleteRole(role)
        break
      default:
        break
    }
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div
    className={classnames(classes.main, isActive ? classes.active : '')}
      style={{
        color: role.color,
        borderColor: role.color,
      }}
    >
      {role.name}
      {isActive && (
        <IconButton
          className={classes.menuIconButton}
          size='small'
          onClick={handleClickOpenMenu}
        >
          <MoreVertIcon />
        
        </IconButton>
      )}
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem
           key={'0'}
           disabled={false}
           onClick={(event) => handleMenuItemClick(event, 0)}
        >
          Edit role
        </MenuItem>
        <MenuItem
          key={'1'}
           disabled={false}
           onClick={(event) => handleMenuItemClick(event, 1)}
         >
          Delete role
         </MenuItem>
      </Menu>
    </div>
  )
}

RoleBadge.propTypes = {
  isActive: PropTypes.bool.isRequired,
  role: PropTypes.object.isRequired,
  onEditRole: PropTypes.func,
  onDeleteRole: PropTypes.func,
}

export { RoleBadge }
