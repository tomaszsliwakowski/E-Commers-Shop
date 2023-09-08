import React from "react";
import { UserType } from "../../assets/auth";
import { Header } from ".";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import LoggedPanel from "./loggedPanel";
import NotLogged from "./notLogged";
import { BasketProductsType } from "../../types/Types";
import { SlBasket } from "react-icons/sl";
import DropOptMax from "./dropOptMax";

type Props = {
  User: UserType;
  BasketProducts: BasketProductsType;
  logout: Function;
};

const DesktopPanel = (props: Props) => {
  const { User, BasketProducts, logout } = props;
  return (
    <>
      <Header.UserPanelAccount>
        <Header.DropBtn>
          <AiOutlineUser />
          Konto
        </Header.DropBtn>
        <Header.DropDown>
          {User._id !== "" ? (
            <LoggedPanel User={User} logout={logout} />
          ) : (
            <NotLogged />
          )}
        </Header.DropDown>
      </Header.UserPanelAccount>
      <Header.UserPanelBasket style="true">
        <Header.DropBtn>
          <SlBasket />
          Koszyk
          {BasketProducts.basket.length > 0 ? (
            <Header.BasketCount>
              {BasketProducts.basket.length}
            </Header.BasketCount>
          ) : null}
        </Header.DropBtn>
        {BasketProducts.basket.length === 0 ? (
          <Header.DropDown>
            <Header.DropOpt>
              <Header.PanelName>Twój koszyk jest pusty!</Header.PanelName>
            </Header.DropOpt>
          </Header.DropDown>
        ) : (
          <Header.DropDown>
            {BasketProducts.basket.length > 1 ? (
              <Header.CloseRightPanel style="full">
                <Header.CloseRight>
                  Koszyk<span>({BasketProducts.basket.length})</span>
                </Header.CloseRight>
              </Header.CloseRightPanel>
            ) : null}
            {BasketProducts.basket.length < 1 ? (
              <Header.DropOpt>
                <Header.EmptyBasket>Twój koszyk jest pusty!</Header.EmptyBasket>
              </Header.DropOpt>
            ) : (
              <DropOptMax BasketProducts={BasketProducts} />
            )}
          </Header.DropDown>
        )}
      </Header.UserPanelBasket>
    </>
  );
};

export default DesktopPanel;
