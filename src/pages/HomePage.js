import React from 'react';
import TabPanel from '../components/TabPanel';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HomePage = ({ value }) => {
  const classes = useStyles();
  return (
    <TabPanel index={0}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <Typography>
                <Box fontWeight="bold">
                  <h1>About Us</h1>
                </Box>
                <Typography variant="h6">
                  Welcome to Zenith Online Racing. We are a small community of league racers on Formula 1 2019 across North America and Europe.
                  We currently run two divisions, one on Mondays and one on Thursdays at 8pm EST. 
                </Typography>
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={3}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="zenithonlinef1"
            placeholder="Loading"
            options={{height: 500}}
          />
          <TwitterFollowButton screenName="zenithonlineF1" options={{size: 'large'}} />
          </Grid>
        </Grid>
      </Container>
    </TabPanel>
  )
};

export default HomePage;