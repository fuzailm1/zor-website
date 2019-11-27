import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
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
        margin: theme.spacing(0),
    },
    tabs: {
        justifyContent: 'center',
        alignItems: 'center',
    }
  }));

export default useStyles;