import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import User from './User';
import css from '../Css';
import authBG from '../../images/Auth.svg';

const useStyles = makeStyles(({ spacing }) => ({
  loginBtn: {
    height: '100vh',
  },
  authBG: {
    backgroundImage: `url(${authBG})`,
  },
  paper: {
    padding: spacing(2),
  },
}));

export default function () {
  const classes = useStyles();

  const useCss = css();

  return (
    <User>
      <Grid alignItems="center" justify="center" className={`${useCss.setBackground} ${classes.authBG}`} container>
        <Grid item>
          <Grid container direction="column" spacing={6}>
            <Grid item>
              <Typography align="left" variant="h5">
                Login to get started
              </Typography>
            </Grid>
            <Grid item>
              <div
                className="fb-login-button"
                data-size="large"
                data-button-type="continue_with"
                data-layout="default"
                data-auto-logout-link="true"
                data-use-continue-as="true"
                data-width=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </User>
  );
}
