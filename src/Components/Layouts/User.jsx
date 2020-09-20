import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  headerIcon: {
    marginRight: spacing(1),
    [breakpoints.down('xs')]: {
      flexGrow: '1',
    },
  },
  header: {
    backgroundColor: '#00BFA6',
  },
  title: {
    flexGrow: 1,
  },
}));

function ElevationHomeScroll({ children, window }) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationHomeScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Auth({
  window, children, path, btnTxt,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handleGetStartedClick = () => {
    history.push(path);
  };

  return (
    <>
      <CssBaseline />
      <ElevationHomeScroll window={window}>
        <AppBar className={classes.header}>
          <Toolbar>
            <Box className={classes.headerIcon}>
              <PaymentIcon />
            </Box>
            <Hidden xsDown>
              <Typography className={classes.title} variant="h6">CliquePay</Typography>
            </Hidden>
            <Button color="inherit" onClick={handleGetStartedClick}>{btnTxt}</Button>
          </Toolbar>
        </AppBar>
      </ElevationHomeScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          {children}
        </Box>
      </Container>
    </>
  );
}

Auth.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
  btnTxt: PropTypes.string,
};

Auth.defaultProps = {
  window: undefined,
  path: '',
  btnTxt: '',
};
