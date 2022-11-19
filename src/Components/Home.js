import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import MainList from "./MainList";

const Home = () => {
  const listRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Cover listRef={listRef} />
      <MainList listRef={listRef} />
    </div>
  );
};

export default Home;
