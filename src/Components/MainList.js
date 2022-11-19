import React, { useState, useEffect } from "react";
import { fetchList, baseURL } from "../Services/APIService";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// If cards layout used then uncomment

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";
// import Divider from "@mui/material/Divider";
// import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import LinearProgress from "@mui/material/LinearProgress";
import ImageModal from "./ImageModal";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Button from "@mui/material/Button";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" fontSize="large" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" fontSize="large" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" fontSize="large" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" fontSize="large" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" fontSize="large" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const MainList = (props) => {
  const [listData, setListData] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState(undefined);

  useEffect(() => {
    if (!listData) {
      fetchListData();
    }
  });

  const handleOpen = (imgurl) => {
    setOpen(true);
    setModalImg(imgurl);
  };
  const handleClose = () => {
    setOpen(false);
    setModalImg(undefined);
  };

  const onTopClick = () => {
    window.scrollTo(0, 0);
  };

  // Fecthing main list api data
  const fetchListData = async () => {
    let resp = await fetchList();
    if (resp) {
      setListData(resp);
    } else {
      setListData([]);
    }
  };

  return (
    <>
      {/* Showing progress bar when data is not loaded */}
      {!listData ? (
        <>
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </>
      ) : (
        <>
          <div ref={props.listRef}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 3,
                  width: "auto",
                  height: "auto",
                },
              }}
            >
              <Paper elevation={3}>
                <div className="row m-0">
                  {/* Main Movie Card */}
                  <div className="col-sm-4 col-lg-4 col-md-4">
                    <div className="p-5">
                      <div
                        className="card"
                        onClick={() =>
                          handleOpen(`${baseURL}${listData?.series?.img}`)
                        }
                      >
                        <div className="card__body">
                          <img
                            src={`${baseURL}${listData?.series?.img}`}
                            className="card__image"
                            alt="."
                          />
                          <h2 className="card__title">
                            {listData?.series?.title}
                          </h2>
                          <p className="card__description">
                            {listData?.series?.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* List Details */}
                  <div className="col-sm-8 col-lg-8 col-md-8">
                    <div className="p-5">
                      <div className="row">
                        <div className="col-sm-2 col-lg-2 col-md-2">
                          <div className="pt-3">Available On:</div>
                        </div>
                        <div className="col-sm-10 col-lg-10 col-md-10">
                          <div>
                            <img
                              style={{ height: "50px" }}
                              alt="."
                              src={
                                listData?.series?.ott === "Netflix"
                                  ? "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                                  : "-"
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 col-lg-2 col-md-2">
                          <div className="pt-4">Starring:</div>
                        </div>
                        <div className="col-sm-10 col-lg-10 col-md-10">
                          {/* If Tabular use this */}
                          {listData?.characters?.map((person, index) => (
                            <List
                              sx={{
                                width: "100%",
                                maxWidth: 700,
                                bgcolor: "background.paper",
                              }}
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleOpen(`${baseURL}${person?.img}`)
                              }
                              key={index}
                            >
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <img
                                    alt="Remy Sharp"
                                    src={`${baseURL}${person?.img}`}
                                    style={{
                                      width: "170px",
                                      borderRadius: "10px",
                                    }}
                                    className="me-4"
                                  />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={person?.name}
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                      >
                                        Profession :{person?.profession}
                                        <br />
                                        Age:{person?.age}
                                      </Typography>
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <hr />
                            </List>
                          ))}

                          {/* If in cards use this */}
                          {/* Card layout also looks fine if added more designs */}
                          {/* <div className="row p-3">
                      {listData?.characters?.map((person, index) => (
                        <Card
                          sx={{ maxWidth: 240 }}
                          className="m-2 p-0"
                          key={index}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="120"
                              image={`${baseURL}${person?.img}`}
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {person?.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <hr />
                                Profession :{person?.profession}
                                <br />
                                Age:{person?.age}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      ))}
                    </div> */}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2 col-lg-2 col-md-2">
                          <div>Rating:</div>
                        </div>
                        <div className="col-sm-10 col-lg-10 col-md-10">
                          <div className="row">
                            <span className="col-sm-4 col-lg-4 col-md-4">
                              <StyledRating
                                name="highlight-selected-only"
                                defaultValue={3}
                                IconContainerComponent={IconContainer}
                                getLabelText={(value) =>
                                  customIcons[value].label
                                }
                                highlightSelectedOnly
                              />
                            </span>
                            <span className="col-sm-3 pt-1">
                              <a href={"!#"}>3,362 Ratings</a>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-2 col-lg-2 col-md-2">
                          <div>Reviews:</div>
                        </div>
                        <div className="col-sm-10 col-lg-10 col-md-10">
                          <div className="row">
                            <div className="card m-2">
                              <h5 className="card-header">
                                <div className="row">
                                  <span className="col-sm-3 pt-1">
                                    User1433 -
                                  </span>
                                  <span className="col-sm-3">
                                    <StyledRating
                                      name="highlight-selected-only"
                                      defaultValue={5}
                                      IconContainerComponent={IconContainer}
                                      getLabelText={(value) =>
                                        customIcons[value].label
                                      }
                                      highlightSelectedOnly
                                    />
                                  </span>
                                </div>
                              </h5>
                              <div className="card-body">
                                <h5 className="card-title">
                                  This show talks about revolution. Literally.
                                  In Indian cinema. But. Great shows deserve
                                  great ending. Alas!!!
                                </h5>
                                <p className="card-text">
                                  Reviewed in India on 6 October 2022
                                </p>
                                <a
                                  href={() => false}
                                  className="btn btn-success"
                                >
                                  Helpful
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            </Box>
          </div>
        </>
      )}
      <div className="d-flex justify-content-center mb-4">
        <Button
          variant="contained"
          endIcon={<KeyboardDoubleArrowUpIcon />}
          color="error"
          className="mt-1 animate-transition-delay-btn"
          onClick={onTopClick}
        >
          Go To Top
        </Button>
      </div>
      <ImageModal open={open} handleClose={handleClose} modalImg={modalImg} />
    </>
  );
};

export default MainList;
