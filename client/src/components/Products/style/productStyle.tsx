import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0 2rem;
  margin-top: 7rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  grid-template-rows: 0.08fr 0.92fr;
  @media screen and (max-width: 1250px) {
    margin-top: 5rem;
  }
`;
export const Filters = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid silver;
  border-radius: 10px;
`;
export const ProductsSec = styled.div`
  background-color: lightgreen;
  width: 100%;
  padding: 0.5rem;
  border: none;
`;
export const Header = styled.div`
  background-color: white;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding-left: 0.5rem;
  @media screen and (min-width: 1250px) {
    padding-left: 1rem;
  }
`;
export const SortPanel = styled.div`
  background-color: wheat;
`;
export const All = styled.div``;
export const FTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  @media screen and (min-width: 1250px) {
    padding: 0.5rem 1rem;
  }
`;
export const FBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0.5rem;
  @media screen and (min-width: 1250px) {
    padding: 0.5rem 1rem;
  }
`;
export const FTitle = styled.h3``;
export const FClearBtn = styled.button`
  width: fit-content;
  background: none;
  border: none;
  cursor: pointer;
`;
export const FName = styled.h4``;
export const FSection = styled.div`
  & ${FName} {
    margin-bottom: 0.5rem;
  }
`;

export const FList = styled.ul`
  list-style: none;
`;
export const FElement = styled.li``;
export const HCount = styled.span`
  font-size: 16px;
  padding: 1rem 0;
  position: relative;
  top: 3px;
`;
export const HTitle = styled.h1`
  font-size: 24px;
  padding: 1rem 0;
`;

export const FCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
export const FCheckmark = styled.span`
  position: absolute;
  top: 0px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid silver;
  &::after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const FChoose = styled.label`
  display: block;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover ${FCheckbox} ~ ${FCheckmark} {
    background-color: #ccc;
  }
  & ${FCheckbox}:checked ~ ${FCheckmark} {
    background-color: #2196f3;
    border: none;
  }
  & ${FCheckbox}:checked ~ ${FCheckmark}::after {
    display: block;
  }
  & ${FCheckmark}::after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const FPriceCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0 1rem 0;
`;
export const FPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const FPriceFromTo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid silver;
  padding: 2px 5px;
  width: 100%;
  height: 100%;
  height: 32px;
  background-color: white;
  border-radius: 1rem;
  color: silver;
  &:last-of-type {
    justify-content: flex-start;
  }
`;
export const FPriceInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 5px;
  outline: none;
  border: none;
  border-radius: 1rem;
  text-align: center;
  background-color: white;
`;
export const FPriceCurrensy = styled.div`
  width: fit-content;
  padding: 0 5px;
`;

export const Item = styled.div``;
export const IImg = styled.div`
  width: 100%;
  max-width: 300px;
`;
export const IDesc = styled.div``;
export const IName = styled.div``;
export const IOpinion = styled.div``;
export const ISpecList = styled.ul``;
export const ISpecEl = styled.li`
  list-style: none;
`;
export const IBuyPanel = styled.div``;
export const IPrice = styled.div``;
export const IBasket = styled.div``;
export const Image = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;
