import React from "react";
import styled from "styled-components";
import UserPanel from "../Panel/Panel";

const UserSetting = () => {
  return (
    <Layout>
      <UserPanel />
      <div></div>
    </Layout>
  );
};

export default UserSetting;

const Layout = styled.div`
  display: flex;
  margin-top: 9rem;
  width: 100%;
  height: fit-content;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 0 2rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 1250px) {
    margin-top: 6rem;
    padding: 0 0.5rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 8rem;
    padding: 0;
    text-align: center;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
