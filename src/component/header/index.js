import React from 'react';
import styled from 'styled-components';
import logo from '../../img/DataCar.png'

const Header = ({ onInputChange }) => {

    const handleInputChange = (e) => {
        const value = e.target.value;
        onInputChange(value);
      };

    return (
        <DivHeader>
            <StyledSearch>
              <StyledImg src={logo} alt='Datacar log' />
            </StyledSearch>
            <StyledTitle>DataCar</StyledTitle>
            <StyledSearch>
                <StyledInput
                type="search"
                placeholder="Search here"
                onChange={handleInputChange}
                />
            </StyledSearch>
        </DivHeader>
      )
};

export default Header;

const DivHeader = styled.div`
  margin-top: 0;
  width: 100%;
  text-decoration: none;
  left: 0;
  top: 0;
  display: flex;
  //height: 10vh;
  width: 100%;
  background-color: #ffffff;
  justify-content: space-between; /* Space between logo and title/search */
`
const StyledImg = styled.img`
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Margin between logo and title/search */
  width: 100px;
  @media (min-width: 768px) {
    width: 200px;
  }
`
const StyledTitle = styled.h1`
  //font-size: 24px;
  @media (min-width: 768px) {
    display: flex;
  }
  display: none;
  align-items: center;
  margin: 0;
  text-align: center;
  justify-content: center;
  flex-grow: 1;
`
const StyledSearch = styled.div`
    display: flex; /* Flex container for search bar and button */
    align-items: center; /* Center vertically */
`
const StyledInput = styled.input`
  padding: 5px; /* Padding for input field */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  font-size: 16px; /* Font size */
`