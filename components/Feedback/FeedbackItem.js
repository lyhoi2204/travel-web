import React from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";

import GridItem from "../Grid/GridItem.js";

const StyledFeedbackItem = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  .avatar {
    width: 125px;
    height: 125px;
  }
  .content {
    font-size: 1.25rem;
    color: #000;
    text-align: center;
    font-weight: 500;
    line-height: 1.5em;
    white-space: pre-line;
  }
  .name {
    color: #000;
    display: inline;
    text-align: center;
    font-weight: 500;
  }
`;

const FeedbackItem = (props) => {
  const { } = props;

  return (
    <StyledFeedbackItem xs={12} sm={6} md={5} >
      <Avatar src="/img/feedback/user-1.jpg" alt="Remy Sharp" className="avatar" />
      <Typography variant="h2" className="content" >"Seamless experience, everything flowed perfectly."</Typography>
      <Typography variant="body2" className="name" >Lisa C.</Typography>
      <Typography variant="body2" className="time" >2-time Anywhere traveler</Typography>
    </StyledFeedbackItem>
  )
}

export default FeedbackItem;
