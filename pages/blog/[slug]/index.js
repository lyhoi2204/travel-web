import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../../components/Header/Header.js";
import HeaderLinksLeft from "../../../components/Header/HeaderLinksLeft.js";
import HeaderLinksRight from "../../../components/Header/HeaderLinksRight.js";
import Paragraph from "../../../components/Paragraph/Paragraph.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import { getBlogDetailBySlug } from "../../../apis/apis";
import Footer from "../../../components/Footer/Footer.js";

const Wrapper = styled.div`
  font-size: 1.25rem;
`;

const StyledMainContent = styled.div`
  margin-top: 80px;
  background: #fff;
`;

const useStyles = makeStyles(styles);

const BlogDetail = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const router = useRouter();
  const { locale } = useRouter();
  const [blogDetail, setBlogDetail] = useState({});
  const [content, setContent] = useState({});

  const { slug } = router.query;

  const fetchBlogDetail = async (slug) => {
    try {
      const res = await getBlogDetailBySlug(slug);
      const { data } = res;
      setBlogDetail(data);
      const { content } = data;
      const contentIndexFiltered = content.findIndex(item => item['lang'] === locale);
      setContent(content[contentIndexFiltered]);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }

  useEffect(() => {
    fetchBlogDetail(slug);
  }, []);

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
        <Paragraph
          title={content.title}
          description={content.description}
        />
        
      </StyledMainContent>

      <Footer />
    </Wrapper>
  )
}

export default BlogDetail;