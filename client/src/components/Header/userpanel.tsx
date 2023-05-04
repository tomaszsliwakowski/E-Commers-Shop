import React from "react";
import { Header } from ".";
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { UserPanelProps } from "../../types/Types";
import { BasketRoute, LoginRoute, RegisterRoute } from "../../routes";

const UserPanel = ({
  width,
  activeRightMenu,
  setActiveRightMenu,
}: UserPanelProps) => {
  return width !== undefined ? (
    width >= 1250 ? (
      <>
        <Header.UserPanelBasket href={BasketRoute}>
          <Header.DropBtn>
            <SlBasket />
            Koszyk
          </Header.DropBtn>
          <Header.DropDown>
            <Header.DropOpt>
              <Header.PanelName>Twój koszyk jest pusty!</Header.PanelName>
            </Header.DropOpt>
          </Header.DropDown>
        </Header.UserPanelBasket>
        <Header.UserPanelAccount href="">
          <Header.DropBtn>
            <AiOutlineUser />
            Konto
          </Header.DropBtn>
          <Header.DropDown>
            <Header.DropOpt>
              <Header.LoginBtn href={LoginRoute}>Zaloguj</Header.LoginBtn>
            </Header.DropOpt>
            <Header.DropOpt>
              <Header.RegisterBtn href={RegisterRoute}>
                Zarejestruj się
              </Header.RegisterBtn>
            </Header.DropOpt>
          </Header.DropDown>
        </Header.UserPanelAccount>
      </>
    ) : (
      <>
        <Header.UserPanelBasketMin click={setActiveRightMenu}>
          <Header.DropBtn>
            <SlBasket />
            Koszyk
          </Header.DropBtn>
        </Header.UserPanelBasketMin>
        <Header.UserPanelAccountMin click={setActiveRightMenu}>
          <Header.DropBtn>
            <AiOutlineUser />
            Konto
          </Header.DropBtn>
        </Header.UserPanelAccountMin>
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
            <Header.DropOpt>
              <Header.LoginBtn href={LoginRoute}>Zaloguj</Header.LoginBtn>
            </Header.DropOpt>
            <Header.DropOpt>
              <Header.RegisterBtn href={RegisterRoute}>
                Zarejestruj się
              </Header.RegisterBtn>
            </Header.DropOpt>
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
              </Header.CloseRight>
            </Header.CloseRightPanel>
            <Header.DropOpt>
              <Header.EmptyBasket>Twój koszyk jest pusty!</Header.EmptyBasket>
            </Header.DropOpt>
          </Header.DropDown>
        ) : null}
      </>
    )
  ) : null;
};

export default UserPanel;
