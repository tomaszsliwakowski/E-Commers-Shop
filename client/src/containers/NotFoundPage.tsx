import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <>
      <Loader>
        <span>Nie znaleziono strony!</span>
        <Goto to={"https://tomaszsliwakowski.github.io/E-Commers-Shop/"}>
          Strona główna
        </Goto>
      </Loader>
    </>
  );
};

export default NotFoundPage;

const Loader = styled.span`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & span {
    font-weight: bold;
    font-size: 50px;
  }
`;
const Goto = styled(Link)`
  background-color: #0082fa;
  width: 25%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  color: white;
  border-radius: 2rem;
  margin-top: 2rem;
  cursor: pointer;
`;
