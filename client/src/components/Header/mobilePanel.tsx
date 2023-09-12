import React from "react";
import { UserType } from "../../assetsCon/auth";
import { Header } from ".";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import LoggedPanel from "./loggedPanel";
import NotLogged from "./notLogged";
import { BasketProductsType } from "../../types/Types";
import { SlBasket } from "react-icons/sl";
import DropOptMax from "./dropOptMax";
import DropOptMin from "./dropOptMin";

type Props = {
  User: UserType;
  BasketProducts: BasketProductsType;
  logout: Function;
  setActiveRightMenu: React.Dispatch<
    React.SetStateAction<{
      Account: boolean;
      Basket: boolean;
    }>
  >;
  activeRightMenu: {
    Account: boolean;
    Basket: boolean;
  };
};

const MobilePanel = (props: Props) => {
  const { User, BasketProducts, logout, setActiveRightMenu, activeRightMenu } =
    props;
  return (
    <>
      <Header.UserPanelAccountMin click={setActiveRightMenu}>
        <Header.DropBtn>
          <AiOutlineUser />
          Konto
        </Header.DropBtn>
      </Header.UserPanelAccountMin>
      <Header.UserPanelBasketMin click={setActiveRightMenu}>
        <Header.DropBtn>
          <SlBasket />
          Koszyk
          {BasketProducts.basket.length > 0 ? (
            <Header.BasketCount>
              {BasketProducts.basket.length}
            </Header.BasketCount>
          ) : null}
        </Header.DropBtn>
      </Header.UserPanelBasketMin>

      {activeRightMenu.Account ? (
        <Header.DropDown>
          <Header.CloseRightPanel>
            <Header.CloseRight>
              <AiOutlineClose
                onClick={() =>
                  setActiveRightMenu({ Account: false, Basket: false })
                }
              />
              Konto
            </Header.CloseRight>
          </Header.CloseRightPanel>
          {User._id !== "" ? (
            <LoggedPanel User={User} logout={logout} />
          ) : (
            <NotLogged />
          )}
        </Header.DropDown>
      ) : null}
      {activeRightMenu.Basket ? (
        <Header.DropDown>
          <Header.CloseRightPanel>
            <Header.CloseRight>
              <AiOutlineClose
                onClick={() =>
                  setActiveRightMenu({ Account: false, Basket: false })
                }
              />
              Koszyk
              {BasketProducts.basket.length > 0 ? (
                <span>({BasketProducts.basket.length})</span>
              ) : null}
            </Header.CloseRight>
          </Header.CloseRightPanel>
          {BasketProducts.basket.length < 1 ? (
            <Header.DropOpt>
              <Header.EmptyBasket>Twój koszyk jest pusty!</Header.EmptyBasket>
            </Header.DropOpt>
          ) : (
            <DropOptMin BasketProducts={BasketProducts} />
          )}
        </Header.DropDown>
      ) : null}
    </>
  );
};

export default MobilePanel;
