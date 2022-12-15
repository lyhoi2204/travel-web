import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

import Header from "../../components/Header/Header";
import HeaderLinksLeft from "../../components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "../../components/Header/HeaderLinksRight.js";
import Parallax from "../../components/Parallax/Parallax";
import SliderImage from "../../components/Slider/Slider.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { getTourBySlug, getTourRecommend } from "../../apis/apis";
import { APP_API_URL } from "../../configs/config";
import useTrans from "../hooks/useTrans";
import TripList from "../../components/Trips/TripList";

const Wrapper = styled.div`
  font-size: 1.25rem;
`;

const StyledMainContent = styled.div`
  margin-top: 80px;
  background: #fff;

  .image-parallax {
    display: flex;
    justify-content: center;
    h1 {
      font-size: 2.5rem;
      font-weight: bold;

      @media (min-width: 0px) and (max-width: 600px) {
        font-size: 1.30rem;
        font-weight: 500;
      }
    }
  }

  .introduce {
    padding: 1.25rem 4.6rem;

    @media (min-width: 0px) and (max-width: 600px) {
      padding: 1.25rem 2.3rem;
    }
  }

  .paragraph {
    padding: 1.25rem 4rem;

    @media (min-width: 0px) and (max-width: 600px) {
      padding: 1.25rem 2rem;
    }

    .item {
      margin-bottom: 20px;
    }
  
    .content {
      
    }
  }

  .recommended-article-list {
    background: #cfedff;
    padding: 88px 0px;

    .title {
      text-align: center;
      margin-bottom: 20px;
      font-size: 2.3rem;
      @media (min-width: 0px) and (max-width: 600px) {
        font-size: 1.30rem;
        font-weight: 500;
      }
    }
  }
`;

const TourDetail = (props) => {
  const { ...rest } = props;
  const router = useRouter();
  const [tourDetail, setTourDetail] = useState({});
  const [content, setContent] = useState({});
  const [countryId, setCountryId] = useState("");
  const [recommendTours, setRecommendTours] = useState([]);
  const trans = useTrans();
  const { locale } = useRouter();

  const { tour } = router.query;

  const fetchTourBySlug = async (slug) => {
    try {
      const res = await getTourBySlug(slug);
      const { data } = res;
      setTourDetail(data);
      const { content, country } = data;
      const contentIndexFiltered = content.findIndex(item => item['lang'] === locale);
      setContent(content[contentIndexFiltered]);
      setCountryId(country.id);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  const fetchTourRecommend = async (countryId) => {
    try {
      const res = await getTourRecommend(countryId);
      const { data } = res;
      const { rows } = data;
      setRecommendTours(rows);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  useEffect(() => {
    if (countryId) {
      fetchTourRecommend(countryId);
    }
  }, [countryId]);

  useEffect(() => {
    fetchTourBySlug(tour);
  }, [tour]);

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
        {...rest}
      />
      <StyledMainContent>
        <Parallax className="image-parallax" image={ APP_API_URL + tourDetail.image } page="countryDetail">
          <Typography variant="h1">
            { content.title }
          </Typography>
        </Parallax>

        <div className="introduce">
          <Typography variant="body2" dangerouslySetInnerHTML={{ __html: content.description }} >
          </Typography>
        </div>
        <SliderImage
          images={tourDetail.images}
        />
        
        <div className="paragraph">
          <GridContainer container>
            <GridItem xs={6} sm={3} md={3} className="item">
              <Typography variant="h5" className="title">Price</Typography>
            </GridItem>
            <GridItem xs={6} sm={9} md={9} className="item">
              <Typography variant="body1" className="content">{tourDetail.price}</Typography>
            </GridItem>
            <GridItem xs={6} sm={3} md={3} className="item">
              <Typography variant="h5" className="title">Duration</Typography>
            </GridItem>
            <GridItem xs={6} sm={9} md={9} className="item">
              <Typography variant="body1" className="content">{tourDetail.duration == 1 ? 'Day Tours': 'Multiple Days'}</Typography>
            </GridItem>
            <GridItem xs={6} sm={3} md={3} className="item">
              <Typography variant="h5" className="title">Place</Typography>
            </GridItem>
            <GridItem xs={6} sm={9} md={9} className="item">
              <Typography variant="body1" className="content">{tourDetail.place && tourDetail.place.name}</Typography>
            </GridItem>
            <GridItem xs={6} sm={3} md={3} className="item">
              <Typography variant="h5" className="title">Type</Typography>
            </GridItem>
            <GridItem xs={6} sm={9} md={9} className="item">
              {tourDetail.types && tourDetail.types.map(item => (
                <Typography variant="body1" className="content">{item.name}</Typography>
              ))}
            </GridItem>
          </GridContainer>
        </div>

        <div className="recommended-article-list">
          <Typography variant="h2" className="title">{ trans.tour.recommend.title }</Typography>
          <TripList
            listItem={recommendTours}
          />
        </div>

        <Footer />

      </StyledMainContent>
    </Wrapper>
  )
}

export default TourDetail;