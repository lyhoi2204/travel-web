import React from "react";
import styled from "styled-components";

const StyledAudio = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 20px 25px;
  }
  iframe {
    width: 95%;
    margin: 0 auto;
    border-radius: 15px;
    min-height: 500px;
    @media (min-width: 0px) and (max-width: 600px) {
      min-height: 250px;
    }
  }
`;

const Audio = () => {
  return (
    <StyledAudio>
      <iframe
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      >
      </iframe>
    </StyledAudio>
  )
}

export default Audio;
