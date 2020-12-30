import React, { useState } from 'react'
import DocumentTitle from 'react-document-title'

import Paper from '@material-ui/core/Paper/index'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography/index'
import { ProgressSteps } from '../components/steps/progress-steps'
import FormControl from '@material-ui/core/FormControl/index'
import TextField from '@material-ui/core/TextField'
import { CommonButton } from '../components/buttons/common-button'
import { RoleBadge } from '../components/role-badge'
import AddIcon from '@material-ui/icons/Add'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IconButton } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  main: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: theme.palette.background.special,
    textAlign: 'center',
    color: 'white',
    paddingTop: '4rem',
  },
  paper: {
    width: '100%',
    maxWidth: `${theme.spacing(90)}px`,
    marginTop: theme.spacing(8),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(14)}px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
  },
  headline: {
    marginTop: `${theme.spacing(3)}px`,
  },
  organizationName: {
    width: '100%',
    textAlign: 'left',
    marginTop: '3rem',
    marginBottom: '10rem',
  },
  roles: {
    display: 'flex',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    width: '12rem',
  },
  addButton: {
    color: theme.palette.colors.blue,
  },
}))

const StepFourPage = () => {
  const classes = useStyles()

  const [roleName, setRoleName] = useState('')
  const [roles, setRoles] = useState([])

  const addRole = () => {
    if (roleName !== '' && !roles.find(r => r.name === roleName)) {
      setRoles([
        ...roles,
        {
          name: roleName,
          color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        }
      ])
      setRoleName('')
    }
  }

  const editRole = (role) => {
    
  }

  const deleteRole = (role) => {
    setRoles(roles.filter(r => r.name !== role.name))
  }

  const roleList = roles.map((role, index) => (
    <RoleBadge 
      role={role}
      isActive={index === roles.length-1 ? true : false}
      onEditRole={editRole}
      onDeleteRole={deleteRole}
    />
  ))

  return (
    <DocumentTitle title={'Signup'}>
      <div className={classes.main}>
        <Paper className={classes.paper}>
            <Typography variant="h3" align="center" className={classes.headline}>
                {'4. Step:'}
            </Typography>
            <Typography variant="h4" align="center" >
                {'Select your roles'}
            </Typography>
            <p>In a mechanical engineering project, for example, the technical specification of 
              plant requires the involvement of Engineering. Project Management is required to oversee the project.
              Often the roles are also organized within a team or departament.</p>
            <div className={classes.organizationName}>
                Add roles to your organization:
                <FormControl margin="normal" fullWidth>
                    <TextField 
                      variant="outlined"
                      value={roleName}
                      onChange={(event) => {
                        setRoleName(event.target.value)
                      }}
                      InputProps={{
                        startAdornment: (
                          <IconButton
                            onClick={addRole}
                          >
                            <AddIcon className={classes.addButton}/>
                          </IconButton>
                        ),
                        endAdornment: (
                            <KeyboardArrowDownIcon/>
                        ),
                      }}
                    />
                </FormControl>
                <div className={classes.roles}>
                {roleList}
                </div>
                
            </div>
            <ProgressSteps
                maxSteep={4}
                value={4}
            />
            <div className={classes.buttons}>
                <CommonButton
                    secondary={true}
                >
                    Skip
                </CommonButton>
                <CommonButton>
                    Next
                </CommonButton>

            </div>
        </Paper>
      </div>
    </DocumentTitle>
  )
}


export { StepFourPage }