import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import TripItem from "./TripItem";
import { APP_API_URL, LIMIT } from "../../configs/config";
import useTrans from "../../pages/hooks/useTrans.js";

const StyledTripList = styled(GridContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  padding: 0px 50px;
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 0px 25px;
  }

  .action {
    display: flex;
    justify-content: center;

    .MuiButtonBase-root {
      margin: 40px 0px;
    }
  }
`;

const TripList = (props) => {
  const trans = useTrans();
  const { locale } = useRouter();
  const router = useRouter();
  const { 
    listItem, 
    page, 
    showMore,
    linkBtn
  } = props;

  const showMoreBtn = showMore ?? true;

  const handleClick = () => {
    if(linkBtn) {
      router.push(linkBtn);
    } else {
      if (page !== "tour") {
        router.push(`/tours`, `/tours`, { locale: locale });
      } else {
        props.setOffsetPagination(props.offsetPagination + LIMIT)
      }
    }
  };

  return (
    <StyledTripList>

      { listItem && listItem.map((tour, index) => {
        const { tags, content, image, price, country } = tour;
        const contentIndexFiltered = content.findIndex(item => item['lang'] === locale);
        if (contentIndexFiltered !== -1) {
          return (
            <TripItem
              key={index}
              image={image}
              mediaTitle={"Contemplative Reptile"}
              title={content[contentIndexFiltered]['title']}
              description={content[contentIndexFiltered]['description']}
              tags={tags}
              price={price}
              tourSlug={content[contentIndexFiltered]['slug']}
              country={country}

            />
          )
        }
      }) } 
      { listItem.length > 0 && showMoreBtn && (
        <GridItem
          xs={12}
          className="trip-item action"
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClick}
          >
            { trans.home.button.moreItineraries } 
          </Button>
        </GridItem>
      ) }
    </StyledTripList>
  )
}

export default TripList;
