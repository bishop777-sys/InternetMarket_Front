import React, {Fragment, Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import PersonalArea from '../PersonalArea/PersonalArea.jsx';
import PopupRegion from '../PopupRegion/PopupRegion.jsx'
import Header from '../Header/Header.jsx'
import IconBreadcrumbs from '../BreadCrumbs/BreadCrumbs.jsx'
import Motivators from '../Motivators/Motivators.jsx'
import ErrorBoundry from '../error-boundry/error-boundry.jsx'
import './App.css'
import CardItem from '../CardItem/CardItem.jsx';
import ProductList from '../ProductList/ProductList.jsx';
//material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }
        
    }

   

    render() {
        
        return (
            <ErrorBoundry>
                <Fragment>
                    <Header />
                    <IconBreadcrumbs />
                    <div className="body">
                    <Grid container spacing={3}>
                        <Grid item xs={9} sm={3}>
                            <ul>
                                <li>ХИТЫ ПРОДАЖ (42)</li>
                                <li>НОВИНКИ (15)</li>
                                <li>ТОВАРЫ РОССИЙСКИХ ПОСТАВЩИКОВ (1531)</li>
                                <li>ЛЕТНИЙ АССОРТИМЕНТ (108)</li>
                                <li>ВЕЛОСИПЕДЫ (14)</li>
                                <li>ВОЗДУШНЫЕ ШАРИКИ (22)</li>
                                <li>ЗОНТИКИ (2)</li>
                                <li>АККУМУЛЯТОРНЫЕ МАШИНЫ, ЭЛЕКТРО СКУТЕРЫ (18)</li>
                                <li>ИГРУШКИ НА БАТАРЕЙКАХ (94)</li>
                                <li>РАДИОУПРАВЛЯЕМЫЕ (73)</li>
                                <li>ЗАВОДНЫЕ ИГРУШКИ (33)</li>
                                <li>ЖЕЛЕЗНЫЕ ДОРОГИ, АВТОТРЕКИ, ГАРАЖИ (43)</li>
                                <li>КОНСТРУКТОРЫ (274)</li>
                                <li>МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ (59)</li>
                                <li>МЯГКИЕ ИГРУШКИ (263)</li>
                                <li>РОБОТЫ, ТРАНСФОРМЕРЫ (75)</li>
                                <li>МОДЕЛИ МАШИНОК (183)</li>
                                <li>МАШИНКИ (186)</li>
                                <li>НАБОРЫ МАШИНОК (35)</li>
                                <li>НАБОРЫ ЖИВОТНЫХ (14)</li>
                                <li>РЫБАЛКИ (15)</li>
                                <li>ОРУЖИЕ (89)</li>
                                <li>ФОНАРИКИ, ЛАЗЕРНЫЕ УКАЗКИ (3)</li>
                                <li>ЧУБРИКИ, СВЕТЯЩИЕСЯ ПАЛОЧКИ (35)</li>
                                <li>КУБИКИ, ЗМЕЙКИ, ПЯТНАШКИ (49)</li>
                                <li>ОРБИЗ, ШАРИКИ РАСТУЩИЕ В ВОДЕ (4)</li>
                                <li>ЛИЗУНЫ, ПОПРЫГУНЧИКИ (64)</li>
                                <li>КОЛЯСКИ, КРОВАТКИ (29)</li>
                                <li>КУКЛЫ И ПУПСЫ (98)</li>
                                <li>НАПОЛЬНЫЕ ИГРЫ (11)</li>
                                <li>НАСТОЛЬНЫЕ ИГРЫ (58)</li>
                                <li>ПЛАКАТЫ, АЗБУКИ, ПЛАНШЕТЫ, ТЕЛЕФОНЫ (62)</li>
                                <li>КНИГИ, РАСКРАСКИ (77)</li>
                                <li>ДОСКИ (14)</li>
                                <li>ШАХМАТЫ, ШАШКИ, НАРДЫ (19)</li>
                                <li>ТОВАРЫ ДЛЯ СПОРТА И ОТДЫХА (173)</li>
                                <li>ОПЫТЫ (16)</li>
                                <li>ТВОРЧЕСТВО (237)</li>
                                <li>НАБОРЫ ДЛЯ ДЕВОЧЕК (251)</li>
                                <li>НАБОРЫ ДЛЯ МАЛЬЧИКОВ (58)</li>
                                <li>ДЛЯ САМЫХ МАЛЕНЬКИХ (75)</li>
                                <li>СТОЛИКИ ДЛЯ КОРМЛЕНИЯ, БЫТОВЫЕ ИЗДЕЛИЯ (8)</li>
                                <li>СУВЕНИРЫ (43)</li>
                                <li>ПОДАРОЧНЫЕ ПАКЕТЫ (5)</li>
                                <li>БАТАРЕЙКИ (10)</li>
                                <li>НОВОГОДНИЕ ТОВАРЫ, ПРИКОЛЫ (7)</li>
                                <li>ЗИМНИЙ АССОРТИМЕНТ (34)</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <ProductList />
                        </Grid>
                    </Grid>
                    </div>
                </Fragment>
            </ErrorBoundry>
        );
    }
}

export default App;