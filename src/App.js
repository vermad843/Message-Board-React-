import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Helmet} from 'react-helmet';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Helmet>
            <style>{'body { background-color: DarkSlateGray }'}</style>
        </Helmet>
        <AppBar style={{ background: 'DarkOrange' }}>
        <Toolbar>
        <Typography variant="h3" className={classes.title}>
            Auth For Newbs
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}