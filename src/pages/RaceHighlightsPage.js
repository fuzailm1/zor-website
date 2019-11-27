import React from 'react';
import { Container, Typography } from '@material-ui/core';
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
                <h4>
                    ZOR Season 2 - Belgium
                </h4>
            </Typography>
            <div style={{
                    width: "100%", 
                    maxWidth: "100%", 
                    display: "flex", 
                    flexWrap: "wrap", 
                    justifyContent: "center", 
                    alignItems: "center"
                }}>
                    <iframe
                        style={{
                            position: "relative",
                            top: 0,
                            left: 0,
                            width: "60vw",
                            height: "68vh",
                            maxWidth: "100%",
                            maxHeight: "80%"
                        }}
                        src={`https://www.youtube.com/embed/EJUfw9upikI`}
                        frameBorder="10"
                    />
                </div>
                
        </TabPanel>
      )
};

export default RaceHighlightsPage;