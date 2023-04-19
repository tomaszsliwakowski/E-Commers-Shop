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
  justify-content: center;
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
export const Left = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-left: 2rem;
  }
`;
export const Right = styled.div`
  width: 65%;
  margin-right: 2rem;
  border-top: 1px solid rgb(204, 204, 204);

  @media screen and (max-width: 768px) {
    overflow: hidden;
    margin: 0;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
export const BestSellery = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
  padding: 0.5rem 0;
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
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
export const Newsletter = styled.div``;
export const Mobile = styled.div``;
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
  & img {
    max-width: 250px;
    margin: 0 auto;
  }
`;
export const LeftName = styled.span`
  width: 100%;
  text-align: center;
  position: relative;
  padding: 0.3rem 0.5rem 0.8rem 0.5rem;
  overflow: hidden;
`;
export const LeftPriceCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0 1rem 0;
`;
export const LeftTimerCon = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 1rem 0;
`;
export const Image = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;
export const LeftNewPrice = styled.p`
  font-weight: bold;
  font-size: 22px;
`;
export const LeftOldPrice = styled.p``;

export const Hits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
export const RightProduct = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
  gap: 0.2rem;
  transition: all 0.3s;
  @media screen and (max-width: 768px) {
    font-size: 1.2vw;
    min-width: 150px;
    margin-bottom: 1rem;
  }
  &:hover {
    box-shadow: 0 0 10px silver;
    border-radius: 1rem;
  }
`;
export const RightName = styled.div`
  font-size: 12px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    font-size: 1.2vw;
  }
`;
export const RightBuyPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0 1rem 0;
`;
export const RightPrice = styled.div``;
export const RightAddToCart = styled.div``;

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
  margin-bottom: 1rem;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    font-size: 1.2vw;
    min-width: 150px;
    margin-bottom: 1rem;
  }

  &:hover {
    box-shadow: 0 0 10px silver;
    border-radius: 1rem;
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
  padding: 0.5rem 0 1rem 0;
`;
export const BestPrice = styled.div``;
export const BestAddToCart = styled.div``;
