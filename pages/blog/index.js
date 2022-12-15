import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";

import Header from "../../components/Header/Header.js";
import HeaderLinksLeft from "../../components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "../../components/Header/HeaderLinksRight.js";
import Footer from "../../components/Footer/Footer.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import Link from 'next/link';
import { getBlogs } from "../../apis/apis";
import { APP_API_URL, LIMIT } from "../../configs/config";
import useTrans from '../hooks/useTrans.js';
import GridItem from "../../components/Grid/GridItem";

const Wrapper = styled.div`
  font-size: 1.25rem;
`;

const StyledMainContent = styled.div`
  margin-top: 80px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 25px 0px 25px;
  .title {
    text-align: center;
    margin-bottom: 16px;
    font-size: 2.3rem;
    font-weight: bold;
    @media (min-width: 0px) and (max-width: 600px) {
      font-size: 1.30rem;
      font-weight: 500;
    }
  }

  .blog-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 25px;
    .slug {
      margin-bottom: 16px;
      font-size: 1.5rem;
      font-weight: bold;
      @media (min-width: 0px) and (max-width: 600px) {
        font-size: 0.7rem;
        font-weight: 500;
      }
    }
  }

  .load-more {
    margin: 15px 0px;
  }
`;

const useStyles = makeStyles(styles);

const Blogs = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const trans = useTrans();
  const { locale } = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [offsetPagination, setOffsetPagination] = useState(0);

  const fetchBlogs = async (offsetPagination) => {
    try {
      const res = await getBlogs(offsetPagination);
      const { data } = res;
      const { rows } = data;
      setBlogs([...blogs, ...rows]);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchBlogs(offsetPagination);
  }, [offsetPagination]);

  const loadMore = () => {
    setOffsetPagination(offsetPagination + LIMIT);
  };

  return (
    <Wrapper>
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
        {...rest}
      />
      <StyledMainContent>
        <Typography variant="h1" className="title" >{ trans.blog.travelBlog }</Typography>
        
        <List className={classes.list}>
          { blogs && blogs.map((blog, index) => {
            const { content } = blog;
            const contentIndexFiltered = content.findIndex(item => item['lang'] === locale);
            return (
              <ListItem key={index} className={classes.listItem + " blog-item"}>
                <Link href={""} locale={locale}>
                  <a>
                    <Typography variant="h3" className="slug" >{ contentIndexFiltered['title'] }</Typography>
                  </a>
                </Link>
                <Link href={""} locale={locale}>
                  <a style={{ display: "flex", justifyContent: "center" }}>
                    <img src={APP_API_URL + blog.icon} style={{ width: "50%", height: "auto" }} alt="" />
                  </a>
                </Link>
              </ListItem>
            )
          }) }
        </List>

        <GridItem
          xs={12}
          className="load-more"
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={loadMore}
          >
            { trans.blog.loadMore } 
          </Button>
        </GridItem>
      </StyledMainContent>

      <Footer />
    </Wrapper>
  )
}

export default Blogs;