import React from "react";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import GridItem from "../Grid/GridItem";

import styled from "styled-components";
import { Button } from "@material-ui/core";
import useTrans from "../../pages/hooks/useTrans";
import { STATIC_URL } from "../../configs/config";

const StyledTripItem = styled(GridItem)`
  margin-bottom: 12px;
  .media {
    height: 300px;
    min-height: 200px;
  }
  .chip-list {
    .chip-item {
      height: 28px !important;
      margin: 3px;
    }
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
`;

const TripItem = (props) => {
  const trans = useTrans();
  const router = useRouter();
  const { locale } = useRouter();
  const {
    image, mediaTitle, title,
    shortDescription,
    description, tags, price,
    tourSlug, country
  } = props;

  const priceDisplay = price ? "$" + price : "$: Contact";
  const imageDisplay = STATIC_URL + image;

  console.log('shortDescription', shortDescription);

  return (
    <StyledTripItem
      xs={12}
      sm={6}
      lg={4}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            image={imageDisplay}
            title={mediaTitle}
            className="media"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { title }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: shortDescription}} >
            </Typography>
            <br />
            <div className="chip-list">
              { tags && tags.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    className="chip-item"
                    label={tag.name}
                    variant="outlined"
                    color="primary"
                  />
                )
              }) }
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing className="card-footer">
          <Typography variant="body2">{ priceDisplay }</Typography>
          <Button
            size="small"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => router.push(`/${country.slug}/${tourSlug}`,`/${country.slug}/${tourSlug}` , { locale: locale })}
          >
            { trans.home.button.viewTrip } 
          </Button>
        </CardActions>
      </Card>
    </StyledTripItem>
  )
}

export default TripItem;
