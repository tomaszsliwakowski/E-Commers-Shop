import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0 2rem;
  margin-top: 10rem;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const Bottom = styled.div``;
export const ProdImg = styled.div`
  width: 100%;
`;
export const Image = styled.img``;
export const ProdProperty = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.1fr 0.9fr;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const Title = styled.h1`
  font-weight: normal;
  font-size: 26px;
  line-height: 32px;
  margin-top: 1rem;
`;
export const Opinion = styled.span`
  display: flex;
  & img {
    max-width: 18px;
    margin: 0.5rem 0;
  }
`;
export const Spec = styled.div`
  padding-top: 5%;
  margin-right: 1rem;
`;
export const BuyPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0.8rem;
  margin-top: 5%;
  margin-left: 1rem;
`;
export const SpecList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 1rem 0;
`;
export const SpecEl = styled.li``;

export const Price = styled.span`
  margin: 0.5rem 0;
  width: 100%;
  text-align: end;
  font-size: 26px;
  letter-spacing: 0.5px;
  padding: 1rem 0.5rem 0 0.5rem;
`;
export const Basket = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem 0 0.5rem;

  & a {
    width: 70%;
    height: 100%;
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
