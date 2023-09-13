import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem 0 2rem;
  margin-top: 10rem;
  margin-bottom: 8rem;
  @media screen and (max-width: 1200px) {
    margin-top: 7rem;
  }
  @media screen and (max-width: 7680px) {
    margin-top: 10rem;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
`;
export const Components = styled.div`
  margin-top: 3rem;
  height: auto;
  width: 100%;
  display: grid;
  margin-right: auto;
  margin-left: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  padding: 0.5rem 3rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem 0;
    grid-template-rows: 1fr 1fr;
  }
`;

export const Component = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 1rem;
  @media screen and (max-width: 1100px) {
    max-width: 800px;
    margin: 0 auto;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const LeftPart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  border-right: 1px solid rgb(221, 221, 221);
  @media screen and (max-width: 500px) {
    border: none;
    border-bottom: 1px solid rgb(221, 221, 221);
  }
`;
export const RightPart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: none;
  padding: 0.5rem;
  @media screen and (max-width: 500px) {
    min-height: 200px;
  }

  & svg {
    min-height: 80px;
    min-width: 80px;
    height: 25%;
    width: 25%;
    color: lightgreen;
    cursor: pointer;
    padding: 1rem;
  }
`;
export const Name = styled.h4`
  font-size: 20px;
  margin-top: 5px;
`;
export const Image = styled.img`
  height: 100%;
  max-height: 130px;
  width: auto;
  margin: 1rem 0;
`;

export const Summary = styled.div`
  background-color: rgb(221, 221, 221);
  padding: 3rem 3rem;
  border-radius: 1rem;
  margin-top: 5rem;
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
export const SumPanel = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    gap: 2rem;
    align-items: flex-end;
  }
  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;
export const SumCon = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
export const SumField = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
export const SumValue = styled.span`
  &:first-of-type {
    font-size: 20px;
    @media screen and (max-width: 400px) {
      font-size: 14px;
    }
  }
  &:last-of-type {
    font-size: 23px;
    font-weight: 700;
    letter-spacing: 0.5px;
    @media screen and (max-width: 400px) {
      font-size: 18px;
    }
  }
`;
export const SumBtn = styled.button`
  width: 100%;
  max-width: 200px;
  border-radius: 2rem;
  border: none;
  background-color: rgb(0, 130, 250);
  font-weight: bold;
  color: white;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 112, 204);
  }
`;
