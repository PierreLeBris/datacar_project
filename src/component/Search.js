import React from 'react';
import '../App.css';

import TextInput1 from './TextInput1.js';
import TextInput2 from './TextInput2.js';
import DropdownMenu from './DropdownMenu.js';

const Search = () => {
    return (
      <div className='container'>
        <TextInput1 />
        <TextInput2 />
        <DropdownMenu />
      </div>
    );
  };
  
  export default Search;