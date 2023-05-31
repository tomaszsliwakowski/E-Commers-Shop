import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0 2rem;
  margin-top: 10rem;
  @media screen and (max-width: 1250px) {
    margin-top: 7rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 450px) {
    padding: 0 0.5rem;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 1250px) {
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Bottom = styled.div``;
export const ProdImg = styled.div`
  width: 100%;
  @media screen and (max-width: 1250px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;
export const Image = styled.img`
  width: 100%;
`;
export const ProdProperty = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.1fr 0.9fr;
  @media screen and (max-width: 1250px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-column-start: 1;
  grid-column-end: 3;
  @media screen and (max-width: 1250px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 350px) {
    padding: 0 0.5rem;
  }
`;
export const Title = styled.h1`
  font-weight: normal;
  font-size: 26px;
  line-height: 32px;
  margin-top: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 350px) {
    font-size: 20px;
  }
`;
export const Opinion = styled.span`
  display: flex;
  @media screen and (max-width: 1250px) {
    border-bottom: 1px solid rgb(221, 221, 221);
  }
  & img {
    max-width: 18px;
    margin: 0.5rem 0;
  }
`;
export const Spec = styled.div`
  padding-top: 5%;
  margin-right: 1rem;
  @media screen and (max-width: 1250px) {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-right: 0;
  }
`;
export const BuyPanel = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0.8rem;
  margin-top: 5%;
  margin-left: 1rem;
  gap: 10px;

  @media screen and (max-width: 1250px) {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-left: 0;
  }
`;
export const SpecList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 1rem 0;
  @media screen and (max-width: 1250px) {
    height: fit-content;
    gap: 15px;
  }
`;
export const SpecEl = styled.li`
  padding-left: 1.5rem;
  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`;

export const Price = styled.span`
  margin: 0.5rem 0;
  width: 100%;
  text-align: end;
  font-size: 26px;
  letter-spacing: 0.5px;
  padding: 1rem 0.5rem 0 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Basket = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;
  height: 35px;
  & a {
    width: 70%;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 50%;
    }
    @media screen and (max-width: 550px) {
      width: 60%;
    }
    @media screen and (max-width: 350px) {
      width: 70%;
    }
  }
`;
export const BuyInfoList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(221, 221, 221);
  padding: 0.5rem 1rem 0 1rem;
  margin-top: 0.5rem;
`;
export const BuyInfoEl = styled.li`
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(221, 221, 221);
  padding: 0.5rem;
  &:first-of-type {
    border-top: none;
    & svg {
      color: green;
    }
  }
  & svg {
    font-size: 28px;
  }
`;
export const BuyInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
