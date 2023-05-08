import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 7rem;

  @media screen and (max-width: 1250px) {
    margin-top: 5rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 7rem;
  }
  display: grid;
  gap: 1rem;
  grid-template-columns: 0.65fr 0.35fr;
  grid-template-rows: 1fr;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  @media screen and (max-width: 1200px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
export const BuyPanel = styled.div`
  padding-right: 0.5rem;
`;
export const Sum = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 1rem 0;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
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
`;
export const PropertyOpt = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
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
  max-width: 150px;
  align-items: center;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 72px;
  max-height: 60px;
`;
export const PayAccept = styled.div`
  margin-bottom: 2rem;
`;
export const PayAcceptTitle = styled.h3`
  font-weight: normal;
  font-size: 18px;
`;
export const PayAcceptList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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
