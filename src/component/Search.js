import React from 'react';
import '../App.css';

import TextInput1 from './TextInput1.js';
import TextInput2 from './TextInput2.js';
import DropdownMenu from './DropdownMenu.js';

const Search = () => {
    return (
      <div className='container'>
        <TextInput1 className='text1'/>
        <TextInput2 className='text2'/>
        <DropdownMenu className='menu1'/>
      </div>
    );
  };
  
  export default Search;