import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from '@material-ui/core/Container';
import { Switch, Route, Link, BrowserRouter, HashRouter } from "react-router-dom";
import {routeConfig} from './Routes';
import NotFound from './pages/errors/NotFound';

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

export const App = () => {
  const classes = useStyles();
  const pathList = ['/', '#/standings', '#/calendar', '#/lineup', '#/highlights', '#/hall_of_fame', '#/blog', '#/signup'];
  const [value, setValue] = React.useState(pathList.indexOf(window.location.hash));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <HashRouter>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Container maxWidth="xl">
              <Tabs value={value} onChange={handleChange} aria-label="navbar tabs" variant="scrollable" scrollButtons="auto">
                <Tab label="Home" component={Link} to="/" {...a11yProps(0)}/>
                <Tab label="Standings" component={Link} to="/standings" {...a11yProps(1)}/>
                <Tab label="Race Calendar" component={Link} to="/calendar" {...a11yProps(2)}/>
                <Tab label="Driver Lineup" component={Link} to="/lineup" {...a11yProps(3)}/>
                <Tab label="Race Highlights" component={Link} to="/highlights" {...a11yProps(4)}/>
                <Tab label="Hall of Fame" component={Link} to="/hall_of_fame" {...a11yProps(5)}/>
                <Tab label="Blog" component={Link} to="/blog" {...a11yProps(6)}/>
                <Tab label="Signup" component={Link} to="/signup" {...a11yProps(7)}/>
              </Tabs>
            </Container>
          </Toolbar>
        </AppBar>
        <Switch>
          {
            routeConfig.map(config => (
              <Route key={config.key} exact path={config.route} component={config.component} />
            ))
          }
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
