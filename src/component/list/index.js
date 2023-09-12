import React, {useEffect} from 'react';
import background from '../../img/DataCar.png';
import { useSelector, useDispatch, Provider } from "react-redux";
import allTheActions from "../../actions";
import { store } from '../../config/store'

import Search from '../../component/Search.js';


const List = () => {
    const dispatch = useDispatch();
    const apiResponse = useSelector((state) =>
      state.api.response.data ? state.api.response.data : []
    );
  
    useEffect(() => {
      dispatch(allTheActions.api.getAllCars());
    }, [dispatch]);

    console.log(apiResponse);

    return (
        <div>
            <div className='image' style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",height:1000,width:1000}}>
                <Search/>
            </div>  
        </div>
    );
};

export default List;