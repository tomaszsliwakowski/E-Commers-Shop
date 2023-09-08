import React, { useContext } from "react";
import { BasketProductsType } from "../../types/Types";
import { HomeRoute, LocalRoute } from "../../routes";
import { useAppSelector } from "../../store/store";
import { AuthContext, UserAuth } from "../../assets/auth";
import DesktopPanel from "./desktopPanel";
import MobilePanel from "./mobilePanel";

type UserPanelProps = {
  width?: number;
  activeRightMenu: {
    Account: boolean;
    Basket: boolean;
  };
  setActiveRightMenu: React.Dispatch<
    React.SetStateAction<{
      Account: boolean;
      Basket: boolean;
    }>
  >;
};

export const getCookie = (name: string) => {
  return document.cookie.split(";").some((c) => {
    return c.trim().startsWith(name + "=");
  });
};
export const deleteCookie = (name: string, path: string, domain: string) => {
  if (getCookie(name)) {
    document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
};

const UserPanel = ({
  width,
  activeRightMenu,
  setActiveRightMenu,
}: UserPanelProps) => {
  const BasketProducts: BasketProductsType = useAppSelector(
    (state) => state.basket
  );
  const { User }: UserAuth = useContext(AuthContext);

  const logout = () => {
    deleteCookie("SHOP_AUTH", "/", "localhost");
    if (window.location.pathname !== HomeRoute) {
      window.location.assign(`${LocalRoute}${HomeRoute}`);
    } else window.location.reload();
  };

  return width !== undefined ? (
    width >= 1250 ? (
      <DesktopPanel
        User={User}
        BasketProducts={BasketProducts}
        logout={logout}
      />
    ) : (
      <MobilePanel
        User={User}
        activeRightMenu={activeRightMenu}
        setActiveRightMenu={setActiveRightMenu}
        logout={logout}
        BasketProducts={BasketProducts}
      />
    )
  ) : null;
};

export default UserPanel;
