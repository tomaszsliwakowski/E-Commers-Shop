import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  width: 100%;
`;
export const Top = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 3rem;
  position: relative;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
export const About = styled.div`
  width: 60%;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
export const Contact = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding-left: 12%;
  @media screen and (max-width: 600px) {
    align-items: center;
    padding: 0;
  }
  @media screen and (min-width: 1250px) {
    padding-left: 25%;
  }
`;
export const Copyright = styled.span`
  padding: 0.2rem 0;
  font-weight: 500;
  font-size: 14px;
`;
export const ContactOption = styled.li`
  list-style: none;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 0.5rem;
  font-weight: 400;
  & svg {
    font-size: 18px;
  }
  &:last-of-type {
    gap: 1rem;
    margin-top: 1rem;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
export const Title = styled.h2`
  font-size: 22px;
  &:last-of-type {
    padding-bottom: 0.5rem;
  }
`;
export const Text = styled.p`
  font-size: 14px;
  padding-top: 0.5rem;
  @media screen and (min-width: 1250px) {
    font-size: 18px;
  }
`;

export const Link = styled.a`
  color: black;
  text-decoration: none;

  & svg {
    color: black;
    font-size: 22px;
    transition: all 0.3s;
    &:hover {
      color: ${({ color }) => color};
    }
  }
`;
