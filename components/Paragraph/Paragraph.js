import React from "react";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

const StyledParagraph = styled.div`
  padding: 1.25rem 6rem;
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 1.25rem 2rem;
  }
  
  .item-para {
    .title {
      font-weight: 800;
      margin-bottom: 16px;
      font-size: 1.8rem;
      @media (min-width: 0px) and (max-width: 600px) {
        font-size: 1.4rem;
        font-weight: 500;
      }
    }

    .content {
      margin-top: 20px;
      white-space: pre-wrap;
      .title {
        font-weight: 800;
        margin-bottom: 16px;
        font-size: 1.3rem;
        @media (min-width: 0px) and (max-width: 600px) {
          font-size: 0.9rem;
          font-weight: 500;
        }
      }

      .title-decoration {
        margin-bottom: 16px;
        text-decoration: underline;
      }

      .content-wrapper {
        margin-top: 20px;
      }
    }

    .font-weight-bold {
      font-weight: bold;
    }
  }
`;

const Paragraph = ({ title, description }) => {

  return (
    <StyledParagraph>
      <div className="item-para">
        <Typography variant="h2" className="title">{ title }</Typography>
        <Typography variant="body1" className="content" component="p" dangerouslySetInnerHTML={{ __html: description }} ></Typography>
      </div>
    </StyledParagraph>
  )
}

export default Paragraph;
