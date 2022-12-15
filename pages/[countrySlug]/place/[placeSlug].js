import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const Wrapper = styled.div`
  font-size: 1.25rem;
`;

const StyledMainContent = styled.div`
  margin-top: 80px;
  background: #fff;
`;

const useStyles = makeStyles(styles);

const Place = (props) => {
  
  return (
    <div>
      ok
    </div>
  )
}

export default Place;
