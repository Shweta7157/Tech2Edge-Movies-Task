import axios from "axios";

// API Base URL
export let baseURL = "http://demo.tech2edge.co/samples/";
let headers = {
  "Content-Type": "application/json",
};

//  Fetching the Main List
export const fetchList = () => {
  return new Promise((resolve, reject) => {
    let url = `${baseURL}data-sg`;
    axios
      .get(url, { headers })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
