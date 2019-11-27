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
            <Typography className={classes.paper} style={{paddingTop: "50px"}}>
                <h3>
                    ZOR Season 2 Social - Mexico
                </h3>
            </Typography>
            <div style={{
                     position: "relative",
                     overflow: "hidden",
                     paddingTop: "56.25%",
                }}>
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                    }}
                    src={`https://www.youtube.com/embed/0v0VmQoneSA`}
                    frameBorder="10"
                />
            </div>
            <Typography className={classes.paper} style={{paddingTop: "50px"}}>
                <h3>
                    ZOR Season 2 - Japan
                </h3>
            </Typography>
            <div style={{
                     position: "relative",
                     overflow: "hidden",
                     paddingTop: "56.25%",
                }}>
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                    }}
                    src={`https://www.youtube.com/embed/icY1tbK9C7g`}
                    frameBorder="10"
                />
            </div>
            <Typography className={classes.paper} style={{paddingTop: "50px"}}>
                <h3>
                    ZOR Season 2 - Belgium
                </h3>
            </Typography>
            <div style={{
                     position: "relative",
                     overflow: "hidden",
                     paddingTop: "56.25%",
                }}>
                    <iframe
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                        }}
                        src={`https://www.youtube.com/embed/EJUfw9upikI`}
                        frameBorder="10"
                    />
                </div>
                
        </TabPanel>
      )
};

export default RaceHighlightsPage;