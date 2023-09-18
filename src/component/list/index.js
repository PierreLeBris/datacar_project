import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import allTheActions from "../../actions";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";
import ListRow from '../listRow';

const List = React.memo(({inputValue}) => {

  const dispatch = useDispatch();
  const apiResponse = useSelector((state) =>
    state.api.response.data ? state.api.response.data : []
  );

  const [page, setPage] = useState(0);
  const itemsPerPage = 50;
  const numberOfRecordsVistited = page * itemsPerPage;
  const totalPages = Math.ceil(apiResponse.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setPage(selected);
  };

  const pageVariants = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    duration: 0.5,
    ease: "easeInOut",
  };
  
  useEffect(() => {
    dispatch(allTheActions.api.getAllCars());
  }, [dispatch], []);

  return (
    <ContainAll>
      
      <MyPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
      />

      <motion.div
        key={page}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        transition={pageTransition}
      >
        {
        apiResponse
          .filter((item) =>
            item.Model.toLowerCase().includes(inputValue.toLowerCase())
          )
          .slice(
            numberOfRecordsVistited,
            numberOfRecordsVistited + itemsPerPage
          )
          .map((item) => {
            return (
              <React.Fragment key={item._id}>
                <motion.div
                  whileInView={{ x: 0 }}
                  initial={{ x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div>
                    <ListRow name={item.Model} id={item._id} greenhouse={item["Greenhouse Gas Score"]} air={item["Air Pollution Score"]}>
                    </ListRow>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
      </motion.div>

      <MyPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
      />

    </ContainAll>
  );
});

export default List;

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
  previousLabel: "Previous",
  nextLabel: "Next",
  breakLabel: "...",
  pageRangeDisplayed: 0,
  marginPagesDisplayed: 0,
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  @media (min-width: 768px) {
    justify-content: center;
  }
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: white 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #4F709C;
    border-color: transparent;
    color: white;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

const ContainAll = styled.div`
  min-height: 100vh;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;