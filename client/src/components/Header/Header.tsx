import React from "react";
import { Header } from "./index";
import { AiOutlineSearch, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { BsLaptop } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { GiComputerFan, GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";

const HeaderSection = () => {
  return (
    <Header>
      <Header.Panel>
        <Header.Hamburger>
          <Header.HamburgerContainer>
            <GiHamburgerMenu />
          </Header.HamburgerContainer>
        </Header.Hamburger>
        <Header.Logo>
          <NavLink to="/">Shop</NavLink>
        </Header.Logo>
        <Header.Search>
          <Header.SearchBar>
            <Header.SearchInput type="text" placeholder="Search..." />
            <Header.SearchBtn>
              <AiOutlineSearch />
            </Header.SearchBtn>
          </Header.SearchBar>
        </Header.Search>
        <Header.UserPanel>
          <Header.UserPanelBasket href="#">
            <SlBasket />
            <Header.PanelName>Koszyk</Header.PanelName>
          </Header.UserPanelBasket>
          <Header.UserPanelAccount href="#">
            <AiOutlineUser />
            <Header.PanelName>Konto</Header.PanelName>
          </Header.UserPanelAccount>
        </Header.UserPanel>
        <Header.Menu>
          <Header.MenuClosePanel>
            <Header.CloseMenu>
              <AiOutlineClose />
              Menu
            </Header.CloseMenu>
          </Header.MenuClosePanel>
          <Header.MenuList>
            <Header.MenuListEl>
              <NavLink to="#">
                <FiSmartphone /> Smartphony
              </NavLink>
            </Header.MenuListEl>
            <Header.MenuListEl>
              <NavLink to="#">
                <BsLaptop />
                Laptopy
              </NavLink>
            </Header.MenuListEl>
            <Header.MenuListEl>
              <NavLink to="#">
                <RiComputerFill /> Komputery
              </NavLink>
            </Header.MenuListEl>
            <Header.MenuListEl>
              <NavLink to="#">
                <GiComputerFan /> Podzespoły komputerowe
              </NavLink>
            </Header.MenuListEl>
          </Header.MenuList>
        </Header.Menu>
        <Header.Blur></Header.Blur>
      </Header.Panel>
    </Header>
  );
};

export default HeaderSection;
