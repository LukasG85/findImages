import React from "react";
import styled from "styled-components";

export default function SearchImages(props) {
  const { searchText, amount } = props.state;
  return (
    <FormWrapper>
      <input
        type="text"
        value={searchText}
        onChange={props.changeInput}
        placeholder="Szukaj zdjęcia"
      />
      <select className="select" onChange={props.amountChange} value={amount}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  height: 5vh;
  margin-bottom: 2rem;
  input {
    height: 100%;
    padding-left: 10px;
    color: #ffffff;
    border: none;
    border-bottom: 2px solid #2ababa;
    font-size: 20px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #ffffff;
    }
  }
  .select {
    height: 100%;
    color: #ffffff;
    font-size: 20px;
    border: none;
    border-bottom: 2px solid #2ababa;
    text-align: center;
    &:focus {
      outline: none;
    }
    .option:focus {
      background: #2ababa;
    }
  }
  @media (min-width: 576px) {
    input {
      font-size: 25px;
    }
    .select {
      font-size: 25px;
    }
  }
`;
