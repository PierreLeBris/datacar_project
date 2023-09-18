import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaCarSide } from "react-icons/fa";

const ListRow = React.memo(( {name, id, greenhouse, air}) => {
    return (
        <DivSup>
        <motion.div 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 1 }} 
            initial={{ opacity: 0,}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut"}} >
        <Link to={`/${id}`} >
        <Row>
          <StyledInfo>
            <Name>{name}</Name>
            <div>Greenhouse Gas Score: {greenhouse}</div>
            <div>Air Pollution Score: {air}</div>
          </StyledInfo>
          <div>
            < FaCarSide size={50} color='#E5D283' />
          </div>
        </Row>
        </Link>
        </motion.div>
      </DivSup>
    );
});

export default ListRow;

const DivSup = styled.div`
    justify-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
  width: 40vh;
  height: 15vh;
  margin-top: 5vh ;
  margin-bottom: 5vh;
  background: #4F709C;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  padding: 3vh;
  @media (min-width: 768px){
    margin: 5vh;
    width: 75vh;
    padding: 10px;
  }
`;
const StyledInfo = styled.div`
@media (min-width: 768px) {
  font-size: 16px;
}
  font-weight: normal;
  .div{
    margin-bottom: 50vh;
  }
`;
const Name = styled.span`
  @media (min-width: 768px) {
    font-size: 24px;
  }
  color: #ffffff;
  font-weight: bold;
`;

