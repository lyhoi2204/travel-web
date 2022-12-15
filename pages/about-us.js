import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header/Header.js";
import HeaderLinksLeft from "../components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "../components/Header/HeaderLinksRight.js";
import Footer from "../components/Footer/Footer.js";
import Paragraph from "../components/Paragraph/Paragraph.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import useTrans from "./hooks/useTrans.js";

const Wrapper = styled.div`

`;

const StyledMainContent = styled.div`
  margin-top: 80px;
  background: #fff;
  padding: 50px 25px 0px 25px;
`;

const useStyles = makeStyles(styles);

const AboutUs = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const trans = useTrans();
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
        page="about-us"
        {...rest}
      />

      <StyledMainContent>
        <Paragraph
          title={trans.about_us.visitingVietNam.title}
          description={trans.about_us.visitingVietNam.content}
        />
      </StyledMainContent>

      <Footer />
    </Wrapper>
  )
}

export default AboutUs;