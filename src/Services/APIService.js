import axios from "axios";

export let baseURL = "http://demo.tech2edge.co/samples/";
let headers = {
  "Content-Type": "application/json",
};

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

