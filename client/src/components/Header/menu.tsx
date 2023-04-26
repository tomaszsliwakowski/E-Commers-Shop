import React from "react";
import { Header } from ".";
import { AiOutlineClose } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { BsLaptop, BsKeyboard } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { UserMenuProps } from "../../types/Types";
import { NavLink } from "react-router-dom";
import { GiComputerFan } from "react-icons/gi";

const Menu = ({
  activeLeftMenu,
  setActiveLeftMenu,
  ScrollAction,
}: UserMenuProps) => {
  return (
    <>
      {activeLeftMenu ? (
        <Header.MenuClosePanel>
          <Header.CloseMenu>
            <AiOutlineClose
              onClick={() => setActiveLeftMenu((prev) => !prev)}
            />
            Menu
          </Header.CloseMenu>
        </Header.MenuClosePanel>
      ) : null}
      <Header.MenuList scroll={ScrollAction}>
        <Header.MenuListEl scroll={ScrollAction}>
          <NavLink to="/products/phone">
            <FiSmartphone /> Smartphony
          </NavLink>
        </Header.MenuListEl>
        <Header.MenuListEl scroll={ScrollAction}>
          <NavLink to="/products/notebook">
            <BsLaptop />
            Laptopy
          </NavLink>
        </Header.MenuListEl>
        <Header.MenuListEl scroll={ScrollAction}>
          <NavLink to="/products/desktop">
            <RiComputerFill /> Komputery
          </NavLink>
        </Header.MenuListEl>
        <Header.MenuListEl scroll={ScrollAction}>
          <NavLink to="/products/components">
            <GiComputerFan /> Podzespoły komputerowe
          </NavLink>
        </Header.MenuListEl>
        <Header.MenuListEl scroll={ScrollAction}>
          <NavLink to="/products/accessories">
            <BsKeyboard /> Akcesoria
          </NavLink>
        </Header.MenuListEl>
      </Header.MenuList>
    </>
  );
};

export default Menu;
