import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import { APP_API_URL } from "../../configs/config.js";

const StyledCountryList = styled(GridContainer)`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;

  .country-item {
    min-height: 200px;
    @media (min-width: 600px) {
      flex-basis: 33.333333% !important;
    }

    @media (min-width: 0px) and (max-width: 600px) {
      display: none;
    }
    a {
      display: flex;
      justify-content: center;
      position: relative;
      align-items: center;
      height: 100%;
      img {
      width: 90%;
      height: 90%;
      object-fit: cover;
      }
      span {
        position: absolute;
        color: #fff;
        font-weight: 500;
        font-size: 1.5rem;
      }
    }
  }
`;

const StyledCountryListText = styled(GridContainer)`
  display: none;
  @media (min-width: 0px) and (max-width: 600px) {
    display: flex;
    justify-content: center;
    .MuiButtonBase-root {
      min-width: 125px !important;
      font-size: 0.75rem;
    }
  }
`;

const PlaceList = (props) => {
  const router = useRouter();
  const { listItem } = props;
  const { locale } = useRouter();

  const { countrySlug, placeSlug } = router.query;
  
  const linkToCountry = (slug) => {
    router.push(`/countries/${slug}`, `/countries/${slug}`, { locale: locale });
  };

  return (
    <>
      <StyledCountryList>
        {listItem && listItem.map((places) => (
        <GridItem
          key={places.slug}
          className="country-item"
          lg={2}
          md={3}
          sm={4}
        >
          <Link href={`/${countrySlug}/place/${places.id}`} locale={locale} >
            <a>
              <img src={"https://api.anytrails.com/" + places.icon} />
              <span>{places.name}</span>
            </a>
          </Link>
        </GridItem>
      ))}
      </StyledCountryList>
      <StyledCountryListText>
        <List>
          { listItem && listItem.map((places, index) => {
            if (index % 2 === 0) {
              return (
                <ListItem key={index}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => linkToCountry(places.id)}
                  >
                    { places.name }
                  </Button>
                </ListItem>
              )
            }
          })}
        </List>
        <List>
          { listItem && listItem.map((places, index) => {
            if (index % 2 === 1) {
              return (
                <ListItem key={index}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => linkToCountry(places.id)}
                  >
                    { places.name }
                  </Button>
                </ListItem>
              )
            }
          })}
        </List>
      </StyledCountryListText>
    </>
  )
}

export default PlaceList;
