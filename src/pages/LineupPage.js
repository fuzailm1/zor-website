import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper } from '@material-ui/core';
import TabPanel from '../components/TabPanel';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
    },
    name: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    grids: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
    },
  }));

const LineupPage = () => {
    const classes = useStyles();
    return (
        <TabPanel index={2}>
          <Paper className={classes.paper}>
            <Typography className={classes.paper}>
                <h1>Tier 1 Roster</h1>
            </Typography>
            <Grid container className={classes.grids}>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/ferrari.png' />
                <Typography className={classes.paper}>
                    <h3>fuzailm1</h3>
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/ferrari.png' />
                <Typography className={classes.paper}>
                    <h3>RC7_NI</h3>
                </Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.grids}>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/red-bull-racing.png' />
                <Typography className={classes.paper}>
                    <h3>PuffDigital</h3>
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/red-bull-racing.png' />
                <Typography className={classes.paper}>
                    <h3>arebigga</h3>
                </Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.grids}>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/haas-f1-team.png' />
                <Typography className={classes.paper}>
                    <h3>GruesomeCar</h3>
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/haas-f1-team.png' />
                <Typography className={classes.paper}>
                    <h3>XRyanXDXD</h3>
                </Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.grids}>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/renault.png' />
                <Typography className={classes.paper}>
                    <h3>Doth_Thou_Hoist</h3>
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/renault.png' />
                <Typography className={classes.paper}>
                    <h3>dzeig00</h3>
                </Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.grids}>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mclaren.png' />
                <Typography className={classes.paper}>
                    <h3>Stig_MX5</h3>
                </Typography>
                </Grid>
                <Grid item xs={6}>
                <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mclaren.png' />
                <Typography className={classes.paper}>
                    <h3>JMurMario</h3>
                </Typography>
                </Grid>
            </Grid>


          </Paper>
        </TabPanel>
      )
};

export default LineupPage;