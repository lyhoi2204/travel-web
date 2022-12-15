import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { APP_API_URL } from "../../configs/config";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Wrapper = styled.div`
  padding: 1.25rem 4rem;

  @media (min-width: 0px) and (max-width: 600px) {
    padding: 1.25rem 2rem;
  }
  .item {
    height: 400px;
    padding: 20px;

    @media (min-width: 0px) and (max-width: 600px) {
      height: 300px;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

const SliderImage = ({ images }) => {

  return (
    <Wrapper>
      <Slider { ...settings }>
        { images && images.map((image, index) => {

          return (
            <div className="item" key={index}>
              <img src={ APP_API_URL + image.path } alt="" />
            </div>
          )
        }) }
      </Slider>
    </Wrapper>
  );
};

export default SliderImage;
