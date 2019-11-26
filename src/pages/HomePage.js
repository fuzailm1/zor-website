import React from 'react';
import TabPanel from '../components/TabPanel';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Carousel from "nuka-carousel";
import Logo from '../assets/Race Preview v2.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(1),
  },
}));

const HomePage = ({ value }) => {
  const classes = useStyles();
  return (
    <TabPanel index={0}>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <div align="center">
              <Typography className={classes.paper}>
                <Box fontWeight="bold">
                  <h1>Upcoming Race</h1>
                </Box>
              </Typography>
              <img height="98%" width="85%" algin="middle" src={Logo}>
              </img>
            </div>
          </Grid>
          <Grid item lg={2}>
            <div align="center">
              <Typography className={classes.paper}>
                <Box fontWeight="bold">
                  <h3>Follow us on Twitter!</h3>
                </Box>
              </Typography>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="zenithonlinef1"
                placeholder="Loading"
                options={{height: 500}}
              />
              <TwitterFollowButton screenName="zenithonlineF1" options={{size: 'large'}} />
            </div>
          </Grid>
        </Grid>
        <div align="center">
          <Typography className={classes.paper}>
            <Box fontWeight="bold">
              <h1>About Us</h1>
            </Box>
            <Typography variant="h6">
              Welcome to Zenith Online Racing. We are a small community of league racers on Formula 1 2019 across North America and Europe.
              We currently run two divisions, one on Mondays and one on Thursdays at 8pm EST. 
            </Typography>
          </Typography>
        </div>
          <Typography className={classes.paper}>
            <Box fontWeight="bold">
              <h1>Community Photos</h1>
            </Box>
          </Typography>
          <Carousel wrapAround autoplay autoplayInterval="5000">
            <img height="90%" width="90%" src='https://cdn.discordapp.com/attachments/542341637557321758/646907706833240077/PS_Messages_20191120_215924.jpg' />
            <img height="90%" width="90%" src='https://cdn.discordapp.com/attachments/542341637557321758/646907842879684618/PS_Messages_20191120_215914.jpg' />
            <img height="90%" width="90%" src='https://cdn.discordapp.com/attachments/542341637557321758/647265234058477568/PS_Messages_20191121_214024.jpg' />
            <img height="90%" width="90%" src='https://cdn.discordapp.com/attachments/542341637557321758/643648806151389184/PS_Messages_20191111_221016.jpg' />
          </Carousel>
      </div>
    </TabPanel>
  )
};

export default HomePage;