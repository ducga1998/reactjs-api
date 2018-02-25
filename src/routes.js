import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

//eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage';
import  GetApi  from "./components/zingmp3/GetApi";
import  DetailGetApi  from "./components/zingmp3/DetailGetApi";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path="getapi" component={GetApi} />
    <Route path="getapi/:id" component={DetailGetApi} />
  </Route>
);
