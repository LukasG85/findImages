import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>find the most beautiful photos</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #ffffff;
    text-transform: capitalize;
    font-size: 22px;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 50px;
    }
  }
`;
