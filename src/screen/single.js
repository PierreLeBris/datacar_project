import React from 'react';
import GlobalStyle from '../config/globalStyles';
import SingleCar from '../component/singleCar';
import { useParams } from 'react-router';

const Single = () => {
    const {id} = useParams() 
    return (
        <div>
            <GlobalStyle />
            <SingleCar id={id} />
        </div>
    );
};

export default Single;