import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
`;
export const Baner = styled.div`
  max-width: 1250px;
  padding: 1rem 0;
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    margin: 0 auto;
  }
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  gap: 0.4rem;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: normal;
    padding: 0;
  }
`;
export const Left = styled.a`
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 35%;
  }
`;
export const Right = styled.div`
  width: 65%;
  padding-right: 2rem;
  border-top: 1px solid rgb(204, 204, 204);
  & .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
      & span {
        position: relative;
        top: -2rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding-right: 0;
  }
  @media screen and (min-width: 768px) {
    width: 62%;
  }
`;
export const BestSellery = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0 1rem 0;
  padding: 0.5rem 0 1.5rem 0;
  width: 100%;
  border-top: 1px solid rgb(204, 204, 204);
  border-bottom: 1px solid rgb(204, 204, 204);
  overflow: hidden;
`;
export const BestSelleryTop = styled.h2`
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  width: 100%;
`;
export const BestSelleryBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  padding: 0 5px;
`;

export const Title = styled.h1`
  font-size: 22px;
  padding: 8px 0px 10px 12px;
`;
export const LeftImageAndTitleCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: transparent;
  & h1 {
    padding: 1rem 1.5rem;
  }
  & img {
    max-width: 250px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      max-width: 300px;
    }
  }
`;
export const LeftName = styled.span`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  padding: 0.5rem 0.8rem 0.8rem 0.8rem;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2.5em;
  line-height: 1.8em;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const LeftPriceCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0 1rem 0;
  gap: 0.5rem;
`;
export const LeftTimerCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0 0.6rem 0;
`;
export const Image = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;
export const LeftNewPrice = styled.p`
  font-weight: bold;
  font-size: 22px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;
export const LeftOldPrice = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Hits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-content: center;
  max-height: 550px;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
export const RightAddToCart = styled.div`
  border: 1px solid green;
  font-size: 20px;
  padding: 5px;
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  & svg {
    color: green;
  }
  &:hover {
    background-color: green;
    & svg {
      color: white;
    }
  }
`;

export const RightProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 230px;
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem 0 1rem;
  gap: 0.1rem;
  transition: all 0.3s;
  text-decoration: none;
  color: black;
  & a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2vw;
    min-width: 150px;

    margin: 0 2px 0.5rem 2px;
  }
  &:hover {
    box-shadow: 0 0 10px silver;
    border-radius: 1rem;
  }
  &:hover ${RightAddToCart} {
    visibility: visible;
  }
`;
export const RightName = styled.div`
  font-size: 12px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const RightBuyPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 1rem 0;
`;
export const RightPrice = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    font-size: 1.4vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BestName = styled.div`
  font-size: 12px;
  width: 100%;
  overflow: hidden;
`;
export const BestBuyPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 0.5rem 0;
`;
export const BestPrice = styled.div`
  font-size: 16px;
`;
export const BestAddToCart = styled.div`
  border: 1px solid green;
  font-size: 20px;
  padding: 5px;
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  & svg {
    color: green;
  }
  &:hover {
    background-color: green;
    & svg {
      color: white;
    }
  }
`;

export const BestProduct = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
  gap: 0.2rem;
  transition: all 0.3s;
  font-size: 18px;
  min-width: 140px;
  margin: 5px 2px 1rem 2px;
  text-decoration: none;
  color: black;
  & a {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2vw;
    min-width: 150px;
    margin-bottom: 0.5rem;
  }

  &:hover {
    box-shadow: 0 0 10px silver;
    border-radius: 1rem;
  }
  &:hover ${BestAddToCart} {
    visibility: visible;
  }
`;

export const NextShot = styled.span`
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const RemTime = styled.div`
  display: flex;
  gap: 5px;
  padding: 1rem 0;
`;
export const OneTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Time = styled.span`
  background-color: rgb(221, 221, 221);
  font-size: 1.8rem;
  padding: 0 5px 2px 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
export const TimeName = styled.span`
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
export const Dot = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  @media screen and (min-width: 768px) {
    font-size: 1.85rem;
  }
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 5rem;
  margin-top: 1rem;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const Newsletter = styled.div`
  width: 100%;
  box-shadow: 0 0 5px silver;
  border-radius: 1rem;
  padding: 1rem 0.2rem;
  display: flex;
  justify-content: center;
`;

export const BottomA = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  width: 50%;
  @media screen and (max-width: 350px) {
    padding: 0.5rem 0.2rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;
export const BottomB = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 50%;
  & img {
    max-width: 112px;
  }
  @media screen and (max-width: 600px) {
    display: none;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    width: 40%;
  }
`;
export const BottomTitle = styled.h2`
  font-size: 22px;
  padding-top: 0.2rem;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;
export const BottomText = styled.p`
  padding: 0.2rem 0 1rem 0;
  font-size: 14px;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;
export const BottomInput = styled.input`
  height: 30px;
  border-radius: 1rem 0rem 0rem 1rem;
  padding: 0 10px 0 20px;
  border: 1px solid silver;
  outline: none;
  width: 55%;
  @media screen and (min-width: 350px) {
    width: 60%;
  }
  @media screen and (min-width: 1024px) {
    width: 65%;
  }
`;
export const BottomCon = styled.div`
  position: relative;
  padding-bottom: 0.5rem;
  display: flex;
  gap: 5px;
  @media screen and (max-width: 500px) {
    &:last-of-type {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      & img {
        max-width: 45%;
      }
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const BottomBtn = styled.button`
  height: 30px;
  border-radius: 1rem;
  position: relative;
  right: 20px;
  padding: 0 10px;
  background-color: rgb(0, 130, 250);
  color: white;
  border: none;
  cursor: pointer;
`;
export const MobileAd = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 0 0 5px silver;
  border-radius: 1rem;
  padding: 1rem 0.2rem;
  justify-content: center;
  @media screen and (max-width: 600px) {
    padding: 1rem 0;
  }
`;
