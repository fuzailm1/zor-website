import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel.js';

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
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log('here now');
    };
  
    return (
      <div className="Navbar">
        <AppBar position="static">
          <Toolbar>
            <Tabs value={value} onChange={handleChange} aria-label="navbar tabs">
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Race Calendar" {...a11yProps(1)} />
              <Tab label="Driver Lineup" {...a11yProps(2)} />
              <Tab label="Hall of Fame" {...a11yProps(3)} />
              <Tab label="Signup" {...a11yProps(4)} />
              <Tab label="Race Highlights" {...a11yProps(5)} />
              <Tab label="Blog" {...a11yProps(6)} />
              <Tab label="Contact Us" {...a11yProps(7)} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <TabPanel value={value} index={0}>
          Home
        </TabPanel>
        <TabPanel value={value} index={1}>
          Race Calendar
        </TabPanel>
        <TabPanel value={value} index={2}>
          Driver Lineup
        </TabPanel>
        <TabPanel value={value} index={3}>
          Hall of Fame
        </TabPanel>
        <TabPanel value={value} index={4}>
          Sign up for season 3! 
        </TabPanel>
        <TabPanel value={value} index={5}>
          Race Highlights 
        </TabPanel>
        <TabPanel value={value} index={6}>
          Blog 
        </TabPanel>
        <TabPanel value={value} index={7}>
          Contact Us 
        </TabPanel>
        <Typography variant="h6" className={classes.title}>
          Welcome to Zenith Online Racing!
        </Typography>
      </div>
    );
  }

  export default Navbar;