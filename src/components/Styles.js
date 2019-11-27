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
    },
    iframe: {
        display: 'block',
        width: '100%',
    },
    videoWrapper: {
        position: 'relative',
        paddingBottom: '56.25%', 
        paddingBop: '25px',
        height: 0,
    },
    videoWrapperiFrame: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
  }));

export default useStyles;