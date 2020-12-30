import React, { useState } from "react";
import DocumentTitle from "react-document-title";

import Paper from "@material-ui/core/Paper/index";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography/index";
import { ProgressSteps } from "../components/steps/progress-steps";
import FormControl from "@material-ui/core/FormControl/index";
import { Select } from "@material-ui/core";
import { CommonButton } from "../components/buttons/common-button";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: theme.palette.background.special,
    textAlign: "center",
    color: "white",
    paddingTop: "4rem",
  },
  paper: {
    width: "100%",
    maxWidth: `${theme.spacing(90)}px`,
    marginTop: theme.spacing(8),
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(14)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down("xs")]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
        3
      )}px`,
    },
  },
  headline: {
    marginTop: `${theme.spacing(3)}px`,
  },
  organizationName: {
    width: "100%",
    textAlign: "left",
    marginTop: "3rem",
    marginBottom: "10rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    width: "12rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const StepThreePage = () => {
  const classes = useStyles();

  const [require, setRequire] = useState('')

  return (
    <DocumentTitle title={"Signup"}>
      <div className={classes.main}>
        <Paper className={classes.paper}>
          <Typography variant="h3" align="center" className={classes.headline}>
            {"3. Step:"}
          </Typography>
          <Typography variant="h4" align="center">
            {"For which industry are you using Allex"}
          </Typography>
          <p>
            Depending on which industry you come from, we offer you different sample data, 
            if desired.
          </p>
          <div className={classes.organizationName}>
           
            <FormControl margin='normal' fullWidth className={classes.formControl}> 
              What is your industry?
              <Select
                variant='outlined'
                value={require}
                onChange={(event) => {setRequire(event.target.value)}}
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </div>
          <ProgressSteps maxSteep={4} value={2} />
          <div className={classes.buttons}>
            <CommonButton secondary={true}>Skip</CommonButton>
            <CommonButton>Next</CommonButton>
          </div>
        </Paper>
      </div>
    </DocumentTitle>
  );
};

export { StepThreePage };
