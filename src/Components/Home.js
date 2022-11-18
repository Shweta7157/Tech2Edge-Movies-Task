import React, { useRef } from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import MainList from "./MainList";

const Home = () => {
  const listRef = useRef(null);

  return (
    <div>
      <Navbar />
      <Cover listRef={listRef} />
      <MainList listRef={listRef} />
    </div>
  );
};

export default Home;
