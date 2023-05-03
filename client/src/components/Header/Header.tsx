import React, { useState, useEffect } from "react";
import { Header } from "./index";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useWindowSize from "../../hooks/useWindowSize";
import {
  PanelActiveProps,
  ScrollPositionType,
  WindowSizeType,
} from "../../types/Types";
import useScrollPosition from "../../hooks/ScrollPosition";
import UserPanel from "./userpanel";
import Menu from "./menu";

const HeaderSection = () => {
  const [activeLeftMenu, setActiveLeftMenu] = useState<boolean>(false);
  const [activeRightMenu, setActiveRightMenu] = useState<PanelActiveProps>({
    Account: false,
    Basket: false,
  });
  const [ScrollAction, setScrollAction] = useState<boolean>(true);
  const { width, height }: WindowSizeType = useWindowSize();
  const { position }: ScrollPositionType = useScrollPosition();
  const [SearchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (position && position > 100) {
      setScrollAction(true);
    } else {
      setScrollAction(false);
    }
  }, [position]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body === null) {
      return;
    }
    if (activeLeftMenu || activeRightMenu.Account || activeRightMenu.Basket) {
      body.style.overflow = "hidden";
      body.style.paddingRight = "1.05rem";
    }
    return () => {
      body.style.overflow = "initial";
      body.style.paddingRight = "0rem";
    };
  }, [activeRightMenu, activeLeftMenu]);

  const searchproducts = () => {
    if (SearchInput !== "") {
      navigate(`/products/search/${SearchInput}`);
    }
  };

  return (
    <Header active={activeRightMenu} active2={activeLeftMenu}>
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
            <Header.SearchBtn click={searchproducts}>
              <AiOutlineSearch />
            </Header.SearchBtn>
          </Header.SearchBar>
        </Header.Search>
        <Header.UserPanel>
          <UserPanel
            width={width}
            activeRightMenu={activeRightMenu}
            setActiveRightMenu={setActiveRightMenu}
          />
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
          <Menu
            activeLeftMenu={activeLeftMenu}
            setActiveLeftMenu={setActiveLeftMenu}
            ScrollAction={ScrollAction}
          />
        </Header.Menu>
        {activeLeftMenu ? (
          <Header.Blur onClick={() => setActiveLeftMenu(false)}></Header.Blur>
        ) : null}
        {activeRightMenu.Account || activeRightMenu.Basket ? (
          <Header.Blur
            onClick={() =>
              setActiveRightMenu({ Account: false, Basket: false })
            }
          ></Header.Blur>
        ) : null}
      </Header.Panel>
    </Header>
  );
};

export default HeaderSection;
