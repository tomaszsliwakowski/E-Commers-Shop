import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0 2rem;
  margin-top: 7rem;
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: 0.25fr 0.75fr;

  @media screen and (max-width: 1250px) {
    margin-top: 5rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 7rem;
    grid-template-columns: 0.4fr 0.6fr;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 0 5px;
    position: relative;
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
  @media screen and (max-width: 550px) {
    position: absolute;
    z-index: 100;
    width: fit-content;
    margin: 4rem 10px 0 10px;
    height: fit-content;
  }
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
  @media screen and (max-width: 550px) {
    justify-content: center;
  }
`;
export const ProductsSec = styled.div`
  background-color: white;
  width: 100%;
  padding: 0 1.5rem;
  border: none;
  display: grid;
  grid-template-rows: 0.05fr 0.95fr;
  height: fit-content;
  @media screen and (max-width: 550px) {
    padding: 0 10px;
    grid-template-rows: 1fr;
    margin-bottom: 3rem;
  }
`;
export const SortPanel = styled.div`
  background-color: white;
  height: 60px;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 550px) {
    justify-content: center;
  }
`;

export const FTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid silver;
  border-radius: 10px 10px 0px 0px;
  border-bottom: none;
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
  border: 1px solid silver;
  border-radius: 0px 0px 10px 10px;
  border-top: none;
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
  & svg {
    font-size: 30px;
  }
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
  max-width: 1000px;
  overflow: hidden;
  @media screen and (max-width: 1250px) {
    max-width: 250px;
  }
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
    background-color: rgb(231, 228, 228);
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
export const All = styled.div`
  padding: 1rem 0.5rem;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 0.1fr 0.8fr;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IImg = styled.div`
  width: 100%;
  max-width: 300px;
`;
export const IDesc = styled.div``;
export const IName = styled.div`
  font-size: 14px;
  width: 100%;
`;
export const IOpinion = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  padding-top: 2px;
  align-items: center;
  & img {
    width: 20px;
  }
`;
export const ISpecList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px 0;
`;
export const ISpecEl = styled.li`
  list-style: none;
  font-size: 12px;
  color: rgb(77, 77, 77);
`;
export const IBuyPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 0rem 0;
`;
export const IPrice = styled.span`
  font-size: 18px;
  letter-spacing: 1px;
`;
export const IBasket = styled.div``;
export const Image = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;

export const SPSelect = styled.div`
  display: flex;
  border: 1px solid silver;
  border-radius: 10px;
  position: relative;
  height: 35px;
  margin-left: 1rem;
  padding: 2px 0.5rem;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
`;
export const SPSort = styled.span`
  position: absolute;
  top: -12px;
  left: 5px;
  background-color: white;
  padding: 0 5px;
  color: silver;
  font-size: 14px;
`;
export const SPShow = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;
export const SPShowOpt = styled.span`
  padding: 0 8px;
  font-size: 1.8vw;
  @media screen and (min-width: 850px) {
    font-size: 15px;
  }
  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
`;
export const SPList = styled.ul`
  list-style: none;
  position: absolute;
  display: none;
  width: calc(100% + 2px);
  background-color: white;
  top: 2.1rem;
  height: 6.9rem;
  flex-direction: column;
  left: -1px;
  z-index: 22;
  border: 1px solid silver;
  padding: 0rem 0;
  border-radius: 0 0 10px 10px;
`;
export const SPListEl = styled.li`
  padding: 0.5rem 1rem;
  transition: all 0.3s;
  font-size: 15px;
  &:hover {
    background-color: rgb(231, 228, 228);
  }
  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }
`;
export const AddToCart = styled.div`
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
export const Item = styled.a`
  width: 100%;
  max-width: 280px;
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover ${AddToCart} {
    visibility: visible;
  }
  &:hover {
    box-shadow: 0 0 8px silver;
    border-radius: 10px;
  }
  @media screen and (max-width: 550px) {
    margin: 0 auto;
  }
`;
export const SPCheckbox = styled.input`
  background-color: transparent;
  opacity: 0;
  border: none;
  outline: none;
  position: absolute;
  width: calc(100% + 2px);
  top: 0rem;
  left: 0rem;
  border-radius: 10px;
  z-index: 100;
  cursor: pointer;
  height: 100%;
  @media screen and (max-width: 550px) {
    z-index: 0;
  }
`;

export const FiltrBtn = styled.span`
  & svg {
    font-size: 30px;
    @media screen and (min-width: 350px) {
      font-size: 35px;
      margin-right: 5px;
    }
  }
`;

export const AcceptFiltrBtn = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #2196f3;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
