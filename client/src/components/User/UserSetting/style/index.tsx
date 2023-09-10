import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-left: 1px solid rgb(221, 221, 221);
  padding: 0 0.5rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    border: none;
    width: 95%;
    margin: 0 auto;
    padding: 0;
  }
`;
export const Title = styled.h2`
  padding-left: 1rem;
  &:first-of-type {
    font-weight: 400;
    font-size: 31px;
    margin-top: 0;
  }
  font-weight: 400;
  margin-top: 2rem;
  font-size: 22px;
`;
export const DataContainer = styled.div`
  padding-left: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;
export const SingleDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
export const DataName = styled.span`
  font-size: 16px;
`;
export const SingleData = styled.div`
  border: 1px solid rgb(221, 221, 221);
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1rem;
  border-radius: 0.5rem;
  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
  &.order {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    max-width: 550px;
    width: fit-content;
    min-width: 200px;
  }
`;
export const DataValue = styled.span`
  letter-spacing: 0.5px;
`;
export const DataBtn = styled.button`
  font-size: 14px;
  color: rgb(0, 130, 250);
  border: none;
  background: transparent;
  cursor: pointer;
  &.order {
    margin-top: 0.5rem;
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
`;
export const ModalBody = styled.div`
  background-color: white;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
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
    &:hover {
      background-color: rgb(221, 221, 221);
      padding: 4px;
      border-radius: 2rem;
    }
  }
`;
export const ModalSaveBtn = styled.button`
  margin-top: 2rem;
  color: white;
  height: 40px;
  border-radius: 2rem;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  text-decoration: none;
  height: 40px;
  width: 100%;
  margin-bottom: 2rem;
  border: none;
  cursor: pointer;
  background-color: rgb(0, 130, 250);
  &:hover {
    background-color: rgb(0, 112, 204);
  }
`;
export const ModalTitle = styled.h3`
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
  padding: 0 2rem;
`;
export const Form = styled.form`
  width: 100%;
  height: 100%;
`;
export const InputCon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 1.5rem;
`;
export const InputName = styled.span`
  position: absolute;
  top: 12px;
  left: 1.5rem;
  height: fit-content;
  pointer-events: none;
  transition: all 0.1s ease 0s;
  color: rgb(148, 148, 148);
  font-family: Lato, sans-serif;
  font-size: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 2rem;
  border: 1px solid rgb(221, 221, 221);
  padding: 0px 1.5rem;
  font-size: 14px;
  outline: none;
  &:focus ~ ${InputName}, &:not(:focus):valid ~ ${InputName} {
    top: -8px;
    left: 1.1rem;
    background-color: white;
    padding: 0 8px;
    font-size: 14px;
  }
  &:disabled ~ ${InputName} {
    top: -8px;
    left: 1.1rem;
    background-color: white;
    padding: 0 8px;
    font-size: 13px;
  }
  &.invalid {
    border: 1px solid red;
  }
`;
export const DeleteUserBtn = styled.button`
  width: 100%;
  max-width: 100px;
  height: 35px;
  border-radius: 1rem;
  border: none;
  background-color: red;
  margin-left: 1rem;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
`;
