import React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Link from "next/link";

// @material-ui/icons
import { Flag, LocationCity, Help, Grade } from "@material-ui/icons";

import ListItem from "@material-ui/core/ListItem";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Button from "../CustomButtons/Button.js";
import useTrans from "../../pages/hooks/useTrans";
import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import GoogleMap from "../Map/GoogleMap";

const StyledFooter = styled.footer`
  background-color: #5183ad;
  min-height: 200px;
  color: #fff;
  padding: 40px 20px 20px 20px;
  .footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .footer-item {
      font-size: 14px;
      word-break: break-word;
      display: flex;
      justify-content: center;
    }

    .MuiList-padding {
      padding: 0 !important;
    }
  }
`;

const useStyles = makeStyles(styles);

const Footer = (props) => {
  const classes = useStyles();
  const trans = useTrans();
  const { locale } = useRouter();

  return (
    <StyledFooter>
      <GridContainer className="footer">
        <GridItem sm={6} md={3} xs={12} className="footer-item">
        </GridItem>
        <GridItem sm={6} md={3} xs={12} className="footer-item">
          <List>
            <ListItem>
              <Link href="/tours" locale={locale}>
                <Button
                  color="transparent"
                  className={classes.navLink}
                >
                  <a style={{ color: "unset" }}><Flag className={classes.icons} /> { trans.navigator.tour }</a>
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/blog" locale={locale}>
                <Button
                  color="transparent"
                  className={classes.navLink}
                >
                  <a style={{ color: "unset" }}><Grade className={classes.icons} /> { trans.navigator.blog }</a>
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about-us" locale={locale}>
                <Button
                  href="/"
                  color="transparent"
                  className={classes.navLink}
                >
                  <Help className={classes.icons} /> { trans.navigator.about_us }
                </Button>
              </Link>
            </ListItem>
          </List>
        </GridItem>
        <GridItem sm={6} md={3} xs={12} className="footer-item">
          Copyright 2012 - 2017 AnyTrails |
          <br />
          <br />
          Sales Office: 48C Nguyen Huu Huan St, Hoan Kiem Dist, Hanoi, Vietnam |
          <br />
          <br />
          Tel/WhatsApp: +84 989 552 127 |
          <br />
          <br />
          E-mail: info@anytrails.com |
          <br />
          <br />
          Tour Operator Licence: 01-1388/2019/TCDL-GP LHQT
        </GridItem>
        <GridItem sm={6} md={3} xs={12} className="footer-item">
          <GoogleMap />
        </GridItem>
      </GridContainer>
    </StyledFooter>
  )
}

export default Footer;
