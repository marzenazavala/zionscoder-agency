import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../containers/header/Header';
import Image from '../../assets/img/90440.jpg';
import Icon from '../../assets/icons/mountain1.svg';
import TypingText from '../../components/textEffects/TypingText';
const text = ["We convert your ideas in real application.", "It's time to create something new..."]

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  font: {
    fontFamily: 'Belleza',
    color: '#fff',
    lineHeight: 0
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexEnd: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: '100px',
    height: '100px',
    margin: theme.spacing(1),
    backgroundImage: `url(${Icon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderBottom: '1px solid #fff'
  },
  button: {
    border: '1px solid #fff',
    color: '#fff',
    fontFamily: 'Jura',
    padding: theme.spacing(1, 4),
    marginTop: '250px',
    "&:hover": {
      backgroundColor: '#fff',
      color: 'rgb(1, 28, 55)'
    }
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} className={classes.image}>
        
          <Grid item xs={12} className={classes.flex}>
            <Box item xs={12} className={classes.icon}/>
            <Typography className={classes.font} variant="h5">
              <p>ZION'S CODERS</p>
            </Typography>
            <TypingText text={text}/>
          </Grid>
            
            <Button className={classes.button}>Enter</Button>
            
      </Grid>
    </Grid>
  );
};

export default HomePage