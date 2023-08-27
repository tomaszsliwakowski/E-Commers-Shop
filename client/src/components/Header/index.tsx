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
  LogOut,
  PanelBasketEmpty,
  UserName,
  Orders,
  BasketCount,
  AccountSet,
} from "./styles/HeaderStyle";
import {
  BtnProps,
  DivProps,
  ElProps,
  HlinkProps,
  ListProps,
  SpanProps,
} from "../../types/Types";

export function Header({
  children,
  active,
  active2,
  width,
  ...restprops
}: DivProps & {
  active?: { Account: boolean; Basket: boolean };
  width?: number | undefined;
  active2?: boolean;
}) {
  return (
    <Container
      {...restprops}
      style={{
        paddingRight: `${
          active?.Account || active?.Basket || active2
            ? `${width && width > 500 ? "5px" : "0px"}`
            : "0rem"
        }`,
      }}
    >
      {children}
    </Container>
  );
}

Header.Menu = function HeaderMenu({
  children,
  scroll,
  scrollDisplay,
  display,
  ...restprops
}: DivProps & { scroll?: boolean; scrollDisplay?: string; display?: string }) {
  return scroll ? (
    <MenuScroll {...restprops} style={{ display: scrollDisplay }}>
      {children}
    </MenuScroll>
  ) : (
    <Menu {...restprops} style={{ display: display }}>
      {children}
    </Menu>
  );
};

Header.MenuList = function HeaderMenuList({
  children,
  scroll,
  ...restprops
}: ListProps & { scroll: boolean }) {
  return scroll ? (
    <ListScroll {...restprops}>{children}</ListScroll>
  ) : (
    <List {...restprops}>{children}</List>
  );
};
Header.MenuListEl = function HeaderMenuListEL({
  children,
  scroll,
  Click,
  ...restprops
}: ElProps & {
  scroll?: boolean;
  Click: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return scroll ? (
    <ListElScroll onClick={() => Click(false)}>{children}</ListElScroll>
  ) : (
    <ListEl onClick={() => Click(false)}>{children}</ListEl>
  );
};

Header.Logo = function HeaderLogo({ children, ...restprops }: DivProps) {
  return <Logo {...restprops}>{children}</Logo>;
};

Header.Hamburger = function HeaderHamburger({
  children,
  scroll,
  width,
  ...restprops
}: DivProps & { scroll: boolean; width?: number | undefined }) {
  return (
    <Hamburger
      {...restprops}
      style={
        scroll
          ? {
              display: "flex",
              justifyContent: `${
                width && width > 1250 ? "flex-end" : "center"
              }`,
            }
          : {}
      }
    >
      {children}
    </Hamburger>
  );
};
Header.HamburgerContainer = function HeaderHamburgerContainer({
  children,
  ...restprops
}: DivProps) {
  return <HamburgerContainer {...restprops}>{children}</HamburgerContainer>;
};

Header.Search = function HeaderSearch({ children, ...restprops }: DivProps) {
  return <Search {...restprops}>{children}</Search>;
};
Header.SearchBar = function HeaderSearchBar({
  children,
  ...restprops
}: DivProps) {
  return <SearchBar {...restprops}>{children}</SearchBar>;
};
Header.SearchInput = function HeaderSearchInput({ ...restprops }) {
  return <SearchInput {...restprops} />;
};
Header.SearchBtn = function HeaderSearchBtn({
  children,
  click,
  ...restprops
}: BtnProps & { click: Function }) {
  return (
    <SearchBtn {...restprops} onClick={() => click()}>
      {children}
    </SearchBtn>
  );
};

Header.Panel = function HeaderPanel({
  children,
  scroll,
  ...restprops
}: DivProps & { scroll?: boolean }) {
  return scroll ? (
    <PanelScroll {...restprops}>{children}</PanelScroll>
  ) : (
    <Panel {...restprops}>{children}</Panel>
  );
};

Header.UserPanel = function HeaderUserPanel({
  children,
  ...restprops
}: DivProps) {
  return <UserPanel {...restprops}>{children}</UserPanel>;
};

Header.UserPanelAccountMin = function HeaderUserPanelAccountMin({
  children,
  click,
  ...restprops
}: DivProps & {
  click: React.Dispatch<
    React.SetStateAction<{ Account: boolean; Basket: boolean }>
  >;
}) {
  return (
    <PanelAccount
      {...restprops}
      onClick={() =>
        click({
          Account: true,
          Basket: false,
        })
      }
    >
      {children}
    </PanelAccount>
  );
};

Header.UserPanelBasketMin = function HeaderUserPanelBasketMin({
  children,
  click,
  ...restprops
}: DivProps & {
  click: React.Dispatch<
    React.SetStateAction<{ Account: boolean; Basket: boolean }>
  >;
}) {
  return (
    <PanelBasket
      {...restprops}
      onClick={() =>
        click({
          Account: false,
          Basket: true,
        })
      }
    >
      {children}
    </PanelBasket>
  );
};

Header.UserPanelAccount = function HeaderUserPanelAccount({
  children,
  ...restprops
}: DivProps) {
  return <PanelAccount>{children}</PanelAccount>;
};

Header.UserPanelBasket = function HeaderUserPanelBasket({
  children,
  style,
  ...restprops
}: DivProps & { style?: string }) {
  return style === "true" ? (
    <PanelBasket>{children}</PanelBasket>
  ) : (
    <PanelBasketEmpty to={"/E-Commers-Shop/basket"}>
      {children}
    </PanelBasketEmpty>
  );
};

Header.PanelName = function HeaderPanelName({
  children,
  ...restprops
}: SpanProps) {
  return <Name {...restprops}>{children}</Name>;
};

Header.MenuClosePanel = function HeaderMenuClosePanel({
  children,
  ...restprops
}: DivProps) {
  return <ClosePanel {...restprops}>{children}</ClosePanel>;
};

Header.CloseMenu = function HeaderCloseMenu({
  children,
  ...restprops
}: DivProps) {
  return <CloseMenu {...restprops}>{children}</CloseMenu>;
};

Header.Blur = function HeaderBlur({ ...restprops }) {
  return <Blur {...restprops}></Blur>;
};

Header.DropBtn = function HeaderDropBtn({ ...restprops }) {
  return <DropBtn {...restprops} />;
};

Header.DropDown = function HeaderDropDown({
  children,
  ...restprops
}: DivProps) {
  return <DropDown {...restprops}>{children}</DropDown>;
};

Header.DropOpt = function HeaderDropOpt({
  children,
  style,
  ...restprops
}: DivProps & { style?: string }) {
  return style === "min" ? (
    <DropOptFull {...restprops}>{children}</DropOptFull>
  ) : style === "max" ? (
    <DropOptSmall {...restprops}>{children}</DropOptSmall>
  ) : (
    <DropOpt {...restprops}>{children}</DropOpt>
  );
};

Header.CloseRightPanel = function HeaderCloseRightPanel({
  children,
  style,
  ...restprops
}: DivProps & { style?: string }) {
  return (
    <RightPanelClose
      {...restprops}
      style={{ paddingLeft: `${style === "full" ? "1rem" : ""}` }}
    >
      {children}
    </RightPanelClose>
  );
};
Header.CloseRight = function HeaderCloseRight({
  children,
  ...restprops
}: DivProps) {
  return <RightClose {...restprops}>{children}</RightClose>;
};

Header.LoginBtn = function HeaderLoginBtn({
  children,
  href,
  ...restprops
}: HlinkProps & { href?: string }) {
  return (
    <LogBtn {...restprops} to={href ? href : ""}>
      {children}
    </LogBtn>
  );
};

Header.RegisterBtn = function HeaderRegisterBtn({
  children,
  href,
  ...restprops
}: BtnProps & { href?: string }) {
  return <RegBtn to={href ? href : ""}>{children}</RegBtn>;
};

Header.EmptyBasket = function HeaderEmptyBasket({
  children,
  ...restprops
}: SpanProps) {
  return <EmptyBasket {...restprops}>{children}</EmptyBasket>;
};
Header.LogOutBtn = function HeaderLogOutBtn({
  children,
  click,
  ...restprops
}: BtnProps & { click: Function }) {
  return (
    <LogOut {...restprops} onClick={() => click()}>
      {children}
    </LogOut>
  );
};
Header.UserName = function HeaderUserName({
  children,
  ...restprops
}: SpanProps) {
  return <UserName {...restprops}>{children}</UserName>;
};
Header.Orders = function HeaderOrders({
  children,
  href,
  ...restprops
}: HlinkProps & { href?: string }) {
  return (
    <Orders {...restprops} to={href && href ? href : ""}>
      {children}
    </Orders>
  );
};
Header.AccountSet = function HeaderAccountSet({
  children,
  href,
  ...restprops
}: HlinkProps & { href?: string }) {
  return (
    <AccountSet {...restprops} to={href && href ? href : ""}>
      {children}
    </AccountSet>
  );
};

Header.BasketCount = function HeaderBasketCount({
  children,
  ...restprops
}: SpanProps) {
  return <BasketCount {...restprops}>{children}</BasketCount>;
};
