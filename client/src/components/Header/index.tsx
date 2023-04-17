import React from "react";
import {
  Container,
  Menu,
  Logo,
  Search,
  Panel,
  UserPanel,
  SearchBar,
  SearchInput,
  SearchBtn,
  List,
  ListEl,
  PanelAccount,
  PanelBasket,
  Name,
  Hamburger,
  HamburgerContainer,
  ClosePanel,
  CloseMenu,
  Blur,
  MenuScroll,
  PanelScroll,
  ListScroll,
  ListElScroll,
} from "./styles/HeaderStyle";
import { JsxProps } from "../../types/propsTypes";

export function Header(props: JsxProps) {
  return <Container>{props.children}</Container>;
}

Header.Menu = function HeaderMenu(props: JsxProps) {
  return props.scroll ? (
    <MenuScroll style={{ display: props.scrollDisplay }}>
      {props.children}
    </MenuScroll>
  ) : (
    <Menu style={{ display: props.display }}>{props.children}</Menu>
  );
};

Header.MenuList = function HeaderMenuList(props: JsxProps) {
  return props.scroll ? (
    <ListScroll>{props.children}</ListScroll>
  ) : (
    <List>{props.children}</List>
  );
};
Header.MenuListEl = function HeaderMenuListEL(props: JsxProps) {
  return props.scroll ? (
    <ListElScroll>{props.children}</ListElScroll>
  ) : (
    <ListEl>{props.children}</ListEl>
  );
};

Header.Logo = function HeaderLogo(props: JsxProps) {
  return <Logo>{props.children}</Logo>;
};

Header.Hamburger = function HeaderHamburger(props: JsxProps) {
  return (
    <Hamburger
      style={
        props.scroll
          ? {
              display: "flex",
              justifyContent: `${
                props.width && props.width > 1250 ? "flex-end" : "center"
              }`,
            }
          : {}
      }
    >
      {props.children}
    </Hamburger>
  );
};
Header.HamburgerContainer = function HeaderHamburgerContainer(props: JsxProps) {
  return <HamburgerContainer>{props.children}</HamburgerContainer>;
};

Header.Search = function HeaderSearch(props: JsxProps) {
  return <Search>{props.children}</Search>;
};
Header.SearchBar = function HeaderSearchBar(props: JsxProps) {
  return <SearchBar>{props.children}</SearchBar>;
};
Header.SearchInput = function HeaderSearchInput({ ...restprops }) {
  return <SearchInput {...restprops} />;
};
Header.SearchBtn = function HeaderSearchBtn(props: JsxProps) {
  return <SearchBtn>{props.children}</SearchBtn>;
};

Header.Panel = function HeaderPanel(props: JsxProps) {
  return props.scroll ? (
    <PanelScroll>{props.children}</PanelScroll>
  ) : (
    <Panel>{props.children}</Panel>
  );
};

Header.UserPanel = function HeaderUserPanel(props: JsxProps) {
  return <UserPanel>{props.children}</UserPanel>;
};

Header.UserPanelAccount = function HeaderUserPanelAccount(props: JsxProps) {
  return <PanelAccount href={props.href}>{props.children}</PanelAccount>;
};

Header.UserPanelBasket = function HeaderUserPanelBasket(props: JsxProps) {
  return <PanelBasket href={props.href}>{props.children}</PanelBasket>;
};
Header.PanelName = function HeaderPanelName(props: JsxProps) {
  return <Name>{props.children}</Name>;
};

Header.MenuClosePanel = function HeaderMenuClosePanel(props: JsxProps) {
  return <ClosePanel>{props.children}</ClosePanel>;
};

Header.CloseMenu = function HeaderCloseMenu(props: JsxProps) {
  return <CloseMenu>{props.children}</CloseMenu>;
};

Header.Blur = function HeaderBlur({ ...restprops }) {
  return <Blur {...restprops}></Blur>;
};
