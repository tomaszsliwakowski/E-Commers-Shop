import styled from "styled-components/macro";

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
  grid-template-rows: 1fr;
  max-width: 1050px;
  margin: 2rem auto;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Panel = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: fit-content;
  @media screen and (max-width: 700px) {
    margin: 0.5rem 0;
    padding: 1rem 1rem 1.5rem 1rem;
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-left: 2rem;
  @media screen and (max-width: 700px) {
    align-items: center;
    margin-top: 2rem;
    padding: 0;
  }
`;
export const Title = styled.h2`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputName = styled.span`
  position: absolute;
  top: 12px;
  left: 45px;
  height: fit-content;
  pointer-events: none;
  transition: all 0.1s ease;
  color: rgb(148, 148, 148);
`;
export const PassShow = styled.span`
  position: absolute;
  color: rgb(148, 148, 148);
  background: none;
  border: none;
  top: 12px;
  right: 35px;
  font-size: 14px;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 2rem;
  border: 1px solid rgb(221, 221, 221);
  padding: 0 1.5rem;
  font-size: 14px;
  outline: none;
  &:focus ~ ${InputName}, &:not(:focus):valid ~ ${InputName} {
    top: -8px;
    background-color: white;
    padding: 0 8px;
  }
`;
export const InputCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 1.5rem;
`;
export const InfoReg = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;
export const RegBtn = styled.a`
  border: 1px solid rgb(0, 130, 250);
  width: 100%;
  height: 40px;
  text-decoration: none;
  color: rgb(0, 130, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  max-width: 400px;
  transition: all 0.3s;
  &:hover {
    color: white;
    background-color: rgb(0, 130, 250);
  }
`;
