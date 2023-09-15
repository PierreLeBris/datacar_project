import React, {useState} from 'react';
import List from '../component/list';
import GlobalStyle from '../config/globalStyles';
import Header from '../component/header';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value) => {
      setInputValue(value);
    };
    return (
        <div>
            <GlobalStyle />
            <Header onInputChange={handleInputChange}/>
            <List inputValue={inputValue}/>
        </div>
    );
};

export default Home;