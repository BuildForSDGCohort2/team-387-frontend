import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ToolBar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import FastIcon from '@material-ui/icons/FastForwardOutlined';
import SecureIcon from '@material-ui/icons/SecurityOutlined';
import ReliableIcon from '@material-ui/icons/Star';

import User from './User';
import css from '../Css';
import Copyright from './Copyright';
import HomeBGOne from '../../images/Home_1.svg';
import HomeBGTwo from '../../images/Home_2.svg';
import HomeBGThree from '../../images/Home_3.svg';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  homeBackdrop1: {
    backgroundImage: `url(${HomeBGOne})`,
  },
  homeBackdrop2: {
    backgroundImage: `url(${HomeBGTwo})`,
  },
  homeBackdrop3: {
    backgroundImage: `url(${HomeBGThree})`,
  },
  copyright: {
    paddingBottom: spacing(2),
    paddingTop: spacing(4),
  },
  gridItem: {
    height: '30vh',
  },
  gridHeight: {
    height: '100vh',
  },
  descriptionContainer: {
    [breakpoints.up('sm')]: {
      width: '57%',
    },
  },
  description: {
    color: '#00BFA6',
  },
  descriptionPaper: {
    padding: spacing(1),
    opacity: 0.7,
  },
  featureItems: {
    marginRight: spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();

  const useCss = css();

  return (
    <User path="/auth" btnTxt="Get Started">
      <Grid container>
        <Grid item xs={12} className={`${useCss.setBackground} ${classes.homeBackdrop2}`}>
          <Grid className={classes.gridHeight} alignItems="center" container>
            <Grid item xs={12}>
              <div className={classes.descriptionContainer}>
                <Paper className={classes.descriptionPaper}>
                  <Typography variant="h6">
                    Welcome to CliquePay,
                    <br />
                    A fast, safe and convenient way to send and receive money
                    <br />
                    with your facebook friends and communities
                  </Typography>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={`${useCss.setBackground} ${classes.homeBackdrop1}`}>
          <Grid container className={classes.gridHeight} alignItems="center">
            <Grid item xs={12}>
              <Paper className={classes.descriptionPaper}>
                <Grid container justify="center" spacing={4}>
                  <Grid item xs={12}>
                    <Container>
                      <Typography gutterBottom variant="h5">Features</Typography>
                    </Container>
                  </Grid>
                  <Grid item xs>
                    <ToolBar>
                      <FastIcon className={classes.featureItems} />
                      <Typography variant="h6">Fast</Typography>
                    </ToolBar>
                  </Grid>
                  <Grid item xs>
                    <ToolBar>
                      <SecureIcon className={classes.featureItems} />
                      <Typography variant="h6">Secure</Typography>
                    </ToolBar>
                  </Grid>
                  <Grid item xs>
                    <ToolBar>
                      <ReliableIcon className={classes.featureItems} />
                      <Typography variant="h6">Reliable</Typography>
                    </ToolBar>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={`${useCss.setBackground} ${classes.homeBackdrop3}`}>
          <Grid container className={classes.gridHeight} justify="center" alignItems="center">
            <Grid item md={6}>
              <Paper className={classes.descriptionPaper}>
                <Typography align="center" variant="h5">Pricing ? ... its FREE!!!</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.copyright}>
        <Copyright yourWebsite="CliquePay" />
      </div>
    </User>
  );
}
