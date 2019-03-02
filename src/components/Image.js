import React from "react";
import styled from "styled-components";

export default function Image(props) {
  // console.log(props.image.index);
  return (
    <ImageWrapper onClick={() => props.slider(props.image.index)}>
      {<img src={props.image.thumbnail} alt="img" />}
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  &:nth-child(5n) {
    grid-column-end: span 2;
  }
  &:nth-child(30n) {
    grid-column-end: span 1;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1024px) {
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      filter: brightness(50%);
    }
  }
`;
