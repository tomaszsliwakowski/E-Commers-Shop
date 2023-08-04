import React from "react";
import { Header } from ".";
import { AiOutlineClose } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { BsLaptop, BsKeyboard } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { GiComputerFan } from "react-icons/gi";

type UserMenuProps = {
  activeLeftMenu: boolean;
  setActiveLeftMenu: React.Dispatch<React.SetStateAction<boolean>>;
  ScrollAction: boolean;
};

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
        <Header.MenuListEl scroll={ScrollAction} Click={setActiveLeftMenu}>
          <NavLink to="/E-Commers-Shop/products/Smartphony">
            <FiSmartphone /> Smartphony
          </NavLink>
        </Header.MenuListEl>
        <Header.MenuListEl scroll={ScrollAction} Click={setActiveLeftMenu}>
          <NavLink to="/E-Commers-Shop/products/Laptopy">
            <BsLaptop />
            Laptopy
          </NavLink>
        </Header.MenuListEl>
        <Header.MenuListEl scroll={ScrollAction} Click={setActiveLeftMenu}>
          <NavLink to="/E-Commers-Shop/products/Komputery">
            <RiComputerFill /> Komputery
          </NavLink>
        </Header.MenuListEl>
        <Header.MenuListEl scroll={ScrollAction} Click={setActiveLeftMenu}>
          <NavLink to="/E-Commers-Shop/products/Podzespoly-komputerowe">
            <GiComputerFan /> Podzespoły komputerowe
          </NavLink>
        </Header.MenuListEl>
        <Header.MenuListEl scroll={ScrollAction} Click={setActiveLeftMenu}>
          <NavLink to="/E-Commers-Shop/products/Akcesoria">
            <BsKeyboard /> Akcesoria
          </NavLink>
        </Header.MenuListEl>
      </Header.MenuList>
    </>
  );
};

export default Menu;
