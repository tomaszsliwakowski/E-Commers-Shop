import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0 2rem;
  margin-top: 12rem;
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
  margin-bottom: 8rem;
  @media screen and (max-width: 1250px) {
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    margin-bottom: 0rem;
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
  @media screen and (max-width: 768px) {
    grid-template-rows: 0.5fr 0.5fr;
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
  @media screen and (max-width: 768px) {
    padding-left: 1.5rem;
  }
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

export const Desc = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0 5rem 0;
  padding: 1rem 0;
  @media screen and (max-width: 768px) {
    margin: 4rem 0 4rem 0;
    flex-direction: column;
    gap: 1rem;
    & img {
      max-height: 250px;
      width: auto;
    }
  }
`;
export const DescText = styled.span`
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
`;
export const Nav = styled.div`
  border-bottom: 1px solid rgb(221, 221, 221);
  padding-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 5%;
  padding-left: 1rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1250px) {
    gap: 3%;
  }
`;
export const NavBtn = styled.a`
  font-weight: normal;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const OpinionCom = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  margin: 4rem 0 5rem 0;
`;
export const OpinionHeader = styled.span`
  border-top: 1px solid rgb(155, 147, 147);
  font-size: 22px;
  font-weight: 500;
`;
export const OpinionMain = styled.div`
  border-bottom: 1px solid rgb(221, 221, 221);
`;

export const OpinionMainTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
export const OpinionMainBottom = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
`;
export const OpinionStars = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OpinionStarsCount = styled.span`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 0.5rem;
  & span {
    display: flex;
    justify-content: center;
  }
  & .opinion {
    font-size: 45px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  & .opinionMax {
    font-weight: 400;
    font-size: 22px;
    position: relative;
    top: 5px;
    left: 2px;
    color: rgb(148, 148, 148);
  }
  & img {
    max-width: 35px;
  }
`;
export const OpinionAdd = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem 1rem;
  gap: 1rem;
  position: relative;
`;
export const OpinionAddTitle = styled.h2`
  font-weight: 400;
  font-size: 22px;
`;
export const OpinionAddText = styled.span`
  text-align: center;
  word-wrap: break-word;
  max-width: 300px;
  color: rgb(112, 112, 112);
  font-size: 14px;
  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;
export const OpinionAddBtn = styled.button`
  font-size: 14px;
  width: 100%;
  height: 32px;
  max-width: 200px;
  background-color: rgb(0, 130, 250);
  border-radius: 1rem;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
`;

export const OpinionInput = styled.textarea`
  width: 300px;
  min-height: 50px;
  min-width: 150px;
  max-width: 300px;
  max-height: 100px;
  height: 80px;
  padding: 5px 10px;
  outline: none;
  border-radius: 0.5rem;
  &::placeholder {
    text-align: center;
  }
`;
export const OpinionAddCloseBtn = styled.button`
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;
  font-size: 18px;
  border: none;
  background-color: rgb(221, 221, 221);
  border-radius: 50%;
  padding: 3px 7px;
  cursor: pointer;
`;

export const OpinionShowTitle = styled.h2``;
export const OpinionShowList = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;
export const OpinionShowEl = styled.li`
  width: 100%;
  border-top: 1px solid rgb(221, 221, 221);
  height: 100%;
  display: flex;
  padding: 1rem 1rem;
`;
export const OpinionShowUser = styled.div`
  width: 15%;
`;
export const OpinionShowUserName = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 30px;
  & img {
    max-width: 35px;
  }
`;
export const OpinionShowDate = styled.span`
  height: 30px;
  display: flex;
  align-items: center;
  color: rgb(112, 112, 112);
`;
export const OpinionShowText = styled.span`
  margin: 1rem 0;
  overflow: hidden;
`;
export const OpinionShowContent = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export const ShowMore = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ShowMoreBtn = styled.button`
  width: 40%;
  height: 35px;
  border-radius: 1rem;
  border: 1px solid black;
  background-color: white;
  color: rgb(112, 112, 112);
  margin-top: 2rem;
  cursor: pointer;
`;
