import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Auth from './Auth';
import css from '../Css';
import HomeBGOne from '../../images/Home_1.svg';
import HomeBGTwo from '../../images/Home_2.svg';
import HomeBGThree from '../../images/Home_3.svg';

const useStyles = makeStyles(() => ({
  homeBackdrop1: {
    backgroundImage: `url(${HomeBGOne})`,
  },
  homeBackdrop2: {
    backgroundImage: `url(${HomeBGTwo})`,
  },
  homeBackdrop3: {
    backgroundImage: `url(${HomeBGThree})`,
  },
}));

export default function Home() {
  const classes = useStyles();

  const useCss = css();

  return (
    <Auth>
      <Grid container>
        <Grid item xs={12} className={`${useCss.setBackground} ${classes.homeBackdrop2}`} />
        <Grid item xs={12} className={`${useCss.setBackground} ${classes.homeBackdrop1}`} />
        <Grid item xs={12} className={`${useCss.setBackground} ${classes.homeBackdrop3}`} />
      </Grid>
    </Auth>
  );
}
