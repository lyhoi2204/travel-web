import React from "react";
import styled from "styled-components";

import Article from "./Article";

const StyledArticleList = styled.div`
  background: ${ props => props.background ? props.background : '#e5e5e5' };
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 50px 25px;
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 0px 25px;
  }
`;

const ArticleList = (props) => {

  return (
    <StyledArticleList
      background={props.background}
    >
      <Article
        image={"/img/trips/family-temple.jpg"}
        mediaTitle={"Contemplative Reptile"}
        title={"Our Escape from the Ordinary"}
        description={"Expert Choice Go on a dream vacation with your favorite person as you explore everything from the cloud forests of Monteverde, to the hot springs of Bagaces, and the beaches of Punta Islita."}
      />
      <Article
        image={"/img/trips/family-temple.jpg"}
        mediaTitle={"Contemplative Reptile"}
        title={"Our Escape from the Ordinary"}
        description={"Expert Choice Go on a dream vacation with your favorite person as you explore everything from the cloud forests of Monteverde, to the hot springs of Bagaces, and the beaches of Punta Islita."}
      />
      <Article
        image={"/img/trips/family-temple.jpg"}
        mediaTitle={"Contemplative Reptile"}
        title={"Our Escape from the Ordinary"}
        description={"Expert Choice Go on a dream vacation with your favorite person as you explore everything from the cloud forests of Monteverde, to the hot springs of Bagaces, and the beaches of Punta Islita."}
      />
    </StyledArticleList>
  )
}

export default ArticleList;
