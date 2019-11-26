import React from 'react';
import TabPanel from '../components/TabPanel';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
          <Grid item lg={9}>
            <Paper className={classes.paper}>lg=6</Paper>
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