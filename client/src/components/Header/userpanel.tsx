import React, { useContext, useState, useEffect } from "react";
import { Header } from ".";
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { ProductType } from "../../types/Types";
import { LoginRoute, RegisterRoute } from "../../routes";
import DropOptMin from "./dropOptMin";
import DropOptMax from "./dropOptMax";
import { useAppSelector } from "../../store/store";
import { AuthContext, UserAuth } from "../../assets/auth";

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

const UserPanel = ({
  width,
  activeRightMenu,
  setActiveRightMenu,
}: UserPanelProps) => {
  const BasketProducts: { basket: Array<{ product: ProductType }> } =
    useAppSelector((state) => state.basket);
  const { User }: UserAuth = useContext(AuthContext);

  const getCookie = (name: string) => {
    return document.cookie.split(";").some((c) => {
      return c.trim().startsWith(name + "=");
    });
  };
  const deleteCookie = (name: string, path: string, domain: string) => {
    if (getCookie(name)) {
      document.cookie =
        name +
        "=" +
        (path ? ";path=" + path : "") +
        (domain ? ";domain=" + domain : "") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  };
  const logout = () => {
    deleteCookie("SHOP_AUTH", "/", "localhost");
    window.location.reload();
  };

  return width !== undefined ? (
    width >= 1250 ? (
      <>
        <Header.UserPanelAccount>
          <Header.DropBtn>
            <AiOutlineUser />
            Konto
          </Header.DropBtn>
          <Header.DropDown>
            {User._id !== "" ? (
              <>
                <Header.DropOpt>
                  <Header.UserName>
                    {User.username !== "" && User.username !== undefined
                      ? User.username.split(" ")[0]
                      : null}
                  </Header.UserName>
                  <Header.Orders>Zamówienia</Header.Orders>
                  <Header.AccountSet>Ustawiania</Header.AccountSet>
                </Header.DropOpt>
                <Header.DropOpt>
                  <Header.LogOutBtn click={logout}>
                    Wyloguj się
                  </Header.LogOutBtn>
                </Header.DropOpt>
              </>
            ) : (
              <>
                <Header.DropOpt>
                  <Header.LoginBtn href={LoginRoute}>Zaloguj</Header.LoginBtn>
                </Header.DropOpt>
                <Header.DropOpt>
                  <Header.RegisterBtn href={RegisterRoute}>
                    Zarejestruj się
                  </Header.RegisterBtn>
                </Header.DropOpt>
              </>
            )}
          </Header.DropDown>
        </Header.UserPanelAccount>
        <Header.UserPanelBasket style={true.toString()}>
          <Header.DropBtn>
            <SlBasket />
            Koszyk
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
                  <Header.EmptyBasket>
                    Twój koszyk jest pusty!
                  </Header.EmptyBasket>
                </Header.DropOpt>
              ) : (
                <DropOptMax BasketProducts={BasketProducts} />
              )}
            </Header.DropDown>
          )}
        </Header.UserPanelBasket>
      </>
    ) : (
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
              <>
                <Header.DropOpt>
                  <Header.UserName>
                    {User.username !== "" && User.username !== undefined
                      ? User.username.split(" ")[0]
                      : null}
                  </Header.UserName>

                  <Header.Orders>Zamówienia</Header.Orders>
                  <Header.AccountSet>Ustawiania</Header.AccountSet>
                </Header.DropOpt>
                <Header.DropOpt>
                  <Header.LogOutBtn click={logout}>
                    Wyloguj się
                  </Header.LogOutBtn>
                </Header.DropOpt>
              </>
            ) : (
              <>
                <Header.DropOpt>
                  <Header.LoginBtn href={LoginRoute}>Zaloguj</Header.LoginBtn>
                </Header.DropOpt>
                <Header.DropOpt>
                  <Header.RegisterBtn href={RegisterRoute}>
                    Zarejestruj się
                  </Header.RegisterBtn>
                </Header.DropOpt>
              </>
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
    )
  ) : null;
};

export default UserPanel;
