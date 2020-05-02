import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  drawerPaperFull: {
    width: drawerWidth - 5,
    left: 'auto'

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 60,
  }
}));

function ResponsiveDrawer(props) {
  const ListItemComponent  =  () => {
    return <Link to="/test">Click me</Link>
  }
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [stylesC, setMobil] = React.useState(true);
  const [dataArray, setData] = React.useState([]);
  React.useEffect(async () =>{
    try{
      const result = await (await fetch("http://localhost:50338/api/Category/GetAll")).json();
      setData(result);
    }
    catch(e){
      console.log(e);
    }
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setMobil(!stylesC);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {dataArray.map((item) => (
          
            <ListItem component={Link} to={"/product/" + item.id} button key={item.id}>
              
              <ListItemText primary={item.name} />
            </ListItem>

        ))}
      </List>
      <Divider />
      <List>
        {dataArray.map((item) => (
          <ListItem component={Link} to={"/product/" + item.id} button  key={item.id}>
            
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  

  return (
   
    <div className={classes.root}>

      <div className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            
            variant="persistent"
            
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: stylesC ? classes.drawerPaperFull : classes.drawerPaper
            }}
            variant="persistent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
      <main className={classes.content}>
          {props.children}
      </main>
    </div>

  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default ResponsiveDrawer;
