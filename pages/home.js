import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Header from "../components/Header/Header.js";
import HeaderLinksLeft from "../components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "../components/Header/HeaderLinksRight.js";
import Parallax from "../components/Parallax/Parallax.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import ArticleList from "../components/Article/ArticleList.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import styled from "styled-components";
import TripList from "../components/Trips/TripList.js";
import CountryList from "../components/Countries/CountryList.js";
import Section from "../components/Section/Section.js";
import SectionColumn from "../components/Section/SectionColumn.js";
import FeedbackItem from "../components/Feedback/FeedbackItem.js";
import Footer from "../components/Footer/Footer.js";
import Form from "../components/Form/Form.js";
import { getTourHomePage, getCountries, getTourHomeByCountries } from "../apis/apis.js";

// import i18n from "../i18n/i18n";
import useTrans from "./hooks/useTrans";

const Wrapper = styled.div`
  .form-small {
    position: relative;
    display: block;
    @media (min-width: 600px) {
      display: none;
    }
  }

  .form-large {
    display: none;
    
    @media (min-width: 600px) {
      display: block;
      width: 35%;
      float: right;
    }
  }
`;

const StyledMainContent = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  .countries-explore {
    padding: 40px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .introduce {
    padding: 40px 20px 0px 20px;

    .top {
      margin: 0px 24px;

      .title {
        text-align: center;
        margin-bottom: 16px;
        @media (min-width: 0px) and (max-width: 600px) {
          font-size: 1.30rem;
          font-weight: 500;
        }
      }
    }

    .content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .audio {
        width: 100%;
        iframe {
          width: 100%;
          margin: 0 auto;
          border-radius: 15px;
          min-height: 500px;
          @media (min-width: 0px) and (max-width: 600px) {
            min-height: 250px;
          }
        }
      }

      .action {
        display: flex;
        justify-content: center;

        .MuiButtonBase-root {
          border-radius: 20px;
          background-color: #ff4f00;
        }
      }
    }
  }
`;

const StyledMainTripsList = styled.div`
  background-color: #fff;
  .top {
    padding: 40px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledMainUserFeedback = styled.div`
  background: #e5e5e5;
  .top {
    padding: 40px 20px 30px 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const useStyles = makeStyles(styles);

const Home = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [tours, setTours] = useState([]);
  const [countries, setCountries] = useState([]);
  const { locale } = useRouter();

  const trans = useTrans();

  const loadTours = async () => {
    const tours = await getTourHomeByCountries(0);
    if(tours && tours.data) {
      const { data } = tours;
      const { rows } = data;
      setTours(rows);
      // if (rows.length > 3) {
      //   setTours(rows.slice(0, 3))
      // } else {
      //   setTours(rows);
      // }
    }
  }

  const loadCountries = async () => {
    const countries = await getCountries();
    if(countries && countries.data) {
      setCountries(countries.data);
    }
  }

  useEffect(() => {
    loadCountries();
    loadTours();
  }, []);

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
        page="home"
        {...rest}
      />

      <Parallax image="/img/ha-giang-12.jpg" page="home">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                
              </div>
            </GridItem>
            <div className="form-large">
              <Form />
            </div>
          </GridContainer>
        </div>
      </Parallax>
      
      <div className="form-small">
        <Form />
      </div>

      <StyledMainContent
        className={classNames(classes.main)}
        image="/img/pattern-bg.png"
      >
        <GridContainer
          className="countries-explore"
        >
          <Section
            title={trans.home.countries.explore.title}
            content={trans.home.countries.explore.description}
          />

          {/* Countries List */}
          <CountryList
            listItem={countries}
          />

          <GridContainer
            className="introduce"
          >
            <GridContainer
              className="top"
            >
              <Typography variant="h4" className="title">{ trans.home.introduce.title }</Typography>
            </GridContainer>

            <GridContainer
              className="content"
            >
              <SectionColumn
                title={trans.home.introduce.empower_you.title}
                description={trans.home.introduce.empower_you.content}
              />

              <SectionColumn
                title={trans.home.introduce.eliminate_uncertainty.title}
                description={trans.home.introduce.eliminate_uncertainty.content}
              />

              <SectionColumn
                title={trans.home.introduce.exceed_expectations.title}
                description={trans.home.introduce.exceed_expectations.content}
              />

              {/* <GridItem
                xs={12}
                className="action"
              >
                <Button variant="contained" color="primary">
                  { trans.home.button.personalize_an_itinerary }
                </Button>
              </GridItem> */}
            </GridContainer>
          </GridContainer>
        </GridContainer>
      </StyledMainContent>

      <StyledMainTripsList>
        <GridContainer
          className="top"
        >

          <Section
            title={trans.home.travel_your_way.title}
            content={trans.home.travel_your_way.content}
          />
        </GridContainer>

        {/* Trips List */}
        { tours && tours.map((tour, index) => {
          return (
            <TripList
              key={index}
              listItem={tour}
              page="home"
              showMore={true}
              linkBtn={"/" + tour[0].country.slug}
            />
          )
        })}
      </StyledMainTripsList>

      <StyledMainUserFeedback>
        <GridContainer
          className="top"
        >
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
          <FeedbackItem />
        </GridContainer>
      </StyledMainUserFeedback>

      {/* <ArticleList /> */}

      <Footer />
      
    </Wrapper>
  );
};

export default Home;