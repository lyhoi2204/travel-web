import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import GridContainer from "../Grid/GridContainer.js";

const StyledSection = styled(GridContainer)`
  margin: 0px 24px;
  @media (min-width: 960px) {
    max-width: 960px;
  }
  .title {
    text-align: center;
    margin-bottom: 16px;
    @media (min-width: 0px) and (max-width: 600px) {
      font-size: 1.30rem;
      font-weight: 500;
    }
  }
  .content {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
    @media (min-width: 0px) and (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;

const Section = (props) => {

  const { title, content } = props;

  return (
    <StyledSection>
      <Typography variant="h4" className="title">{ title }</Typography>
      <Typography variant="body1" className="content">
        { content }
      </Typography>
    </StyledSection>
  )
}

export default Section;
