import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header.js";
import SliderImage from "../../components/Slider/Slider.js";
import Audio from "../../components/Audio/Audio.js";
import Paragraph from "../../components/Paragraph/Paragraph.js";
import Footer from "../../components/Footer/Footer.js";

import HeaderLinksLeft from "../../components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "../../components/Header/HeaderLinksRight.js";
import { getCountryDetail, getCountryDetailBySlug } from "../../apis/apis";
import TripList from "../../components/Trips/TripList";
import { getTourRecommend } from "../../apis/apis";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import PlaceList from "../../components/Places/PlaceList.js";
import GridItem from "../../components/Grid/GridItem.js";
import { Button } from "@material-ui/core";
import Section from "../../components/Section/Section.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import classNames from "classnames";

const Wrapper = styled.div`
  font-size: 1.25rem;
`;

// const StyledMainContent = styled.div`
//   margin-top: 80px;
//   background: #fff;
// `;


const StyledMainContent = styled.div`
  margin-top: 80px;
  background: #fff;
  .countries-explore {
    padding: 0px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledMainContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  .title {
    text-align: center;
    margin-bottom: 16px;
    font-size: 2.3rem;
    font-weight: bold;
  }
`;

const useStyles = makeStyles(styles);

const Country = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  const router = useRouter();
  const { countrySlug } = router.query;

  const [countryDetail, setCountryDetail] = useState({});
  const [tourRecommend, setTourRecommend] = useState([]);

  useEffect(() => {
    fetchCountryDetail(countrySlug);
  }, [countrySlug]);

  const fetchCountryDetail = async (countrySlug) => {
    try {
      const res = await getCountryDetailBySlug(countrySlug);
      const { data } = res;
      setCountryDetail(data);

      fetchToursRecommend(data.id);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  const fetchToursRecommend = async (countryId) => {
    try {
      const res = await getTourRecommend(countryId);
      const { data } = res;
      const { rows } = data;
      setTourRecommend(rows);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };


  
  return (
    <Wrapper>
    {/* Header */}
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
        {...rest}
      />

      <StyledMainContent>
        <Paragraph
          title={countryDetail.title}
          description={countryDetail.description}
        />
        
        <StyledMainContentTitle className={classNames(classes.main)} >
          <Section title={"Places"} />
        </StyledMainContentTitle>
        <PlaceList
          listItem={countryDetail.places}
        />

        <StyledMainContentTitle className={classNames(classes.main)} >
        <Section
            title={"Tours"}
          />
        </StyledMainContentTitle>
        <TripList
          listItem={tourRecommend}
        />
        <Footer />
      </StyledMainContent>
    </Wrapper>
  )
}

export default Country;
