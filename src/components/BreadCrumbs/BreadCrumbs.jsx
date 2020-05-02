import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,

  },
  bread:{
    marginLeft: theme.spacing(150),
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.bread}>
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
        Главная
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Магазин
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Карточка
      </Typography>
    </Breadcrumbs>
  );
}