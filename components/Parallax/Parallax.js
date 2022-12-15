import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "styles/jss/nextjs-material-kit/components/parallaxStyle.js";
import styled from "styled-components"; 

const useStyles = makeStyles((styles));

const Wrapper = styled.div`
  height: ${props => props.page === "countryDetail" && "30vh"};

  @media (max-width: 600px) {
    min-height: unset !important;
    height: 40vh !important;
  }
`;

export default function Parallax(props) {
  let windowScrollTop;
  // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }
  // const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
  // React.useEffect(() => {
  //   if (window.innerWidth >= 768) {
  //     window.addEventListener("scroll", resetTransform);
  //   }
  //   return function cleanup() {
  //     if (window.innerWidth >= 768) {
  //       window.removeEventListener("scroll", resetTransform);
  //     }
  //   };
  // });
  // const resetTransform = () => {
  //   var windowScrollTop = window.pageYOffset / 3;
  //   setTransform("translate3d(0," + windowScrollTop + "px,0)");
  // };
  const {
    filter,
    className,
    children,
    style,
    image,
    small,
    responsive,
    page,
  } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    [className]: className !== undefined,
  });
  return (
    <Wrapper
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        // transform: transform,
        minHeight: page === "home" && "100vh",
      }}
    >
      {children}
    </Wrapper>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
  // this will add a min-height of 660px on small screens
  responsive: PropTypes.bool,
};
