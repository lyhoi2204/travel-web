import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Header from "../components/Header/Header.js";
import HeaderLinksLeft from "../components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "../components/Header/HeaderLinksRight.js";
import Footer from "../components/Footer/Footer.js";
import { getTourHomePage } from "../apis/apis";
import TripList from "../components/Trips/TripList";
import useTrans from "./hooks/useTrans.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const Wrapper = styled.div`

`;

const StyledMainContent = styled.div`
  margin-top: 80px;
  background: #fff;
  padding: 50px 25px 0px 25px;
  .title {
    text-align: center;
    margin-bottom: 16px;
    font-size: 2.3rem;
    font-weight: bold;
    @media (min-width: 0px) and (max-width: 600px) {
      font-size: 1.30rem;
      font-weight: 500;
    }
  }
`;

const useStyles = makeStyles(styles);

const Tours = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [tours, setTours] = useState([]);
  const trans = useTrans();
  const [offsetPagination, setOffsetPagination] = useState(0);

  const fetchTours = async (offsetPagination) => {
    try {
      const res = await getTourHomePage(offsetPagination);
      const { data } = res;
      const { rows } = data;
      setTours([...tours, ...rows]);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchTours(offsetPagination);
  }, [offsetPagination]);

  return (
    <Wrapper>
      <Header
        brand={<img src="/img/logo.png" width="70" alt="" />}
        leftLinks={<HeaderLinksLeft />}
        rightLinks={<HeaderLinksRight />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        page="tour"
        {...rest}
      />
      <StyledMainContent>
        <Typography variant="h1" className="title" >{ trans.tour.tours }</Typography>
        <TripList
          listItem={tours}
          page="tour"
          setOffsetPagination={setOffsetPagination}
          offsetPagination={offsetPagination}
        />
      </StyledMainContent>

      <Footer />
    </Wrapper>
  )
}

export default Tours;