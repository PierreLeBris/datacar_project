import axios from 'axios'

export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'
export const API_SUCCESS_SEARCH = 'API_SUCCESS_SEARCH'

// Thunk function
export const getAllCars = () => dispatch => {
    axios({
      method: 'GET',
      url: `http://localhost:3000`,
    })
      .then(response => {
        dispatch({ type: API_SUCCESS, payload: {response, label: 'response'} })
      })
      .catch(error => {
        dispatch({ type: API_ERROR, error: error })
      })
  }

  export const getOneCar = (param) => dispatch => {
    axios({
      method: 'GET',
      url: `http://localhost:3000/${param}?metric=true`,
      //metric: true
    })
      .then(response => {
        dispatch({ type: API_SUCCESS, payload: {response, label: 'response'} })
      })
      .catch(error => {
        dispatch({ type: API_ERROR, error: error })
      })
  }