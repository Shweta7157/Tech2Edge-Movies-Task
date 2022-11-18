import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CoverImage from "../Assets/coversample.jpg";
import CoverImage2 from "../Assets/coversample2.jpg";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
const Cover = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onExploreClick = () => {
    props.listRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={CoverImage} alt="First slide" />
          <Carousel.Caption className="animate-transition">
            <h1 className="animate-characters">
              Collection of 5 Lakh + Movies & Series
            </h1>
            <h2 className="animate-transition-delay">
              Where to watch with Ratings, Reviews & Characters!
            </h2>
            <Button
              variant="outlined"
              endIcon={<KeyboardDoubleArrowDownIcon />}
              color="error"
              className="mt-1 animate-transition-delay-btn"
              onClick={onExploreClick}
            >
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CoverImage2} alt="Second slide" />

          <Carousel.Caption className="animate-transition">
            <h1 className="animate-characters">
              Check out TOP-50 Newly Launched Series!
            </h1>
            <h2 className="animate-transition-delay">
              Click Below to Explore them All!
            </h2>
            <Button
              variant="outlined"
              endIcon={<KeyboardDoubleArrowDownIcon />}
              color="error"
              className="mt-1 animate-transition-delay-btn"
              onClick={onExploreClick}
            >
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Cover;
