import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 8rem;

  @media screen and (max-width: 1250px) {
    margin-top: 6rem;
    padding: 0 0.5rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 8rem;
    padding: 0;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    min-height: 44vh;
    margin-bottom: 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.65fr 0.35fr;
    grid-template-rows: 1fr;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  @media screen and (max-width: 400px) {
    padding: 0px;
  }
`;
export const BuyPanel = styled.div`
  padding-right: 0.5rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const Sum = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 1rem 0;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
  & span {
    color: rgb(112, 112, 112);
    letter-spacing: 2px;
  }
`;
export const BuyPanelPrice = styled.div``;
export const BuyPanelBtn = styled.button`
  width: 100%;
  border-radius: 2rem;
  height: 40px;
  background: rgb(17, 158, 0);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  margin-bottom: 0.5rem;
  &:hover {
    background: rgb(0, 125, 0);
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ClearBasket = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 1rem;
  @media screen and (max-width: 350px) {
    padding-right: 0;
  }
`;
export const List = styled.div`
  margin-top: 1rem;
`;
export const Product = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  &:last-of-type {
    margin-bottom: 2rem;
  }
`;
export const Property = styled.div`
  padding: 1rem;
  display: flex;
  @media screen and (max-width: 400px) {
    padding: 0.5rem;
  }
`;
export const PropertyOpt = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  & a {
    width: auto;
  }
`;
export const Desc = styled.div`
  padding: 0 0.5rem;
  font-size: 14px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2.5em;
  line-height: 1.2em;
`;
export const OtherProperty = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 170px;
  align-items: center;
  margin-right: 0;
  margin-left: auto;
  gap: 5px;
  & span {
    width: 100%;
    text-align: center;
  }
  & .trash {
    font-size: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 350px) {
    max-width: 95%;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 72px;
  max-height: 60px;
`;
export const PayAccept = styled.div`
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding-left: 2rem;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    padding-left: 0.5rem;
  }
`;
export const PayAcceptTitle = styled.h3`
  font-weight: normal;
  font-size: 18px;
`;
export const PayAcceptList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  & img {
    max-width: 40px;
  }
`;
export const Goto = styled(Link)`
  text-decoration: none;
  color: rgb(26, 26, 26);
  display: flex;
  align-items: center;
`;
export const BuyPanelCon = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  padding: 0.5rem 0.8rem;
  height: auto;
`;
export const Info = styled.div`
  margin: 0.5rem 0;
  display: flex;
  & svg {
    font-size: 35px;
    color: rgb(77, 77, 77);
    @media screen and (max-width: 768px) {
      font-size: 30px;
      margin-top: 4px;
    }
  }
  & span {
    padding: 0.5rem;
    color: rgb(77, 77, 77);
    font-size: 14px;
  }
`;

export const ProdCount = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(204, 204, 204);
  padding: 6px 16px 6px 16px;
  border-radius: 2rem;

  & svg {
    font-size: 12px;
    position: absolute;
    right: 6px;
  }
`;
export const CountInput = styled.input`
  width: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;
  background: none;
  color: black;
  width: 28px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & {
    -moz-appearance: textfield;
  }
`;
export const CountActive = styled.input`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  cursor: pointer;
  opacity: 0;
`;
export const CountList = styled.ul`
  position: absolute;
  list-style: none;
  top: 1.6rem;
  right: px;
  display: flex;
  border: 1px solid rgb(204, 204, 204);
  border-top: 1px solid rgb(231, 228, 228);
  width: calc(100% + 2px);
  height: auto;
  border-radius: 0px 0px 10px 10px;
  z-index: 100;
  background-color: white;
`;
export const CountEl = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Count = styled.span`
  width: 100%;
  height: 100%;
  padding: 3px 0;
  &:hover {
    background-color: rgb(204, 204, 204);
    cursor: pointer;
  }
  &:last-of-type {
    border-radius: 0 0 0.5rem 0.5rem;
    padding-bottom: 5px;
  }
`;
