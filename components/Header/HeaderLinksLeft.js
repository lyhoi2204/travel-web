/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Flag, LocationCity, Help, Grade } from "@material-ui/icons";

// core components
import Button from "../../components/CustomButtons/Button.js";
import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import useTrans from "../../pages/hooks/useTrans";

const useStyles = makeStyles(styles);

export default function HeaderLinksLeft(props) {
  const classes = useStyles();
  const trans = useTrans();
  const { locale } = useRouter();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/tours" locale={locale}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <a style={{ color: "unset" }}><Flag className={classes.icons} /> { trans.navigator.tour }</a>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/blog" locale={locale}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <a style={{ color: "unset" }}><Grade className={classes.icons} /> { trans.navigator.blog }</a>
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/about-us" locale={locale}>
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <Help className={classes.icons} /> { trans.navigator.about_us }
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
