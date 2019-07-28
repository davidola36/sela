import Axios from 'axios';
// const baseURL = "http://Localhost:3030";
const baseURL = "https://sela-assessment.herokuapp.com/"


const axios = Axios.create({
    baseURL,
    timeout: 10000,
    // headers: {
    //     "accepts":"application/json"
    // }
  });


export const getProjects = () => {
    return axios.get(`${baseURL}/project`);
};
