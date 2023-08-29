import React, { useContext } from "react";
import styled from "styled-components/macro";
import UserPanel from "../Panel/Panel";
import { Settings } from ".";
import { AuthContext, UserAuth } from "../../../assets/auth";

const UserSetting = () => {
  const { User }: UserAuth = useContext(AuthContext);

  return (
    <Layout>
      <UserPanel />
      <Settings>
        <Settings.Title>Ustawienia</Settings.Title>
        <Settings.Title>Dane konta</Settings.Title>
        <Settings.DataContainer>
          <Settings.SingleDataContainer>
            <Settings.DataName>Nazwa użytkownika</Settings.DataName>
            <Settings.SingleData>
              <Settings.DataValue>test</Settings.DataValue>
              <Settings.DataBtn>Zmień</Settings.DataBtn>
            </Settings.SingleData>
          </Settings.SingleDataContainer>
          <Settings.SingleDataContainer>
            <Settings.DataName>Adres e-mail</Settings.DataName>
            <Settings.SingleData>
              <Settings.DataValue>test@gmail.com</Settings.DataValue>
              <Settings.DataBtn>Zmień</Settings.DataBtn>
            </Settings.SingleData>
          </Settings.SingleDataContainer>
          <Settings.SingleDataContainer>
            <Settings.DataName>Hasło</Settings.DataName>
            <Settings.SingleData>
              <Settings.DataValue>********</Settings.DataValue>
              <Settings.DataBtn>Zmień</Settings.DataBtn>
            </Settings.SingleData>
          </Settings.SingleDataContainer>
        </Settings.DataContainer>
        <Settings.Title>Dane do zamówienia</Settings.Title>
        <Settings.DataContainer>
          <Settings.SingleDataContainer>
            <Settings.SingleData className="order">
              {User.orderData
                ? Object.values(User.orderData).map((item, id) =>
                    item !== "" ? (
                      <Settings.DataValue key={id}>{item}</Settings.DataValue>
                    ) : null
                  )
                : null}
              {User.orderData ? (
                Object.values(User.orderData).filter((item) => item !== "")
                  .length === 0 ? (
                  <>
                    <Settings.DataValue>Brak danych</Settings.DataValue>
                    <Settings.DataBtn className="order">
                      Dodaj dane
                    </Settings.DataBtn>
                  </>
                ) : (
                  <Settings.DataBtn className="order">Zmień</Settings.DataBtn>
                )
              ) : null}
            </Settings.SingleData>
          </Settings.SingleDataContainer>
        </Settings.DataContainer>
      </Settings>
    </Layout>
  );
};

export default UserSetting;

const Layout = styled.div`
  display: flex;
  margin-top: 9rem;
  width: 100%;
  min-height: 52vh;
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
