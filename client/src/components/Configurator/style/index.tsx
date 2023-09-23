import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1100px;
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
  font-size: 28px;
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

export const Name = styled.h4`
  font-size: 20px;
  margin-top: 5px;
`;
export const RightPart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: none;
  flex-direction: column;
  padding: 0.5rem;

  @media screen and (max-width: 500px) {
    min-height: 200px;
  }

  & svg.plus {
    min-height: 80px;
    min-width: 80px;
    height: 25%;
    width: 25%;
    color: lightgreen;
    cursor: pointer;
    padding: 1rem;
  }
  & img {
    max-width: 100%;
    margin: 0.5rem 0 0.6rem 0;
    max-height: 105px;
  }
  & ${Name} {
    font-size: 16px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    overflow: hidden;
    max-height: 2em;
    line-height: 2em;
    text-align: center;
    padding: 0 5px;
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
  & img {
    max-height: 130px;
    margin: 1rem 0 1rem 0;
  }

  @media screen and (max-width: 500px) {
    border: none;
    border-bottom: 1px solid rgb(221, 221, 221);
  }
`;
export const Image = styled.img`
  height: 100%;
  width: auto;
`;

export const Summary = styled.div`
  padding: 3rem 3rem;
  border-radius: 1rem;
  margin-top: 5rem;
  box-shadow: 0 0 10px silver;
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
  align-items: center;
  & svg {
    cursor: pointer;
  }
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
export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;
export const ModalBody = styled.div`
  background-color: white;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-radius: 1rem;
  @media screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;
export const ModalTopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgb(221, 221, 221);
  & svg {
    cursor: pointer;
    padding: 4px;
    border-radius: 2rem;
    transition: all 0.3s;
    &:hover {
      background-color: rgb(221, 221, 221);
      padding: 4px;
      border-radius: 2rem;
    }
  }
`;
export const ModalTitle = styled.span`
  font-size: 22px;
  line-height: 28px;
  color: rgb(68, 68, 68);
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const ModalContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
  gap: 1rem;
`;
export const Product = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProductTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  & img {
    max-width: 100%;
    max-height: 120px;
  }
`;
export const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;
export const ProductName = styled.span`
  font-weight: 500;
  margin: 10px 0;
  font-size: 16px;
  overflow: hidden;
  text-align: center;
  &.price {
    margin: 0;
    letter-spacing: 1px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ProductPrice = styled.span`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`;
export const ProductAdd = styled.div`
  & svg {
    color: green;
    cursor: pointer;
    border-radius: 2rem;
    border: 1px solid green;
    transition: 0.3s;
    &:hover {
      background-color: green;
      color: white;
    }
  }
`;

export const ConButton = styled.div`
  &.options {
    display: flex;
    justify-content: center;
    padding: 5px 1rem 5px 10px;
    gap: 1.5rem;
    width: fit-content;
  }
  &.container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 0px 0px 1rem;
    gap: 1.5rem;
  }
`;
export const Button = styled.button`
  width: fit-content;
  border-radius: 2rem;
  height: 25px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: white;
  gap: 2px;
  & svg {
    font-size: 20px;
  }
`;
