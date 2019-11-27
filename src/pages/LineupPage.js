import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from "@material-ui/core/Tab";
import Box from '@material-ui/core/Box';
import TabPanel from '../components/TabPanel';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(0),
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
    tabs: {
        justifyContent: 'center',
        alignItems: 'center',
    }
  }));

  function InnerTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const a11yProps =(index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const LineupPage = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <TabPanel index={3}>
            <Tabs value={value} onChange={handleChange} aria-label="Lineup tabs" centered>
                <Tab label="Tier 1 Lineup" {...a11yProps(0)}/>
                <Tab label="Tier 2 Lineup" {...a11yProps(1)}/>
            </Tabs>
            <InnerTabPanel value={value} index={0}>
                <Paper className={classes.paper}>
                    <Typography className={classes.paper}>
                        <h1>Tier 1 Lineup</h1>
                    </Typography>
                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/ferrari.png' />
                        <Typography className={classes.paper}>
                            <h3>fuzailm1</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/ferrari.png' />
                        <Typography className={classes.paper}>
                            <h3>RC7_NI</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/red-bull-racing.png' />
                        <Typography className={classes.paper}>
                            <h3>PuffDigital</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/red-bull-racing.png' />
                        <Typography className={classes.paper}>
                            <h3>arebigga</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/haas-f1-team.png' />
                        <Typography className={classes.paper}>
                            <h3>GruesomeCar</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/haas-f1-team.png' />
                        <Typography className={classes.paper}>
                            <h3>XRyanXDXD</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/renault.png' />
                        <Typography className={classes.paper}>
                            <h3>Doth_Thou_Hoist</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/renault.png' />
                        <Typography className={classes.paper}>
                            <h3>dzeig00</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mclaren.png' />
                        <Typography className={classes.paper}>
                            <h3>Stig_MX5</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mclaren.png' />
                        <Typography className={classes.paper}>
                            <h3>BrentCrystals</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mercedes.png' />
                        <Typography className={classes.paper}>
                            <h3>Zemoglis</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mercedes.png' />
                        <Typography className={classes.paper}>
                            <h3>--</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/racing-point.png' />
                        <Typography className={classes.paper}>
                            <h3>ZoinksZazzoo</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/racing-point.png' />
                        <Typography className={classes.paper}>
                            <h3>iamsix</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/toro-rosso.png' />
                        <Typography className={classes.paper}>
                            <h3>Sam_M226</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/toro-rosso.png' />
                        <Typography className={classes.paper}>
                            <h3>JoshJosherson206</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/alfa-romeo-racing.png' />
                        <Typography className={classes.paper}>
                            <h3>PrinceAli89</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/alfa-romeo-racing.png' />
                        <Typography className={classes.paper}>
                            <h3>SirHarryHotspur</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/williams.png' />
                        <Typography className={classes.paper}>
                            <h3>JMurMario</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/williams.png' />
                        <Typography className={classes.paper}>
                            <h3>--</h3>
                        </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </InnerTabPanel>
            <InnerTabPanel value={value} index={1}>
                <Paper className={classes.paper}>
                    <Typography className={classes.paper}>
                        <h1>Tier 2 Lineup</h1>
                    </Typography>
                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/ferrari.png' />
                        <Typography className={classes.paper}>
                            <h3>iamsix</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/ferrari.png' />
                        <Typography className={classes.paper}>
                            <h3>brianmosser88</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/red-bull-racing.png' />
                        <Typography className={classes.paper}>
                            <h3>Burns</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/red-bull-racing.png' />
                        <Typography className={classes.paper}>
                            <h3>GPCollin</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/haas-f1-team.png' />
                        <Typography className={classes.paper}>
                            <h3>Axton_118</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/haas-f1-team.png' />
                        <Typography className={classes.paper}>
                            <h3>T-money_all_day</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/renault.png' />
                        <Typography className={classes.paper}>
                            <h3>wolfsburg_tuner</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/renault.png' />
                        <Typography className={classes.paper}>
                            <h3>LitRomney</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mclaren.png' />
                        <Typography className={classes.paper}>
                            <h3>JMurMario</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mclaren.png' />
                        <Typography className={classes.paper}>
                            <h3>AerosStrike</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mercedes.png' />
                        <Typography className={classes.paper}>
                            <h3>UK_COXY-96</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/mercedes.png' />
                        <Typography className={classes.paper}>
                            <h3>F1-Ginnittowinnit</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/racing-point.png' />
                        <Typography className={classes.paper}>
                            <h3>BrentCrystals</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/racing-point.png' />
                        <Typography className={classes.paper}>
                            <h3>PaceDawgs17</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/toro-rosso.png' />
                        <Typography className={classes.paper}>
                            <h3>Duv49ers</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/toro-rosso.png' />
                        <Typography className={classes.paper}>
                            <h3>--</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/alfa-romeo-racing.png' />
                        <Typography className={classes.paper}>
                            <h3>XRyanXDXD</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/alfa-romeo-racing.png' />
                        <Typography className={classes.paper}>
                            <h3>kneeburr</h3>
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.grids}>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/williams.png' />
                        <Typography className={classes.paper}>
                            <h3>RobinhoodLawyer</h3>
                        </Typography>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth>
                        <img width="65%" src='https://www.formula1.com/content/dam/fom-website/teams/2019/williams.png' />
                        <Typography className={classes.paper}>
                            <h3>SirHarryHotspur</h3>
                        </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </InnerTabPanel>
        </TabPanel>
      )
};

export default LineupPage;