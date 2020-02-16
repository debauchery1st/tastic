import axios from "axios";

const apiWithAxios = () => {
  return axios.create({
    baseURL: "https://ls-node-sprint-1.herokuapp.com/api",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
    //   Authorization: localStorage.getItem('token')
  });
};

export default apiWithAxios;
