/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import datacar from './DataCar.png';
import './App.css';

import TextInput1 from './component/TextInput1.js';
import TextInput2 from './component/TextInput2.js';
import DropdownMenu from './component/DropdownMenu.js';

const App = () => {
  return (
    <div className="container">
      <img src={datacar} alt="Description de l'image" className="overlay-image"/>
      <TextInput1 />
      <TextInput2 />
      <DropdownMenu />
    </div>
  );
};

export default App;
