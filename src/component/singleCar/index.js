import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import allTheActions from "../../actions";
import { styled } from 'styled-components';
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
                <img src={logo} alt='test car' width={400} height={400}/>

                <GreenScore>

                    <StyledScore>
                        <StyledScoreTitle>
                            - Greenhouse Gas Score: {apiResponse["Greenhouse Gas Score"]}
                        </StyledScoreTitle>
                        <Gauge>
                            <GaugeFill percentage={apiResponse["Greenhouse Gas Score"]} />
                        </Gauge>
                    </StyledScore>

                    <StyledScore>
                        <StyledScoreTitle>
                            - Air Pollution Score: {apiResponse["Air Pollution Score"]}
                        </StyledScoreTitle>
                        <Gauge>
                            <GaugeFill percentage={apiResponse["Air Pollution Score"]} />
                        </Gauge>
                    </StyledScore>

                </GreenScore>

            </SecondLine>

            <ThirdLine>
                <StyledElement>- Fuel: {apiResponse.Fuel}</StyledElement>
                <StyledElement>- Type of vehicule: {apiResponse["Veh Class"]}</StyledElement>
                <StyledElement>- City MPG: {apiResponse["City MPG"]}</StyledElement>
                <StyledElement>- HWY MPG: {apiResponse["Hwy MPG"]}</StyledElement>
                <StyledElement>- Cmb MPG: {apiResponse["Cmb MPG"]}</StyledElement>
                <StyledElement>- Cyl: {apiResponse["Cyl"]}</StyledElement>
            </ThirdLine>

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
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2vh;
  margin-bottom: 3vh;
  color: #ffffff;
  font-size: 18px;
`
const ThirdLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2vh;
    margin-bottom: 3vh;
    color: #ffffff;
    font-size: 18px;
`
const StyledElement = styled.div`
    margin-bottom: 3vh;
    margin-top: 10vh;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh;
    border-radius: 30px;
    background: #4F709C;
`
const StyledScore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh;
    background-color: #ffffff;
    margin: 0 5vh;
    border-radius: 30px;
    background: #4F709C;
`
const StyledScoreTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #E5D283;
    margin-bottom: 7vh;
`
const Gauge = styled.div`
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 4px;
    position: relative;
`
const GaugeFill = styled.div`
    height: 100%;
    background-color: ${
        props => {
            const value = props.percentage;
            if (value >= 9) {
                return "green"; // Vert
            } else if (value >= 6) {
                return "yellow"; // Jaune
            } else if (value >= 3) {
                return "orange"; // Orange
            } else {
                return "red"; // Rouge
            }
        }
    };
    border-radius: 4px;
    width: ${props => props.percentage*10}%;
`
const GreenScore = styled.div`
    display: flex;
    align-items: center;
`