import React, { useContext, useState, useEffect } from "react";
import { Header } from ".";
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { ProductType } from "../../types/Types";
import { LoginRoute, RegisterRoute } from "../../routes";
import DropOptMin from "./dropOptMin";
import DropOptMax from "./dropOptMax";
import { useAppSelector } from "../../store/store";
import { AuthContext, UserType } from "../../assets/auth";

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
  const Userr: UserType = useContext(AuthContext);
  const [User, setUserr] = useState({ Name: "", Email: "" });
  const logged = false;
  const logout = async () => {};
  console.log(Userr);
  return width !== undefined ? (
    width >= 1250 ? (
      <>
        <Header.UserPanelAccount>
          <Header.DropBtn>
            <AiOutlineUser />
            Konto
          </Header.DropBtn>
          <Header.DropDown>
            {logged ? (
              <>
                <Header.DropOpt>
                  <Header.UserName>
                    {User.Name !== "" && User.Name !== undefined
                      ? User.Name.split(" ")[0]
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
          {!true ? (
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
            {logged ? (
              <>
                <Header.DropOpt>
                  <Header.UserName>
                    {User.Name !== "" && User.Name !== undefined
                      ? User.Name.split(" ")[0]
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
