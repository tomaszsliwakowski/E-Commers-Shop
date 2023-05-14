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
  DropDown,
  DropOpt,
  DropBtn,
  RightClose,
  RightPanelClose,
  LogBtn,
  RegBtn,
  EmptyBasket,
  DropOptSmall,
  DropOptFull,
} from "./styles/HeaderStyle";
import {
  DropDownProps,
  HeaderProps,
  JsxProps,
  SearchPropsFunction,
} from "../../types/Types";

export function Header(props: JsxProps) {
  return (
    <Container
      style={{
        paddingRight: `${
          props.active?.Account || props.active?.Basket || props.active2
            ? `${props.width && props.width > 500 ? "5px" : "0px"}`
            : "0rem"
        }`,
      }}
    >
      {props.children}
    </Container>
  );
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
Header.MenuListEl = function HeaderMenuListEL(props: HeaderProps) {
  return props.scroll ? (
    <ListElScroll onClick={() => props.Click(false)}>
      {props.children}
    </ListElScroll>
  ) : (
    <ListEl onClick={() => props.Click(false)}>{props.children}</ListEl>
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
Header.SearchBtn = function HeaderSearchBtn(props: SearchPropsFunction) {
  return <SearchBtn onClick={() => props.click()}>{props.children}</SearchBtn>;
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

Header.UserPanelAccountMin = function HeaderUserPanelAccountMin(
  props: DropDownProps
) {
  return (
    <PanelAccount
      onClick={() =>
        props.click({
          Account: true,
          Basket: false,
        })
      }
    >
      {props.children}
    </PanelAccount>
  );
};

Header.UserPanelBasketMin = function HeaderUserPanelBasketMin(
  props: DropDownProps
) {
  return (
    <PanelBasket
      onClick={() =>
        props.click({
          Account: false,
          Basket: true,
        })
      }
    >
      {props.children}
    </PanelBasket>
  );
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

Header.DropBtn = function HeaderDropBtn({ ...restprops }) {
  return <DropBtn {...restprops} />;
};

Header.DropDown = function HeaderDropDown(props: JsxProps) {
  return <DropDown>{props.children}</DropDown>;
};

Header.DropOpt = function HeaderDropOpt(props: JsxProps) {
  return props.style === "min" ? (
    <DropOptFull>{props.children}</DropOptFull>
  ) : props.style === "max" ? (
    <DropOptSmall>{props.children}</DropOptSmall>
  ) : (
    <DropOpt>{props.children}</DropOpt>
  );
};

Header.CloseRightPanel = function HeaderCloseRightPanel(props: JsxProps) {
  return (
    <RightPanelClose
      style={{ paddingLeft: `${props.style === "full" ? "1rem" : ""}` }}
    >
      {props.children}
    </RightPanelClose>
  );
};
Header.CloseRight = function HeaderCloseRight(props: JsxProps) {
  return <RightClose>{props.children}</RightClose>;
};

Header.LoginBtn = function HeaderLoginBtn(props: JsxProps) {
  return <LogBtn to={props.href ? props.href : ""}>{props.children}</LogBtn>;
};

Header.RegisterBtn = function HeaderRegisterBtn(props: JsxProps) {
  return <RegBtn to={props.href ? props.href : ""}>{props.children}</RegBtn>;
};

Header.EmptyBasket = function HeaderEmptyBasket(props: JsxProps) {
  return <EmptyBasket>{props.children}</EmptyBasket>;
};
