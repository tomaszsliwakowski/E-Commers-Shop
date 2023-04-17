import styled from "styled-components/macro";

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
  z-index: 22;
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
    color: rgb(0, 112, 204);
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
      padding: 5px 20px;
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
    padding: 5px 20px;

    &:hover {
      box-shadow: 0 0 5px silver;
    }
    & svg {
      font-size: 20px;
    }
  }
`;

export const PanelAccount = styled.a`
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
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 0 10px;
  }
  &:hover {
    box-shadow: 0 0 5px silver;
    border-radius: 8px;
  }
`;
export const PanelBasket = styled.a`
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
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 0 10px;
  }
  &:hover {
    box-shadow: 0 0 5px silver;
    border-radius: 8px;
  }
`;
export const Name = styled.span``;
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
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 70%);
`;
