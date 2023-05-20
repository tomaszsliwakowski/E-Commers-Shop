import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid rgb(204, 204, 204);
  margin: 0 auto;
  z-index: 1001;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`;
export const Menu = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px 0 5px 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 4;
  z-index: 50;
  @media screen and (max-width: 1250px) {
    position: absolute;
    display: block;
    width: 100vw;
    max-width: 320px;
    height: 100vh;
    background-color: white;
    padding: 0px;
    left: 0;
    top: 0;
    border-right: 1px solid silver;
    z-index: 50;
  }
`;

export const MenuScroll = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 4;
  z-index: 12;
  position: absolute;
  display: block;
  width: 100vw;
  max-width: 320px;
  height: 100vh;
  background-color: white;
  padding: 0px;
  left: 0;
  top: 0;
  border-right: 1px solid silver;
`;
export const Logo = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
  }
  & a {
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: rgb(26, 26, 26);
    @media screen and (min-width: 1024px) {
      padding-left: 1.2rem;
    }
  }
`;
export const Panel = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.65fr 0.25fr;
  background-color: white;
  width: 100%;
  padding-top: 0.6rem;
  max-width: 1250px;
  margin: 0 auto;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    padding: 0.6rem 0;
    grid-template-columns: 0.1fr 0.2fr 0.65fr 0.25fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 0.2fr 0.8fr;
    padding-bottom: 1rem;
  }
`;
export const PanelScroll = styled.div`
  display: grid;
  background-color: white;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  justify-content: center;
  padding: 0.6rem 0;
  grid-template-columns: 0.1fr 0.2fr 0.65fr 0.25fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 0.2fr 0.8fr;
    padding-bottom: 1rem;
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
`;
export const UserPanel = styled.div`
  width: 100%;
  max-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    justify-content: flex-end;
    padding-right: 1.5rem;
    max-width: 100%;
  }
  @media screen and (max-width: 400px) {
    padding: 0 0 0 20px;
  }
  & svg {
    color: rgb(77, 77, 77);
  }
`;
export const SearchBar = styled.div`
  width: 90%;
  border-radius: 2em;
  background-color: white;
  height: 2rem;
  display: flex;
`;
export const SearchInput = styled.input`
  width: 90%;
  height: 2.2rem;
  border-radius: 2em 0em 0em 2em;
  border: none;
  border: 1px solid silver;
  padding-left: 20px;
  outline: none;
  &:focus {
    border: 1px solid rgb(26, 26, 26);
    border-right: none;
  }
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;
export const SearchBtn = styled.button`
  width: 10%;
  height: 2.2rem;
  border-radius: 0 2em 2em 0em;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  background-color: rgb(77, 77, 77);
  @media screen and (max-width: 768px) {
    width: 15%;
  }
  &:hover {
    background-color: rgb(26, 26, 26);
  }
  & svg {
    height: 22px;
    width: auto;
    @media screen and (max-width: 768px) {
      height: 16px;
    }
  }
`;
export const List = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  gap: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    height: 93vh;
    padding: 1.5rem 0 0 0;
  }
`;
export const ListScroll = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  height: 93vh;
  padding: 1.5rem 0 0 0;
`;
export const ListEl = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: 250px;
  background-color: white;
  font-size: 15px;
  transition: all 0.3s;
  @media screen and (max-width: 1250px) {
    width: 100%;
    max-width: 320px;
  }

  & a {
    padding: 5px 10px;
    text-decoration: none;
    width: 100%;
    color: rgb(26, 26, 26);
    display: flex;
    align-items: center;
    gap: 5px;
    @media screen and (max-width: 1250px) {
      padding: 1rem 20px;
    }
    &:hover {
      box-shadow: 0 0 5px silver;
      border-radius: 8px;
      @media screen and (max-width: 1250px) {
        box-shadow: 0 0 5px silver;
      }
    }
    & svg {
      font-size: 20px;
    }
  }
`;
export const ListElScroll = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 15px;
  transition: all 0.3s;
  width: 100%;
  max-width: 320px;
  & a {
    text-decoration: none;
    width: 100%;
    color: rgb(26, 26, 26);
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: white;
    padding: 1rem 20px;

    &:hover {
      box-shadow: 0 0 5px silver;
    }
    & svg {
      font-size: 20px;
    }
  }
`;

export const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: flex-end;
  }
  @media screen and (min-width: 1250px) {
    display: none;
  }
`;
export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    font-size: 28px;
    cursor: pointer;
  }
`;
export const CloseMenu = styled.div`
  width: 100%;
  background-color: rgb(245, 245, 245);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  gap: 2rem;
  padding-left: 1rem;
  border-bottom: 1px solid rgb(204, 204, 204);
  & svg {
    cursor: pointer;
    font-size: 25px;
    transition: all 0.3s;
    &:hover {
      background-color: silver;
      border-radius: 1rem;
    }
  }
`;
export const ClosePanel = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
export const Blur = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 70%);
`;

export const DropDown = styled.div`
  display: none;
  position: absolute;
  top: 2.2rem;
  right: 0rem;
  background-color: white;
  min-width: 250px;
  box-shadow: 0px 0px 5px silver;
  z-index: 1;
  border-radius: 0px 8px 8px 8px;

  @media screen and (max-width: 1250px) {
    display: block;
    min-height: 100vh;
    top: 0;
    right: 0;
    width: 100vw;
    max-width: 320px;
    border-radius: 0;
  }
`;
export const DropOpt = styled.div`
  color: black;
  padding: 10px 16px 10px 16px;
  gap: 10px;
  text-decoration: none;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  & span {
    text-align: left;
  }

  @media screen and (max-width: 400px) {
    max-height: 28vh;
  }
`;
export const DropOptFull = styled.div`
  color: black;
  padding: 12px 16px 12px 16px;
  text-decoration: none;
  display: flex;
  width: 100%;
  flex-direction: column;
  max-height: 78vh;
  gap: 10px;
  overflow: auto;
  @media screen and (max-width: 400px) {
    max-height: 68vh;
  }
`;
export const DropOptSmall = styled(DropOptFull)`
  color: black;
  padding: 12px 16px 12px 16px;
  text-decoration: none;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  max-height: 60vh;
`;

export const Name = styled.span`
  padding: 0.5rem 1rem;
  font-weight: 500;
`;
export const DropBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const PanelAccount = styled.div`
  position: relative;
  text-decoration: none;
  height: 2.2rem;
  width: auto;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  color: rgb(26, 26, 26);
  transition: all 0.3s;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 0 10px;
  }
  &:hover {
    border-radius: 8px;
    box-shadow: 0 0 5px silver;
    @media screen and (min-width: 1250px) {
      border-radius: 8px 8px 0 0;
      border: none;
      background-color: rgb(204, 204, 204);
    }
  }
  @media screen and (min-width: 1250px) {
    &:hover ${DropDown} {
      display: block;
      z-index: 100;
      min-width: 200px;
      left: 0;
    }
    &:hover ${DropOpt} {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;
    }
  }
`;
export const PanelBasket = styled.div`
  position: relative;
  text-decoration: none;
  height: 2.2rem;
  width: auto;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  color: rgb(26, 26, 26);
  transition: all 0.3s;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 0 10px;
  }
  &:hover {
    box-shadow: 0 0 5px silver;
    border-radius: 8px;
    @media screen and (min-width: 1250px) {
      border-radius: 8px 8px 0 0;
      border: none;
      background-color: rgb(204, 204, 204);
    }
  }

  @media screen and (min-width: 1250px) {
    &:hover ${DropDown} {
      display: block;
      right: 0rem;
      top: 2.2rem;
      z-index: 100;
      border-radius: 8px 0px 8px 8px;
      min-width: 320px;
    }
    &:hover ${DropOpt} {
      min-width: 250px;
      min-height: 60px;
      display: flex;
      align-items: center;
      cursor: default;
      text-align: center;
    }
  }
`;

export const PanelBasketEmpty = styled(Link)`
  position: relative;
  text-decoration: none;
  height: 2.2rem;
  width: auto;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  color: rgb(26, 26, 26);
  transition: all 0.3s;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 0 10px;
  }
  &:hover {
    box-shadow: 0 0 5px silver;
    border-radius: 8px;
    @media screen and (min-width: 1250px) {
      border-radius: 8px 8px 0 0;
      border: none;
      background-color: rgb(204, 204, 204);
    }
  }

  @media screen and (min-width: 1250px) {
    &:hover ${DropDown} {
      display: block;
      right: 0rem;
      top: 2.2rem;
      z-index: 100;
      border-radius: 8px 0px 8px 8px;
      min-width: 320px;
    }
    &:hover ${DropOpt} {
      min-width: 250px;
      min-height: 60px;
      display: flex;
      align-items: center;
      cursor: default;
      text-align: center;
    }
  }
`;

export const RightClose = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  & span {
    margin-left: 5px;
    letter-spacing: 1px;
    color: rgb(77, 77, 77);
  }
  & svg {
    margin-left: 1rem;
    margin-right: 3rem;
    font-size: 26px;
    &:hover {
      background-color: silver;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
export const RightPanelClose = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(204, 204, 204);
  display: flex;
  align-items: center;
`;

export const LogBtn = styled(Link)`
  width: 90%;
  height: 30px;
  margin: 0.5rem 0 0 0;
  border-radius: 1rem;
  background-color: rgb(0, 130, 250);
  border: none;
  color: white;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 112, 204);
  }
`;
export const RegBtn = styled(Link)`
  width: 90%;
  height: 30px;
  margin: 0 0 0.5rem 0;
  border-radius: 1rem;
  border: 1px solid rgb(0, 130, 250);
  color: rgb(0, 130, 250);
  font-weight: bold;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    background-color: rgb(0, 112, 204);
    color: white;
  }
`;

export const EmptyBasket = styled.span`
  width: 100%;
  text-align: center;
`;

export const LogOpt = styled.button`
  width: 90%;
  height: 30px;
  margin: 0.5rem 0 0 0;
  border-radius: 1rem;
  background-color: rgb(0, 130, 250);
  border: none;
  color: white;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 112, 204);
  }
`;
export const LogOut = styled.button`
  width: 90%;
  height: 30px;
  margin: 0.5rem 0 0 0;
  border-radius: 1rem;
  background-color: rgb(0, 130, 250);
  border: none;
  color: white;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 112, 204);
  }
`;

export const UserName = styled.span`
  font-weight: 500;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2.5em;
  line-height: 1.8em;
  max-width: 100%;
  display: flex;
`;
export const Orders = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const AccountSet = styled(Link)`
  text-decoration: none;
  color: black;
`;
