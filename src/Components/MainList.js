import React, { useState, useEffect } from "react";
import { fetchList, fetchImages } from "../Services/APIService";

const MainList = (props) => {
  const [listData, setListData] = useState(undefined);
  useEffect(() => {
    // if (!listData) {
    //   fetchListData();
    // }
    // fetchImageData();
    console.log("useEffect main called");
  }, []);

  const fetchListData = async () => {
    let resp = await fetchList();
    // console.log("resp", resp);
    if (resp && resp.length > 0) {
      setListData(resp);
    } else {
      setListData([]);
    }
  };

  // const fetchImageData = async () => {
  //   let resp = await fetchImages(
  //     "assets/images/sacred-games/ganesh-gaitonde.jpg"
  //   );
  // };

  return <div ref={props.listRef}>s</div>;
};

export default MainList;
