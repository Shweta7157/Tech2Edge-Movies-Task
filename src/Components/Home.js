import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import MainList from "./MainList";

const Home = () => {
  // Creating Reference to access list by scrolling
  const listRef = useRef(null);
  // Initially setting the scroll to top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Including Navbar, Cover/banner & List into Home Page
  return (
    <div>
      <Navbar />
      <Cover listRef={listRef} />
      <MainList listRef={listRef} />
    </div>
  );
};

export default Home;
