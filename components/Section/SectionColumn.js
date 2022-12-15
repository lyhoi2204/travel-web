import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import GridItem from "../Grid/GridItem.js";

const StyledSectionColumn = styled(GridItem)`
  margin: 16px;

  .title-item {
    text-align: center;
    margin: 10px 0px;
    color: #82b2df;
    @media (min-width: 0px) and (max-width: 600px) {
      font-size: 1.30rem;
      font-weight: 500;
    }
  }

  .content-item {
    text-align: center;
    @media (min-width: 0px) and (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;

const SectionColumn = (props) => {

  const { title, description } = props;

  return (
    <StyledSectionColumn md={3} xs={11}>
      <Typography variant="h5" className="title-item">{ title }</Typography>
      <Typography variant="body1" className="content-item">
        { description }
      </Typography>
    </StyledSectionColumn>
  )
}

export default SectionColumn;

