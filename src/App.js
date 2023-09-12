/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect} from 'react';
import background from './img/DataCar.png';
import './App.css';
import { useSelector, useDispatch, Provider } from "react-redux";
import allTheActions from "./actions";
import { store } from './config/store'

import Search from './component/Search.js';
import List from './component/list';

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
};

export default App;
