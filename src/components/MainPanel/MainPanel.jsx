import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [stylesC, setMobil] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setMobil(!stylesC);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
            "ХИТЫ ПРОДАЖ (42)"
            , "НОВИНКИ (15)"
            , "ТОВАРЫ РОССИЙСКИХ ПОСТАВЩИКОВ (1531)"
            , "ЛЕТНИЙ АССОРТИМЕНТ (108)"
            , "ВЕЛОСИПЕДЫ (14)"
            , "ВОЗДУШНЫЕ ШАРИКИ (22)"
            , "ЗОНТИКИ (2)"
            , "АККУМУЛЯТОРНЫЕ МАШИНЫ, ЭЛЕКТРО СКУТЕРЫ (18)"
            , "ИГРУШКИ НА БАТАРЕЙКАХ (94)"
            , "РАДИОУПРАВЛЯЕМЫЕ (73)"
            , "ЗАВОДНЫЕ ИГРУШКИ (33)"
            , "ЖЕЛЕЗНЫЕ ДОРОГИ, АВТОТРЕКИ, ГАРАЖИ (43)"
            , "КОНСТРУКТОРЫ (274)"
            , "МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ (59)"
            , "МЯГКИЕ ИГРУШКИ (263)"
            , "РОБОТЫ, ТРАНСФОРМЕРЫ (75)"
            , "МОДЕЛИ МАШИНОК (183)"
            , "МАШИНКИ (186)"
            , "НАБОРЫ МАШИНОК (35)"
            , "НАБОРЫ ЖИВОТНЫХ (14)"
            , "РЫБАЛКИ (15)"
            , "ОРУЖИЕ (89)"
            , "ФОНАРИКИ, ЛАЗЕРНЫЕ УКАЗКИ (3)"
            , "ЧУБРИКИ, СВЕТЯЩИЕСЯ ПАЛОЧКИ (35)"
            , "КУБИКИ, ЗМЕЙКИ, ПЯТНАШКИ (49)"
            , "ОРБИЗ, ШАРИКИ РАСТУЩИЕ В ВОДЕ (4)"
            , "ЛИЗУНЫ, ПОПРЫГУНЧИКИ (64)"
            , "КОЛЯСКИ, КРОВАТКИ (29)"
            , "КУКЛЫ И ПУПСЫ (98)"
            , "НАПОЛЬНЫЕ ИГРЫ (11)"
            , "НАСТОЛЬНЫЕ ИГРЫ (58)"
            , "ПЛАКАТЫ, АЗБУКИ, ПЛАНШЕТЫ, ТЕЛЕФОНЫ (62)"
            , "КНИГИ, РАСКРАСКИ (77)"
            , "ДОСКИ (14)"
            , "ШАХМАТЫ, ШАШКИ, НАРДЫ (19)"
            , "ТОВАРЫ ДЛЯ СПОРТА И ОТДЫХА (173)"
            , "ОПЫТЫ (16)"
            , "ТВОРЧЕСТВО (237)"
            , "НАБОРЫ ДЛЯ ДЕВОЧЕК (251)"
            , "НАБОРЫ ДЛЯ МАЛЬЧИКОВ (58)"
            , "ДЛЯ САМЫХ МАЛЕНЬКИХ (75)"
            , "СТОЛИКИ ДЛЯ КОРМЛЕНИЯ, БЫТОВЫЕ ИЗДЕЛИЯ (8)"
            , "СУВЕНИРЫ (43)"
            , "ПОДАРОЧНЫЕ ПАКЕТЫ (5)"
            , "БАТАРЕЙКИ (10)"
            , "НОВОГОДНИЕ ТОВАРЫ, ПРИКОЛЫ (7)"
            , "ЗИМНИЙ АССОРТИМЕНТ (34)"
        ].map((text) => (
          <ListItem button key={text}>
            
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
            "ХИТЫ ПРОДАЖ (42)"
            , "НОВИНКИ (15)"
            , "ТОВАРЫ РОССИЙСКИХ ПОСТАВЩИКОВ (1531)"
            , "ЛЕТНИЙ АССОРТИМЕНТ (108)"
            , "ВЕЛОСИПЕДЫ (14)"
            , "ВОЗДУШНЫЕ ШАРИКИ (22)"
            , "ЗОНТИКИ (2)"
            , "АККУМУЛЯТОРНЫЕ МАШИНЫ, ЭЛЕКТРО СКУТЕРЫ (18)"
            , "ИГРУШКИ НА БАТАРЕЙКАХ (94)"
            , "РАДИОУПРАВЛЯЕМЫЕ (73)"
            , "ЗАВОДНЫЕ ИГРУШКИ (33)"
            , "ЖЕЛЕЗНЫЕ ДОРОГИ, АВТОТРЕКИ, ГАРАЖИ (43)"
            , "КОНСТРУКТОРЫ (274)"
            , "МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ (59)"
            , "МЯГКИЕ ИГРУШКИ (263)"
            , "РОБОТЫ, ТРАНСФОРМЕРЫ (75)"
            , "МОДЕЛИ МАШИНОК (183)"
            , "МАШИНКИ (186)"
            , "НАБОРЫ МАШИНОК (35)"
            , "НАБОРЫ ЖИВОТНЫХ (14)"
            , "РЫБАЛКИ (15)"
            , "ОРУЖИЕ (89)"
            , "ФОНАРИКИ, ЛАЗЕРНЫЕ УКАЗКИ (3)"
            , "ЧУБРИКИ, СВЕТЯЩИЕСЯ ПАЛОЧКИ (35)"
            , "КУБИКИ, ЗМЕЙКИ, ПЯТНАШКИ (49)"
            , "ОРБИЗ, ШАРИКИ РАСТУЩИЕ В ВОДЕ (4)"
            , "ЛИЗУНЫ, ПОПРЫГУНЧИКИ (64)"
            , "КОЛЯСКИ, КРОВАТКИ (29)"
            , "КУКЛЫ И ПУПСЫ (98)"
            , "НАПОЛЬНЫЕ ИГРЫ (11)"
            , "НАСТОЛЬНЫЕ ИГРЫ (58)"
            , "ПЛАКАТЫ, АЗБУКИ, ПЛАНШЕТЫ, ТЕЛЕФОНЫ (62)"
            , "КНИГИ, РАСКРАСКИ (77)"
            , "ДОСКИ (14)"
            , "ШАХМАТЫ, ШАШКИ, НАРДЫ (19)"
            , "ТОВАРЫ ДЛЯ СПОРТА И ОТДЫХА (173)"
            , "ОПЫТЫ (16)"
            , "ТВОРЧЕСТВО (237)"
            , "НАБОРЫ ДЛЯ ДЕВОЧЕК (251)"
            , "НАБОРЫ ДЛЯ МАЛЬЧИКОВ (58)"
            , "ДЛЯ САМЫХ МАЛЕНЬКИХ (75)"
            , "СТОЛИКИ ДЛЯ КОРМЛЕНИЯ, БЫТОВЫЕ ИЗДЕЛИЯ (8)"
            , "СУВЕНИРЫ (43)"
            , "ПОДАРОЧНЫЕ ПАКЕТЫ (5)"
            , "БАТАРЕЙКИ (10)"
            , "НОВОГОДНИЕ ТОВАРЫ, ПРИКОЛЫ (7)"
            , "ЗИМНИЙ АССОРТИМЕНТ (34)"
        ].map((text) => (
          <ListItem button key={text}>
            
            <ListItemText primary={text} />
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
