import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import allTheActions from "../../actions";
import { styled } from 'styled-components';
//import { Link } from 'react-router-dom';
import logo from '../../img/testcar.png'

const SingleCar = (props) => {

    const dispatch = useDispatch();
    const apiResponse = useSelector((state) =>
        state.api.response.data ? state.api.response.data : []
    );
    useEffect(() => {
        dispatch(allTheActions.api.getOneCar(props.id));
    }, [dispatch, props.id]);

    console.log(apiResponse);
    return (
        <div>
            <FirstLine>
                <SyledH2>{apiResponse.Model}</SyledH2>
            </FirstLine>
            <SecondLine>
                <img src={logo} alt='test car' width={750} height={750}/>
                <div>
                    <StyledElement>- Fuel: {apiResponse.Fuel}</StyledElement>
                    <StyledElement>- Type of vehicule: {apiResponse["Veh Class"]}</StyledElement>
                    <StyledElement>- City MPG: {apiResponse["City MPG"]}</StyledElement>
                    <StyledElement>- Cmb MPG: {apiResponse["Cmb MPG"]}</StyledElement>
                    <StyledElement>- Cyl: {apiResponse["Cyl"]}</StyledElement>
                    <StyledElement>- Greenhouse Gas Score: {apiResponse["Greenhouse Gas Score"]}</StyledElement>
                    <StyledElement>- Air Pollution Score: {apiResponse["Air Pollution Score"]}</StyledElement>
                </div>
            </SecondLine>
        </div>
    );
};

export default SingleCar;

const FirstLine = styled.div`
margin-bottom: 2vh;
display: flex;
justify-content: space-around;
margin-top: 2vh;
margin-bottom: 2vh;
background: rgb(9,10,36);
background: #4F709C;
`
const SyledH2 = styled.h2`
    font-size: 20px;
    color: #ffffff;
    @media (min-width: 768px) {
        font-size: 30px;
    }
`
const SecondLine = styled.div`
  display: flex;
  margin-top: 2vh;
  margin-bottom: 3vh;
  color: #ffffff;
  font-size: 18px;
`
const StyledElement = styled.div`
    margin-bottom: 3vh;
    padding-left: 10vh;
`