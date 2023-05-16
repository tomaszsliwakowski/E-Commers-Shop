import styled from "styled-components/macro";

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding: 1rem 0;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
`;
export const Logo = styled.a`
  text-decoration: none;
  font-size: 35px;
  font-weight: bold;
  color: rgb(26, 26, 26);
`;

export const Out = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid rgb(221, 221, 221);
  margin-bottom: 1rem;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
`;
export const OutBtn = styled.a`
  width: fit-content;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  gap: 5px;
  color: rgb(26, 26, 26);
`;
export const Btn = styled.button`
  width: 90%;
  border-radius: 2rem;
  outline: none;
  border: none;
  background-color: rgb(0, 130, 250);
  height: 40px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 1rem 0 1rem 0;
  font-family: Lato, sans-serif;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  margin-left: 2rem;
  margin-top: 1.5rem;
  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;
export const Title = styled.h2`
  color: rgb(77, 77, 77);
  font-size: 18px;
  margin-bottom: 1rem;
  @media screen and (max-width: 300px) {
    font-size: 14px;
    text-align: center;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Element = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin: 0.5rem 0;
  @media screen and (max-width: 300px) {
    padding: 0 0.5rem;
  }
`;
export const Image = styled.img``;
export const Name = styled.span`
  color: rgb(77, 77, 77);
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
  padding-top: 5px;
  width: 90%;
`;
