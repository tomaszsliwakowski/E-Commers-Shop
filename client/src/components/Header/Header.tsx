import React, { useState, useEffect } from "react";
import { Header } from "./index";
import { AiOutlineSearch, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { BsLaptop, BsKeyboard } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { GiComputerFan, GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import useWindowSize from "../../hooks/useWindowSize";
import { ScrollPositionType, WindowSizeType } from "../../types/Types";
import useScrollPosition from "../../hooks/ScrollPosition";

const HeaderSection = () => {
  const [activeLeftMenu, setActiveLeftMenu] = useState<boolean>(false);
  const [ScrollAction, setScrollAction] = useState<boolean>(true);
  const { width, height }: WindowSizeType = useWindowSize();
  const { position }: ScrollPositionType = useScrollPosition();
  const [SearchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    if (position && position > 100) {
      setScrollAction(true);
    } else {
      setScrollAction(false);
    }
  }, [position]);
  return (
    <Header>
      <Header.Panel scroll={ScrollAction}>
        <Header.Hamburger scroll={ScrollAction} width={width}>
          <Header.HamburgerContainer>
            <GiHamburgerMenu
              onClick={() => setActiveLeftMenu((prev) => !prev)}
            />
          </Header.HamburgerContainer>
        </Header.Hamburger>
        <Header.Logo>
          <NavLink to="/">Shop</NavLink>
        </Header.Logo>
        <Header.Search>
          <Header.SearchBar>
            <Header.SearchInput
              type="text"
              placeholder="Search..."
              value={SearchInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchInput(e.target.value)
              }
            />
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
        <Header.Menu
          display={
            width
              ? width < 1250
                ? activeLeftMenu
                  ? "block"
                  : "none"
                : "block"
              : "block"
          }
          scroll={ScrollAction}
          scrollDisplay={activeLeftMenu ? "block" : "none"}
        >
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
              <NavLink to="#">
                <FiSmartphone /> Smartphony
              </NavLink>
            </Header.MenuListEl>
            <Header.MenuListEl scroll={ScrollAction}>
              <NavLink to="#">
                <BsLaptop />
                Laptopy
              </NavLink>
            </Header.MenuListEl>
            <Header.MenuListEl scroll={ScrollAction}>
              <NavLink to="#">
                <RiComputerFill /> Komputery
              </NavLink>
            </Header.MenuListEl>
            <Header.MenuListEl scroll={ScrollAction}>
              <NavLink to="#">
                <GiComputerFan /> Podzespoły komputerowe
              </NavLink>
            </Header.MenuListEl>
            <Header.MenuListEl scroll={ScrollAction}>
              <NavLink to="#">
                <BsKeyboard /> Akcesoria
              </NavLink>
            </Header.MenuListEl>
          </Header.MenuList>
        </Header.Menu>
        {activeLeftMenu ? (
          <Header.Blur onClick={() => setActiveLeftMenu(false)}></Header.Blur>
        ) : null}
      </Header.Panel>
    </Header>
  );
};

export default HeaderSection;
