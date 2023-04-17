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
`;
export const Baner = styled.div`
  max-width: 1250px;
  padding: 1rem 20px;
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
  width: 100%;
`;
export const TopLeft = styled.div``;
export const TopRight = styled.div``;
export const BestSellery = styled.div`
  display: flex;
  justify-content: center;
`;
export const BestSelleryTop = styled.div``;
export const BestSelleryBottom = styled.div``;
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
export const Newsletter = styled.div``;
export const Mobile = styled.div``;
