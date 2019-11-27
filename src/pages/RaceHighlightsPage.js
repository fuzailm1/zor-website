import React from 'react';
import { Typography } from '@material-ui/core';
import TabPanel from '../components/TabPanel';
import { useStyles } from '../components/Styles';


const RaceHighlightsPage = () => {
    const classes = useStyles();

    return (
        <TabPanel index={4}>
            <Typography className={classes.paper}>
                <h1>Race Highlights and Streams</h1>
            </Typography>
            <Typography className={classes.paper}>
                <h4>ZOR Social - Mexico</h4>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/0v0VmQoneSA" 
                    frameborder="10" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </Typography>
            <Typography className={classes.paper}>
                <h4>ZOR Season 2 - Japan</h4>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/icY1tbK9C7g" 
                    frameborder="10" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </Typography>
            <Typography className={classes.paper}>
                <h4>ZOR Season 2 - Belgium</h4>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/EJUfw9upikI" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </Typography>
        </TabPanel>
      )
};

export default RaceHighlightsPage;