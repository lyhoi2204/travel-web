import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import GridItem from "../Grid/GridItem";

import styled from "styled-components";

const StyledArticle = styled(GridItem)`
  margin-bottom: 12px !important;
  .media {
    height: 300px;
    min-height: 200px;
  }
  .card-footer {
    .read-more {
      text-transform: unset !important;
    }
  }
`;

const Article = (props) => {

  const { image, mediaTitle, title, description } = props;

  return (
    <StyledArticle
      xs={12}
      sm={6}
      lg={4}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            image={image}
            title={mediaTitle}
            className="media"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { title }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { description }
            </Typography>
            <br />
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing className="card-footer">
          <Typography variant="subtitle2" className="read-more" component="a" target="_blank" href="/components">Continue reading...</Typography>
        </CardActions>
      </Card>
    </StyledArticle>
  )
}

export default Article;
