// Pages
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import LineupPage from './pages/LineupPage';
import HallOfFamePage from './pages/HallOfFamePage';
import SignupPage from './pages/SignupPage';
import RaceHighlightsPage from './pages/RaceHighlightsPage';
import BlogPage from './pages/BlogPage';
import StandingsPage from './pages/StandingsPage';

export const routeConfig = [
  {
    display: 'Home',
    key: 'index',
    route: '/',
    component: HomePage
  },
  {
    display: 'Standings',
    key: 'standings',
    route: '/standings',
    component: StandingsPage
  },
  {
    display: 'Race Calendar',
    key: 'calendar',
    route: '/calendar',
    component: CalendarPage
  },
  {
    display: 'Driver Lineup',
    key: 'lineup',
    route: '/lineup',
    component: LineupPage
  },
  {
    display: 'Hall of Fame',
    key: 'hall_of_fame',
    route: '/hall_of_fame',
    component: HallOfFamePage
  },
  {
    display: 'Signup',
    key: 'signup',
    route: '/signup',
    component: SignupPage
  },
  {
    display: 'Blog',
    key: 'blog',
    route: '/blog',
    component: BlogPage
  },
  {
    display: 'Race Highlights',
    key: 'highlights',
    route: '/highlights',
    component: RaceHighlightsPage
  }
];

export default routeConfig;